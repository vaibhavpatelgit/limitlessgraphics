module.exports = {

"[project]/.next-internal/server/app/services/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/components/shared/ShowcaseGrid.jsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/shared/ShowcaseGrid.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/shared/ShowcaseGrid.jsx <module evaluation>", "default");
}),
"[project]/src/components/shared/ShowcaseGrid.jsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/shared/ShowcaseGrid.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/shared/ShowcaseGrid.jsx", "default");
}),
"[project]/src/components/shared/ShowcaseGrid.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ShowcaseGrid$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/shared/ShowcaseGrid.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ShowcaseGrid$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/shared/ShowcaseGrid.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ShowcaseGrid$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/src/app/services/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/services/page.js
// DEV-ONLY: trust self-signed certs so local HTTPS doesn't crash. Remove for prod.
__turbopack_context__.s({
    "default": ()=>ServicesPage,
    "dynamic": ()=>dynamic,
    "metadata": ()=>metadata,
    "revalidate": ()=>revalidate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ShowcaseGrid$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ShowcaseGrid.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.js [app-rsc] (ecmascript)");
;
if ("TURBOPACK compile-time truthy", 1) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}
;
;
const dynamic = "force-dynamic";
const revalidate = 300;
const metadata = {
    title: "Services — Limitless Graphics",
    description: "Vehicle wraps, printed vinyl & signage, windows & glass, wall murals, and paint protection. Browse services and start a quote."
};
const STATIC_IMAGE_PATH = "Files/Services"; // <- your fixed folder path
// ----- helpers -----
const LIST = `${(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || "").replace(/\/+$/, "")}/api/Service/GetAllService`;
const slugify = (s = "")=>s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
const FALLBACK_IMG = "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600";
// If API returns just a filename, make it absolute with DOTNET_API_BASE
function resolveImage(src) {
    if (!src) return FALLBACK_IMG;
    if (/^https?:\/\//i.test(src)) return src; // already absolute
    const base = (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || "").replace(/\/+$/, ""); // trim trailing /
    // Clean up folder + filename
    const folder = STATIC_IMAGE_PATH.replace(/^[/\\]+|[/\\]+$/g, "").replace(/\\/g, "/");
    const filename = String(src).split(/[\\/]/).pop(); // keep only the file name
    const encoded = encodeURIComponent(filename); // handle spaces & special chars
    // Final URL: https://domain/Files/Services/filename.png
    return `${base}/${folder}/${encoded}`;
}
// Map exactly your API shape → ShowcaseGrid items
function normalize(list = []) {
    return list.sort((a, b)=>(Number(a.ordernumber) || 0) - (Number(b.ordernumber) || 0)).map((s)=>{
        const title = s.titile || s.title || "Untitled Service";
        const id = s.ServicesID ?? s.id ?? slugify(title);
        return {
            id: String(id),
            title,
            category: "Services",
            tags: [],
            blurb: s.description || "",
            img: resolveImage(s.coverimage),
            href: `/services/${slugify(title)}-${id}`
        };
    });
}
// ---- server-side fetch with hard timeout (prevents menu click hang) ----
async function getServices() {
    // guard against missing base URL
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"] || !/^https?:\/\//i.test(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOTNET_API_BASE"])) return [];
    try {
        // Node 18+ supports AbortSignal.timeout (via undici)
        const res = await fetch(LIST, {
            signal: AbortSignal.timeout(7000),
            cache: "no-store",
            headers: {
                Accept: "application/json"
            },
            next: {
                revalidate: 300
            }
        });
        if (!res.ok) return [];
        const data = await res.json();
        // your sample JSON has { GetAllService: [...] }
        const list = Array.isArray(data?.GetAllService) ? data.GetAllService : [];
        return normalize(list);
    } catch  {
        // Abort/network/SSL → return empty and render immediately
        return [];
    }
}
async function ServicesPage() {
    const items = await getServices();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative bg-neutral-950",
        children: [
            items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ShowcaseGrid$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: "Our Services",
                subtitle: "Same crisp grid as Portfolio — filter and learn more.",
                items: items,
                mode: "services",
                maxWidth: 2000,
                stagger: true
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 104,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl px-6 py-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl font-bold text-white",
                        children: "Our Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.js",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white/70",
                        children: "No services found."
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.js",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none select-none text-center py-14 font-extrabold uppercase tracking-[0.2em] text-white/10 text-5xl sm:text-7xl",
                children: "Services"
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.js",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/services/page.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__110ae66f._.js.map