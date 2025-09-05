"use client";

import { useEffect, useState } from "react";

export default function ContactExactAuto() {
  const HAND_SRC = "/images/hand-cards.png";
  const [dims, setDims] = useState({ w: 1536, h: 1024 });
  const [loaded, setLoaded] = useState(false);

  // FRACTIONAL TUNE (0–1; works for your 1536×1024 image)
  const TUNE = {
    left: { x: 0.18, y: 0.08, w: 0.3, h: 0.7, rot: -12 },
    right: { x: 0.52, y: 0.05, w: 0.3, h: 0.7, rot: 12 },
  };

  // Compute absolute boxes from fractions
  const left = toBox(TUNE.left, dims);
  const right = toBox(TUNE.right, dims);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = HAND_SRC;
    img.onload = () => {
      setDims({ w: img.naturalWidth, h: img.naturalHeight });
      setLoaded(true);
    };
  }, []);

  if (!loaded) {
    return (
      <section className="relative w-full bg-gradient-to-r from-fuchsia-700/40 via-amber-500/40 to-cyan-500/40 border-t border-white/10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
            Let's start your project
          </h2>
          <p className="mt-3 text-neutral-100/90">
            Design, print, and installation for printed vinyl, wraps, and glass
            graphics.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="animate-pulse bg-gray-700/30 rounded-lg w-full max-w-6xl h-96"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-gradient-to-r from-fuchsia-700/40 via-amber-500/40 to-cyan-500/40 border-t border-white/10 py-12 sm:py-16 md:py-20">
      {/* heading */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
          Let's start your project
        </h2>
        <p className="mt-3 text-neutral-100/90">
          Design, print, and installation for printed vinyl, wraps, and glass
          graphics.
        </p>
      </div>

      {/* Main container with cards and hand image */}
      <div className="mx-auto mt-10 w-full max-w-6xl relative">
        {/* Background container for cards */}
        <div className="relative w-full min-h-[500px]">
          {/* Left Card (Company Info) - positioned absolutely */}
          <div
            className="absolute rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 shadow-xl z-10"
            style={{
              width: `${TUNE.left.w * 100}%`,
              height: `${TUNE.left.h * 100}%`,
              left: `${TUNE.left.x * 100}%`,
              top: `${TUNE.left.y * 100}%`,
              transform: `rotate(${TUNE.left.rot}deg)`,
              transformOrigin: "center",
            }}
          >
            <div className="h-full w-full rounded-2xl bg-black/80 backdrop-blur p-4 md:p-6 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 md:h-11 md:w-11 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-amber-400 to-cyan-400" />
                <div>
                  <div className="font-extrabold text-lg md:text-xl text-white leading-tight">
                    Limitless Graphics
                  </div>
                  <div className="text-xs text-white/80">
                    Image is everything.
                  </div>
                </div>
              </div>
              <p className="mt-3 md:mt-4 text-white/90 leading-relaxed text-sm">
                Full-service graphics for vehicles, storefronts, walls, and
                glass. In-house design and precision installation.
              </p>
              <div className="mt-4 md:mt-5 space-y-2 md:space-y-3 text-sm text-white">
                <Row icon="📞" label="CALL" value="+1 (555) 123-4567" />
                <Row icon="✉️" label="EMAIL" value="hello@limitlessgrz.com" />
                <Row icon="📍" label="VISIT" value="401 Design Avenue" />
              </div>
            </div>
          </div>

          {/* Right Card (Form) - positioned absolutely */}
          <div
            className="absolute rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 shadow-xl z-10"
            style={{
              width: `${TUNE.right.w * 100}%`,
              height: `${TUNE.right.h * 100}%`,
              left: `${TUNE.right.x * 100}%`,
              top: `${TUNE.right.y * 100}%`,
              transform: `rotate(${TUNE.right.rot}deg)`,
              transformOrigin: "center",
            }}
          >
            <div className="h-full w-full rounded-2xl bg-black/80 backdrop-blur p-4 md:p-6 border border-white/10">
              <Form />
            </div>
          </div>

          {/* Hand image - positioned on top of cards */}
          <div className="absolute inset-0 z-20">
            <img
              src={HAND_SRC}
              alt="Hand holding cards"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* watermark */}
      <div className="pointer-events-none select-none text-center mt-6 font-extrabold uppercase tracking-[0.2em] text-white/15 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
        CONTACT US
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function toBox(frac, dims) {
  const x = frac.x * dims.w;
  const y = frac.y * dims.h;
  const w = frac.w * dims.w;
  const h = frac.h * dims.h;
  const cx = x + w / 2;
  const cy = y + h / 2;
  return { x, y, w, h, cx, cy };
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <div className="mt-0.5 grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-lg border border-white/20 bg-white/20 text-white/90 text-sm md:text-base">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-white/80 font-semibold">
          {label}
        </div>
        <div className="text-white text-sm">{value}</div>
      </div>
    </div>
  );
}

function Form() {
  const [sending, setSending] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 800));
        setSending(false);
        e.currentTarget.reset();
        alert("Thanks! We'll get back to you shortly.");
      }}
      className="grid grid-cols-1 gap-3"
    >
      <Field label="Name">
        <input
          required
          className="w-full rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-black text-sm"
          placeholder="Your full name"
        />
      </Field>
      <Field label="Group">
        <input
          required
          className="w-full rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-black text-sm"
          placeholder="you@example.com"
        />
      </Field>
      <Field label="Message">
        <textarea
          required
          rows={3}
          className="w-full rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-black text-sm"
          placeholder="Tell us about your project..."
        />
      </Field>
      <Field label="Mobile">
        <input
          required
          className="w-full rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-black text-sm"
          placeholder="+1 555 123 4567"
        />
      </Field>
      <div className="flex justify-end mt-2">
        <button className="rounded-full px-5 py-2 font-semibold text-black bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-sm">
          {sending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, children, span2 = false }) {
  return (
    <label className={`${span2 ? "col-span-2" : ""}`}>
      <span className="mb-1 block text-sm font-medium text-white">{label}</span>
      {children}
    </label>
  );
}
