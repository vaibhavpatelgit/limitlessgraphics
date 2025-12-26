"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   Toast
========================= */
function Toast({ toast, onClose }) {
  if (!toast?.open) return null;

  const isOk = toast.type === "success";
  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 left-1/2 z-[2000] -translate-x-1/2"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`flex items-center gap-3 rounded-full border px-4 py-2 shadow-2xl backdrop-blur
            ${
              isOk
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                : "border-rose-400/30 bg-rose-400/10 text-rose-200"
            }`}
        >
          <span className="text-sm font-semibold">
            {toast.message || (isOk ? "Sent!" : "Something went wrong")}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/15"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================
   Lightbox
========================= */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index < 0) return null;
  const img = images[index];

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] grid place-items-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-[min(94vw,1200px)] max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 bg-neutral-900/90 shadow-2xl"
          initial={{ scale: 0.96, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.98, y: 10, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex max-h-[80vh] items-center justify-center bg-black/20 p-4">
            <img
              src={img?.src}
              alt={img?.alt || "Portfolio"}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-2 py-1 ring-1 ring-white/20 backdrop-blur-md">
            <button
              type="button"
              onClick={onPrev}
              className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              aria-label="Next"
            >
              ›
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-3 py-1 font-semibold text-black"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ServiceDetailClient({
  serviceId,
  sections,
  initialServiceInfoId,
  initialPortfolio,
  dotnetBasePublic,
  sendQuoteAction,
}) {
  const [activeId, setActiveId] = useState(
    initialServiceInfoId || sections?.[0]?.serviceInfoId || null
  );

  const activeSection = useMemo(
    () => sections.find((s) => s.serviceInfoId === activeId) || null,
    [sections, activeId]
  );

  // gallery
  const [gallery, setGallery] = useState(initialPortfolio || []);
  const [gLoading, setGLoading] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  const open = useCallback((i) => setLightboxIdx(i), []);
  const close = useCallback(() => setLightboxIdx(-1), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i + 1) % (gallery.length || 1)),
    [gallery.length]
  );
  const prev = useCallback(
    () =>
      setLightboxIdx(
        (i) => (i - 1 + (gallery.length || 1)) % (gallery.length || 1)
      ),
    [gallery.length]
  );

  // quote modal
  const [showQuote, setShowQuote] = useState(false);
  const [submitState, setSubmitState] = useState({
    sending: false,
    ok: null,
    error: "",
  });

  // toast state
  const [toast, setToast] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const toastTimer = useRef(null);
  const quoteFormRef = useRef(null);

  const activeTitle = activeSection?.title || "";

  function showToast(type, message) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ open: true, type, message });
    toastTimer.current = setTimeout(() => {
      setToast((t) => ({ ...t, open: false }));
    }, 3500);
  }

  // fetch portfolio (same as your old logic)
  useEffect(() => {
    if (!activeId) return;

    const base = (dotnetBasePublic || "").replace(/\/+$/, "");
    if (!base) {
      setGallery([]);
      return;
    }

    const url = `${base}/api/Portfolio/GetSpecificPortfolio/${activeId}`;
    let aborted = false;

    (async () => {
      try {
        setGLoading(true);
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
          if (!aborted) setGallery([]);
          return;
        }
        const data = await res.json();
        const arr = Array.isArray(data?.GetSpecificPortfolio)
          ? data.GetSpecificPortfolio
          : [];

        const imgs = arr
          .map((it) => {
            const raw = it.image || it.Image || "";
            if (!raw) return null;
            const name = String(raw).split(/[\\/]/).pop();
            if (!name) return null;
            return {
              src: `${base}/Files/portfolio/${encodeURIComponent(name)}`,
              alt: it.title || "Portfolio",
            };
          })
          .filter(Boolean);

        if (!aborted) setGallery(imgs);
      } catch {
        if (!aborted) setGallery([]);
      } finally {
        if (!aborted) setGLoading(false);
      }
    })();

    return () => {
      aborted = true;
    };
  }, [activeId, dotnetBasePublic]);

  // animations
  const fade = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
  };

  return (
    <main className="relative bg-neutral-950 text-white">
      {/* Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
      />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Service Details
        </h1>
        <p className="mt-2 text-white/70">
          Browse options on the left, read details on the right.
        </p>
      </div>

      {/* 2-column */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 grid gap-6 md:grid-cols-[minmax(260px,360px)_1fr]">
        {/* Left */}
        <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 md:p-4 max-h-[70vh] md:max-h-[78vh] overflow-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Options</h2>
            <a
              href="tel:306-861-0553"
              className="text-sm text-white/80 hover:text-white underline underline-offset-4"
            >
              Call or Text 306-861-0553
            </a>
          </div>

          <ul className="space-y-2">
            {sections.map((s) => {
              const active = s.serviceInfoId === activeId;
              return (
                <li key={s.serviceInfoId}>
                  <button
                    type="button"
                    onClick={() => setActiveId(s.serviceInfoId)}
                    className={`w-full text-left rounded-lg border px-3 py-2 transition
                      ${
                        active
                          ? "border-transparent bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black"
                          : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                      }`}
                  >
                    <div className="font-semibold truncate">{s.title}</div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowQuote(true)}
              className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black"
            >
              Get Quote
            </button>
          </div>
        </aside>

        {/* Right */}
        <section className="min-h-[40vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId || "empty"}
              variants={fade}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-6">
                {activeSection ? (
                  <>
                    <h2 className="text-2xl font-bold">
                      {activeSection.title}
                    </h2>
                    <div
                      className="prose prose-invert max-w-none mt-3 text-white/90"
                      dangerouslySetInnerHTML={{
                        __html: activeSection.descriptionHtml,
                      }}
                    />
                  </>
                ) : (
                  <p className="text-white/70">
                    Select an option from the left.
                  </p>
                )}
              </article>

              {/* Portfolio */}
              {activeId && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
                  {gLoading && <p className="text-white/60">Loading images…</p>}
                  {!gLoading && gallery.length === 0 ? (
                    <p className="text-white/60">No portfolio images yet.</p>
                  ) : (
                    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                      {gallery.map((g, i) => (
                        <li key={`${g.src}-${i}`}>
                          <button
                            type="button"
                            onClick={() => open(i)}
                            className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5"
                          >
                            <img
                              src={g.src}
                              alt={g.alt || "Portfolio"}
                              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={gallery}
        index={lightboxIdx}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />

      {/* Quote Modal (OLD flow, but toast + reset added) */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            className="fixed inset-0 z-[1000] grid place-items-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[min(92vw,700px)] rounded-2xl border border-white/15 bg-neutral-900/95 p-5 sm:p-6 text-white"
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Start a Quote</h3>
                <button
                  type="button"
                  onClick={() => setShowQuote(false)}
                  className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
                >
                  ✕
                </button>
              </div>

              <p className="mt-1 text-white/70 text-sm">
                Service:{" "}
                <span className="font-medium text-white">
                  {activeTitle || "—"}
                </span>
              </p>

              <form
                ref={quoteFormRef}
                action={async (formData) => {
                  try {
                    setSubmitState({ sending: true, ok: null, error: "" });

                    // inject selected service info
                    formData.set("serviceInfoId", String(activeId || ""));
                    formData.set("serviceTitle", String(activeTitle || ""));

                    const res = await sendQuoteAction(formData);

                    if (res?.ok) {
                      setSubmitState({ sending: false, ok: true, error: "" });

                      // ✅ toast
                      showToast(
                        "success",
                        "Quote sent! We will contact you soon."
                      );

                      // ✅ reset form
                      quoteFormRef.current?.reset();

                      // ✅ close popup
                      setTimeout(() => setShowQuote(false), 400);
                    } else {
                      const msg = res?.error || "Send failed.";
                      setSubmitState({ sending: false, ok: false, error: msg });
                      showToast("error", msg);
                    }
                  } catch (e) {
                    console.error("[Quote] error:", e);
                    setSubmitState({
                      sending: false,
                      ok: false,
                      error: "Send failed.",
                    });
                    showToast("error", "Send failed. Please try again.");
                  }
                }}
                className="mt-4 grid grid-cols-1 gap-3"
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Mobile
                    </label>
                    <input
                      name="mobile"
                      className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40"
                      placeholder="+1 306 555 1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40"
                    placeholder="Tell us about your project…"
                  />
                </div>

                <div className="mt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowQuote(false)}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
                    disabled={submitState.sending}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitState.sending}
                    className="rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black disabled:opacity-60"
                  >
                    {submitState.sending ? "Sending…" : "Send"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
