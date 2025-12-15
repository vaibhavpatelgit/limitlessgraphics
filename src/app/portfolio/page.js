// src/app/portfolio/page.js  (SERVER component — SEO-friendly)
import ShowcaseGrid from "@/components/shared/ShowcaseGrid";
import { PORTFOLIO_ITEMS, PORTFOLIO_FILTERS } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio — Limitless Graphics",
  description:
    "Vehicle wraps, storefront graphics, glass films, and wall murals. Filter, preview, and view projects.",
};

export default function PortfolioPage() {
  return (
    <main className="relative bg-neutral-950">
      <ShowcaseGrid
        title="Portfolio"
        subtitle="Vehicle wraps, storefront graphics, windows & glass, murals — filter & preview."
        items={PORTFOLIO_ITEMS}
        filters={PORTFOLIO_FILTERS}
        mode="portfolio" // shows Quick view + Lightbox + View project
        maxWidth={2000} // full-width feel
        stagger // sequential fade-in
      />
      <div className="pointer-events-none select-none text-center py-14 font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl">
        Portfolio
      </div>
    </main>
  );
}
