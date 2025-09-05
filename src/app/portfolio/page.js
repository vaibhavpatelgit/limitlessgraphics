// NO "use client" here

import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Portfolio — Limitless Graphics",
  description:
    "Vehicle wraps, printed vinyl, window films, wall murals, and more. Explore our latest projects and see how we turn brands into moving billboards.",
};

export default function PortfolioPage() {
  return (
    <main className="relative bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-600 via-amber-400 to-cyan-400 opacity-20 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400 via-amber-400 to-fuchsia-600 opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-10 text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Recent Projects
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Work that{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              turns heads
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Vehicle & fleet wraps, storefront graphics, windows & glass, wall
            murals, and more. Scroll, filter, and preview.
          </p>
        </div>
      </section>

      {/* Interactive grid */}
      <PortfolioClient />

      {/* watermark */}
      <div className="pointer-events-none select-none text-center py-14 font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl">
        Portfolio
      </div>
    </main>
  );
}
