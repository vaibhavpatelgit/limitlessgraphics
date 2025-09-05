export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "services",
    "services/printed-vinyl-signs",
    "services/vehicle-fleet-wrap-design",
    "services/windows-glass",
    "portfolio",
    "contact",
  ];
  const now = new Date().toISOString();
  return paths.map((p) => ({
    url: `${base}/${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1.0 : 0.7,
  }));
}
