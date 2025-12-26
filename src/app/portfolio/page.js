// src/app/portfolio/page.js (SERVER)
import PortfolioClient from "./PortfolioClient";
import { API, PORTFOLIO_IMAGE_BASE } from "@/lib/config";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export const metadata = {
  title: "Portfolio — Limitless Graphics",
  description:
    "Vehicle wraps, paint protection, ceramic coating, signage and more. Browse our portfolio by category and view projects.",
};

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600";

function resolvePortfolioImage(filename) {
  if (!filename) return FALLBACK_IMG;
  if (/^https?:\/\//i.test(filename)) return filename;
  const name = String(filename).split(/[\\/]/).pop();
  return `${PORTFOLIO_IMAGE_BASE}${encodeURIComponent(name)}`;
}

function normalizePortfolio(list = []) {
  const items = (list || []).map((p) => ({
    id: String(p.portfolioId),
    title: p.title || "Untitled Project",
    category: p.servicesInfoTitle || "Portfolio",
    tags: [], // you can add tags later
    img: resolvePortfolioImage(p.image),
  }));

  const filters = [
    "All",
    ...Array.from(new Set(items.map((x) => x.category))).filter(Boolean),
  ];

  return { items, filters };
}

async function fetchWithTimeout(url, ms = 12000) {
  return fetch(url, {
    signal: AbortSignal.timeout(ms),
    cache: "no-store",
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });
}

async function getPortfolio() {
  try {
    const res = await fetchWithTimeout(API.PORTFOLIO_LIST);
    if (!res.ok) return { items: [], filters: ["All"] };

    const data = await res.json();
    const list = Array.isArray(data?.getspecificportfolio)
      ? data.getspecificportfolio
      : [];

    return normalizePortfolio(list);
  } catch (e) {
    console.error("[PortfolioPage] fetch error:", e);
    return { items: [], filters: ["All"] };
  }
}

export default async function PortfolioPage() {
  const { items, filters } = await getPortfolio();

  return (
    <main className="relative bg-neutral-950">
      <PortfolioClient items={items} filters={filters} />

      <div className="pointer-events-none select-none text-center py-14 font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl">
        Portfolio
      </div>
    </main>
  );
}
