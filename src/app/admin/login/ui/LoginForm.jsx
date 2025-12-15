"use client";

import { useState, useTransition } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // call server action
    const res = await fetch("/admin/login/actions", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      window.location.href = "/admin/dashboard";
    } else {
      const msg = await res.text();
      setError(msg || "Invalid credentials");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm text-neutral-300">Username</label>
        <input
          name="username"
          className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="limitless"
          autoComplete="username"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-neutral-300">Password</label>
        <input
          type="password"
          name="password"
          className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="limit"
          autoComplete="current-password"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-800 bg-red-900/30 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      <button
        disabled={pending}
        className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-3 py-2 font-medium"
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>

      <p className="text-[12px] text-neutral-500 text-center">
        username: <b>limitless</b>, password: <b>limit</b>
      </p>
    </form>
  );
}
