(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Admin/Modal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function Modal({ open, title, onClose, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-50 grid place-items-center bg-black/60 p-4",
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
                className: "w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-2xl",
                initial: {
                    y: 20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    y: 20,
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/Modal.jsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "rounded-lg px-3 py-1 text-sm bg-neutral-800 hover:bg-neutral-700",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/Modal.jsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/Modal.jsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/Modal.jsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/Modal.jsx",
                lineNumber: 14,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Admin/Modal.jsx",
            lineNumber: 8,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Admin/Modal.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    SERVICES_WITH_INFO: `${DOTNET_API_BASE}/api/Service/GetAllServicesListwithInfo`,
    SINFO_LIST_SLUG_WISE: (slug)=>`${DOTNET_API_BASE}/api/Service/GetServiceInfoListslugWise/${encodeURIComponent(slug)}`,
    SINFO_LIST: `${DOTNET_API_BASE}/api/Service/GetAllServiceInfo`,
    PORTFOLIO_LIST: (serviceInfoId)=>`${DOTNET_API_BASE}/api/Portfolio/get/${serviceInfoId}`,
    PORTFOLIO_UPSERT: `${DOTNET_API_BASE}/api/Portfolio/insert`,
    PORTFOLIO_UPLOAD: `${DOTNET_API_BASE}/api/Portfolio/uploaddocuments`,
    PORTFOLIO_DELETE: `${DOTNET_API_BASE}/api/Portfolio/delete`,
    PORTFOLIO_LIST: `${DOTNET_API_BASE.replace(/\/+$/, "")}/api/Portfolio/getportfolio`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceTypeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/Modal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PAGE_SIZE = 20;
function ServiceTypeClient() {
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // modal state
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // form state
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ServiceId: 0,
        ordernumber: "",
        description: "",
        title: "",
        file: null,
        currentImage: null
    });
    // ---------- Load list ----------
    async function load() {
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].LIST, {
                withCredentials: false
            });
            // API shape: { GetAllService: [ { ServicesID, titile, coverimage, ordernumber }, ... ] }
            const arr = Array.isArray(res.data?.GetAllService) ? res.data.GetAllService : [];
            const normalized = arr.map((r)=>{
                const filename = r.coverimage ?? null;
                const imageUrl = filename ? String(filename).startsWith("http") ? filename : `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_BASE"]}${filename}` : null;
                return {
                    id: r.ServicesID,
                    ServiceId: r.ServicesID,
                    title: r.titile ?? "",
                    ordernumber: r.ordernumber ?? 0,
                    description: r.description ?? r.Description ?? r.descriptions ?? "",
                    imageUrl,
                    _raw: r
                };
            });
            setRows(normalized);
        } catch (e) {
            console.error(e);
            alert("Could not load services. Check API URL/CORS/HTTPS.");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceTypeClient.useEffect": ()=>{
            load();
        }
    }["ServiceTypeClient.useEffect"], []);
    // ---------- Client-side search + pagination ----------
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceTypeClient.useMemo[filtered]": ()=>{
            if (!q) return rows;
            const qq = q.toLowerCase();
            return rows.filter({
                "ServiceTypeClient.useMemo[filtered]": (r)=>(r.title || "").toLowerCase().includes(qq)
            }["ServiceTypeClient.useMemo[filtered]"]);
        }
    }["ServiceTypeClient.useMemo[filtered]"], [
        rows,
        q
    ]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageSafe = Math.min(page, totalPages);
    const pageRows = filtered.slice((pageSafe - 1) * PAGE_SIZE, pageSafe * PAGE_SIZE);
    // ---------- Open modal: Add ----------
    function openNew() {
        setForm({
            ServiceId: 0,
            ordernumber: "",
            title: "",
            file: null,
            currentImage: null
        });
        setOpen(true);
    }
    // ---------- Open modal: Edit ----------
    function openEdit(r) {
        setForm({
            ServiceId: r.ServiceId || r.id,
            ordernumber: r.ordernumber ?? 0,
            title: r.title ?? "",
            description: r.description ?? "",
            file: null,
            currentImage: r.imageUrl || null
        });
        setOpen(true);
    }
    // ---------- Upload cover image (second call) ----------
    async function uploadCover(servicesId, file) {
        const fd = new FormData();
        // Backend expects "ServicesID" in form data, and iterates Request.Files (any key). We'll use "file".
        fd.append("ServicesID", String(servicesId));
        fd.append("file", file);
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].UPLOAD, fd, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: false
        });
    }
    // ---------- Submit (Add/Edit) ----------
    async function submit(e) {
        e.preventDefault();
        try {
            setSubmitting(true);
            // 1) Upsert JSON first
            const payload = {
                ServicesID: Number(form.ServiceId || 0),
                ordernumber: Number(form.ordernumber || 0),
                titile: form.title,
                description: form.description
            };
            console.log("Check Payload-", payload);
            const upRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].UPSERT, payload, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: false
            });
            const upJson = upRes.data || {};
            const newId = upJson?.ServiceAdd?.Data?.ServicesID ?? upJson?.Data?.ServicesID ?? upJson?.ServicesID ?? payload.ServicesID;
            // 2) If a new file selected, upload
            if (form.file && newId) {
                await uploadCover(newId, form.file);
            }
            setOpen(false);
            await load();
        } catch (e) {
            console.error(e);
            const msg = e?.response?.data?.message || e?.response?.data || e.message || "Submit failed";
            alert(String(msg));
        } finally{
            setSubmitting(false);
        }
    }
    // ---------- Delete ----------
    async function onDelete(id) {
        if (!confirm("Delete this item?")) return;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].DELETE(id), {
                withCredentials: false
            });
            console.log("Delete response:", res.data);
            await load();
            alert("Deleted successfully");
        } catch (e) {
            console.error("Delete failed:", e);
            alert("Delete failed (check endpoint).");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl md:text-3xl font-bold",
                        children: "Service Type"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Search title...",
                                value: q,
                                onChange: (e)=>{
                                    setQ(e.target.value);
                                    setPage(1);
                                },
                                className: "w-full sm:w-64 rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openNew,
                                className: "rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 font-medium",
                                children: "+ Add New"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-left bg-neutral-900/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Order"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-right",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-6",
                                    colSpan: 5,
                                    children: "Loading…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this) : pageRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-6",
                                    colSpan: 5,
                                    children: "No records."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this) : pageRows.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-t border-neutral-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: (pageSafe - 1) * PAGE_SIZE + idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.ordernumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.title || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: r.imageUrl,
                                                alt: "",
                                                className: "h-10 w-16 object-cover rounded-lg border border-neutral-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                                lineNumber: 237,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-500",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                                lineNumber: 243,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openEdit(r),
                                                        className: "rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3 py-1",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete(r.id),
                                                        className: "rounded-lg bg-red-600/80 hover:bg-red-600 px-3 py-1",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                                lineNumber: 247,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, r.id, true, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-neutral-400",
                        children: [
                            "Page ",
                            pageSafe,
                            " of ",
                            totalPages,
                            " • ",
                            filtered.length,
                            " total"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                disabled: pageSafe <= 1,
                                className: "rounded-xl border border-neutral-700 px-3 py-1 disabled:opacity-50",
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: pageSafe >= totalPages,
                                className: "rounded-xl border border-neutral-700 px-3 py-1 disabled:opacity-50",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                title: form.ServiceId ? "Edit Service Type" : "Add Service Type",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: submit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "hidden",
                            value: form.ServiceId,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-neutral-300 mb-1",
                                            children: "Order Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "number",
                                            min: "0",
                                            step: "1",
                                            value: form.ordernumber,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    ordernumber: e.target.value
                                                }),
                                            className: "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500",
                                            placeholder: "e.g. 2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-neutral-300 mb-1",
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            value: form.title,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    title: e.target.value
                                                }),
                                            className: "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500",
                                            placeholder: "Example title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-neutral-300 mb-1",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.description,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            description: e.target.value
                                        }),
                                    rows: 5,
                                    className: "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500",
                                    placeholder: "Write a detailed description…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-neutral-500",
                                    children: "Markdown or plain text; you can paste multiple lines."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-neutral-300 mb-1",
                                    children: "Image (one)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: (e)=>setForm({
                                            ...form,
                                            file: e.target.files?.[0] || null
                                        }),
                                    className: "block w-full text-sm text-neutral-300 file:mr-4 file:rounded-xl file:border-0 file:bg-neutral-800 file:px-3 file:py-2 file:text-neutral-200 hover:file:bg-neutral-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this),
                                !form.file && form.currentImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: form.currentImage,
                                    alt: "",
                                    className: "mt-2 h-12 w-20 object-cover rounded-md border border-neutral-800"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this),
                                form.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-neutral-500",
                                    children: [
                                        form.file.name,
                                        " • ",
                                        (form.file.size / 1024).toFixed(0),
                                        " KB (will upload after save)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpen(false),
                                    className: "rounded-xl px-4 py-2 bg-neutral-800",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-xl px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-medium disabled:opacity-50",
                                    disabled: isSubmitting,
                                    children: form.ServiceId ? isSubmitting ? "Updating..." : "Edit" : isSubmitting ? "Saving..." : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
                lineNumber: 293,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/services/service-type/ServiceTypeClient.jsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(ServiceTypeClient, "ESkFu6s9bnv2zrN2e7Mxk4xQZKo=");
_c = ServiceTypeClient;
var _c;
__turbopack_context__.k.register(_c, "ServiceTypeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_231d8366._.js.map