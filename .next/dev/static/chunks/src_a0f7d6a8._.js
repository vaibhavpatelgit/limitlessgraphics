(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/[slug]/service-detail.client.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
/* =========================
   Lightbox
========================= */ function Lightbox({ images, index, onClose, onPrev, onNext }) {
    _s();
    if (index < 0) return null;
    const img = images[index];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lightbox.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape") onClose();
                if (e.key === "ArrowRight") onNext();
                if (e.key === "ArrowLeft") onPrev();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "Lightbox.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Lightbox.useEffect"];
        }
    }["Lightbox.useEffect"], [
        onClose,
        onNext,
        onPrev
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[999] grid place-items-center bg-black/70 backdrop-blur-sm",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-[min(94vw,1200px)] max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 bg-neutral-900 shadow-2xl",
                initial: {
                    scale: 0.95,
                    y: 20
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                exit: {
                    scale: 0.98,
                    y: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img.src,
                            alt: img.alt || "Portfolio",
                            className: "max-h-[80vh] w-auto rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-4 top-4 flex gap-2 rounded-full bg-black/40 px-2 py-2 ring-1 ring-white/10 backdrop-blur",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onPrev,
                                className: "rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20",
                                "aria-label": "Previous",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onNext,
                                className: "rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20",
                                "aria-label": "Next",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-3 py-1 font-semibold text-black",
                                "aria-label": "Close",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Lightbox, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Lightbox;
/* =========================
   Helpers
========================= */ function toPortfolioUrl(raw) {
    if (!raw) return null;
    if (/^https?:\/\//i.test(raw)) return raw;
    const name = String(raw).split(/[\\/]/).pop();
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTFOLIO_IMAGE_BASE"]}${encodeURIComponent(name)}`;
}
function pickArray(json) {
    if (Array.isArray(json?.GetSpecificPortfolio)) return json.GetSpecificPortfolio;
    if (Array.isArray(json?.data)) return json.data;
    if (Array.isArray(json?.items)) return json.items;
    return [];
}
function ServiceDetailClient({ serviceId, sections, initialServiceInfoId, initialPortfolio, sendQuoteAction }) {
    _s1();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialServiceInfoId || sections?.[0]?.serviceInfoId || null);
    const activeSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceDetailClient.useMemo[activeSection]": ()=>sections.find({
                "ServiceDetailClient.useMemo[activeSection]": (s)=>s.serviceInfoId === activeId
            }["ServiceDetailClient.useMemo[activeSection]"]) || null
    }["ServiceDetailClient.useMemo[activeSection]"], [
        sections,
        activeId
    ]);
    /* Portfolio */ const [gallery, setGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPortfolio || []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightboxIdx, setLightboxIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceDetailClient.useCallback[open]": (i)=>setLightboxIdx(i)
    }["ServiceDetailClient.useCallback[open]"], []);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceDetailClient.useCallback[close]": ()=>setLightboxIdx(-1)
    }["ServiceDetailClient.useCallback[close]"], []);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceDetailClient.useCallback[next]": ()=>setLightboxIdx({
                "ServiceDetailClient.useCallback[next]": (i)=>(i + 1) % (gallery.length || 1)
            }["ServiceDetailClient.useCallback[next]"])
    }["ServiceDetailClient.useCallback[next]"], [
        gallery.length
    ]);
    const prev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceDetailClient.useCallback[prev]": ()=>setLightboxIdx({
                "ServiceDetailClient.useCallback[prev]": (i)=>(i - 1 + (gallery.length || 1)) % (gallery.length || 1)
            }["ServiceDetailClient.useCallback[prev]"])
    }["ServiceDetailClient.useCallback[prev]"], [
        gallery.length
    ]);
    /* Quote */ const [submitState, setSubmitState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sending: false,
        ok: null,
        error: ""
    });
    const activeTitle = activeSection?.title || "";
    async function onSubmitQuote(e) {
        e.preventDefault();
        try {
            setSubmitState({
                sending: true,
                ok: null,
                error: ""
            });
            const form = e.currentTarget;
            const fd = new FormData(form);
            // Ensure correct values always sent
            fd.set("serviceInfoId", String(activeId || ""));
            fd.set("serviceTitle", String(activeTitle || ""));
            const result = await sendQuoteAction(fd);
            if (result?.ok) {
                setSubmitState({
                    sending: false,
                    ok: true,
                    error: ""
                });
                // close dialog
                document.getElementById("quoteForm")?.close();
                // reset form
                form.reset();
                return;
            }
            setSubmitState({
                sending: false,
                ok: false,
                error: result?.error || "Failed to send email. Please try again."
            });
        } catch (err) {
            console.error("[Quote] submit error:", err);
            setSubmitState({
                sending: false,
                ok: false,
                error: "Failed to send email. Please try again."
            });
        }
    }
    /* Load portfolio when ServiceInfo changes */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceDetailClient.useEffect": ()=>{
            if (!activeId) return;
            let cancelled = false;
            ({
                "ServiceDetailClient.useEffect": async ()=>{
                    try {
                        setLoading(true);
                        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].PORTFOLIO_BY_SERVICEINFO(activeId), {
                            cache: "no-store"
                        });
                        if (!res.ok) {
                            if (!cancelled) setGallery([]);
                            return;
                        }
                        const data = await res.json();
                        const arr = pickArray(data);
                        const images = arr.map({
                            "ServiceDetailClient.useEffect.images": (x)=>{
                                const src = toPortfolioUrl(x.image || x.Image || x.filename || x.file || x.url || x.src);
                                return src ? {
                                    src,
                                    alt: x.title || "Portfolio"
                                } : null;
                            }
                        }["ServiceDetailClient.useEffect.images"]).filter(Boolean);
                        if (!cancelled) setGallery(images);
                    } catch  {
                        if (!cancelled) setGallery([]);
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            })["ServiceDetailClient.useEffect"]();
            return ({
                "ServiceDetailClient.useEffect": ()=>{
                    cancelled = true;
                }
            })["ServiceDetailClient.useEffect"];
        }
    }["ServiceDetailClient.useEffect"], [
        activeId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-neutral-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 md:px-8 py-10 grid md:grid-cols-[300px_1fr] gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold mb-3",
                                children: "Options"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: sections.map((s)=>{
                                    const active = s.serviceInfoId === activeId;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveId(s.serviceInfoId),
                                            className: `w-full rounded-lg px-3 py-2 text-left transition
                      ${active ? "bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black" : "bg-white/5 hover:bg-white/10 text-white/80"}`,
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this)
                                    }, s.serviceInfoId, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>document.getElementById("quoteForm")?.showModal(),
                                className: "mt-4 w-full rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 py-2 font-semibold text-black",
                                children: "Get Quote"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs text-white/60",
                                children: [
                                    "Selected option:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/80 font-semibold",
                                        children: activeTitle || "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-2xl border border-white/10 bg-white/5 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        children: activeSection.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prose prose-invert mt-4 max-w-none",
                                        dangerouslySetInnerHTML: {
                                            __html: activeSection.descriptionHtml
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-3",
                                        children: "Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60",
                                        children: "Loading images…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 289,
                                        columnNumber: 25
                                    }, this),
                                    !loading && gallery.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60",
                                        children: "No portfolio images yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                                        children: gallery.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>open(i),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: g.src,
                                                        alt: g.alt,
                                                        className: "rounded-xl border border-white/10 aspect-[4/3] object-cover",
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lightbox, {
                images: gallery,
                index: lightboxIdx,
                onClose: close,
                onPrev: prev,
                onNext: next
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                id: "quoteForm",
                className: "rounded-2xl p-0 w-[min(92vw,560px)] bg-neutral-950 text-white border border-white/15",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 md:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold",
                                            children: "Get a Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-white/70 text-sm",
                                            children: [
                                                "Service option:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: activeTitle || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>document.getElementById("quoteForm")?.close(),
                                    className: "rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: onSubmitQuote,
                            className: "mt-5 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    name: "serviceInfoId",
                                    value: activeId || ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    name: "serviceTitle",
                                    value: activeTitle || ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm text-white/80",
                                                    children: "Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "name",
                                                    required: true,
                                                    className: "mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30",
                                                    placeholder: "Your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm text-white/80",
                                                    children: "Email *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "email",
                                                    type: "email",
                                                    required: true,
                                                    className: "mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30",
                                                    placeholder: "you@email.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-white/80",
                                            children: "Mobile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "mobile",
                                            className: "mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30",
                                            placeholder: "(306) 000-0000"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-white/80",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            rows: 4,
                                            className: "mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30",
                                            placeholder: "Tell us about your vehicle / project..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                submitState.ok === false && submitState.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-300",
                                    children: submitState.error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>document.getElementById("quoteForm")?.close(),
                                            className: "rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20",
                                            disabled: submitState.sending,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-black disabled:opacity-60",
                                            disabled: submitState.sending || !activeId,
                                            title: !activeId ? "Select an option first" : "",
                                            children: submitState.sending ? "Sending..." : "Send Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/service-detail.client.jsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s1(ServiceDetailClient, "okLLX7HlqYGl/J7+zq77SuxeSAw=");
_c1 = ServiceDetailClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "Lightbox");
__turbopack_context__.k.register(_c1, "ServiceDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a0f7d6a8._.js.map