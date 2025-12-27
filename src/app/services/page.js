// src/app/services/page.js

if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

import ShowcaseGrid from "@/components/shared/ShowcaseGrid";
import TypingWord from "@/components/shared/TypingWord";
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

function pickServicesArray(json) {
  // ✅ handle many possible keys
  if (Array.isArray(json?.GetAllServicesListwithInfo))
    return json.GetAllServicesListwithInfo;

  if (Array.isArray(json?.GetAllServicesListwithInfo))
    return json.GetAllServicesListwithInfo;

  if (Array.isArray(json?.GetAllService)) return json.GetAllService;

  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.items)) return json.items;

  return [];
}

function normalize(list = []) {
  return (list || [])
    .sort((a, b) => (Number(a.ordernumber) || 0) - (Number(b.ordernumber) || 0))
    .map((s) => {
      const title = s.titile || s.title || "Untitled Service";

      // ✅ slug can be many names depending on API
      const slugRaw = s.slug ?? s.Slug ?? s.SLUG ?? s.serviceSlug;
      const slug = (slugRaw || "").toString().trim();

      return {
        id: String(s.ServicesID ?? s.id ?? title),
        title,
        category: "Services",
        tags: [],
        blurb: s.description || "",
        img: resolveServiceImage(s.coverimage),
        href: slug ? `/services/${encodeURIComponent(slug)}` : "/services",
      };
    });
}

async function fetchJson(url, ms = 20000) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(ms),
    cache: "no-store",
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });

  const text = await res.text(); // ✅ read once
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  return { ok: res.ok, status: res.status, json, raw: text };
}

async function getServices() {
  // 1) Try SERVICES_WITH_INFO first (best for Learn more)
  if (API.SERVICES_WITH_INFO) {
    try {
      console.log(
        "[ServicesPage] Try SERVICES_WITH_INFO:",
        API.SERVICES_WITH_INFO
      );

      const r1 = await fetchJson(API.SERVICES_WITH_INFO, 25000);
      console.log("[ServicesPage] SERVICES_WITH_INFO status:", r1.status);

      const list1 = pickServicesArray(r1.json);
      console.log("[ServicesPage] SERVICES_WITH_INFO items:", list1.length);

      if (r1.ok && list1.length) return normalize(list1);
    } catch (e) {
      console.error("[ServicesPage] SERVICES_WITH_INFO failed:", e);
    }
  } else {
    console.warn(
      "[ServicesPage] API.SERVICES_WITH_INFO is undefined in config.js"
    );
  }

  // 2) Fallback to LIST
  try {
    console.log("[ServicesPage] Fallback LIST:", API.LIST);

    const r2 = await fetchJson(API.LIST, 20000);
    console.log("[ServicesPage] LIST status:", r2.status);

    const list2 = pickServicesArray(r2.json);
    console.log("[ServicesPage] LIST items:", list2.length);

    return normalize(list2);
  } catch (e) {
    console.error("[ServicesPage] LIST failed:", e);
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

      <div className="pointer-events-none select-none py-14 text-center relative">
        <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400" />
        <TypingWord
          text="SERVICES"
          speed={60}
          delay={150}
          className="relative font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl"
        />
      </div>
    </main>
  );
}
