"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.1,
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

const norm = (s) =>
  String(s || "")
    .trim()
    .toLowerCase();

export default function PortfolioClient({ items = [], filters = [] }) {
  // ✅ restore cache on first mount (protects you when server fetch fails after a click)
  const [allItems, setAllItems] = useState(() => {
    try {
      const cached = sessionStorage.getItem("lg_portfolio_items");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch {}
    return Array.isArray(items) ? items : [];
  });

  // ✅ whenever server sends a good list, update cache + state
  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      setAllItems(items);
      try {
        sessionStorage.setItem("lg_portfolio_items", JSON.stringify(items));
      } catch {}
    }
  }, [items]);

  const safeFilters = useMemo(() => {
    const derived =
      Array.isArray(filters) && filters.length
        ? filters
        : [
            "All",
            ...Array.from(
              new Set(allItems.map((x) => x.category).filter(Boolean))
            ),
          ];

    const rest = derived.filter((f) => norm(f) !== "all");
    return ["All", ...rest];
  }, [filters, allItems]);

  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  const data = useMemo(() => {
    if (norm(filter) === "all") return allItems;
    const f = norm(filter);
    return allItems.filter((i) => norm(i.category) === f);
  }, [allItems, filter]);

  // reset lightbox on filter changes
  useEffect(() => setLightboxIdx(-1), [filter]);

  const open = useCallback((idx) => setLightboxIdx(idx), []);
  const close = useCallback(() => setLightboxIdx(-1), []);

  const next = useCallback(() => {
    const len = data.length || 1;
    setLightboxIdx((i) => (i < 0 ? 0 : i + 1) % len);
  }, [data.length]);

  const prev = useCallback(() => {
    const len = data.length || 1;
    setLightboxIdx((i) => (i < 0 ? 0 : i - 1 + len) % len);
  }, [data.length]);

  // keyboard navigation
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

  return (
    <section className="relative z-10">
      {/* Filters */}
      <div className="mx-auto w-full max-w-[2000px] px-4 md:px-8 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {safeFilters.map((f) => {
            const active = norm(f) === norm(filter);
            return (
              <button
                key={f}
                type="button" // ✅ IMPORTANT
                onClick={(e) => {
                  e.preventDefault(); // ✅ IMPORTANT
                  setFilter(f);
                }}
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

      {/* Grid */}
      <div className="mx-auto w-full max-w-[2000px] px-4 md:px-8 pb-14">
        {data.length === 0 ? (
          <div className="mx-auto max-w-3xl py-16 text-center">
            <h2 className="text-2xl font-bold text-white">No projects found</h2>
            <p className="mt-2 text-white/70">
              Try another filter or add items for this category.
            </p>

            {/* Debug line (keep for now) */}
            <p className="mt-4 text-xs text-white/40">
              Debug: allItems={allItems.length} | filter="{filter}" | filtered=
              {data.length}
            </p>
          </div>
        ) : (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6
                     sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                     xl:grid-cols-5 2xl:grid-cols-6"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {data.map((item, idx) => (
                <motion.li
                  key={item.id}
                  variants={cardVariants}
                  layout
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
                >
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

                  <div className="relative z-10 -mt-12 p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] text-white/90">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold">{item.title}</h3>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button" // ✅ IMPORTANT
                        onClick={(e) => {
                          e.preventDefault(); // ✅ IMPORTANT
                          open(idx);
                        }}
                        className="rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black"
                      >
                        Quick view
                      </button>

                      <Link
                        href={`/portfolio/${item.id}`}
                        className="rainbow-link text-white/80 text-sm"
                      >
                        View project
                      </Link>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx >= 0 && data[lightboxIdx] && (
          <motion.div
            className="fixed inset-0 z-[999] grid place-items-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-[min(94vw,1200px)] overflow-hidden rounded-2xl border border-white/15 bg-neutral-900/90"
              initial={{ scale: 0.96, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative">
                  <img
                    src={data[lightboxIdx].img}
                    alt={data[lightboxIdx].title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative p-5 sm:p-7">
                  <h3 className="text-xl font-semibold text-white">
                    {data[lightboxIdx].title}
                  </h3>

                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
                    >
                      ›
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80 hover:bg-white/15"
                    >
                      ✕
                    </button>
                  </div>

                  <Link
                    href="/#contact"
                    className="mt-5 inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black"
                  >
                    Start a quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
