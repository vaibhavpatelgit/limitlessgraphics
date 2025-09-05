"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ------------------ DATA (unchanged, edit freely) ------------------ */
const ITEMS = [
  {
    id: "fleet-01",
    title: "Fleet Graphics — Logistics",
    category: "Vehicles",
    tags: ["Wraps", "Fleet", "3M"],
    img: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600",
  },
  {
    id: "storefront-01",
    title: "Storefront Vinyl — Cafe",
    category: "Vinyl & Signs",
    tags: ["Decals", "Branding", "Windows"],
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600",
  },
  {
    id: "ppf-01",
    title: "PPF — Front End",
    category: "PPF",
    tags: ["Protection", "Self-heal"],
    img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600",
  },
  {
    id: "glass-01",
    title: "Office Tint — Privacy",
    category: "Windows & Glass",
    tags: ["Frosted", "One-way"],
    img: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1600",
  },
  {
    id: "vehicle-02",
    title: "Color Change — Matte Black",
    category: "Vehicles",
    tags: ["Color Change", "Matte"],
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600",
  },
  {
    id: "mural-01",
    title: "Wall Mural — Interior",
    category: "Walls & Murals",
    tags: ["Mural", "Large-format"],
    img: "https://images.unsplash.com/photo-1523419409543-733b092ef2be?q=80&w=1600",
  },
  {
    id: "vinyl-02",
    title: "Exterior Sign — Wayfinding",
    category: "Vinyl & Signs",
    tags: ["Signs", "Exterior"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
  },
  {
    id: "glass-02",
    title: "Frosted Bands — Meeting Rooms",
    category: "Windows & Glass",
    tags: ["Frosted", "Brand"],
    img: "https://images.unsplash.com/photo-1540570871009-5d6b1d50f3d7?q=80&w=1600",
  },
  {
    id: "vehicle-03",
    title: "Fleet Wrap — Trades",
    category: "Vehicles",
    tags: ["Wraps", "Brand"],
    img: "https://images.unsplash.com/photo-1542367597-8849ebf83f32?q=80&w=1600",
  },
  {
    id: "mural-02",
    title: "Branded Wall — Reception",
    category: "Walls & Murals",
    tags: ["Brand", "Interior"],
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600",
  },
];

const FILTERS = [
  "All",
  "Vehicles",
  "Vinyl & Signs",
  "Windows & Glass",
  "Walls & Murals",
  "PPF",
];

/* ------------------ ANIMATION VARIANTS ------------------ */
/** Parent: fades in once and staggers children (1,2,3,...) */
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
      staggerChildren: 0.07, // <— sequential reveal
      delayChildren: 0.1,
    },
  },
};

/** Card: simple fade+rise in */
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

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  const data = useMemo(
    () =>
      filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter),
    [filter]
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

  // Keyboard nav for lightbox
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
      {/* Filter bar */}
      <div className="mx-auto w-full max-w-[2000px] px-4 md:px-8 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => {
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

      {/* FULL-WIDTH GRID + STAGGERED FADE-IN */}
      <div className="mx-auto w-full max-w-[2000px] px-4 md:px-8 pb-14">
        <motion.ul
          /* parent controls the stagger of all visible children */
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
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] text-white/90">
                      {item.category}
                    </span>
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white font-semibold">{item.title}</h3>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => open(idx)}
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
      </div>

      {/* LIGHTBOX */}
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
    </section>
  );
}

/* ------------------ LIGHTBOX ------------------ */
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
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] text-white/90">
            {item.category}
          </span>
          {item.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-white/80">
          We designed, printed and installed this project using premium films
          and UV-stable inks. Clean seams, templated cuts and crisp color
          management deliver a long-life finish.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/portfolio/${item.id}`}
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
