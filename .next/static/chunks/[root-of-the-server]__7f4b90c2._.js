(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/HeroVideo.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>HeroVideo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/* typing line */ function TypingLine() {
    _s();
    const prefix = "We provide you ";
    const words = [
        "design",
        "card",
        "print"
    ];
    const [wi, setWi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [si, setSi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [del, setDel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blink, setBlink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingLine.useEffect": ()=>{
            const t = setInterval({
                "TypingLine.useEffect.t": ()=>setBlink({
                        "TypingLine.useEffect.t": (b)=>!b
                    }["TypingLine.useEffect.t"])
            }["TypingLine.useEffect.t"], 500);
            return ({
                "TypingLine.useEffect": ()=>clearInterval(t)
            })["TypingLine.useEffect"];
        }
    }["TypingLine.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingLine.useEffect": ()=>{
            const w = words[wi];
            const done = si === w.length;
            const speed = del ? 55 : 110;
            const to = setTimeout({
                "TypingLine.useEffect.to": ()=>{
                    if (!del && done) setDel(true);
                    else if (del && si === 0) {
                        setDel(false);
                        setWi({
                            "TypingLine.useEffect.to": (i)=>(i + 1) % words.length
                        }["TypingLine.useEffect.to"]);
                    } else setSi({
                        "TypingLine.useEffect.to": (i)=>i + (del ? -1 : 1)
                    }["TypingLine.useEffect.to"]);
                }
            }["TypingLine.useEffect.to"], done && !del ? 1500 : speed);
            return ({
                "TypingLine.useEffect": ()=>clearTimeout(to)
            })["TypingLine.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TypingLine.useEffect"], [
        si,
        del,
        wi
    ]);
    const current = words[wi].slice(0, si);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-2xl sm:text-4xl font-semibold text-left",
        children: [
            prefix,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white",
                children: current
            }, void 0, false, {
                fileName: "[project]/src/components/HeroVideo.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 ".concat(blink ? "opacity-100" : "opacity-0"),
                children: "|"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroVideo.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroVideo.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(TypingLine, "YcWF1GhTemWXC0Qd/GEJ/+jCUoM=");
_c = TypingLine;
function HeroVideo() {
    // Temporary YouTube background
    const YT_ID = "RrWVIUDPmHE";
    const src = "https://www.youtube.com/embed/".concat(YT_ID, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(YT_ID, "&playsinline=1&modestbranding=1&rel=0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[90vh] sm:min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        style: {
                            width: "100vw",
                            height: "56.25vw",
                            minHeight: "100vh",
                            minWidth: "177.78vh"
                        },
                        src: src,
                        title: "Background video",
                        allow: "autoplay; fullscreen; picture-in-picture",
                        referrerPolicy: "strict-origin-when-cross-origin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroVideo.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroVideo.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroVideo.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex min-h-[90vh] sm:min-h-screen items-center justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full pl-4 sm:pl-8 lg:pl-12 pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-6xl font-bold leading-tight",
                                children: "Limitless Graphics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroVideo.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingLine, {}, void 0, false, {
                                    fileName: "[project]/src/components/HeroVideo.jsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroVideo.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        className: "rounded-md border border-white/20 px-4 py-2 hover:bg-white/10",
                                        children: "Explore Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroVideo.jsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#quote",
                                        className: "rounded-md border border-white/20 px-4 py-2 hover:bg-white/10",
                                        children: "Get a Quote"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroVideo.jsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroVideo.jsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroVideo.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroVideo.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroVideo.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroVideo.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = HeroVideo;
var _c, _c1;
__turbopack_context__.k.register(_c, "TypingLine");
__turbopack_context__.k.register(_c1, "HeroVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ProjectsSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProjectsSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const IMAGES = [
    {
        title: "Custom Van Wrap",
        src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "Storefront Vinyl",
        src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "PPF Install",
        src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "Office Frosted",
        src: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "Color Change",
        src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "Wall Mural",
        src: "https://images.unsplash.com/photo-1523419409543-733b092ef2be?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "Fleet Graphics",
        src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=70"
    },
    {
        title: "Tint & Privacy",
        src: "https://images.unsplash.com/photo-1458734112662-42ecf2d1308f?auto=format&fit=crop&w=1600&q=70"
    }
];
function ProjectsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.25,
        margin: "-10% 0% -10% 0%"
    });
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoomed, setZoomed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openAt = (i)=>{
        setIndex(i);
        setOpen(true);
        setZoomed(false);
    };
    const close = ()=>{
        setOpen(false);
        setZoomed(false);
    };
    const prev = ()=>setIndex((i)=>(i - 1 + IMAGES.length) % IMAGES.length);
    const next = ()=>setIndex((i)=>(i + 1) % IMAGES.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSection.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "ProjectsSection.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") close();
                    if (e.key === "ArrowLeft") prev();
                    if (e.key === "ArrowRight") next();
                }
            }["ProjectsSection.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "ProjectsSection.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["ProjectsSection.useEffect"];
        }
    }["ProjectsSection.useEffect"], [
        open
    ]);
    // stagger reveal (zoom-out)
    const gridVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsSection.useMemo[gridVariants]": ()=>({
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.08
                    }
                }
            })
    }["ProjectsSection.useMemo[gridVariants]"], []);
    const cardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsSection.useMemo[cardVariants]": ()=>({
                hidden: {
                    opacity: 0,
                    y: 18,
                    scale: 1.06
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1.0,
                    transition: {
                        duration: 0.45,
                        ease: "easeOut"
                    }
                }
            })
    }["ProjectsSection.useMemo[cardVariants]"], []);
    const onImgError = (e)=>{
        e.currentTarget.src = "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='#e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='28'>Image unavailable</text></svg>");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative bg-white text-neutral-900 py-12 sm:py-16 pb-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 sm:mb-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-neutral-700 max-w-2xl mx-auto",
                            children: "We design, print, and install storefront and interior graphics built for everyday wear. From glass decals and banner sets to exterior wayfinding and C-CAN signage, every piece is produced on premium films with UV-stable inks for crisp color and long life. Need layout help?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: gridVariants,
                        initial: "hidden",
                        animate: inView ? "visible" : "hidden",
                        className: "relative z-10 grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                        children: IMAGES.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                variants: cardVariants,
                                onClick: ()=>openAt(i),
                                className: "group relative rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white",
                                "aria-label": "Open ".concat(img.title),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[16/10] w-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img.src,
                                            alt: img.title,
                                            onError: onImgError,
                                            className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                                            loading: "lazy",
                                            decoding: "async"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-left",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm sm:text-base font-semibold",
                                            children: img.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, img.src, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "sm:hidden mt-6 mb-2 flex justify-center text-center select-none",
                        variants: {
                            hidden: {
                                transition: {
                                    staggerChildren: 0.18,
                                    staggerDirection: -1
                                }
                            },
                            visible: {
                                transition: {
                                    staggerChildren: 0.18,
                                    staggerDirection: 1
                                }
                            }
                        },
                        initial: "hidden",
                        animate: inView ? "visible" : "hidden",
                        style: {
                            lineHeight: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: 40
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.55,
                                        ease: "easeOut"
                                    }
                                }
                            },
                            className: "rainbow-text opacity-70 font-extrabold uppercase tracking-[0.18em]   whitespace-nowrap leading-none text-4xl",
                            children: "OUR PROJECT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "hidden sm:flex pointer-events-none absolute inset-x-0 bottom-0 z-0 justify-center select-none text-center translate-y-[8%]",
                variants: {
                    hidden: {
                        transition: {
                            staggerChildren: 0.18,
                            staggerDirection: -1
                        }
                    },
                    visible: {
                        transition: {
                            staggerChildren: 0.18,
                            staggerDirection: 1
                        }
                    }
                },
                initial: "hidden",
                animate: inView ? "visible" : "hidden",
                style: {
                    lineHeight: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 40
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.55,
                                ease: "easeOut"
                            }
                        }
                    },
                    className: "rainbow-text opacity-70 font-extrabold uppercase tracking-[0.18em]   whitespace-nowrap leading-none text-6xl md:text-7xl lg:text-8xl",
                    children: "OUR PROJECT"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.jsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4",
                onClick: close,
                "aria-modal": "true",
                role: "dialog",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-6xl w-full h-full flex items-center justify-center",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            initial: {
                                opacity: 0,
                                scale: 0.96
                            },
                            animate: {
                                opacity: 1,
                                scale: zoomed ? 1.4 : 1
                            },
                            transition: {
                                duration: 0.25
                            },
                            src: IMAGES[index].src,
                            alt: IMAGES[index].title,
                            onError: onImgError,
                            className: "max-h-full max-w-full object-contain ".concat(zoomed ? "cursor-zoom-out" : "cursor-zoom-in"),
                            onClick: ()=>setZoomed((z)=>!z)
                        }, index, false, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white",
                            "aria-label": "Previous",
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: next,
                            className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white",
                            "aria-label": "Next",
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: close,
                            className: "absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full px-3 py-1.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white",
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.jsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.jsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "U9qnrnLhu2ZlMl+4J/vP2Zd8EB4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ServicesSectionHome.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ServicesSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SLIDES = [
    {
        title: "Printed Vinyl & Signs",
        img: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=1600&q=60",
        href: "/services/printed-vinyl-signs"
    },
    {
        title: "Vehicle Wraps (Custom)",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=60",
        href: "/services/vehicle-fleet-wrap-design"
    },
    {
        title: "Vehicle Wraps (Color Change)",
        img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1600&q=60",
        href: "/services/vehicle-fleet-wrap-design"
    },
    {
        title: "Paint Protection Film",
        img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1600&q=60",
        href: "/services/vehicle-fleet-wrap-design"
    },
    {
        title: "Windows & Glass",
        img: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=1600&q=60",
        href: "/services/windows-glass"
    },
    {
        title: "Wall Wraps",
        img: "https://images.unsplash.com/photo-1523419409543-733b092ef2be?auto=format&fit=crop&w=1600&q=60",
        href: "/services/printed-vinyl-signs"
    }
];
function ServicesSection() {
    _s();
    // in-view state for the bottom banner animation
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.45,
        margin: "-10% 0% -10% 0%"
    });
    // carousel
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        align: "start",
        loop: true,
        slidesToScroll: 1
    });
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServicesSection.useCallback[onSelect]": ()=>{
            if (!emblaApi) return;
            setSelected(emblaApi.selectedScrollSnap());
        }
    }["ServicesSection.useCallback[onSelect]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesSection.useEffect": ()=>{
            if (!emblaApi) return;
            emblaApi.on("select", onSelect);
            onSelect();
        }
    }["ServicesSection.useEffect"], [
        emblaApi,
        onSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesSection.useEffect": ()=>{
            if (!emblaApi || !autoPlay) return;
            const id = setInterval({
                "ServicesSection.useEffect.id": ()=>emblaApi.scrollNext()
            }["ServicesSection.useEffect.id"], 5000);
            return ({
                "ServicesSection.useEffect": ()=>clearInterval(id)
            })["ServicesSection.useEffect"];
        }
    }["ServicesSection.useEffect"], [
        emblaApi,
        autoPlay
    ]);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServicesSection.useCallback[scrollPrev]": ()=>emblaApi && emblaApi.scrollPrev()
    }["ServicesSection.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServicesSection.useCallback[scrollNext]": ()=>emblaApi && emblaApi.scrollNext()
    }["ServicesSection.useCallback[scrollNext]"], [
        emblaApi
    ]);
    // word-by-word animation (behind cards)
    const container = {
        hidden: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1
            }
        },
        visible: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1
            }
        }
    };
    const word = {
        hidden: {
            opacity: 0,
            y: 48
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "services",
        className: "relative w-full py-12 sm:py-16 bg-gradient-to-r from-fuchsia-700/40 via-amber-500/40 to-cyan-500/40 border-t border-white/10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none absolute inset-x-0 bottom-2 sm:bottom-4 z-0 flex justify-center select-none",
                variants: container,
                initial: "hidden",
                animate: inView ? "visible" : "hidden",
                style: {
                    lineHeight: 1
                },
                children: [
                    "OUR",
                    "SERVICES"
                ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        variants: word,
                        className: "mx-3 font-extrabold uppercase tracking-[0.2em]   text-white/15 drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]   text-5xl sm:text-7xl md:text-8xl lg:text-9xl",
                        children: w
                    }, w, false, {
                        fileName: "[project]/src/components/ServicesSectionHome.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-6xl px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 sm:mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-200/90 text-center max-w-xl mx-auto",
                            children: "We design, print, and install storefront and interior graphics built for everyday wear. From glass decals and banner sets to exterior wayfinding and C-CAN signage, every piece is produced on premium films with UV-stable inks for crisp color and long life. Need layout help?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServicesSectionHome.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesSectionHome.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        onMouseEnter: ()=>setAutoPlay(false),
                        onMouseLeave: ()=>setAutoPlay(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden px-2 sm:px-3 lg:px-4",
                                ref: emblaRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex -mx-2 sm:-mx-3 lg:-mx-4",
                                    children: SLIDES.map((item, i)=>{
                                        const isActive = i === selected;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 grow-0 basis-1/2 sm:basis-1/3 lg:basis-1/4 px-2 sm:px-3 lg:px-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                className: "block rounded-2xl overflow-hidden border border-white/10 bg-black/40 transition\n                        ".concat(isActive ? "scale-[1.02] shadow-xl" : "opacity-95 hover:opacity-100", "\n                      "),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aspect-[16/10] w-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.img,
                                                            alt: item.title,
                                                            className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
                                                            loading: "lazy",
                                                            decoding: "async"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                                                lineNumber: 171,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block mt-2 text-sm underline underline-offset-2",
                                                                children: "Learn more →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                                                lineNumber: 172,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this)
                                        }, item.title, false, {
                                            fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: scrollPrev,
                                "aria-label": "Previous",
                                className: "absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 backdrop-blur border border-white/40",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: scrollNext,
                                "aria-label": "Next",
                                className: "absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/20 hover:bg-white/30 backdrop-blur border border-white/40",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServicesSectionHome.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServicesSectionHome.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServicesSectionHome.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(ServicesSection, "GlnWtYOKNHx7hmwPju+cXAGGocs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/poppins_f334207c.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "poppins_f334207c-module__PPrwOW__className",
});
}),
"[next]/internal/font/google/poppins_f334207c.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_f334207c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_f334207c.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_f334207c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontWeight: 800,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_f334207c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_f334207c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/components/WelcomeBilingual.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>WelcomeBilingual
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_f334207c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_f334207c.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PHRASES = [
    "Welcome Limitlessgraphics",
    "Bienvenue chez Limitlessgraphics"
];
function WelcomeBilingual() {
    _s();
    const [pi, setPi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ci, setCi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [del, setDel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomeBilingual.useEffect": ()=>{
            const current = PHRASES[pi];
            let t;
            if (!del && ci < current.length) {
                t = setTimeout({
                    "WelcomeBilingual.useEffect": ()=>setCi(ci + 1)
                }["WelcomeBilingual.useEffect"], 90); // typing
            } else if (!del && ci === current.length) {
                t = setTimeout({
                    "WelcomeBilingual.useEffect": ()=>setDel(true)
                }["WelcomeBilingual.useEffect"], 3000); // hold 3s
            } else if (del && ci > 0) {
                t = setTimeout({
                    "WelcomeBilingual.useEffect": ()=>setCi(ci - 1)
                }["WelcomeBilingual.useEffect"], 50); // deleting
            } else if (del && ci === 0) {
                setDel(false);
                setPi({
                    "WelcomeBilingual.useEffect": (i)=>(i + 1) % PHRASES.length
                }["WelcomeBilingual.useEffect"]); // next phrase
            }
            return ({
                "WelcomeBilingual.useEffect": ()=>clearTimeout(t)
            })["WelcomeBilingual.useEffect"];
        }
    }["WelcomeBilingual.useEffect"], [
        ci,
        del,
        pi
    ]);
    const text = PHRASES[pi].slice(0, ci);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white text-neutral-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-30 w-full flex items-center justify-center px-4 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_f334207c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className, " rainbow-text font-extrabold leading-none text-center whitespace-nowrap text-3xl sm:text-5xl md:text-6xl"),
                title: text,
                children: [
                    text,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 animate-pulse text-black font-extrabold",
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeBilingual.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeBilingual.jsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WelcomeBilingual.jsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WelcomeBilingual.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(WelcomeBilingual, "e4udRBaQ7fgL7gdeSc/vq5BWne4=");
_c = WelcomeBilingual;
var _c;
__turbopack_context__.k.register(_c, "WelcomeBilingual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__7f4b90c2._.js.map