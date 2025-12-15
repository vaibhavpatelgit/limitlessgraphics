// src/app/services/[slug]/page.js

// DEV-ONLY: trust self-signed certs locally. Remove for production.
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

import { DOTNET_API_BASE } from "@/lib/config";
import ServiceDetailClient from "./service-detail.client";

// ======= Server Email Action (secure) =======
import nodemailer from "nodemailer";

export async function sendQuote(formData) {
  "use server";

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const mobile = formData.get("mobile")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";
  const serviceInfoId = formData.get("serviceInfoId")?.toString() || "";
  const serviceTitle = formData.get("serviceTitle")?.toString() || "";

  if (!name || !email) {
    return { ok: false, error: "Name and Email are required." };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
      <h2>New Quote Request</h2>
      <p><strong>Service Info:</strong> ${serviceTitle} (ID: ${
    serviceInfoId || "-"
  })</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong><br/>${(message || "").replace(
        /\n/g,
        "<br/>"
      )}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Limitless Graphics" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Quote • ${serviceTitle || "Service"} • ${name}`,
      replyTo: email || undefined,
      html,
    });
    return { ok: true };
  } catch (e) {
    console.error("[sendQuote] email error:", e);
    return { ok: false, error: "Failed to send email. Please try again." };
  }
}

// ======= Page config =======
export const dynamic = "force-dynamic";
export const revalidate = 300;

const SERVICE_INFO_ENDPOINT = (serviceId) =>
  `${(DOTNET_API_BASE || "").replace(
    /\/+$/,
    ""
  )}/api/Service/GetServiceInfoListServiceWise/${serviceId}`;

const PORTFOLIO_ENDPOINT = (serviceInfoId) =>
  `${(DOTNET_API_BASE || "").replace(
    /\/+$/,
    ""
  )}/api/Portfolio/GetSpecificPortfolio/${serviceInfoId}`;

const STATIC_PORTFOLIO_PATH = "Files/Portfolio";

// Helpers
function extractIdFromSlug(slug) {
  if (!slug) return null;
  const m = String(slug).match(/-(\d+)$/);
  return m ? m[1] : null;
}
async function fetchWithTimeout(url, ms = 7000) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(ms),
    cache: "no-store",
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });
  return res;
}
function normalizeServiceInfo(list = []) {
  // API: { ServicesID, ServiceInfoId, title, Description }
  return list.map((x) => ({
    servicesId: x.ServicesID,
    serviceInfoId: x.ServiceInfoId,
    title: x.title || "Untitled",
    descriptionHtml: x.Description || "",
  }));
}
function resolvePortfolioImage(filename) {
  if (!filename) return null;
  if (/^https?:\/\//i.test(filename)) return filename;
  const base = (DOTNET_API_BASE || "").replace(/\/+$/, "");
  const name = String(filename).split(/[\\/]/).pop();
  return `${base}/${STATIC_PORTFOLIO_PATH}/${encodeURIComponent(name)}`;
}
function normalizePortfolio(data) {
  const arr = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.GetSpecificPortfolio)
    ? data.GetSpecificPortfolio
    : Array.isArray(data?.items)
    ? data.items
    : [];

  return arr
    .map((it) => {
      const raw =
        it.image || it.Image || it.filename || it.file || it.url || it.src;
      const src = resolvePortfolioImage(raw);
      return src ? { src, alt: it.title || it.caption || "Portfolio" } : null;
    })
    .filter(Boolean);
}

export async function generateMetadata(ctx = {}) {
  const slug = ctx?.params?.slug ?? "";
  const id = extractIdFromSlug(slug);
  const baseTitle = "Service — Limitless Graphics";
  if (!id) return { title: baseTitle };

  try {
    const res = await fetchWithTimeout(SERVICE_INFO_ENDPOINT(id));
    if (!res?.ok) return { title: baseTitle };
    const json = await res.json();
    const items = normalizeServiceInfo(json?.GetAllService || []);
    const pageTitle = items[0]?.title
      ? `${items[0].title} — Limitless Graphics`
      : baseTitle;
    return {
      title: pageTitle,
      description: items[0]?.descriptionHtml
        ? items[0].descriptionHtml.replace(/<[^>]+>/g, "").slice(0, 160)
        : "Explore details and portfolio.",
    };
  } catch {
    return { title: baseTitle };
  }
}

export default async function ServiceDetailPage({ params }) {
  const id = extractIdFromSlug(params.slug);

  if (!id || !DOTNET_API_BASE || !/^https?:\/\//i.test(DOTNET_API_BASE)) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">Service</h1>
        <p className="mt-3 text-white/70">Service not found.</p>
      </main>
    );
  }

  // 1) Left list + descriptions
  let sections = [];
  try {
    const res = await fetchWithTimeout(SERVICE_INFO_ENDPOINT(id));
    if (res.ok) {
      const json = await res.json();
      sections = normalizeServiceInfo(json?.GetAllService || []);
    }
  } catch {}

  // 2) First section = initial gallery (SEO)
  const initial = sections[0] || null;
  let initialPortfolio = [];
  if (initial?.serviceInfoId) {
    try {
      const res = await fetchWithTimeout(
        PORTFOLIO_ENDPOINT(initial.serviceInfoId)
      );
      if (res.ok) {
        const json = await res.json();
        initialPortfolio = normalizePortfolio(json);
      }
    } catch {}
  }

  return (
    <ServiceDetailClient
      serviceId={id}
      sections={sections}
      initialServiceInfoId={initial?.serviceInfoId || null}
      initialPortfolio={initialPortfolio}
      dotnetBasePublic={
        process.env.NEXT_PUBLIC_DOTNET_API_BASE || DOTNET_API_BASE || ""
      }
      sendQuoteAction={sendQuote} // ← Pass server action
    />
  );
}
