// src/app/services/[slug]/service-detail.client.jsx
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// simple lightbox
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index < 0) return null;
  const img = images[index];

  // keyboard support
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
          {/* Image area */}
          <div className="flex max-h-[80vh] items-center justify-center bg-black/20 p-4">
            <img
              src={img?.src}
              alt={img?.alt || "Portfolio"}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Control bar */}
          <div
            className="
              absolute right-4 top-4 flex items-center gap-2
              rounded-full bg-black/60 px-2 py-1
              shadow-[0_8px_30px_rgba(0,0,0,0.8)]
              ring-1 ring-white/20 backdrop-blur-md
            "
          >
            <button
              onClick={onPrev}
              aria-label="Previous"
              className="
                rounded-full bg-white/10 px-3 py-1 text-[15px] font-semibold
                text-white shadow-inner shadow-black/40 ring-1 ring-white/30
                hover:bg-white/20 hover:text-white
              "
            >
              ‹
            </button>

            <button
              onClick={onNext}
              aria-label="Next"
              className="
                rounded-full bg-white/10 px-3 py-1 text-[15px] font-semibold
                text-white shadow-inner shadow-black/40 ring-1 ring-white/30
                hover:bg-white/20 hover:text-white
              "
            >
              ›
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="
                rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400
                px-3 py-1 text-[15px] font-semibold text-black
                shadow-[0_8px_30px_rgba(0,0,0,0.8)]
              "
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
  sections, // [{servicesId, serviceInfoId, title, descriptionHtml}]
  initialServiceInfoId,
  initialPortfolio, // [{src, alt}]
  dotnetBasePublic, // NEXT_PUBLIC_DOTNET_API_BASE (or server fallback)
  sendQuoteAction, // server action from page.js
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
  const activeTitle = activeSection?.title || "";

  // fetch portfolio on left-click (ServiceInfoId)
  useEffect(() => {
    if (!activeId) return;

    const base = (dotnetBasePublic || "").replace(/\/+$/, "");
    if (!base) {
      console.warn(
        "[Portfolio] dotnetBasePublic is empty. Set NEXT_PUBLIC_DOTNET_API_BASE."
      );
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
          const text = await res.text().catch(() => "");
          console.warn("[Portfolio] Bad response", res.status, text);
          if (!aborted) setGallery([]);
          return;
        }
        const data = await res.json();

        // NOTE: your .NET UploadPortfolioImage uses lowercase folder "portfolio"
        const folder = "Files/portfolio";
        const arr = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data?.GetSpecificPortfolio)
          ? data.GetSpecificPortfolio
          : Array.isArray(data?.items)
          ? data.items
          : [];

        const imgs = arr
          .map((it) => {
            const raw =
              it.image ||
              it.Image ||
              it.filename ||
              it.file ||
              it.url ||
              it.src;
            if (!raw) return null;
            if (/^https?:\/\//i.test(raw))
              return { src: raw, alt: it.title || "Portfolio" };
            const name = String(raw).split(/[\\/]/).pop();
            return {
              src: `${base}/${folder}/${encodeURIComponent(name)}`,
              alt: it.title || "Portfolio",
            };
          })
          .filter(Boolean);

        if (!aborted) setGallery(imgs);
      } catch (e) {
        console.error("[Portfolio] fetch error:", e);
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
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Service Details
        </h1>
        <p className="mt-2 text-white/70">
          Browse options on the left, read details on the right.
        </p>
      </div>

      {/* 2-column layout */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 grid gap-6 md:grid-cols-[minmax(260px,360px)_1fr]">
        {/* Left list */}
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
              onClick={() => setShowQuote(true)}
              className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black"
            >
              Get Quote
            </button>
          </div>
        </aside>

        {/* Right content */}
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

      {/* Quote Modal */}
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
                action={async (formData) => {
                  try {
                    setSubmitState({ sending: true, ok: null, error: "" });
                    // inject selected service info
                    formData.set("serviceInfoId", String(activeId || ""));
                    formData.set("serviceTitle", String(activeTitle || ""));
                    const res = await sendQuoteAction(formData);
                    if (res?.ok) {
                      setSubmitState({ sending: false, ok: true, error: "" });
                      setTimeout(() => setShowQuote(false), 800);
                    } else {
                      setSubmitState({
                        sending: false,
                        ok: false,
                        error: res?.error || "Send failed.",
                      });
                    }
                  } catch {
                    setSubmitState({
                      sending: false,
                      ok: false,
                      error: "Send failed.",
                    });
                  }
                }}
                className="mt-4 grid grid-cols-1 gap-3"
              >
                <input
                  type="hidden"
                  name="serviceInfoId"
                  value={activeId || ""}
                />
                <input
                  type="hidden"
                  name="serviceTitle"
                  value={activeTitle || ""}
                />

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

                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm">
                    {submitState.sending && (
                      <span className="text-white/70">Sending…</span>
                    )}
                    {submitState.ok === true && (
                      <span className="text-emerald-400">Sent!</span>
                    )}
                    {submitState.ok === false && (
                      <span className="text-rose-400">
                        Error: {submitState.error}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowQuote(false)}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
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
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
