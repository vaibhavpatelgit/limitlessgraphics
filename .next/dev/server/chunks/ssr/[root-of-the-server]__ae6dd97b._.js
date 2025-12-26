module.exports = [
"[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/lib/config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/config.js
// ✅ Always store BASE without trailing slash
__turbopack_context__.s([
    "API",
    ()=>API,
    "DOTNET_API_BASE",
    ()=>DOTNET_API_BASE,
    "IMAGE_BASE",
    ()=>IMAGE_BASE,
    "PORTFOLIO_IMAGE_BASE",
    ()=>PORTFOLIO_IMAGE_BASE
]);
const DOTNET_API_BASE = (("TURBOPACK compile-time value", "https://localhost:44329") || "https://limitlessgraphicsapi.marubardoli.com").replace(/\/+$/, "");
const IMAGE_BASE = `${DOTNET_API_BASE}/Files/Services/`;
const PORTFOLIO_IMAGE_BASE = `${DOTNET_API_BASE}/Files/portfolio/`; // lowercase
const API = {
    // Services
    LIST: `${DOTNET_API_BASE}/api/Service/GetAllService`,
    SERVICE_BY_SLUG: (slug)=>`${DOTNET_API_BASE}/api/Service/GetServiceBySlug/${encodeURIComponent(slug)}`,
    // Service Info
    SINFO_LIST_SERVICE_WISE: (serviceId)=>`${DOTNET_API_BASE}/api/Service/GetServiceInfoListServiceWise/${serviceId}`,
    // Portfolio
    PORTFOLIO_BY_SERVICEINFO: (serviceInfoId)=>`${DOTNET_API_BASE}/api/Portfolio/GetSpecificPortfolio/${serviceInfoId}`,
    SERVICES_WITH_INFO: `${DOTNET_API_BASE}/api/Service/GetAllServicesListwithInfo`
};
}),
"[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>ServiceDetailPage,
    "dynamic",
    ()=>dynamic,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate,
    "sendQuote",
    ()=>sendQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
// src/app/services/[slug]/page.js
/* __next_internal_action_entry_do_not_use__ [{"407fb1cf55f866cac1576e5b93edc43dda2726dcc1":"$$RSC_SERVER_ACTION_0"},"",""] */ if ("TURBOPACK compile-time truthy", 1) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}
;
;
;
;
const dynamic = "force-dynamic";
const revalidate = 300;
async function fetchWithTimeout(url, ms = 7000) {
    return fetch(url, {
        signal: AbortSignal.timeout(ms),
        cache: "no-store",
        headers: {
            Accept: "application/json"
        },
        next: {
            revalidate: 300
        }
    });
}
function stripHtml(html = "") {
    return String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function normalizeServiceInfo(list = []) {
    return (list || []).map((x)=>({
            servicesId: x.ServicesID,
            serviceInfoId: x.ServiceInfoId,
            title: x.title || "Untitled",
            descriptionHtml: x.Description || ""
        }));
}
const $$RSC_SERVER_ACTION_0 = async function sendQuote(formData) {
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const mobile = formData.get("mobile")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const serviceInfoId = formData.get("serviceInfoId")?.toString() || "";
    const serviceTitle = formData.get("serviceTitle")?.toString() || "";
    if (!name || !email) return {
        ok: false,
        error: "Name and Email are required."
    };
    try {
        const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });
        const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
        <h2>New Quote Request</h2>
        <p><strong>Service Option:</strong> ${serviceTitle || "-"} (ServiceInfoId: ${serviceInfoId || "-"})</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `;
        await transporter.sendMail({
            from: `"Limitless Graphics" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `Quote • ${serviceTitle || "Service"} • ${name}`,
            replyTo: email || undefined,
            html
        });
        return {
            ok: true
        };
    } catch (e) {
        console.error("[sendQuote] email error:", e);
        return {
            ok: false,
            error: "Failed to send email. Please try again."
        };
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "407fb1cf55f866cac1576e5b93edc43dda2726dcc1", null);
var sendQuote = $$RSC_SERVER_ACTION_0;
async function generateMetadata({ params }) {
    const { slug } = await params; // ✅ Next 15+
    const baseTitle = "Service — Limitless Graphics";
    if (!slug) return {
        title: baseTitle
    };
    try {
        const res = await fetchWithTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API"].SERVICES_WITH_INFO);
        if (!res.ok) return {
            title: baseTitle
        };
        const data = await res.json();
        const list = Array.isArray(data?.GetAllServicesListwithInfo) ? data.GetAllServicesListwithInfo : [];
        const service = list.find((x)=>String(x?.slug || "").toLowerCase() === String(slug).toLowerCase());
        if (!service) return {
            title: baseTitle
        };
        const title = service?.titile || service?.title || "Service";
        const desc = service?.description || "";
        return {
            title: `${title} — Limitless Graphics`,
            description: desc ? stripHtml(desc).slice(0, 160) : "Explore service details."
        };
    } catch  {
        return {
            title: baseTitle
        };
    }
}
async function ServiceDetailPage({ params }) {
    const { slug } = await params; // ✅ Next 15+
    if (!slug) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    let service = null;
    try {
        const res = await fetchWithTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API"].SERVICES_WITH_INFO);
        if (!res.ok) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        const data = await res.json();
        const list = Array.isArray(data?.GetAllServicesListwithInfo) ? data.GetAllServicesListwithInfo : [];
        service = list.find((x)=>String(x?.slug || "").toLowerCase() === String(slug).toLowerCase());
        if (!service) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    } catch (e) {
        console.error("[ServiceDetailPage] error:", e);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const sections = normalizeServiceInfo(service?.ServiceInfo || []);
    const initial = sections[0] || null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        serviceId: service?.ServicesID,
        sections: sections,
        initialServiceInfoId: initial?.serviceInfoId || null,
        initialPortfolio: [],
        sendQuoteAction: sendQuote
    }, void 0, false, {
        fileName: "[project]/src/app/services/[slug]/page.js",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
}),
"[project]/.next-internal/server/app/services/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/services/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "407fb1cf55f866cac1576e5b93edc43dda2726dcc1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$services$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/services/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae6dd97b._.js.map