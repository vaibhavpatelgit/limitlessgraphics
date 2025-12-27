"use client";

import { useEffect, useState } from "react";

export default function TypingWord({
  text = "SERVICES",
  speed = 70,
  delay = 200,
  className = "",
  cursor = true,
}) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    let t1, t2;

    t1 = setTimeout(() => {
      t2 = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(t2);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, [text, speed, delay]);

  return (
    <div className={className} aria-label={text}>
      <span>{out}</span>
      {cursor ? (
        <span className="inline-block w-[0.6ch] translate-y-[1px] animate-pulse opacity-60">
          |
        </span>
      ) : null}
    </div>
  );
}
