"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const QuoteModalContext = createContext(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx)
    throw new Error("useQuoteModal must be used inside QuoteModalProvider");
  return ctx;
}

export default function QuoteModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal isOpen={open} onClose={closeModal} />
    </QuoteModalContext.Provider>
  );
}

function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ sending: false, ok: false, err: "" });

  const setField = (k) => (e) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: false, err: "" });

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send. Try again.");

      setStatus({ sending: false, ok: true, err: "" });
      setForm({ name: "", contact: "", email: "", message: "" });

      // auto-close after a short success moment
      setTimeout(() => onClose(), 800);
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        err: err.message || "Error sending form.",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] grid place-items-center bg-black/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-[min(92vw,720px)] overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/90"
            initial={{ y: 18, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* neon frame */}
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 blur-2xl" />
            <div className="relative p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Get a Quote
                  </h3>
                  <p className="mt-1 text-white/70 text-sm">
                    Tell us what you need — we’ll reply ASAP.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/80 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={submit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={setField("name")}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="Contact"
                    value={form.contact}
                    onChange={setField("contact")}
                    placeholder="Phone number"
                    required
                  />
                </div>

                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={setField("email")}
                  placeholder="you@email.com"
                  required
                />

                <Field
                  label="Message"
                  value={form.message}
                  onChange={setField("message")}
                  placeholder="What service do you need? Vehicle, size, timeline, etc."
                  textarea
                  required
                />

                {status.err ? (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {status.err}
                  </div>
                ) : null}

                {status.ok ? (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                    Sent! We’ll get back to you shortly.
                  </div>
                ) : null}

                <div className="mt-1 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={status.sending}
                    className="rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-5 py-2 text-sm font-extrabold text-black disabled:opacity-60"
                  >
                    {status.sending ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  textarea,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-white/70">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder:text-white/30 outline-none focus:border-white/25"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder:text-white/30 outline-none focus:border-white/25"
        />
      )}
    </label>
  );
}
