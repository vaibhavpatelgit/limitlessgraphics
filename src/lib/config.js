const USE_PROD =
  String(process.env.NEXT_PUBLIC_USE_PROD_API).toLowerCase() === "true";

// ✅ Base URLs (set in .env.local)
const LOCAL_BASE =
  process.env.NEXT_PUBLIC_DOTNET_API_LOCAL || "https://localhost:44329";

const PROD_BASE =
  process.env.NEXT_PUBLIC_DOTNET_API_PROD ||
  "https://limitlessgraphicsapi.marubardoli.com";

// ✅ Final base (no trailing slash)
export const DOTNET_API_BASE = (USE_PROD ? PROD_BASE : LOCAL_BASE).replace(
  /\/+$/,
  ""
);

// ✅ Static file bases
export const IMAGE_BASE = `${DOTNET_API_BASE}/Files/Services/`;
export const PORTFOLIO_IMAGE_BASE = `${DOTNET_API_BASE}/Files/portfolio/`; // lowercase

export const API = {
  // Services
  LIST: `${DOTNET_API_BASE}/api/Service/GetAllService`,
  SERVICES_WITH_INFO: `${DOTNET_API_BASE}/api/Service/GetAllServicesListwithInfo`,

  SERVICE_BY_SLUG: (slug) =>
    `${DOTNET_API_BASE}/api/Service/GetServiceBySlug/${encodeURIComponent(
      slug
    )}`,

  // Service Info
  SINFO_LIST_SERVICE_WISE: (serviceId) =>
    `${DOTNET_API_BASE}/api/Service/GetServiceInfoListServiceWise/${serviceId}`,

  SINFO_LIST_SLUG_WISE: (slug) =>
    `${DOTNET_API_BASE}/api/Service/GetServiceInfoListslugWise/${encodeURIComponent(
      slug
    )}`,

  SINFO_LIST: `${DOTNET_API_BASE}/api/Service/GetAllServiceInfo`,

  // Portfolio (front-end list)
  PORTFOLIO_GET_ALL: `${DOTNET_API_BASE}/api/Portfolio/getportfolio`,

  // Portfolio (serviceInfo-wise gallery)
  PORTFOLIO_BY_SERVICEINFO: (serviceInfoId) =>
    `${DOTNET_API_BASE}/api/Portfolio/GetSpecificPortfolio/${serviceInfoId}`,

  // Admin CRUD
  PORTFOLIO_GET: (serviceInfoId) =>
    `${DOTNET_API_BASE}/api/Portfolio/get/${serviceInfoId}`,
  PORTFOLIO_UPSERT: `${DOTNET_API_BASE}/api/Portfolio/insert`, // JSON (add/update)
  PORTFOLIO_UPLOAD: `${DOTNET_API_BASE}/api/Portfolio/uploaddocuments`, // multipart (image)
  PORTFOLIO_DELETE: `${DOTNET_API_BASE}/api/Portfolio/delete`, // POST { portfolioId }
};
