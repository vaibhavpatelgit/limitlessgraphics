// NO "use client" here
import GetQuoteButton from "@/components/GetQuoteButton";
import Link from "next/link";

export const metadata = {
  title: "About Us — Limitless Graphics",
  description:
    "We design, print, and install vehicle wraps, printed vinyl, and glass graphics. Learn our story, values, process, and team.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950">
        {/* soft glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-600 via-amber-400 to-cyan-400 opacity-20 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400 via-amber-400 to-fuchsia-600 opacity-10 blur-3xl animate-float-slower" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 text-center">
          <span
            className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 will-animate"
            data-animate="fade"
          >
            Since 2014 · Saskatoon
          </span>

          <h1
            className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white will-animate"
            data-animate="up"
          >
            We wrap brands in{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              bold ideas
            </span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-white/80 will-animate"
            data-animate="fade"
          >
            From one van to national fleets, we design, print, and install
            graphics that turn heads—built to last with premium films and
            UV-stable inks.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 will-animate"
            data-animate="scale"
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 transition hover:scale-[1.02] hover-lift hover-shine"
            >
              See our work
              <svg
                className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <GetQuoteButton />
          </div>

          {/* quick stats (staggered) */}
          <div
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            data-stagger="120"
          >
            {[
              ["3+", "years"],
              ["2,500+", "wraps installed"],
              ["4.9★", "Google rating"],
              ["10+", "year experience"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 will-animate"
                data-animate="up"
              >
                <div className="text-2xl font-extrabold text-white">{n}</div>
                <div className="text-xs uppercase tracking-wide text-white/60">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / TIMELINE */}
      {/* <section className="bg-neutral-950/95">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <h2
              className="text-3xl font-extrabold text-white will-animate"
              data-animate="up"
            >
              Our story
            </h2>
            <p className="mt-2 text-white/70 will-animate" data-animate="fade">
              Built by installers who obsess over details—because image is
              everything.
            </p>
          </div>

          <div
            className="relative grid gap-10 lg:grid-cols-2"
            data-stagger="140"
          >
            <TimelineItem
              year="2014"
              title="Opened the shop"
              body="Started with a plotter, a laminator, and a mission to make small businesses look big."
            />
            <TimelineItem
              side="right"
              year="2017"
              title="Full in-house print"
              body="Upgraded to wide-format printers and premium film catalogues from 3M and Avery."
            />
            <TimelineItem
              year="2020"
              title="Fleet specialists"
              body="Scaled to multi-vehicle deployments with templated design systems and tight QA."
            />
            <TimelineItem
              side="right"
              year="2024"
              title="Design studio"
              body="Brand systems, storefront sets, and environmental graphics under one roof."
            />
          </div>
        </div>
      </section> */}

      {/* VALUES */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <h2
              className="text-3xl font-extrabold text-white will-animate"
              data-animate="up"
            >
              What we stand for
            </h2>
            <p className="mt-2 text-white/70 will-animate" data-animate="fade">
              Four values that guide every install and every email.
            </p>
          </div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-stagger="120"
          >
            <ValueCard icon="🎯" title="Clarity first">
              Direct timelines, accurate quotes, no surprises. We
              over-communicate so you can plan.
            </ValueCard>
            <ValueCard icon="🧪" title="Proof then print">
              Color-managed workflows, test swatches, and scaled proofs before
              we hit GO.
            </ValueCard>
            <ValueCard icon="🛠️" title="Craft install">
              Heat, stretch, relief cuts—the unglamorous steps we never skip for
              clean edges.
            </ValueCard>
            <ValueCard icon="♻️" title="Care & longevity">
              Materials matched to environment. We document maintenance for
              long-life graphics.
            </ValueCard>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-950/95">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 text-center">
            <h2
              className="text-3xl font-extrabold text-white will-animate"
              data-animate="up"
            >
              How we work
            </h2>
            <p className="mt-2 text-white/70 will-animate" data-animate="fade">
              A simple 4-step path from idea to installed.
            </p>
          </div>

          <ol
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-stagger="110"
          >
            {[
              ["Brief", "Send photos + measurements + goals."],
              ["Design", "We mock up options and finalize proofs."],
              ["Print", "Color-managed, laminated, trimmed."],
              ["Install", "Scheduled, clean bay, on-time delivery."],
            ].map(([t, d], i) => (
              <li
                key={t}
                className="glass group rounded-2xl border border-white/10 bg-white/5 p-5 will-animate hover-lift hover-shine"
                data-animate="up"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black font-bold">
                    {i + 1}
                  </span>
                  <span className="text-xs text-white/60 group-hover:text-white/80 transition">
                    ~1–3 days
                  </span>
                </div>
                <h3 className="font-semibold text-white">{t}</h3>
                <p className="mt-1 text-sm text-white/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      {/* <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 text-center">
            <h2
              className="text-3xl font-extrabold text-white will-animate"
              data-animate="up"
            >
              Meet the team
            </h2>
            <p className="mt-2 text-white/70 will-animate" data-animate="fade">
              Designers, printers, and installers who love clean lines.
            </p>
          </div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-stagger="120"
          >
            {[
              [
                "Zoe Nguyen",
                "Lead Installer",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
              ],
              [
                "Mason Lee",
                "Print Tech",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
              ],
              [
                "Avery Chan",
                "Designer",
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
              ],
              [
                "Riley Park",
                "Project Mgr.",
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
              ],
            ].map(([name, role, src]) => (
              <div
                key={name}
                className="group rounded-2xl border border-white/10 bg-white/5 p-3 will-animate hover-lift hover-shine"
                data-animate="up"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-white">{name}</div>
                  <div className="text-sm text-white/70">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-neutral-950/95">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h3
            className="text-2xl font-extrabold text-white will-animate"
            data-animate="up"
          >
            Ready to make your fleet look{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              limitless
            </span>
            ?
          </h3>
          <p
            className="mx-auto mt-2 max-w-xl text-white/70 will-animate"
            data-animate="fade"
          >
            Send measurements and a couple photos—we’ll reply with proof options
            and pricing.
          </p>
          <div
            className="mt-6 flex items-center justify-center gap-3 will-animate"
            data-animate="scale"
          >
            <GetQuoteButton className="rounded-md bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black hover:opacity-95 transition">
              Get a Quote
            </GetQuoteButton>
            <Link
              href="/portfolio"
              className="rainbow-link text-white/80 hover-lift hover-shine"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* small presentational bits (server-safe) */
function TimelineItem({ year, title, body, side = "left" }) {
  const align =
    side === "right" ? "lg:pl-12 lg:text-left" : "lg:pr-12 lg:text-right";
  const pin = side === "right" ? "lg:left-1/2" : "lg:right-1/2";
  return (
    <div className={`relative ${align} will-animate`} data-animate="up">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 lg:block" />
      <div
        className={`pointer-events-none absolute -top-3 hidden h-6 w-6 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 ${pin} lg:block`}
      />
      <div className="glass rounded-2xl border border-white/10 bg-white/5 p-5 hover-lift hover-shine">
        <div className="text-xs text-white/60">{year}</div>
        <div className="mt-1 font-semibold text-white">{title}</div>
        <p className="mt-1 text-white/75">{body}</p>
      </div>
    </div>
  );
}
function ValueCard({ icon, title, children }) {
  return (
    <div
      className="glass rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.07] will-animate hover-lift hover-shine"
      data-animate="up"
    >
      <div className="mb-2 text-2xl">{icon}</div>
      <div className="font-semibold text-white">{title}</div>
      <p className="mt-1 text-sm text-white/75">{children}</p>
    </div>
  );
}
