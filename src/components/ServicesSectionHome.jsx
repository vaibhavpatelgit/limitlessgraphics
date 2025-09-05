"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SLIDES = [
  {
    title: "Printed Vinyl & Signs",
    img: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=1600&q=60",
    href: "/services/printed-vinyl-signs",
  },
  {
    title: "Vehicle Wraps (Custom)",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=60",
    href: "/services/vehicle-fleet-wrap-design",
  },
  {
    title: "Vehicle Wraps (Color Change)",
    img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1600&q=60",
    href: "/services/vehicle-fleet-wrap-design",
  },
  {
    title: "Paint Protection Film",
    img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1600&q=60",
    href: "/services/vehicle-fleet-wrap-design",
  },
  {
    title: "Windows & Glass",
    img: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=1600&q=60",
    href: "/services/windows-glass",
  },
  {
    title: "Wall Wraps",
    img: "https://images.unsplash.com/photo-1523419409543-733b092ef2be?auto=format&fit=crop&w=1600&q=60",
    href: "/services/printed-vinyl-signs",
  },
];

export default function ServicesSection() {
  // in-view state for the bottom banner animation
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    amount: 0.45,
    margin: "-10% 0% -10% 0%",
  });

  // carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoPlay) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi, autoPlay]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // word-by-word animation (behind cards)
  const container = {
    hidden: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.2, staggerDirection: 1 } },
  };
  const word = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-12 sm:py-16 bg-gradient-to-r from-fuchsia-700/40 via-amber-500/40 to-cyan-500/40 border-t border-white/10 overflow-hidden"
    >
      {/* Bottom/back banner text (BEHIND the cards) */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-2 sm:bottom-4 z-0 flex justify-center select-none"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ lineHeight: 1 }}
      >
        {["OUR", "SERVICES"].map((w) => (
          <motion.span
            key={w}
            variants={word}
            className="mx-3 font-extrabold uppercase tracking-[0.2em]
                       text-white/15 drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]
                       text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {w}
          </motion.span>
        ))}
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-6 sm:mb-8">
          <p className="mt-2 text-gray-200/90 text-center max-w-xl mx-auto">
            We design, print, and install storefront and interior graphics built
            for everyday wear. From glass decals and banner sets to exterior
            wayfinding and C-CAN signage, every piece is produced on premium
            films with UV-stable inks for crisp color and long life. Need layout
            help?
          </p>
        </div>

        {/* carousel (with equal gutters) */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="overflow-hidden px-2 sm:px-3 lg:px-4" ref={emblaRef}>
            <div className="flex -mx-2 sm:-mx-3 lg:-mx-4">
              {SLIDES.map((item, i) => {
                const isActive = i === selected;
                return (
                  <div
                    key={item.title}
                    className="shrink-0 grow-0 basis-1/2 sm:basis-1/3 lg:basis-1/4 px-2 sm:px-3 lg:px-4"
                  >
                    <a
                      href={item.href}
                      className={`block rounded-2xl overflow-hidden border border-white/10 bg-black/40 transition
                        ${
                          isActive
                            ? "scale-[1.02] shadow-xl"
                            : "opacity-95 hover:opacity-100"
                        }
                      `}
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="inline-block mt-2 text-sm underline underline-offset-2">
                          Learn more →
                        </span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 backdrop-blur border border-white/40"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 backdrop-blur border border-white/40"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
