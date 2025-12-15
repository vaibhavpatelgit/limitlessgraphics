(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Admin/Modal.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Modal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function Modal(param) {
    let { open, title, onClose, children } = param;
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
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
//  export const DOTNET_API_BASE = "https://localhost:44329"; // change if needed
__turbopack_context__.s({
    "API": ()=>API,
    "DOTNET_API_BASE": ()=>DOTNET_API_BASE,
    "IMAGE_BASE": ()=>IMAGE_BASE,
    "PORTFOLIO_IMAGE_BASE": ()=>PORTFOLIO_IMAGE_BASE
});
const DOTNET_API_BASE = "http://limitlessgraphicsapi.marubardoli.com/"; // change if needed
const API = {
    LIST: "".concat(DOTNET_API_BASE, "/api/Service/GetAllService"),
    UPSERT: "".concat(DOTNET_API_BASE, "/api/Service/insertService"),
    DELETE: (id)=>"".concat(DOTNET_API_BASE, "/api/Service/DeleteService/").concat(id),
    UPLOAD: "".concat(DOTNET_API_BASE, "/api/Service/uploaddocuments"),
    // --- NEW: Services Info endpoints (adjust these to match your .NET routes) ---
    // List all service infos
    SINFO_LIST: "".concat(DOTNET_API_BASE, "/api/Service/GetAllServiceInfo"),
    // Insert + Update (same endpoint pattern as before)
    SINFO_UPSERT: "".concat(DOTNET_API_BASE, "/api/Service/insertServiceInfo"),
    // Delete by id (GET route param, same legacy pattern)
    SINFO_DELETE: (id)=>"".concat(DOTNET_API_BASE, "/api/Service/DeleteServiceInfo/").concat(id),
    PORTFOLIO_LIST: (serviceInfoId)=>"".concat(DOTNET_API_BASE, "/api/Portfolio/get/").concat(serviceInfoId),
    PORTFOLIO_UPSERT: "".concat(DOTNET_API_BASE, "/api/Portfolio/insert"),
    PORTFOLIO_UPLOAD: "".concat(DOTNET_API_BASE, "/api/Portfolio/uploaddocuments"),
    PORTFOLIO_DELETE: "".concat(DOTNET_API_BASE, "/api/Portfolio/delete")
};
const IMAGE_BASE = "".concat(DOTNET_API_BASE, "/Files/Services/");
const PORTFOLIO_IMAGE_BASE = "".concat(DOTNET_API_BASE, "/Files/portfolio/"); // NEW
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ServiceInfoClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/Modal.jsx [app-client] (ecmascript)"); // Casesensitive on vercel
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PAGE_SIZE = 20;
function ServiceInfoClient() {
    _s();
    // master data (for dropdown)
    const [serviceTypes, setServiceTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // {value: ServicesID, label: titile}
    // table data (service info rows)
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // { ServiceInfoId, ServicesID, title, Description }
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // modal
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // form state
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ServiceInfoId: 0,
        ServicesID: "",
        title: "",
        Description: ""
    });
    // ---- Portfolio modal state ----
    const [pfOpen, setPfOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pfLoading, setPfLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pfRows, setPfRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // list for current ServiceInfoId
    const [pfServiceInfoId, setPfServiceInfoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add/Edit portfolio form
    const [pfForm, setPfForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        portfolioId: 0,
        ServiceInfoId: 0,
        title: "",
        file: null
    });
    // ---------- Load dropdown options (service types) ----------
    async function loadServiceTypes() {
        try {
            var _res_data;
            console.log("➡️ Fetching service types:", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].LIST);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].LIST, {
                withCredentials: false
            });
            const arr = Array.isArray((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.GetAllService) ? res.data.GetAllService : [];
            const options = arr.map((r)=>{
                var _r_titile;
                return {
                    value: Number(r.ServicesID),
                    label: (_r_titile = r.titile) !== null && _r_titile !== void 0 ? _r_titile : ""
                };
            });
            console.log("✅ Service types loaded:", options);
            setServiceTypes(options);
        } catch (err) {
            console.error("❌ Failed to load service types:", err);
            setServiceTypes([]);
        }
    }
    // ---------- Load service info rows ----------
    async function loadInfos() {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].SINFO_LIST, {
            withCredentials: false
        });
        // Expecting something like: { GetAllServiceInfo: [{ ServiceInfoId, ServicesID, title, Description }, ...] }
        const arr = Array.isArray((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.GetAllService) ? res.data.GetAllService : Array.isArray(res.data) ? res.data : [];
        const normalized = arr.map((r)=>{
            var _r_ServiceInfoId, _ref, _ref1, _r_ServicesID, _ref2, _ref3, _ref4, _r_title, _r_Description, _ref5;
            return {
                ServiceInfoId: Number((_ref1 = (_ref = (_r_ServiceInfoId = r.ServiceInfoId) !== null && _r_ServiceInfoId !== void 0 ? _r_ServiceInfoId : r.serviceInfoId) !== null && _ref !== void 0 ? _ref : r.Id) !== null && _ref1 !== void 0 ? _ref1 : 0),
                ServicesID: Number((_ref4 = (_ref3 = (_ref2 = (_r_ServicesID = r.ServicesID) !== null && _r_ServicesID !== void 0 ? _r_ServicesID : r.servicesID) !== null && _ref2 !== void 0 ? _ref2 : r.ServiceId) !== null && _ref3 !== void 0 ? _ref3 : r.serviceId) !== null && _ref4 !== void 0 ? _ref4 : 0),
                title: (_r_title = r.title) !== null && _r_title !== void 0 ? _r_title : "",
                Description: (_ref5 = (_r_Description = r.Description) !== null && _r_Description !== void 0 ? _r_Description : r.description) !== null && _ref5 !== void 0 ? _ref5 : "",
                _raw: r
            };
        });
        setRows(normalized);
    }
    async function loadAll() {
        setLoading(true);
        try {
            await Promise.all([
                loadServiceTypes(),
                loadInfos()
            ]);
        } catch (e) {
            console.error(e);
            alert("Failed to load data. Check API URLs and CORS/HTTPS.");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceInfoClient.useEffect": ()=>{
            loadAll();
        }
    }["ServiceInfoClient.useEffect"], []);
    // ---------- filter + paginate ----------
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceInfoClient.useMemo[filtered]": ()=>{
            if (!q) return rows;
            const qq = q.toLowerCase();
            return rows.filter({
                "ServiceInfoClient.useMemo[filtered]": (r)=>(r.title || "").toLowerCase().includes(qq)
            }["ServiceInfoClient.useMemo[filtered]"]);
        }
    }["ServiceInfoClient.useMemo[filtered]"], [
        rows,
        q
    ]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageSafe = Math.min(page, totalPages);
    const pageRows = filtered.slice((pageSafe - 1) * PAGE_SIZE, pageSafe * PAGE_SIZE);
    // ---------- open Add ----------
    function openNew() {
        setForm({
            ServiceInfoId: 0,
            ServicesID: serviceTypes.length ? serviceTypes[0].value : "",
            title: "",
            Description: ""
        });
        setOpen(true);
    }
    // ---------- open Edit ----------
    function openEdit(row) {
        var _row_title, _row_Description;
        setForm({
            ServiceInfoId: Number(row.ServiceInfoId),
            ServicesID: Number(row.ServicesID),
            title: (_row_title = row.title) !== null && _row_title !== void 0 ? _row_title : "",
            Description: (_row_Description = row.Description) !== null && _row_Description !== void 0 ? _row_Description : ""
        });
        setOpen(true);
    }
    // ---------- upsert (add/edit) ----------
    async function submit(e) {
        e.preventDefault();
        try {
            var _upJson_ServiceInfoAdd_Data, _upJson_ServiceInfoAdd, _upJson_Data;
            setSubmitting(true);
            const payload = {
                // exact keys you requested
                ServicesID: Number(form.ServicesID || 0),
                ServiceInfoId: Number(form.ServiceInfoId || 0),
                title: form.title,
                Description: form.Description
            };
            console.log("Checl payload--", payload);
            // POST one endpoint for both add & update (like your previous page)
            const upRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].SINFO_UPSERT, payload, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: false
            });
            // Optional: handle wrapper { ServiceInfoAdd: { error, message, Data: {...} } }
            const upJson = upRes.data || {};
            var _upJson_ServiceInfoAdd_Data_ServiceInfoId, _ref, _ref1;
            const newId = (_ref1 = (_ref = (_upJson_ServiceInfoAdd_Data_ServiceInfoId = upJson === null || upJson === void 0 ? void 0 : (_upJson_ServiceInfoAdd = upJson.ServiceInfoAdd) === null || _upJson_ServiceInfoAdd === void 0 ? void 0 : (_upJson_ServiceInfoAdd_Data = _upJson_ServiceInfoAdd.Data) === null || _upJson_ServiceInfoAdd_Data === void 0 ? void 0 : _upJson_ServiceInfoAdd_Data.ServiceInfoId) !== null && _upJson_ServiceInfoAdd_Data_ServiceInfoId !== void 0 ? _upJson_ServiceInfoAdd_Data_ServiceInfoId : upJson === null || upJson === void 0 ? void 0 : (_upJson_Data = upJson.Data) === null || _upJson_Data === void 0 ? void 0 : _upJson_Data.ServiceInfoId) !== null && _ref !== void 0 ? _ref : upJson === null || upJson === void 0 ? void 0 : upJson.ServiceInfoId) !== null && _ref1 !== void 0 ? _ref1 : payload.ServiceInfoId;
            // After save, close and refresh
            setOpen(false);
            await loadInfos();
        } catch (e) {
            var _e_response_data, _e_response, _e_response1;
            console.error(e);
            const msg = (e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : (_e_response_data = _e_response.data) === null || _e_response_data === void 0 ? void 0 : _e_response_data.message) || (e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data) || e.message || "Submit failed";
            alert(String(msg));
        } finally{
            setSubmitting(false);
        }
    }
    // ---------- delete ----------
    async function onDelete(id) {
        if (!confirm("Delete this item?")) return;
        try {
            // Your legacy pattern uses GET with route param:
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].SINFO_DELETE(id), {
                withCredentials: false
            });
            await loadInfos();
        } catch (e) {
            console.error(e);
            alert("Delete failed (check endpoint).");
        }
    }
    // helper to get label for dropdown value
    function getServiceLabel(id) {
        const found = serviceTypes.find((s)=>s.value === Number(id));
        return (found === null || found === void 0 ? void 0 : found.label) || "#".concat(id);
    }
    // open modal for a row
    async function openPortfolio(row) {
        setPfServiceInfoId(Number(row.ServiceInfoId));
        setPfForm({
            portfolioId: 0,
            ServiceInfoId: Number(row.ServiceInfoId),
            title: "",
            file: null
        });
        setPfOpen(true);
        await loadPortfolioList(Number(row.ServiceInfoId));
    }
    // load list for a specific ServiceInfoId
    async function loadPortfolioList(serviceInfoId) {
        setPfLoading(true);
        try {
            var _res_data;
            console.log("➡️ Portfolio list GET:", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].PORTFOLIO_LIST(serviceInfoId));
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].PORTFOLIO_LIST(serviceInfoId), {
                withCredentials: false
            });
            console.log("✅ Portfolio list raw:", res.data);
            // Accept both shapes:
            // { GetSpecificPortfolio: [ {...}, {...} ] }  <-- current
            // { GetSpecificPortfolio: { ... } }           <-- older
            // [] / {} / null                               <-- empty
            const gp = (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.GetSpecificPortfolio;
            const arr = Array.isArray(gp) ? gp : gp ? [
                gp
            ] : [];
            const normalized = arr.map((r)=>{
                var _r_portfolioId, _ref, _ref1, _r_ServiceInfoId, _ref2, _r_title;
                return {
                    portfolioId: Number((_ref1 = (_ref = (_r_portfolioId = r.portfolioId) !== null && _r_portfolioId !== void 0 ? _r_portfolioId : r.PortfolioId) !== null && _ref !== void 0 ? _ref : r.id) !== null && _ref1 !== void 0 ? _ref1 : 0),
                    ServiceInfoId: Number((_ref2 = (_r_ServiceInfoId = r.ServiceInfoId) !== null && _r_ServiceInfoId !== void 0 ? _r_ServiceInfoId : r.serviceInfoId) !== null && _ref2 !== void 0 ? _ref2 : 0),
                    title: (_r_title = r.title) !== null && _r_title !== void 0 ? _r_title : "",
                    imageUrl: r.image ? String(r.image).startsWith("http") ? r.image : "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTFOLIO_IMAGE_BASE"]).concat(r.image) : null,
                    _raw: r
                };
            });
            console.log("📦 Parsed portfolio items:", normalized);
            setPfRows(normalized);
        } catch (e) {
            console.error("❌ Portfolio list failed:", e);
            setPfRows([]);
        } finally{
            setPfLoading(false);
        }
    }
    // add (or update) a portfolio: JSON first, then image upload if file selected
    async function submitPortfolio(e) {
        e.preventDefault();
        try {
            var _upJson_PortfolioAddOrUpdate_Data, _upJson_PortfolioAddOrUpdate, _upJson_Data;
            setPfLoading(true);
            const payload = {
                portfolioId: Number(pfForm.portfolioId || 0),
                ServiceInfoId: Number(pfForm.ServiceInfoId || pfServiceInfoId || 0),
                title: pfForm.title
            };
            const upRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].PORTFOLIO_UPSERT, payload, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: false
            });
            const upJson = upRes.data || {};
            var _upJson_PortfolioAddOrUpdate_Data_portfolioId, _ref, _ref1;
            // try to extract new/existing id
            const newId = (_ref1 = (_ref = (_upJson_PortfolioAddOrUpdate_Data_portfolioId = upJson === null || upJson === void 0 ? void 0 : (_upJson_PortfolioAddOrUpdate = upJson.PortfolioAddOrUpdate) === null || _upJson_PortfolioAddOrUpdate === void 0 ? void 0 : (_upJson_PortfolioAddOrUpdate_Data = _upJson_PortfolioAddOrUpdate.Data) === null || _upJson_PortfolioAddOrUpdate_Data === void 0 ? void 0 : _upJson_PortfolioAddOrUpdate_Data.portfolioId) !== null && _upJson_PortfolioAddOrUpdate_Data_portfolioId !== void 0 ? _upJson_PortfolioAddOrUpdate_Data_portfolioId : upJson === null || upJson === void 0 ? void 0 : (_upJson_Data = upJson.Data) === null || _upJson_Data === void 0 ? void 0 : _upJson_Data.portfolioId) !== null && _ref !== void 0 ? _ref : upJson === null || upJson === void 0 ? void 0 : upJson.portfolioId) !== null && _ref1 !== void 0 ? _ref1 : payload.portfolioId;
            // if user selected a file, upload it now
            if (pfForm.file && newId) {
                const fd = new FormData();
                fd.append("portfolioId", String(newId));
                fd.append("file", pfForm.file); // backend reads Request.Files[*]
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].PORTFOLIO_UPLOAD, fd, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    withCredentials: false
                });
            }
            // reset form (stay in modal), refresh list
            setPfForm({
                portfolioId: 0,
                ServiceInfoId: Number(pfForm.ServiceInfoId || pfServiceInfoId || 0),
                title: "",
                file: null
            });
            await loadPortfolioList(Number(pfServiceInfoId));
        } catch (e) {
            var _e_response_data, _e_response;
            console.error(e);
            alert((e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : (_e_response_data = _e_response.data) === null || _e_response_data === void 0 ? void 0 : _e_response_data.message) || e.message || "Save failed");
        } finally{
            setPfLoading(false);
        }
    }
    // delete a portfolio row
    async function deletePortfolio(portfolioId) {
        if (!confirm("Delete this portfolio item?")) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].PORTFOLIO_DELETE, {
                portfolioId: Number(portfolioId)
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: false
            });
            await loadPortfolioList(Number(pfServiceInfoId));
        } catch (e) {
            console.error(e);
            alert("Delete failed");
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
                        children: "Services Info"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                        lineNumber: 332,
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
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openNew,
                                disabled: !serviceTypes.length,
                                className: "rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 font-medium disabled:opacity-50",
                                children: "+ Add New"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                lineNumber: 331,
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
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-right",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-6",
                                    colSpan: 3,
                                    children: "Loading…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 365,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 364,
                                columnNumber: 15
                            }, this) : pageRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-6",
                                    colSpan: 3,
                                    children: "No records."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 371,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this) : pageRows.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-t border-neutral-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: (pageSafe - 1) * PAGE_SIZE + idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.title || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                            lineNumber: 384,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openPortfolio(r),
                                                        className: "rounded-lg bg-indigo-600/80 hover:bg-indigo-600 px-3 py-1",
                                                        children: "Portfolio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openEdit(r),
                                                        className: "rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3 py-1",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                        lineNumber: 394,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete(r.ServiceInfoId),
                                                        className: "rounded-lg bg-red-600/80 hover:bg-red-600 px-3 py-1",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, r.ServiceInfoId, true, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 377,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                lineNumber: 353,
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
                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                        lineNumber: 417,
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
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: pageSafe >= totalPages,
                                className: "rounded-xl border border-neutral-700 px-3 py-1 disabled:opacity-50",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                title: form.ServiceInfoId ? "Edit Services Info" : "Add Services Info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: submit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "hidden",
                            value: form.ServiceInfoId,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-neutral-300 mb-1",
                                    children: "Services Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    required: true,
                                    value: form.ServicesID,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            ServicesID: Number(e.target.value)
                                        }),
                                    className: "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "Select a service…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                            lineNumber: 460,
                                            columnNumber: 15
                                        }, this),
                                        serviceTypes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s.value,
                                                children: s.label
                                            }, s.value, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                form.ServicesID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-neutral-500",
                                    children: [
                                        "Selected: ",
                                        getServiceLabel(form.ServicesID),
                                        " (ID",
                                        " ",
                                        form.ServicesID,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-neutral-300 mb-1",
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    value: form.title,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            title: e.target.value
                                        }),
                                    className: "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500",
                                    placeholder: "Enter a title"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-neutral-300 mb-1",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-neutral-700 bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
                                        tinymceScriptSrc: "/tinymce/tinymce.min.js",
                                        value: form.Description,
                                        onEditorChange: (content)=>setForm({
                                                ...form,
                                                Description: content
                                            }),
                                        init: {
                                            // tell TinyMCE where to fetch its own assets (skins/plugins)
                                            base_url: "/tinymce",
                                            suffix: ".min",
                                            height: 300,
                                            menubar: false,
                                            plugins: [
                                                "advlist",
                                                "autolink",
                                                "lists",
                                                "link",
                                                "charmap",
                                                "preview",
                                                "anchor",
                                                "searchreplace",
                                                "visualblocks",
                                                "code",
                                                "fullscreen",
                                                "insertdatetime",
                                                "media",
                                                "table",
                                                "help",
                                                "wordcount"
                                            ],
                                            toolbar: "undo redo | formatselect | bold italic underline | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist outdent indent | removeformat | help",
                                            skin: "oxide-dark",
                                            content_css: "dark",
                                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color:#fff; background:#1e1e1e; }"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 492,
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
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-xl px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-medium disabled:opacity-50",
                                    disabled: isSubmitting,
                                    children: form.ServiceInfoId ? isSubmitting ? "Updating..." : "Edit" : isSubmitting ? "Saving..." : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: pfOpen,
                onClose: ()=>setPfOpen(false),
                title: "Portfolio • ServiceInfo #".concat(pfServiceInfoId !== null && pfServiceInfoId !== void 0 ? pfServiceInfoId : "-"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submitPortfolio,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                value: pfForm.ServiceInfoId,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-neutral-300 mb-1",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 576,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: pfForm.title,
                                                onChange: (e)=>setPfForm({
                                                        ...pfForm,
                                                        title: e.target.value
                                                    }),
                                                className: "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500",
                                                placeholder: "Portfolio item title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-neutral-300 mb-1",
                                                children: "Image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 590,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: (e)=>{
                                                    var _e_target_files;
                                                    return setPfForm({
                                                        ...pfForm,
                                                        file: ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null
                                                    });
                                                },
                                                className: "block w-full text-sm text-neutral-300 file:mr-4 file:rounded-xl file:border-0 file:bg-neutral-800 file:px-3 file:py-2 file:text-neutral-200 hover:file:bg-neutral-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this),
                                            pfForm.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-neutral-500",
                                                children: [
                                                    pfForm.file.name,
                                                    " • ",
                                                    (pfForm.file.size / 1024).toFixed(0),
                                                    " KB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 574,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setPfOpen(false),
                                        className: "rounded-xl px-4 py-2 bg-neutral-800",
                                        disabled: pfLoading,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 610,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-xl px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-medium disabled:opacity-50",
                                        disabled: pfLoading,
                                        children: pfLoading ? "Saving..." : "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 618,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: "Existing items"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 629,
                                columnNumber: 11
                            }, this),
                            pfLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-neutral-400",
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 631,
                                columnNumber: 13
                            }, this) : pfRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-neutral-400",
                                children: "No portfolio items."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 633,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                children: pfRows.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "rounded-xl border border-neutral-800 bg-neutral-900 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium mb-2",
                                                children: p.title || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 641,
                                                columnNumber: 19
                                            }, this),
                                            p.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.imageUrl,
                                                alt: "",
                                                className: "h-28 w-full object-cover rounded-lg border border-neutral-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 645,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-28 w-full rounded-lg bg-neutral-800 grid place-items-center text-neutral-500 text-xs",
                                                children: "No image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 651,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deletePortfolio(p.portfolioId),
                                                    className: "rounded-lg bg-red-600/80 hover:bg-red-600 px-3 py-1 text-sm",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                    lineNumber: 656,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                                lineNumber: 655,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p.portfolioId, true, {
                                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                        lineNumber: 637,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
                lineNumber: 565,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/services/services-info/ServiceInfoClient.jsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_s(ServiceInfoClient, "Jng9mmrZHbTD7wHAfxn4k/QwSug=");
_c = ServiceInfoClient;
var _c;
__turbopack_context__.k.register(_c, "ServiceInfoClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2ad65f89._.js.map