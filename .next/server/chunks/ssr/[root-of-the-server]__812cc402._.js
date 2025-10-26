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
"[project]/src/app/services/services.client.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/services/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/app/services/page.js
__turbopack_context__.s({
    "default": ()=>ServicesPage,
    "dynamic": ()=>dynamic,
    "metadata": ()=>metadata,
    "revalidate": ()=>revalidate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$services$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/services.client.jsx [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "Services — Limitless Graphics",
    description: "Vehicle wraps, printed vinyl & signage, windows & glass, wall murals, and paint protection. Browse services and start a quote."
};
const dynamic = "force-dynamic";
const revalidate = 300;
// map your API → UI cards
const slugify = (s = "")=>s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
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
            // if coverimage is just "file.png", we’ll leave it; you can resolve to absolute in the client if needed
            img: s.coverimage || "",
            href: `/services/${slugify(title)}-${id}`
        };
    });
}
async function getInitialServices() {
    try {
        const res = await fetch("/api/services", {
            cache: "no-store",
            next: {
                revalidate: 300
            }
        });
        if (!res.ok) return [];
        const data = await res.json();
        const list = Array.isArray(data?.GetAllService) ? data.GetAllService : [];
        return normalize(list);
    } catch  {
        return [];
    }
}
async function ServicesPage() {
    // ✅ SSR data — in the HTML for SEO
    const initialItems = await getInitialServices();
    // Pass into a client component that can use useState/useEffect for interactions
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$services$2e$client$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialItems: initialItems
    }, void 0, false, {
        fileName: "[project]/src/app/services/page.js",
        lineNumber: 59,
        columnNumber: 10
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

//# sourceMappingURL=%5Broot-of-the-server%5D__812cc402._.js.map