"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { API } from "@/lib/config";
import { Turnstile } from "@marsidev/react-turnstile";
/**
 * Contact page — Limitless theme
 * - Sends email via /api/quote
 * - Loader spinner on submit button
 * - Separate toast for "copied" and "sent"
 */

export default function ContactClient() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState("checking");
  // Load sub-services
  useEffect(() => {
    const loadServices = async () => {
      try {
        setServicesLoading(true);

        const res = await fetch(API.SINFO_LIST);

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();

        console.log("Service Info API:", data);

        if (Array.isArray(data?.GetAllService)) {
          setServices(data.GetAllService);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Error loading services:", error);
        setServices([]);
      } finally {
        setServicesLoading(false);
      }
    };

    loadServices();
  }, []);
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
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_) {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    const form = e.currentTarget;

    // Safe getter
    const get = (key) => {
      const el = form.elements.namedItem(key);
      return (el && "value" in el ? String(el.value) : "").trim();
    };

    const name = get("name");
    const email = get("email");
    const mobile = get("mobile");
    const service = get("service");
    const message = get("message");

    // Normal form validation
    if (!name || !email || !mobile || !service) {
      alert("Please fill all required fields.");
      return;
    }

    // Security verification
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }

    const payload = {
      name,
      email,
      contact: mobile,
      message: `Service: ${service}\n\n${message}`.trim(),

      // Cloudflare Turnstile token
      turnstileToken,
    };

    setSending(true);
    setSent(false);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      form.reset();

      setSent(true);

      // Token should not be reused
      setTurnstileToken("");
      setCaptchaStatus("checking");

      // Reset Turnstile for another submission
      if (typeof window !== "undefined" && window.turnstile) {
        window.turnstile.reset();
      }

      setTimeout(() => setSent(false), 1800);
    } catch (err) {
      alert(err?.message || "Something went wrong. Please try again.");

      // Reset CAPTCHA so customer can try again
      setTurnstileToken("");
      setCaptchaStatus("checking");

      if (typeof window !== "undefined" && window.turnstile) {
        window.turnstile.reset();
      }
    } finally {
      setSending(false);
    }
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
  const FAQS = [
    {
      q: "How fast can we book?",
      a: "Most installs can be scheduled within 2–6 business days after proof approval, depending on the size of the project.",
    },
    {
      q: "What films do you use?",
      a: "We use premium 3M and Avery films, printed with high-quality HP Latex inks, UV-stable for long-lasting colour, and protected with proper lamination for added durability.",
    },
    {
      q: "Do you design in-house?",
      a: "Yes. We create custom vehicle graphics, wraps, decals, signs, window graphics, wall graphics, and more.",
    },
    {
      q: "How long does a vehicle wrap last?",
      a: "With premium materials, proper installation, and regular care, a professionally installed wrap can last for several years.",
    },
    {
      q: "Do you warranty your wraps and graphics?",
      a: "Yes. We stand behind our materials and installation. Warranty coverage depends on the material, application, and type of project.",
    },
    {
      q: "Can you wrap vehicles during winter?",
      a: "Yes. Our vehicle wraps and graphics are installed indoors in a controlled environment to ensure proper adhesion and finish.",
    },
    {
      q: "Can you remove old decals or wraps?",
      a: "Yes. We offer professional wrap and decal removal before installing your new graphics.",
    },
    {
      q: "Will removing a wrap damage my paint?",
      a: "Properly installed and professionally removed vinyl is generally safe for factory paint that is in good condition.",
    },
    {
      q: "Can I bring my own design?",
      a: "Absolutely. You can supply your own print-ready artwork, or our team can help prepare or redesign your files for production.",
    },
    {
      q: "Can you match my company colours?",
      a: "Yes. We work to match your branding as closely as possible using professional print and colour-management processes.",
    },
    {
      q: "Do you do full wraps and partial wraps?",
      a: "Yes. We offer everything from simple logos and lettering to partial wraps, full colour-change wraps, and fully printed commercial wraps.",
    },
    {
      q: "Do you wrap more than vehicles?",
      a: "Yes. We can wrap walls, windows, doors, trailers, equipment, fridges, counters, and many other smooth surfaces.",
    },
    {
      q: "Do you offer fleet graphics?",
      a: "Yes. We can produce and install consistent branding across cars, trucks, vans, trailers, buses, and commercial fleets.",
    },
    {
      q: "Can you install graphics at our location?",
      a: "Yes. On-site installation is available for certain projects. Indoor installation is recommended whenever possible for the best conditions and finish.",
    },
    {
      q: "Do you make signs too?",
      a: "Yes. We produce exterior and interior signs, ACM signs, coroplast signs, banners, window graphics, dimensional lettering, and more.",
    },
    {
      q: "Do you offer window graphics and perforated vinyl?",
      a: "Yes. We offer solid window graphics, cut vinyl lettering, frosted films, and perforated window film for storefronts and vehicles.",
    },
    {
      q: "How should I wash my wrapped vehicle?",
      a: "Hand washing is recommended. Avoid harsh chemicals, aggressive pressure washing, and automatic brush-style car washes.",
    },
    {
      q: "Do I need to leave a deposit?",
      a: "A deposit may be required before materials are ordered or production begins, depending on the size of the project.",
    },
    {
      q: "How do I get a quote?",
      a: "Send us your vehicle year, make and model, a few photos, your logo or artwork, and a description of what you would like done. We’ll take it from there.",
    },
  ];
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
          Quality graphics, reliable installation, and professional printing
          built to last
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
                    Saskatoon · Since 2020
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white">
                <InfoRow
                  label="Call"
                  value="+1 (306) 880-5097"
                  onCopy={() => copy("+1 (306) 880-5097")}
                >
                  <a
                    href="tel:+15551234567"
                    className="rainbow-link text-white/90"
                  >
                    +1 (306) 880-5097
                  </a>
                </InfoRow>

                <InfoRow
                  label="Visit"
                  value="2306 Ave C North Saskatoon, SK S7L 5Z9 Back ally bay number 3"
                  onCopy={() =>
                    copy(
                      "2306 Ave C North Saskatoon, SK S7L 5Z9 Back ally bay number 3",
                    )
                  }
                >
                  2306 Ave C North Saskatoon, SK S7L 5Z9 Back ally bay number 3
                </InfoRow>

                <div className="pt-2 grid grid-cols-3 gap-2">
                  <Badge>Wraps</Badge>
                  <Badge>Vinyl</Badge>
                  <Badge>Windows</Badge>
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/maplimitless.png"
                    alt="Shop / Map preview"
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black"
                  >
                    View work
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/h71RkijxSNRF9mK4A"
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
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <Field variants={item} label="Email">
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <Field variants={item} label="Mobile">
                  <input
                    name="mobile"
                    required
                    placeholder="+1 555 123 4567"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>

                <Field variants={item} label="Service">
                  <select
                    name="service"
                    required
                    defaultValue=""
                    disabled={sending || servicesLoading}
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  >
                    <option value="" disabled>
                      {servicesLoading
                        ? "Loading services..."
                        : "Select a service"}
                    </option>

                    {services.map((service) => (
                      <option key={service.ServiceInfoId} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field variants={item} label="Message">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full rounded-xl border border-white/15 bg-white/95 px-3 py-2 text-black"
                  />
                </Field>
                {/* CAPTCHA START */}
                <motion.div variants={item} className="mt-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      {/* <div>
                        <div className="text-sm font-bold text-white">
                          🛡️ Secure submission
                        </div>

                        <div className="mt-1 text-xs text-white/50">
                          Protected against automated spam
                        </div>
                      </div> */}

                      {captchaStatus === "verified" && (
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                          ✓ Verified
                        </span>
                      )}
                    </div>

                    <div className="flex justify-center overflow-hidden rounded-xl bg-black/20 p-2">
                      <Turnstile
                        siteKey={
                          process.env.NEXT_PUBLIC_CAPTCHA_TURNSTILE_SITE_KEY
                        }
                        onSuccess={(token) => {
                          setTurnstileToken(token);
                          setCaptchaStatus("verified");
                        }}
                        onExpire={() => {
                          setTurnstileToken("");
                          setCaptchaStatus("expired");
                        }}
                        onError={() => {
                          setTurnstileToken("");
                          setCaptchaStatus("error");
                        }}
                        options={{
                          theme: "dark",
                          size: "flexible",
                        }}
                      />
                    </div>

                    {captchaStatus === "verified" && (
                      <p className="mt-2 text-xs text-emerald-300">
                        ✓ Security verification complete
                      </p>
                    )}

                    {captchaStatus === "expired" && (
                      <p className="mt-2 text-xs text-amber-300">
                        Verification expired. Please verify again.
                      </p>
                    )}

                    {captchaStatus === "error" && (
                      <p className="mt-2 text-xs text-red-300">
                        Security verification failed. Please try again.
                      </p>
                    )}
                  </div>
                </motion.div>
                {/* CAPTCHA END */}
                <motion.div variants={item} className="mt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={sending || !turnstileToken}
                    className="relative inline-flex items-center gap-2 rounded-full
                               bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400
                               px-6 py-2 font-semibold text-black
                               disabled:opacity-70"
                  >
                    {sending && (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    )}
                    <span className="relative z-10">
                      {sending
                        ? "Sending…"
                        : !turnstileToken
                          ? "Verify to send"
                          : "Send message"}
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/30 opacity-0 blur transition-opacity duration-300 hover:opacity-20" />
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Success toasts */}
        <AnimatePresence>
          {sent && (
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

          {copied && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="fixed bottom-16 left-1/2 z-[60] -translate-x-1/2"
            >
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white backdrop-blur">
                Copied!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FAQ */}
      {/* FAQ */}
      <div className="relative mx-auto max-w-5xl px-4 pb-16">
        <div className="mb-8 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            FAQ
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
            Everything you need to know about wraps, graphics, signage,
            installation, and getting started.
          </p>
        </div>

        <div className="grid items-start gap-3 md:grid-cols-2">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              index={index}
            />
          ))}
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
          type="button"
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

function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        overflow-hidden rounded-2xl border transition-all duration-300
        ${
          open
            ? "border-cyan-400/30 bg-white/[0.08]"
            : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]"
        }
      `}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
        aria-expanded={open}
      >
        <span className="bg-gradient-to-r from-fuchsia-400 via-amber-300 to-cyan-300 bg-clip-text text-xs font-black text-transparent">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 text-sm font-bold leading-5 text-white sm:text-base">
          {question}
        </span>

        <span
          className={`
            grid h-8 w-8 shrink-0 place-items-center rounded-full
            border border-white/10 bg-white/5 text-lg text-white
            transition-transform duration-300
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 pl-14 text-sm leading-6 text-white/70 sm:px-5 sm:pl-16">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
