"use client";

import { useEffect, useState } from "react";

/* typing line */
function TypingLine() {
  const prefix = "Our Services - ";
  const words = [
    "Printed Vinyl and Signs",
    "Vehicle & fleet wrap design",
    "Windows & Glass",
  ];

  const [wi, setWi] = useState(0);
  const [si, setSi] = useState(0);
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const w = words[wi];
    const done = si === w.length;
    const speed = del ? 55 : 110;

    const to = setTimeout(
      () => {
        if (!del && done) setDel(true);
        else if (del && si === 0) {
          setDel(false);
          setWi((i) => (i + 1) % words.length);
        } else setSi((i) => i + (del ? -1 : 1));
      },
      done && !del ? 1500 : speed
    );

    return () => clearTimeout(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [si, del, wi]);

  const current = words[wi].slice(0, si);

  return (
    <p className="text-2xl sm:text-4xl font-semibold text-left">
      {prefix}
      <span className="text-white">{current}</span>
      <span className={`ml-1 ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </p>
  );
}

export default function HeroVideo() {
  // Temporary YouTube background
  const YT_ID = "RrWVIUDPmHE";
  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YT_ID}&playsinline=1&modestbranding=1&rel=0`;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen">
      {/* Full-bleed video (no side gaps) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "100vw",
            height: "56.25vw", // 9/16 of width to keep 16:9
            minHeight: "100vh", // cover tall viewports
            minWidth: "177.78vh", // 16/9 of height to cover wide viewports
          }}
          src={src}
          title="Background video"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* LEFT-ALIGNED overlay block (no Container; pinned to left with padding) */}
      <div className="relative z-10 flex min-h-[90vh] sm:min-h-screen items-center justify-start">
        <div className="w-full pl-4 sm:pl-8 lg:pl-12 pr-4">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Limitless Graphics
            </h1>
            <div className="mt-4 text-gray-200">
              <TypingLine />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
              >
                Explore Services
              </a>
              <a
                href="#quote"
                className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
