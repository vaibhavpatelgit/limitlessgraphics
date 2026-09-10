"use client";

import { useState } from "react";

export default function ContactExactAuto() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-neutral-950">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950 via-[#5a350f] to-cyan-950" />

        <div className="absolute -left-40 top-24 h-[650px] w-[650px] rounded-full bg-fuchsia-500/20 blur-[150px]" />

        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/15 blur-[160px]" />

        <div className="absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-cyan-400/20 blur-[150px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s start{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              your project
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Design, print, and installation for printed vinyl, wraps, and glass
            graphics.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {/* LEFT CARD */}
          <GradientCard>
            <CompanyCard />
          </GradientCard>

          {/* RIGHT CARD */}
          <GradientCard>
            <QuoteForm />
          </GradientCard>
        </div>

        {/* WATERMARK */}
        <div
          className="
            pointer-events-none
            mt-10
            select-none
            text-center
            text-4xl
            font-black
            uppercase
            tracking-[0.14em]
            text-white/[0.08]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-9xl
          "
        >
          CONTACT US
        </div>

        {/* BENEFITS */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >
          <Benefit
            icon="shield"
            title="Premium Materials"
            text="3M / Avery films"
          />

          <Benefit
            icon="rocket"
            title="In-House Design"
            text="From concept to install"
          />

          <Benefit
            icon="clock"
            title="On-Time Installs"
            text="Professional & reliable"
          />

          <Benefit
            icon="users"
            title="Local & Trusted"
            text="Saskatoon since 2014"
          />
        </div>
      </div>
    </section>
  );
}

/* ========================================================= */
/* GRADIENT CARD                                             */
/* ========================================================= */

function GradientCard({ children }) {
  return (
    <div
      className="
        group
        h-full
        rounded-[24px]
        bg-gradient-to-br
        from-fuchsia-500
        via-amber-400
        to-cyan-400
        p-[2px]
        shadow-[0_25px_70px_rgba(0,0,0,0.35)]
        transition
        duration-300
        hover:-translate-y-1
      "
    >
      <div
        className="
          flex
          h-full
          min-h-[470px]
          flex-col
          rounded-[22px]
          border
          border-white/10
          bg-black/80
          p-5
          backdrop-blur-xl
          sm:p-6
          lg:p-7
        "
      >
        {children}
      </div>
    </div>
  );
}

/* ========================================================= */
/* COMPANY CARD                                              */
/* ========================================================= */

function CompanyCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-fuchsia-500 via-amber-400 to-cyan-400 shadow-lg sm:h-12 sm:w-12" />

        <div className="min-w-0">
          <div className="text-xl font-black leading-tight text-white sm:text-2xl">
            Limitless Graphics
          </div>

          <div className="mt-1 text-xs text-white/60 sm:text-sm">
            Image is everything.
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
        Full-service graphics for vehicles, storefronts, walls, and glass.
        In-house design and precision installation.
      </p>

      <div className="mt-7 space-y-5">
        <ContactRow
          icon="phone"
          label="CALL"
          value="+1 (306) 880-5097"
          href="tel:+13068805097"
        />

        <ContactRow
          icon="mail"
          label="EMAIL"
          value="Limitlessgraphicsyxe@gmail.com"
          href="mailto:Limitlessgraphicsyxe@gmail.com"
        />

        <ContactRow
          icon="map"
          label="VISIT"
          value="2306 Ave C North, Saskatoon, SK S7L 5Z9 — Back alley, bay number 3"
        />
      </div>

      {/* BOTTOM MINI TAGS */}
      <div className="mt-auto pt-8">
        <div className="grid grid-cols-3 gap-2">
          <MiniTag>Wraps</MiniTag>
          <MiniTag>Vinyl</MiniTag>
          <MiniTag>Signs</MiniTag>
        </div>
      </div>
    </div>
  );
}

/* ========================================================= */
/* FORM                                                      */
/* ========================================================= */

function QuoteForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    const form = e.currentTarget;

    const get = (key) => {
      const el = form.elements.namedItem(key);

      if (!el || !("value" in el)) {
        return "";
      }

      return String(el.value).trim();
    };

    const name = get("name");
    const email = get("email");
    const message = get("message");
    const mobile = get("mobile");

    if (!name || !email || !message || !mobile) {
      setError("Please complete all fields.");
      return;
    }

    setSending(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contact: mobile,
          message: `Home Page Contact Form\n\n${message}`,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Unable to send message.");
      }

      form.reset();
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = `
    w-full
    rounded-xl
    border border-white/15
    bg-white/95
    px-3
    py-2.5
    text-sm
    text-black
    outline-none
    transition
    placeholder:text-neutral-500
    focus:border-cyan-400
    focus:ring-2
    focus:ring-cyan-400/20
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col">
      <div className="grid gap-4">
        <Field label="Name">
          <input
            name="name"
            required
            autoComplete="name"
            disabled={sending}
            placeholder="Your full name"
            className={inputClass}
          />
        </Field>

        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={sending}
            placeholder="you@example.com"
            className={inputClass}
          />
        </Field>

        <Field label="Message">
          <textarea
            name="message"
            required
            rows={4}
            disabled={sending}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none`}
          />
        </Field>

        <Field label="Mobile">
          <input
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            disabled={sending}
            placeholder="+1 306 555 1234"
            className={inputClass}
          />
        </Field>

        {error && (
          <div className="rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
            ✓ Message sent successfully.
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="
          mt-auto
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-fuchsia-500
          via-amber-400
          to-cyan-400
          px-6
          py-3
          text-sm
          font-black
          text-black
          shadow-lg
          transition
          hover:scale-[1.01]
          hover:brightness-110
          disabled:cursor-not-allowed
          disabled:scale-100
          disabled:opacity-70
        "
      >
        {sending && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
        )}

        <span>{sending ? "Sending..." : "Send message"}</span>

        {!sending && <span className="ml-auto text-base">→</span>}
      </button>
    </form>
  );
}

/* ========================================================= */
/* CONTACT ROW                                               */
/* ========================================================= */

function ContactRow({ icon, label, value, href }) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-fuchsia-300">
        <Icon name={icon} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-bold uppercase tracking-wide text-white/55">
          {label}
        </div>

        {href ? (
          <a
            href={href}
            className="
              block
              break-words
              text-sm
              leading-6
              text-white
              transition
              hover:text-cyan-300
              sm:text-base
            "
          >
            {value}
          </a>
        ) : (
          <div className="break-words text-sm leading-6 text-white sm:text-base">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}

/* ========================================================= */
/* BENEFITS                                                  */
/* ========================================================= */

function Benefit({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white">
        <Icon name={icon} size={21} />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-bold text-white">{title}</div>

        <div className="mt-0.5 text-xs text-white/55">{text}</div>
      </div>
    </div>
  );
}

/* ========================================================= */
/* MINI TAG                                                  */
/* ========================================================= */

function MiniTag({ children }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-white/70">
      {children}
    </div>
  );
}

/* ========================================================= */
/* FIELD                                                     */
/* ========================================================= */

function Field({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-sm font-semibold text-white">
        {label}
      </span>

      {children}
    </label>
  );
}

/* ========================================================= */
/* ICONS                                                     */
/* ========================================================= */

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "rocket") {
    return (
      <svg {...common}>
        <path d="M4.5 16.5c-1.5 1.5-2 4-2 4s2.5-.5 4-2" />
        <path d="M9 15 4 20" />
        <path d="M15 9 20 4" />
        <path d="M14 4c3-1 6 0 6 0s1 3 0 6l-7 7-6-6z" />
        <circle cx="15.5" cy="8.5" r="1.5" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return null;
}
