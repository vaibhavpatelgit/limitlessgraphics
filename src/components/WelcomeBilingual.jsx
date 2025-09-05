"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });

const PHRASES = [
  "Welcome Limitlessgraphics",
  "Bienvenue chez Limitlessgraphics",
];

export default function WelcomeBilingual() {
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = PHRASES[pi];
    let t;

    if (!del && ci < current.length) {
      t = setTimeout(() => setCi(ci + 1), 90); // typing
    } else if (!del && ci === current.length) {
      t = setTimeout(() => setDel(true), 3000); // hold 3s
    } else if (del && ci > 0) {
      t = setTimeout(() => setCi(ci - 1), 50); // deleting
    } else if (del && ci === 0) {
      setDel(false);
      setPi((i) => (i + 1) % PHRASES.length); // next phrase
    }

    return () => clearTimeout(t);
  }, [ci, del, pi]);

  const text = PHRASES[pi].slice(0, ci);

  return (
    <section className="bg-white text-neutral-900">
      {/* If h-30 doesn’t exist in your build, use h-[7.5rem] */}
      <div className="h-30 w-full flex items-center justify-center px-4 overflow-hidden">
        <h2
          className={`${poppins.className} rainbow-text font-extrabold leading-none text-center whitespace-nowrap text-3xl sm:text-5xl md:text-6xl`}
          title={text}
        >
          {text}
          <span className="ml-1 animate-pulse text-black font-extrabold">
            |
          </span>
        </h2>
      </div>
    </section>
  );
}
