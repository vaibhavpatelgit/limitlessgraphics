// src/app/services/page.js

if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

import ShowcaseGrid from "@/components/shared/ShowcaseGrid";
import { API, IMAGE_BASE } from "@/lib/config";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export const metadata = {
  title: "Services — Limitless Graphics",
  description:
    "Vehicle wraps, fleet graphics, window film, signage, and paint protection. Browse services and view details.",
};

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600";

function resolveServiceImage(filename) {
  if (!filename) return FALLBACK_IMG;
  if (/^https?:\/\//i.test(filename)) return filename;
  const name = String(filename).split(/[\\/]/).pop();
  return `${IMAGE_BASE}${encodeURIComponent(name)}`;
}

function pickArray(json) {
  if (Array.isArray(json?.GetAllServicesListwithInfo))
    return json.GetAllServicesListwithInfo;
  if (Array.isArray(json?.GetAllService)) return json.GetAllService; // fallback
  return [];
}

function normalize(list = []) {
  return list
    .sort((a, b) => (Number(a.ordernumber) || 0) - (Number(b.ordernumber) || 0))
    .map((s) => {
      const title = s.titile || s.title || "Untitled Service";
      const slug = s.slug || s.Slug; // your API returns `slug`
      return {
        id: String(s.ServicesID ?? s.id ?? title),
        title,
        category: "Services",
        tags: [],
        blurb: s.description || "",
        img: resolveServiceImage(s.coverimage),
        href: slug ? `/services/${slug}` : "/services",
      };
    });
}

async function getServices() {
  try {
    const res = await fetch(API.LIST, {
      signal: AbortSignal.timeout(20000),
      cache: "no-store",
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];
    const data = await res.json();

    const list = Array.isArray(data?.GetAllService) ? data.GetAllService : [];
    return normalize(list); // normalize must use s.slug (or s.Slug)
  } catch (e) {
    console.error("[ServicesPage] fetch error:", e);
    return [];
  }
}

export default async function ServicesPage() {
  const items = await getServices();

  return (
    <main className="relative bg-neutral-950">
      {items.length > 0 ? (
        <ShowcaseGrid
          title="Our Services"
          subtitle="Browse services and view details."
          items={items}
          mode="services"
          maxWidth={2000}
          stagger
        />
      ) : (
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-white/70">No services found.</p>
        </div>
      )}

      <div className="pointer-events-none select-none text-center py-14 font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl">
        Services
      </div>
    </main>
  );
}
