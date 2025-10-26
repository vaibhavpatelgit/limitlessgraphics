"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Reusable grid for Portfolio & Services
 * props:
 * - title       : heading text
 * - subtitle    : subheading text
 * - items       : [{ id, title, category, tags[], img, href, blurb? }]
 * - filters     : ["All", "Category A", ...]
 * - mode        : "portfolio" | "services"  (controls CTA & lightbox)
 * - maxWidth    : number (px) – container max width (default 2000)
 * - stagger     : boolean – stagger fade-in (default true)
 */
export default function ShowcaseGrid({
  title = "Showcase",
  subtitle = "",
  items = [],
  filters = ["All"],
  mode = "portfolio",
  maxWidth = 2000,
  stagger = true,
}) {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  const data = useMemo(
    () =>
      filter === "All" ? items : items.filter((i) => i.category === filter),
    [filter, items]
  );

  const open = useCallback((idx) => setLightboxIdx(idx), []);
  const close = useCallback(() => setLightboxIdx(-1), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i + 1) % data.length),
    [data.length]
  );
  const prev = useCallback(
    () => setLightboxIdx((i) => (i - 1 + data.length) % data.length),
    [data.length]
  );

  useEffect(() => {
    if (lightboxIdx < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, close, next, prev]);

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.3,
        ...(stagger ? { staggerChildren: 0.07, delayChildren: 0.1 } : {}),
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative z-10 bg-neutral-950">
      {/* Hero (title/subtitle) */}
      <div className="mx-auto w-full" style={{ maxWidth }}>
        <div className="px-4 md:px-8 pt-14 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
          {subtitle ? <p className="mt-2 text-white/80">{subtitle}</p> : null}
        </div>
      </div>

      {/* Filter bar */}
      <div className="mx-auto w-full" style={{ maxWidth }}>
        <div className="px-4 md:px-8 pb-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`group relative rounded-full border px-3.5 py-1.5 text-sm transition
                    ${
                      active
                        ? "border-transparent bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                >
                  {f}
                  {!active && (
                    <span className="pointer-events-none absolute -bottom-px left-3 right-3 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 transition-transform group-hover:scale-x-100" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto w-full" style={{ maxWidth }}>
        <div className="px-4 md:px-8 pb-14">
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {data.map((item, idx) => (
                <motion.li
                  key={item.id}
                  variants={cardVariants}
                  layout
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
                >
                  {/* image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 opacity-70" />
                  </div>

                  {/* content */}
                  <div className="relative z-10 -mt-12 p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                      {item.category && (
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] text-white/90">
                          {item.category}
                        </span>
                      )}
                      {(item.tags || []).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-white font-semibold">{item.title}</h3>
                    {item.blurb ? (
                      <p className="mt-1 text-sm text-white/70">{item.blurb}</p>
                    ) : null}

                    <div className="mt-3 flex items-center gap-2">
                      {mode === "portfolio" ? (
                        <>
                          <button
                            onClick={() => open(idx)}
                            className="rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black"
                          >
                            Quick view
                          </button>
                          <Link
                            href={item.href || "#"}
                            className="rainbow-link text-white/80 text-sm"
                          >
                            View project
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            href={item.href || "#"}
                            className="rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black"
                          >
                            Learn more
                          </Link>
                          <Link
                            href="/#contact"
                            className="rainbow-link text-white/80 text-sm"
                          >
                            Start a quote
                          </Link>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>

      {/* Lightbox (portfolio mode only) */}
      {mode === "portfolio" && (
        <AnimatePresence>
          {lightboxIdx >= 0 && (
            <motion.div
              className="fixed inset-0 z-[999] grid place-items-center bg-black/70 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-[min(94vw,1200px)] overflow-hidden rounded-2xl border border-white/15 bg-neutral-900/90"
                initial={{ scale: 0.96, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.98, y: 10, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <LightboxBody
                  item={data[lightboxIdx]}
                  onClose={close}
                  onPrev={prev}
                  onNext={next}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}

function LightboxBody({ item, onClose, onPrev, onNext }) {
  if (!item) return null;
  return (
    <div className="grid gap-0 md:grid-cols-2">
      <div className="relative">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      <div className="relative p-5 sm:p-7">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          {item.category && (
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] text-white/90">
              {item.category}
            </span>
          )}
          {(item.tags || []).map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        {item.blurb ? (
          <p className="mt-2 text-white/80">{item.blurb}</p>
        ) : (
          <p className="mt-2 text-white/80">
            We designed, printed and installed this project using premium films
            and UV-stable inks.
          </p>
        )}

        <div className="mt-5 flex items-center gap-2">
          <Link
            href={item.href || "#"}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black"
          >
            View project
          </Link>
          <Link href="/#contact" className="rainbow-link text-white/80">
            Start a quote
          </Link>
        </div>

        <div className="absolute right-4 top-4 flex items-center gap-2">
          <button
            onClick={onPrev}
            aria-label="Previous"
            className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            aria-label="Next"
            className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
          >
            ›
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
