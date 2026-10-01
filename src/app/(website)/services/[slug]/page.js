// src/app/services/[slug]/page.js

if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

import ServiceDetailClient from "./service-detail.client";
import nodemailer from "nodemailer";
import { API, PORTFOLIO_IMAGE_BASE } from "@/lib/config";
import { notFound } from "next/navigation";

// export const dynamic = "force-dynamic";
export const revalidate = 300;

async function fetchWithTimeout(url, ms = 10000) {
  return fetch(url, {
    signal: AbortSignal.timeout(ms),
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 3600,
    },
  });
}

function stripHtml(html = "") {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeServiceInfo(list = []) {
  return (list || []).map((x) => ({
    servicesId: x.ServicesID,
    serviceInfoId: x.ServiceInfoId,
    title: x.title || "Untitled",
    descriptionHtml: x.Description || "",
    slug: x.Slug || "",
  }));
}
async function getInitialPortfolio(serviceInfoId, title = "Portfolio") {
  if (!serviceInfoId) return [];

  try {
    const url = API.PORTFOLIO_BY_SERVICEINFO(Number(serviceInfoId));

    const res = await fetch(url, {
      signal: AbortSignal.timeout(8000),
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!res.ok) return [];

    const data = await res.json();

    const rawPortfolio =
      data?.GetSpecificPortfolio ??
      data?.getSpecificPortfolio ??
      data?.Data ??
      data?.data ??
      data;

    const arr = Array.isArray(rawPortfolio)
      ? rawPortfolio
      : rawPortfolio && typeof rawPortfolio === "object"
        ? [rawPortfolio]
        : [];

    return arr
      .map((item) => {
        const rawImage =
          item?.image ?? item?.Image ?? item?.imageUrl ?? item?.ImageUrl ?? "";

        if (!rawImage) return null;

        const imageValue = String(rawImage).trim();

        let imageUrl;

        if (/^https?:\/\//i.test(imageValue)) {
          imageUrl = imageValue;
        } else {
          const fileName = imageValue.replace(/\\/g, "/").split("/").pop();

          if (!fileName) return null;

          imageUrl = `${PORTFOLIO_IMAGE_BASE}${encodeURIComponent(fileName)}`;
        }

        return {
          src: imageUrl,
          alt: item?.title ?? item?.Title ?? title,
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.error("[InitialPortfolio] error:", error);
    return [];
  }
}
// ✅ server action: email quote
export async function sendQuote(formData) {
  "use server";

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const mobile = formData.get("mobile")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";
  const serviceInfoId = formData.get("serviceInfoId")?.toString() || "";
  const serviceTitle = formData.get("serviceTitle")?.toString() || "";

  if (!name || !email)
    return { ok: false, error: "Name and Email are required." };

  try {
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
        <p><strong>Service Option:</strong> ${
          serviceTitle || "-"
        } (ServiceInfoId: ${serviceInfoId || "-"})</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong><br/>${(message || "").replace(
          /\n/g,
          "<br/>",
        )}</p>
      </div>
    `;

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

// ✅ Metadata (resolve params the same way)
export async function generateMetadata({ params }) {
  const p = await Promise.resolve(params);
  const slug = p?.slug;

  const baseTitle = "Service — Limitless Graphics";
  if (!slug) return { title: baseTitle };

  try {
    if (typeof API?.SINFO_LIST_SLUG_WISE !== "function")
      return { title: baseTitle };

    const url = API.SINFO_LIST_SLUG_WISE(slug);
    if (!url) return { title: baseTitle };

    const res = await fetchWithTimeout(url);
    if (!res.ok) return { title: baseTitle };

    const json = await res.json();
    const arr = Array.isArray(json?.GetAllServiceinfo?.Data)
      ? json.GetAllServiceinfo.Data
      : [];
    const first = arr[0];

    const title = first?.title || "Service";
    const desc = first?.Description
      ? stripHtml(first.Description).slice(0, 160)
      : "";

    return {
      title: `${title} — Limitless Graphics`,
      description: desc || "Explore service details.",
    };
  } catch {
    return { title: baseTitle };
  }
}

export default async function ServiceDetailPage({ params }) {
  const p = await Promise.resolve(params);
  const slug = p?.slug;

  console.log("[ServiceDetailPage] params:", p);
  console.log("[ServiceDetailPage] slug:", slug);

  if (!slug) notFound();

  // ✅ HARD GUARDS (most common cause)
  if (typeof API?.SINFO_LIST_SLUG_WISE !== "function") {
    console.error(
      "[ServiceDetailPage] API.SINFO_LIST_SLUG_WISE is not defined in config.js",
    );
    notFound();
  }

  const url = API.SINFO_LIST_SLUG_WISE(slug);
  console.log("[ServiceDetailPage] slug-wise URL:", url);

  if (!url) {
    console.error(
      "[ServiceDetailPage] slug-wise URL is empty (check DOTNET_API_BASE / config.js)",
    );
    notFound();
  }

  try {
    const res = await fetchWithTimeout(url);

    console.log("[ServiceDetailPage] API status:", res.status, res.statusText);

    // ✅ read body ONCE (avoid “Body is unusable”)
    const raw = await res.text();
    console.log(
      "[ServiceDetailPage] API raw (first 400 chars):",
      raw.slice(0, 400),
    );

    if (!res.ok) {
      console.error("[ServiceDetailPage] slug-wise API failed:", res.status);
      notFound();
    }

    let json = null;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      console.error("[ServiceDetailPage] JSON parse failed:", e);
      notFound();
    }

    const rows = Array.isArray(json?.GetAllServiceinfo?.Data)
      ? json.GetAllServiceinfo.Data
      : [];

    console.log("[ServiceDetailPage] rows length:", rows.length);

    if (!rows.length) {
      console.error("[ServiceDetailPage] No ServiceInfo rows for slug:", slug);
      notFound();
    }

    const sections = normalizeServiceInfo(rows);
    const initial = sections[0] || null;

    const initialPortfolio = initial?.serviceInfoId
      ? await getInitialPortfolio(initial.serviceInfoId, initial.title)
      : [];

    return (
      <ServiceDetailClient
        serviceId={rows?.[0]?.ServicesID || null}
        sections={sections}
        initialServiceInfoId={initial?.serviceInfoId || null}
        initialPortfolio={initialPortfolio}
        sendQuoteAction={sendQuote}
      />
    );
  } catch (e) {
    console.error("[ServiceDetailPage] error:", e);
    notFound();
  }
}
