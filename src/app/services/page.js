// src/app/services/page.js

// DEV-ONLY: trust self-signed certs so local HTTPS doesn't crash. Remove for prod.
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

import ShowcaseGrid from "@/components/shared/ShowcaseGrid";
import { DOTNET_API_BASE } from "@/lib/config";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export const metadata = {
  title: "Services — Limitless Graphics",
  description:
    "Vehicle wraps, printed vinyl & signage, windows & glass, wall murals, and paint protection. Browse services and start a quote.",
};
const STATIC_IMAGE_PATH = "Files/Services"; // <- your fixed folder path
// ----- helpers -----
const LIST = `${(DOTNET_API_BASE || "").replace(
  /\/+$/,
  ""
)}/api/Service/GetAllService`;

const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600";

// If API returns just a filename, make it absolute with DOTNET_API_BASE
function resolveImage(src) {
  if (!src) return FALLBACK_IMG;
  if (/^https?:\/\//i.test(src)) return src; // already absolute

  const base = (DOTNET_API_BASE || "").replace(/\/+$/, ""); // trim trailing /
  // Clean up folder + filename
  const folder = STATIC_IMAGE_PATH.replace(/^[/\\]+|[/\\]+$/g, "").replace(
    /\\/g,
    "/"
  );
  const filename = String(src).split(/[\\/]/).pop(); // keep only the file name
  const encoded = encodeURIComponent(filename); // handle spaces & special chars

  // Final URL: https://domain/Files/Services/filename.png
  return `${base}/${folder}/${encoded}`;
}

// Map exactly your API shape → ShowcaseGrid items
function normalize(list = []) {
  return list
    .sort((a, b) => (Number(a.ordernumber) || 0) - (Number(b.ordernumber) || 0))
    .map((s) => {
      const title = s.titile || s.title || "Untitled Service";
      const id = s.ServicesID ?? s.id ?? slugify(title);
      return {
        id: String(id),
        title,
        category: "Services",
        tags: [],
        blurb: s.description || "",
        img: resolveImage(s.coverimage),
        href: `/services/${slugify(title)}-${id}`,
      };
    });
}

// ---- server-side fetch with hard timeout (prevents menu click hang) ----
async function getServices() {
  // guard against missing base URL
  if (!DOTNET_API_BASE || !/^https?:\/\//i.test(DOTNET_API_BASE)) return [];

  try {
    // Node 18+ supports AbortSignal.timeout (via undici)
    const res = await fetch(LIST, {
      signal: AbortSignal.timeout(7000), // 7s cutoff to avoid infinite loading
      cache: "no-store",
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];
    const data = await res.json();

    // your sample JSON has { GetAllService: [...] }
    const list = Array.isArray(data?.GetAllService) ? data.GetAllService : [];
    return normalize(list);
  } catch {
    // Abort/network/SSL → return empty and render immediately
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
          subtitle="Same crisp grid as Portfolio — filter and learn more."
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
