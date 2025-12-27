"use client";

import { useState } from "react";
import GetQuoteButton from "./GetQuoteButton";

export default function Footer() {
  // const [email, avasetEmail] = useState("");
  const [email, setEmail] = useState(""); // ✅ REQUIRED
  const [subscribing, setSubscribing] = useState(false);

  const year = new Date().getFullYear();
  const onSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || subscribing) return;

    setSubscribing(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");

      alert("Thanks for subscribing! You’ll receive tips & promos monthly.");
      setEmail("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white/90 isolate">
      {/* Animated background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-600 via-amber-400 to-cyan-400 opacity-20 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400 via-amber-400 to-fuchsia-600 opacity-10 blur-3xl animate-float-slower" />
      </div>

      {/* CTA ribbon */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Ready to wrap your brand?
              <span className="ml-2 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
                Image is everything.
              </span>
            </h3>
            <GetQuoteButton className="group inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-amber-300">
              <span>Get Quote</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </GetQuoteButton>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand / Rating / Social */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-amber-400 to-cyan-400" />
                <div>
                  <div className="text-lg font-extrabold">
                    Limitless Graphics
                  </div>
                  <div className="text-xs text-white/70">
                    Image is everything.
                  </div>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-white/80">
                Full-service wraps, printed vinyl and glass graphics. We design,
                print and install with premium films for crisp color and long
                life.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs">
                  ★★★★★ 4.9 on Google
                </span>
                <a href="#reviews" className="rainbow-link text-xs">
                  Read reviews
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Social href="#" label="Instagram" icon={InstagramIcon} />
                <Social href="#" label="Facebook" icon={FacebookIcon} />
                <Social href="#" label="YouTube" icon={YouTubeIcon} />
                <Social href="#" label="TikTok" icon={TikTokIcon} />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <Li href="/services/printed-vinyl-signs">
                  Printed Vinyl &amp; Signs
                </Li>
                <Li href="/services/vehicle-fleet-wrap-design">
                  Vehicle Wraps (Custom)
                </Li>
                <Li href="/services/vehicle-fleet-wrap-design">
                  Vehicle Wraps (Color Change)
                </Li>
                <Li href="/services/vehicle-fleet-wrap-design">
                  Paint Protection Film
                </Li>
                <Li href="/services/windows-glass">Windows &amp; Glass</Li>
                <Li href="/services/printed-vinyl-signs">
                  Wall Wraps &amp; Murals
                </Li>
              </ul>
            </div>

            {/* Company / Resources */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <Li href="/about">About Us</Li>
                <Li href="/portfolio">Portfolio</Li>
                <Li href="/faq">FAQ</Li>
                <Li href="/care-guide.pdf">Wrap Care Guide (PDF)</Li>
                <Li href="/privacy">Privacy Policy</Li>
                <Li href="/terms">Terms</Li>
              </ul>
            </div>

            {/* Contact / Hours / Newsletter */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="rainbow-link" href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>
                  <a
                    className="rainbow-link"
                    href="mailto:hello@limitlessgraphics.com"
                  >
                    hello@limitlessgraphics.com
                  </a>
                </li>
                <li>
                  <a
                    className="rainbow-link"
                    href="https://maps.google.com"
                    target="_blank"
                  >
                    4003 Millar Ave #6, Saskatoon
                  </a>
                </li>
              </ul>

              <div className="mt-4 text-xs text-white/70">
                <div>Mon–Fri 9:00–6:00</div>
                <div>Sat by appointment</div>
                <div>Closed Sunday</div>
              </div>
              <form onSubmit={onSubscribe} className="mt-6 relative z-20">
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Get tips & promos (monthly)
                </label>

                <div className="flex w-full overflow-hidden rounded-xl border border-white/15 bg-white/5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    disabled={subscribing}
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/40 disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={subscribing}
                    className="shrink-0 inline-flex items-center gap-2 whitespace-nowrap
                 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400
                 px-4 py-2 text-sm font-semibold text-black
                 hover:opacity-95 disabled:opacity-70"
                    aria-label="Subscribe to newsletter"
                  >
                    {subscribing && (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    )}
                    {subscribing ? "Subscribing…" : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/60 sm:flex-row">
            <div>© {year} Limitless Graphics. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a
                className="hover:text-white/80 transition-colors"
                href="/sitemap"
              >
                Sitemap
              </a>
              <a
                className="hover:text-white/80 transition-colors"
                href="/privacy"
              >
                Privacy
              </a>
              <a
                className="hover:text-white/80 transition-colors"
                href="/terms"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- small pieces ---------- */

function Social({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
    >
      <Icon className="h-4 w-4 text-white/80 transition group-hover:text-white" />
    </a>
  );
}

function Li({ href, children }) {
  return (
    <li>
      <a className="rainbow-link" href={href}>
        {children}
      </a>
    </li>
  );
}

/* ---------- inline SVG icons (no extra deps) ---------- */

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
      <path
        d="M16.5 7.5h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22 12s0-3-0.4-4.5a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-7.5.4a3 3 0 0 0-2.1 2.1C2 9 2 12 2 12s0 3 .4 4.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s5 0 7.5-.4a3 3 0 0 0 2.1-2.1C22 15 22 12 22 12Z"
        stroke="currentColor"
      />
      <path d="M10 15V9l6 3-6 3Z" fill="currentColor" />
    </svg>
  );
}
function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 4a5 5 0 0 0 5 5M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
