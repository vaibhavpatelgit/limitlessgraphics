module.exports = {

"[project]/.next-internal/server/app/services/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/services/[slug]/service-detail.client.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/services/[slug]/service-detail.client.jsx <module evaluation>", "default");
}),
"[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/services/[slug]/service-detail.client.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/services/[slug]/service-detail.client.jsx", "default");
}),
"[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/config.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API": ()=>API,
    "DOTNET_API_BASE": ()=>DOTNET_API_BASE,
    "IMAGE_BASE": ()=>IMAGE_BASE,
    "PORTFOLIO_IMAGE_BASE": ()=>PORTFOLIO_IMAGE_BASE
});
const DOTNET_API_BASE = "https://localhost:44329"; // change if needed
const API = {
    LIST: `${DOTNET_API_BASE}/api/Service/GetAllService`,
    UPSERT: `${DOTNET_API_BASE}/api/Service/insertService`,
    DELETE: (id)=>`${DOTNET_API_BASE}/api/Service/DeleteService/${id}`,
    UPLOAD: `${DOTNET_API_BASE}/api/Service/uploaddocuments`,
    // --- NEW: Services Info endpoints (adjust these to match your .NET routes) ---
    // List all service infos
    SINFO_LIST: `${DOTNET_API_BASE}/api/Service/GetAllServiceInfo`,
    // Insert + Update (same endpoint pattern as before)
    SINFO_UPSERT: `${DOTNET_API_BASE}/api/Service/insertServiceInfo`,
    // Delete by id (GET route param, same legacy pattern)
    SINFO_DELETE: (id)=>`${DOTNET_API_BASE}/api/Service/DeleteServiceInfo/${id}`,
    PORTFOLIO_LIST: (serviceInfoId)=>`${DOTNET_API_BASE}/api/Portfolio/get/${serviceInfoId}`,
    PORTFOLIO_UPSERT: `${DOTNET_API_BASE}/api/Portfolio/insert`,
    PORTFOLIO_UPLOAD: `${DOTNET_API_BASE}/api/Portfolio/uploaddocuments`,
    PORTFOLIO_DELETE: `${DOTNET_API_BASE}/api/Portfolio/delete`
};
const IMAGE_BASE = `${DOTNET_API_BASE}/Files/Services/`;
const PORTFOLIO_IMAGE_BASE = `${DOTNET_API_BASE}/Files/portfolio/`; // NEW
}),
"[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/services/[slug]/page.js
// DEV-ONLY: trust self-signed certs locally. Remove for production.
__turbopack_context__.s({
    "default": ()=>ServiceDetailPage,
    "dynamic": ()=>dynamic,
    "generateMetadata": ()=>generateMetadata,
    "revalidate": ()=>revalidate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/service-detail.client.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.js [app-rsc] (ecmascript)");
;
if ("TURBOPACK compile-time truthy", 1) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}
;
;
const dynamic = "force-dynamic";
const revalidate = 300;
const SERVICE_INFO_ENDPOINT = (serviceId)=>`${(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || "").replace(/\/+$/, "")}/api/Service/GetServiceInfoListServiceWise/${serviceId}`;
// ENDPOINTS
const PORTFOLIO_ENDPOINT = (serviceInfoId)=>`${(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || "").replace(/\/+$/, "")}/api/Portfolio/GetSpecificPortfolio/${serviceInfoId}`;
// If portfolio filenames are relative, build: {DOMAIN}/Files/Portfolio/{FILENAME}
const STATIC_PORTFOLIO_PATH = "Files/Portfolio";
// Helpers
const slugify = (s = "")=>s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
function extractIdFromSlug(slug) {
    if (!slug) return null;
    const m = String(slug).match(/-(\d+)$/);
    return m ? m[1] : null;
}
async function fetchWithTimeout(url, ms = 7000) {
    const res = await fetch(url, {
        signal: AbortSignal.timeout(ms),
        cache: "no-store",
        headers: {
            Accept: "application/json"
        },
        next: {
            revalidate: 300
        }
    });
    return res;
}
function normalizeServiceInfo(list = []) {
    // API shape: { GetAllService: [{ ServicesID, ServiceInfoId, title, Description }] }
    return list.map((x)=>({
            servicesId: x.ServicesID,
            serviceInfoId: x.ServiceInfoId,
            title: x.title || "Untitled",
            // keep raw HTML; we'll render safely in client
            descriptionHtml: x.Description || ""
        }));
}
// If portfolio returns filenames, make absolute like: {DOMAIN}/Files/Portfolio/{filename}
function resolvePortfolioImage(filename) {
    if (!filename) return null;
    if (/^https?:\/\//i.test(filename)) return filename;
    const base = (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || "").replace(/\/+$/, "");
    const name = String(filename).split(/[\\/]/).pop();
    return `${base}/${STATIC_PORTFOLIO_PATH}/${encodeURIComponent(name)}`;
}
// adapt this if your portfolio API returns a different shape
function normalizePortfolio(data) {
    // handle common shapes; tweak if your API differs
    const arr = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : Array.isArray(data?.GetSpecificPortfolio) ? data.GetSpecificPortfolio : Array.isArray(data?.items) ? data.items : [];
    return arr.map((it)=>{
        const raw = it.image || it.Image || it.filename || it.file || it.url || it.src;
        const src = resolvePortfolioImage(raw);
        return src ? {
            src,
            alt: it.title || it.caption || "Portfolio"
        } : null;
    }).filter(Boolean);
}
async function generateMetadata(ctx = {}) {
    const slug = ctx?.params?.slug ?? "";
    const id = extractIdFromSlug(slug);
    const baseTitle = "Service — Limitless Graphics";
    if (!id) return {
        title: baseTitle
    };
    try {
        const res = await fetchWithTimeout(SERVICE_INFO_ENDPOINT(id));
        if (!res?.ok) return {
            title: baseTitle
        };
        const json = await res.json();
        const items = normalizeServiceInfo(json?.GetAllService || []);
        const pageTitle = items[0]?.title ? `${items[0].title} — Limitless Graphics` : baseTitle;
        return {
            title: pageTitle,
            description: items[0]?.descriptionHtml ? items[0].descriptionHtml.replace(/<[^>]+>/g, "").slice(0, 160) : "Explore details and portfolio."
        };
    } catch  {
        return {
            title: baseTitle
        };
    }
}
async function ServiceDetailPage({ params }) {
    const id = extractIdFromSlug(params.slug);
    if (!id || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || !/^https?:\/\//i.test(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"])) {
        // guard: render empty (SEO-safe)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-5xl px-6 py-20 text-center text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold",
                    children: "Service"
                }, void 0, false, {
                    fileName: "[project]/src/app/services/[slug]/page.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-white/70",
                    children: "Service not found."
                }, void 0, false, {
                    fileName: "[project]/src/app/services/[slug]/page.js",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/[slug]/page.js",
            lineNumber: 126,
            columnNumber: 7
        }, this);
    }
    // 1) SSR: get the full list of sections (left titles + descriptions)
    let sections = [];
    try {
        const res = await fetchWithTimeout(SERVICE_INFO_ENDPOINT(id));
        if (res.ok) {
            const json = await res.json();
            sections = normalizeServiceInfo(json?.GetAllService || []);
        }
    } catch  {}
    // 2) pick initial section (first), and SSR its portfolio for SEO
    const initial = sections[0] || null;
    let initialPortfolio = [];
    if (initial?.serviceInfoId) {
        try {
            const res = await fetchWithTimeout(PORTFOLIO_ENDPOINT(initial.serviceInfoId));
            if (res.ok) {
                const json = await res.json();
                initialPortfolio = normalizePortfolio(json);
            }
        } catch  {}
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$service$2d$detail$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        serviceId: id,
        sections: sections,
        initialServiceInfoId: initial?.serviceInfoId || null,
        initialPortfolio: initialPortfolio,
        dotnetBasePublic: process.env.NEXT_PUBLIC_DOTNET_API_BASE || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || ""
    }, void 0, false, {
        fileName: "[project]/src/app/services/[slug]/page.js",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0d0b1626._.js.map