"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Contact page — Limitless theme
 * - Gradient glows + soft parallax
 * - Glass cards (contact info + form)
 * - Staggered field entrance
 * - Copy-to-clipboard helpers
 * - Success toast
 */

export default function ContactClient() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);

  // Mini parallax for the background blobs
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    const loop = () => {
      setT((v) => (v + 0.01) % (Math.PI * 2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1500);
    } catch (_) {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // simulate request
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setOk(true);
    e.currentTarget.reset();
    setTimeout(() => setOk(false), 1500);
  };

  // framer variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.08, staggerChildren: 0.06 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-28 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-fuchsia-600 via-amber-400 to-cyan-400 opacity-20 blur-3xl"
          style={{
            transform: `translateY(${Math.sin(t) * 10}px) translateX(${
              Math.cos(t * 0.7) * 6
            }px)`,
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-cyan-400 via-amber-400 to-fuchsia-600 opacity-15 blur-3xl"
          style={{
            transform: `translateY(${Math.cos(t * 0.8) * 12}px) translateX(${
              Math.sin(t * 0.5) * 8
            }px)`,
          }}
        />
      </div>

      {/* hero */}
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Let’s{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
            start your project
          </span>
        </h1>
        <p className="mt-3 text-white/80">
          Fast quotes. On-time installs. Premium films and UV-stable inks.
        </p>
      </div>

      {/* main cards */}
      <div className="relative mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          {/* CONTACT INFO CARD */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-amber-400 to-cyan-400" />
                <div>
                  <div className="text-lg font-extrabold text-white leading-tight">
                    Limitless Graphics
                  </div>
                  <div className="text-xs text-white/75">
                    Saskatoon · Since 2014
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white">
                <InfoRow
                  label="Call"
                  value="+1 (555) 123-4567"
                  onCopy={() => copy("+1 (555) 123-4567")}
                >
                  <a
                    href="tel:+15551234567"
                    className="rainbow-link text-white/90"
                  >
                    +1 (555) 123-4567
                  </a>
                </InfoRow>

                <InfoRow
                  label="Email"
                  value="hello@limitlessgraphics.com"
                  onCopy={() => copy("hello@limitlessgraphics.com")}
                >
                  <a
                    href="mailto:hello@limitlessgraphics.com"
                    className="rainbow-link text-white/90"
                  >
                    hello@limitlessgraphics.com
                  </a>
                </InfoRow>

                <InfoRow
                  label="Visit"
                  value="4003 Millar Ave #6, Saskatoon"
                  onCopy={() => copy("4003 Millar Ave #6, Saskatoon")}
                >
                  4003 Millar Ave #6, Saskatoon
                </InfoRow>

                <div className="pt-2 grid grid-cols-3 gap-2">
                  <Badge>Wraps</Badge>
                  <Badge>Vinyl</Badge>
                  <Badge>Windows</Badge>
                </div>

                {/* mini map / preview (placeholder image url) */}
                <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600"
                    alt="Shop / Map preview"
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black"
                  >
                    View work
                  </Link>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/80 hover:bg-white/15"
                    rel="noreferrer"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <motion.form
                variants={container}
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-3"
              >
                <Field variants={item} label="Name">
                  <input
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <Field variants={item} label="Email">
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <Field variants={item} label="Mobile">
                  <input
                    required
                    placeholder="+1 555 123 4567"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <Field variants={item} label="Service">
                  <select className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black">
                    <option>Vehicle wraps (custom prints)</option>
                    <option>Color change wraps</option>
                    <option>Printed vinyl & signage</option>
                    <option>Windows & glass</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field variants={item} label="Message">
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <motion.div variants={item} className="mt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={sending}
                    className="relative inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-6 py-2 font-semibold text-black"
                  >
                    <span className="relative z-10">
                      {sending ? "Sending…" : "Send message"}
                    </span>
                    {/* shine */}
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/30 opacity-0 blur transition-opacity duration-300 hover:opacity-20" />
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Success toast */}
        <AnimatePresence>
          {ok && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2"
            >
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white backdrop-blur">
                ✓ Done — we’ll reply shortly.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FAQ — keeps SEO friendly content and adds depth */}
      <div className="relative mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold text-white">Quick answers</h2>
          <p className="mt-2 text-white/70">
            A few things customers ask before we get rolling.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <FaqCard q="How fast can we book?">
            Most installs are scheduled 5–10 business days after proof approval.
          </FaqCard>
          <FaqCard q="What films do you use?">
            Premium 3M / Avery films with UV-stable inks and proper lamination.
          </FaqCard>
          <FaqCard q="Do you design in-house?">
            Yes — templated vehicle proofs, sign sets, and glass graphics.
          </FaqCard>
        </div>
      </div>

      {/* watermark */}
      <div className="pointer-events-none select-none text-center pb-14 font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
        CONTACT
      </div>
    </section>
  );
}

/* ----------------- small presentational bits ----------------- */

function InfoRow({ label, children, value, onCopy }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-xs uppercase tracking-wide text-white/70">
          {label}
        </div>
        <div className="text-white">{children}</div>
      </div>
      {value && (
        <button
          onClick={onCopy}
          className="rounded-lg border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/70 hover:bg-white/15"
          title="Copy"
        >
          Copy
        </button>
      )}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

function Field({ label, children, variants }) {
  return (
    <motion.label variants={variants} className="block">
      <span className="mb-1 block text-sm font-medium text-white">{label}</span>
      {children}
    </motion.label>
  );
}

function FaqCard({ q, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
      <div className="font-semibold text-white">{q}</div>
      <p className="mt-1 text-sm">{children}</p>
    </div>
  );
}
