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

/** ✅ pick array from many possible keys */
function pickPortfolioArray(json) {
  if (!json) return [];

  // common patterns
  if (Array.isArray(json.getspecificportfolio))
    return json.getspecificportfolio;
  if (Array.isArray(json.GetSpecificPortfolio))
    return json.GetSpecificPortfolio;
  if (Array.isArray(json.GetAllPortfolio)) return json.GetAllPortfolio;
  if (Array.isArray(json.GetAllPortfolioList)) return json.GetAllPortfolioList;
  if (Array.isArray(json.GetAllPortfolioListwithInfo))
    return json.GetAllPortfolioListwithInfo;

  if (Array.isArray(json.data)) return json.data;
  if (Array.isArray(json.items)) return json.items;
  if (Array.isArray(json.result)) return json.result;

  // sometimes API returns { something: { items: [] } }
  for (const v of Object.values(json)) {
    if (Array.isArray(v)) return v;
    if (v && typeof v === "object") {
      if (Array.isArray(v.items)) return v.items;
      if (Array.isArray(v.data)) return v.data;
      if (Array.isArray(v.result)) return v.result;
    }
  }

  return [];
}

function normalizePortfolio(list = []) {
  const items = (list || []).map((p, idx) => {
    const idRaw =
      p.portfolioId ?? p.PortfolioId ?? p.id ?? p.Id ?? `portfolio-${idx}`;

    const title = p.title ?? p.Title ?? "Untitled Project";

    // ✅ your API might name it differently
    const category =
      p.servicesInfoTitle ??
      p.ServicesInfoTitle ??
      p.serviceInfoTitle ??
      p.category ??
      p.Category ??
      "Portfolio";

    const imgRaw = p.image ?? p.Image ?? p.coverimage ?? p.CoverImage;

    return {
      id: String(idRaw),
      title,
      category,
      tags: [],
      img: resolvePortfolioImage(imgRaw),
      href: `/portfolio/${encodeURIComponent(String(idRaw))}`,
    };
  });

  const filters = [
    "All",
    ...Array.from(new Set(items.map((x) => x.category))).filter(Boolean),
  ];

  return { items, filters };
}

async function fetchJson(url, ms = 20000) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(ms),
    // leave caching to next.revalidate
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });

  const raw = await res.text();
  let json = null;
  try {
    json = raw ? JSON.parse(raw) : null;
  } catch {
    json = null;
  }

  return { ok: res.ok, status: res.status, json, raw };
}

async function getPortfolio() {
  try {
    if (!API.PORTFOLIO_GET_ALL) {
      console.warn(
        "[PortfolioPage] API.PORTFOLIO_GET_ALL is undefined in config.js"
      );
      return { items: [], filters: ["All"] };
    }

    console.log("[PortfolioPage] Fetch:", API.PORTFOLIO_GET_ALL);
    const r = await fetchJson(API.PORTFOLIO_GET_ALL, 25000);
    console.log("[PortfolioPage] status:", r.status);

    const list = pickPortfolioArray(r.json);
    console.log("[PortfolioPage] items:", list.length);

    if (!r.ok) return { items: [], filters: ["All"] };
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
