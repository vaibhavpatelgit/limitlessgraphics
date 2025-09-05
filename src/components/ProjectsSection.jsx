"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const IMAGES = [
  {
    title: "Custom Van Wrap",
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Storefront Vinyl",
    src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "PPF Install",
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Office Frosted",
    src: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Color Change",
    src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Wall Mural",
    src: "https://images.unsplash.com/photo-1523419409543-733b092ef2be?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Fleet Graphics",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Tint & Privacy",
    src: "https://images.unsplash.com/photo-1458734112662-42ecf2d1308f?auto=format&fit=crop&w=1600&q=70",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    amount: 0.25,
    margin: "-10% 0% -10% 0%",
  });

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
    setZoomed(false);
  };
  const close = () => {
    setOpen(false);
    setZoomed(false);
  };
  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIndex((i) => (i + 1) % IMAGES.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // stagger reveal (zoom-out)
  const gridVariants = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    }),
    []
  );
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18, scale: 1.06 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1.0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    }),
    []
  );

  const onImgError = (e) => {
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='#e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='28'>Image unavailable</text></svg>`
      );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-neutral-900 py-12 sm:py-16 pb-0 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Intro blurb (same style as Services) */}
        <div className="mb-6 sm:mb-8 text-center">
          <p className="mt-2 text-neutral-700 max-w-2xl mx-auto">
            We design, print, and install storefront and interior graphics built
            for everyday wear. From glass decals and banner sets to exterior
            wayfinding and C-CAN signage, every piece is produced on premium
            films with UV-stable inks for crisp color and long life. Need layout
            help?
          </p>
        </div>

        {/* Grid: 2 rows × 4 cols on lg (8 images); responsive down to 2 cols */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10 grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              variants={cardVariants}
              onClick={() => openAt(i)}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white"
              aria-label={`Open ${img.title}`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  onError={onImgError}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-left">
                <div className="text-sm sm:text-base font-semibold">
                  {img.title}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* MOBILE banner: after all cards (normal flow) */}
        <motion.div
          className="sm:hidden mt-6 mb-2 flex justify-center text-center select-none"
          variants={{
            hidden: {
              transition: { staggerChildren: 0.18, staggerDirection: -1 },
            },
            visible: {
              transition: { staggerChildren: 0.18, staggerDirection: 1 },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ lineHeight: 1 }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
            className="rainbow-text opacity-70 font-extrabold uppercase tracking-[0.18em]
                       whitespace-nowrap leading-none text-4xl"
          >
            OUR PROJECT
          </motion.span>
        </motion.div>
      </div>

      {/* DESKTOP/TABLET banner: bottom-touch, behind grid */}
      <motion.div
        className="hidden sm:flex pointer-events-none absolute inset-x-0 bottom-0 z-0 justify-center select-none text-center translate-y-[8%]"
        variants={{
          hidden: {
            transition: { staggerChildren: 0.18, staggerDirection: -1 },
          },
          visible: {
            transition: { staggerChildren: 0.18, staggerDirection: 1 },
          },
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ lineHeight: 1 }}
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: "easeOut" },
            },
          }}
          className="rainbow-text opacity-70 font-extrabold uppercase tracking-[0.18em]
                     whitespace-nowrap leading-none text-6xl md:text-7xl lg:text-8xl"
        >
          OUR PROJECT
        </motion.span>
      </motion.div>

      {/* Lightbox */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: zoomed ? 1.4 : 1 }}
              transition={{ duration: 0.25 }}
              src={IMAGES[index].src}
              alt={IMAGES[index].title}
              onError={onImgError}
              className={`max-h-full max-w-full object-contain ${
                zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setZoomed((z) => !z)}
            />
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white"
              aria-label="Next"
            >
              ›
            </button>
            <button
              onClick={close}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full px-3 py-1.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
