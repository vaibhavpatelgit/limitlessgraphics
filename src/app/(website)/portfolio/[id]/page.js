// src/app/portfolio/[id]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItem, getPortfolioIds } from "@/data/portfolio";

// Pre-render all item pages at build time
export async function generateStaticParams() {
  return getPortfolioIds(); // [{ id: "fleet-01" }, ...]
}

// Per-page SEO
export async function generateMetadata({ params }) {
  const item = getPortfolioItem(params.id);
  if (!item) return { title: "Project — Limitless Graphics" };
  return {
    title: `${item.title} — Portfolio`,
    description: item.blurb ?? "Project details and imagery.",
    openGraph: {
      images: [{ url: item.img }],
    },
  };
}

export default function PortfolioItemPage({ params }) {
  const item = getPortfolioItem(params.id);
  if (!item) {
    // Render 404 page
    notFound();
  }

  return (
    <main className="relative bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-600 via-amber-400 to-cyan-400 opacity-20 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400 via-amber-400 to-fuchsia-600 opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-10">
          <Link href="/portfolio" className="rainbow-link text-white/80">
            ← Back to portfolio
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {item.title}
          </h1>
          {item.blurb && (
            <p className="mt-3 max-w-2xl text-white/80">{item.blurb}</p>
          )}
        </div>
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src={item.img}
            alt={item.title}
            className="w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
            <div className="text-xs uppercase tracking-wide text-white/60">
              Category
            </div>
            <div className="mt-1 text-white">{item.category}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
            <div className="text-xs uppercase tracking-wide text-white/60">
              Tags
            </div>
            <div className="mt-1 text-white">{item.tags?.join(" • ")}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
            <div className="text-xs uppercase tracking-wide text-white/60">
              Services
            </div>
            <div className="mt-1 text-white">Design · Print · Install</div>
          </div>
        </div>
      </section>
    </main>
  );
}
