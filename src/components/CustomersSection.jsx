"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CustomersSection.module.css";

/* ---------- Brand data ---------- */
const COMPANY = {
  name: "Limitless Graphics",
  address: "2306 Ave C North Saskatoon, SK S7L 5Z9 Back ally bay number",
  rating: 5.0,
  reviews: 62,
};

/* ---------- Example reviews ---------- */
const REVIEWS = [
  {
    author: "Cass Hazel",
    rating: 5,
    timeAgo: "4 monoth ago",
    text: "We are SUPER impressed with how easy it’s been to work with Fadi to get our fleet of trucks looking good with our new branding! He’s already done two trucks for us and we are planning with him to get the other trucks, trailers and skid steers in with him soon. I’ve had many compliments and when I send people pictures they can’t believe it’s real it looks soo crisp. Great work, very professional. Highly recommend.",
  },
  {
    author: "Karen Hoffrogge",
    rating: 5,
    timeAgo: "3 months ago",
    text: "Excellent service and work! Highly recommended! Met with Fahdi a couple of times to get things dialed in with the design. Fahdi started working on things right away and by the following week he started the project. Appreciated his input!Love it!.",
  },
  {
    author: "Johnny rose",
    rating: 5,
    timeAgo: "1 months ago",
    text: "Fadi is a talented designer with incredible creativity when it comes to business logos. He has a great eye for detail and turns ideas into professional, unique designs. If you're looking for a logo that stands out and represents your brand, I highly recommend Fadi's work.",
  },
  {
    author: "Raymond Hangs",
    rating: 5,
    timeAgo: "4 months ago",
    text: "I HIGHLY recommend Fadi at Limitless Graphics and Designs.I stoped his shop in the alley behind cambridge homes, and he was able to give me a reasonable quote right away. .",
  },
  {
    author: "Aaron Rody",
    rating: 5,
    timeAgo: "6 month ago",
    text: "Amazing work! We ordered our wraps on a Tuesday, designed them on Wednesday, finalized designed on Thursday and installed the wraps on Friday! Would highly recommend limitless to anyone!",
  },
  {
    author: "Samantha Friesen",
    rating: 5,
    timeAgo: "2 months ago",
    text: "Limitless went above and beyond for our truck decals. Not only did the graphics look amazing, their team agreed to install the decals at the truck shop saving us a lot of headache. As a result we were able to receive pre-branded vehicles at the time of pickup, keeping things efficient and headache free. I would recommend their services 5000 times over. Thank you for your help, and we look forward to working with you again!",
  },
];

/* tiny star row */
function Stars({ value = 5 }) {
  const n = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-4 h-4"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462a1 1 0 01.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292a1 1 0 01-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034A1 1 0 016.143 12.89l1.07-3.292a1 1 0 00-.364-1.118L4.05 8.72a1 1 0 01.588-1.81H8.1a1 1 0 00.95-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function CustomersSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.25 });

  /* Carousel */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  useEffect(() => {
    if (!emblaApi || !autoPlay) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi, autoPlay]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  /* Motion */
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
      },
    }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 bg-white border-t border-black/5 overflow-hidden"
    >
      {/* Background: blurred Google word + stars (responsive) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-[10%] sm:top-[6%] flex justify-center">
          <div
            className="
              font-extrabold tracking-tight leading-none
              text-[clamp(68px,22vw,360px)]
              opacity-[0.16] sm:opacity-[0.20] blur-[2px]
            "
            aria-hidden="true"
          >
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-8%] sm:bottom-[-6%] flex items-end justify-center gap-[clamp(8px,2vw,18px)] opacity-[0.32] sm:opacity-[0.40] blur-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="w-[clamp(40px,10vw,120px)] h-[clamp(40px,10vw,120px)]"
              fill="#FBBF24"
              stroke="#D97706"
              strokeWidth="0.5"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.9 5.88 6.49.94-4.69 4.57 1.11 6.47L12 17.77 6.19 20.36l1.11-6.47L2.6 9.32l6.49-.94L12 2.5z" />
            </svg>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="rainbow-text text-[clamp(22px,5vw,44px)] font-extrabold tracking-tight">
            OUR CUSTOMERS
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real feedback from wrap, vinyl, and window projects.
          </p>
        </div>

        {/* Company card first */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4 sm:mb-6"
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400">
            <div className="rounded-2xl bg-white/70 backdrop-blur p-5 sm:p-6">
              <div className="text-xl sm:text-2xl font-extrabold text-black">
                {COMPANY.name}
              </div>
              <div className="mt-1 text-sm text-neutral-600">
                {COMPANY.address}
              </div>

              <div className="mt-4 sm:mt-5 flex items-center gap-3">
                <div className="text-2xl font-bold text-black">
                  {COMPANY.rating.toFixed(1)}
                </div>
                <Stars value={COMPANY.rating} />
                <div className="text-sm text-neutral-600">
                  ({COMPANY.reviews}+ reviews)
                </div>
              </div>

              <div className="mt-5 text-xs text-neutral-500">
                powered by Google
              </div>

              <div className="mt-5 rounded-xl bg-gradient-to-r from-fuchsia-500/10 via-amber-400/10 to-cyan-400/10 border border-black/10 p-4">
                <p className="text-sm text-neutral-700">
                  “Image is everything.” We design, print, and install with
                  premium films and clean finish.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Slider — 2 on mobile, 3 on tablet, 4 on desktop (exact widths in CSS module) */}
        <div className="relative">
          <div
            ref={emblaRef}
            className={styles.embla}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className={styles.container}>
              {REVIEWS.map((r, i) => {
                const isActive = selected === i % REVIEWS.length;
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className={styles.slide}
                  >
                    <article
                      className={`h-full rounded-2xl p-[1px] transition ${
                        isActive
                          ? "bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400"
                          : "bg-black/10"
                      }`}
                    >
                      <div className="rounded-2xl bg-white/80 backdrop-blur p-4 sm:p-5 h-full">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-black">
                            {r.author}
                          </h3>
                          <span className="text-xs text-neutral-500">
                            {r.timeAgo}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <Stars value={r.rating} />
                          <span className="text-sm text-neutral-600">
                            {r.rating}.0
                          </span>
                        </div>
                        <p className="mt-3 text-neutral-800 leading-relaxed text-sm sm:text-base">
                          {r.text}
                        </p>
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Arrows: inside on mobile, outside from lg+ */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="z-20 absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 rounded-full p-2 sm:p-3 bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-xl hover:brightness-110 active:scale-95 border border-white/50"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="z-20 absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-1/2 rounded-full p-2 sm:p-3 bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-xl hover:brightness-110 active:scale-95 border border-white/50"
          >
            ›
          </button>
        </div>

        {/* Bottom micro-CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black font-semibold shadow-sm hover:brightness-110"
          >
            Read all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
