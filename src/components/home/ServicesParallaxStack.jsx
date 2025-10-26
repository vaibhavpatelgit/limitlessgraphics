"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    id: "vinyl",
    chip: "VINYL & SIGNS",
    title: "Printed Vinyl & Signs",
    blurb:
      "Glass decals, banners, and exterior/interior signage. Color-managed printing built for long life.",
    href: "/services/printed-vinyl-signs",
    items: [
      "Glass decals (exterior & interior)",
      "Street & C-CAN signage",
      "In-house graphic design",
      "Banners, exterior & interior signs",
    ],
  },
  {
    id: "wraps-custom",
    chip: "VEHICLE WRAPS",
    title: "Vehicle Wraps — Custom Prints",
    blurb:
      "Design-to-install full wraps for vans, trucks, and fleets. Templated fit, clean edges, crisp color.",
    href: "/services/vehicle-fleet-wrap-design",
    items: [
      "Fleet-ready templating",
      "Premium films & UV inks",
      "Panel alignment & seams",
      "On-time, clean install bay",
    ],
  },
  {
    id: "wraps-color",
    chip: "COLOR CHANGE",
    title: "Vehicle Wraps — Color Change",
    blurb:
      "Premium films, panel-by-panel installs, and finish options (satin, matte, gloss).",
    href: "/services/vehicle-fleet-wrap-design",
    items: [
      "Matte / Satin / Gloss",
      "Door jamb options",
      "Residue-free removal",
      "Full color catalogs",
    ],
  },
  {
    id: "ppf",
    chip: "PPF",
    title: "Paint Protection Film",
    blurb:
      "Invisible protection for impact zones. Self-healing, hydrophobic top coat.",
    href: "/services/vehicle-fleet-wrap-design",
    items: [
      "Self-healing top coat",
      "Hydrophobic finish",
      "Impact-zone coverage",
      "Invisible edge wrapping",
    ],
  },
  {
    id: "glass",
    chip: "WINDOWS & GLASS",
    title: "Windows & Glass",
    blurb:
      "Office tint, frosted privacy, and one-way mirror films installed dust-free.",
    href: "/services/windows-glass",
    items: [
      "Office tint & privacy films",
      "Frosted & one-way mirror",
      "Clean, dust-free installs",
      "Measured, templated cuts",
    ],
  },
  {
    id: "walls",
    chip: "WALL WRAPS",
    title: "Wall Wraps & Murals",
    blurb:
      "Textured-safe adhesives, large panels, and alignment for seamless walls.",
    href: "/services/printed-vinyl-signs",
    items: [
      "Textured-safe adhesives",
      "Large-panel alignment",
      "Seamless corner coverage",
      "Vivid color management",
    ],
  },
];

export default function ServicesParallaxStack() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // tighter windows so cards don't overlap visually
  const step = 1 / (CARDS.length + 2);
  const PAD = step * 0.2; // smaller overlap

  // dynamic scroll height so no blank area after last card
  const scrollHeightVh = useMemo(() => 120 + CARDS.length * 65, []);
  // 120vh base + 65vh per card ~ tune as you like

  return (
    <section ref={ref} className="relative isolate w-full bg-neutral-950 py-16">
      {/* soft glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-600 via-amber-400 to-cyan-400 opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400 via-amber-400 to-fuchsia-600 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-50 mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Our Services
        </h2>
        <p className="mt-2 text-white/80">Scroll — one card at a time.</p>
      </div>

      {/* long scroll area */}
      <div className="relative mt-10" style={{ height: `${scrollHeightVh}vh` }}>
        {/* centered sticky stage */}
        <div
          className="sticky top-[12vh] z-40 mx-auto h-[76vh] w-[min(96vw,1280px)] px-2 sm:px-4"
          style={{ perspective: "1400px" }}
        >
          {/* solid floor below the stack */}
          <div className="absolute inset-0 z-30 bg-neutral-950" />

          <div className="relative z-40 h-full w-full">
            {CARDS.map((card, i) => {
              const start = step * i;
              const end = start + step * 1.05;

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [110 + i * 34, -6],
                {
                  clamp: true,
                }
              );
              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [0.915 - i * 0.015, 1],
                { clamp: true }
              );
              const rotateX = useTransform(
                scrollYProgress,
                [start, end],
                [9, 0],
                {
                  clamp: true,
                }
              );

              // Activity (0→1→0). Use this for opacity AND z-index.
              const act = useTransform(
                scrollYProgress,
                [start - PAD, start, end, end + PAD],
                [0, 1, 1, 0]
              );

              // fully hide when not active — no ghosting
              const opacity = useTransform(act, (v) => (v > 0.001 ? 1 : 0));

              // only the active card gets the high z-index
              const zDyn = useTransform(act, (v) => (v > 0.5 ? 2000 : i));

              // solidify when active so nothing below bleeds through (no blur for active)
              const bgSolidOpacity = useTransform(act, (v) =>
                v > 0.4 ? 1 : 0
              );

              // tiny inner parallax + highlight
              const innerY = useTransform(
                scrollYProgress,
                [start, end],
                [14, -8],
                {
                  clamp: true,
                }
              );
              const highlight = useTransform(
                scrollYProgress,
                [start, end],
                [0.12, 0.3],
                {
                  clamp: true,
                }
              );

              return (
                <motion.article
                  key={card.id}
                  className="absolute inset-0 will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    y,
                    scale,
                    rotateX,
                    opacity,
                    zIndex: zDyn,
                    pointerEvents: "auto",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/65">
                    {/* make active card fully solid (no glass/blur) */}
                    <motion.div
                      className="absolute inset-0 bg-neutral-900"
                      style={{ opacity: bgSolidOpacity }}
                    />

                    {/* accent bar */}
                    <motion.div
                      className="absolute left-4 top-6 h-10 w-44 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400/90 opacity-90 blur-[2px]"
                      style={{ y: innerY }}
                    />

                    {/* content */}
                    <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] p-6 sm:p-8">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90">
                          {card.chip}
                        </span>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-2 max-w-3xl text-white/85">
                          {card.blurb}
                        </p>
                        <ul className="mt-4 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
                          {card.items.map((line, idx) => (
                            <li key={idx}>{line}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Link
                          href={card.href}
                          className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-5 py-2 font-semibold text-black"
                        >
                          Learn more
                          <svg
                            className="ml-1 h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M5 12h14M13 5l7 7-7 7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        </Link>
                      </div>

                      {/* subtle glass highlight */}
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5"
                        style={{ opacity: highlight }}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* watermark */}
      <div className="pointer-events-none relative z-10 mt-12 select-none text-center text-5xl sm:text-7xl font-extrabold uppercase tracking-[0.2em] text-white/10">
        SERVICES
      </div>
    </section>
  );
}
