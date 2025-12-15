// src/data/portfolio.js
export const PORTFOLIO_ITEMS = [
  {
    id: "fleet-01",
    title: "Fleet Graphics — Logistics",
    category: "Vehicles",
    tags: ["Wraps", "Fleet", "3M"],
    img: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600",
    blurb:
      "Design, print, and install multi-vehicle fleet graphics with templated panels and crisp color.",
  },
  {
    id: "storefront-01",
    title: "Storefront Vinyl — Cafe",
    category: "Vinyl & Signs",
    tags: ["Decals", "Branding", "Windows"],
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600",
    blurb:
      "Exterior glass decals, hours, and branding set designed to pop with daytime reflections.",
  },
  {
    id: "ppf-01",
    title: "PPF — Front End",
    category: "PPF",
    tags: ["Protection", "Self-heal"],
    img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600",
    blurb:
      "Invisible impact protection with self-healing top coat for daily-driver durability.",
  },
  // …add more
];

export const PORTFOLIO_FILTERS = [
  "All",
  "Vehicles",
  "Vinyl & Signs",
  "Windows & Glass",
  "Walls & Murals",
  "PPF",
];

// helpers (nice for detail pages)
export function getPortfolioItem(id) {
  return PORTFOLIO_ITEMS.find((i) => i.id === id);
}
export function getPortfolioIds() {
  return PORTFOLIO_ITEMS.map((i) => ({ id: i.id }));
}
