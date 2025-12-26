// src/lib/config.js

// ✅ Always store BASE without trailing slash
export const DOTNET_API_BASE = (
  process.env.NEXT_PUBLIC_DOTNET_API_BASE ||
  "https://limitlessgraphicsapi.marubardoli.com"
).replace(/\/+$/, "");

// ✅ Static file bases
export const IMAGE_BASE = `${DOTNET_API_BASE}/Files/Services/`;
export const PORTFOLIO_IMAGE_BASE = `${DOTNET_API_BASE}/Files/portfolio/`; // lowercase

export const API = {
  // Services
  LIST: `${DOTNET_API_BASE}/api/Service/GetAllService`,
  SERVICE_BY_SLUG: (slug) =>
    `${DOTNET_API_BASE}/api/Service/GetServiceBySlug/${encodeURIComponent(
      slug
    )}`,

  // Service Info
  SINFO_LIST_SERVICE_WISE: (serviceId) =>
    `${DOTNET_API_BASE}/api/Service/GetServiceInfoListServiceWise/${serviceId}`,

  // Portfolio
  PORTFOLIO_BY_SERVICEINFO: (serviceInfoId) =>
    `${DOTNET_API_BASE}/api/Portfolio/GetSpecificPortfolio/${serviceInfoId}`,

  SERVICES_WITH_INFO: `${DOTNET_API_BASE}/api/Service/GetAllServicesListwithInfo`,

  SINFO_LIST_SLUG_WISE: (slug) =>
    `${DOTNET_API_BASE}/api/Service/GetServiceInfoListslugWise/${encodeURIComponent(
      slug
    )}`,

  SINFO_LIST: `${DOTNET_API_BASE}/api/Service/GetAllServiceInfo`,

  PORTFOLIO_LIST: (serviceInfoId) =>
    `${DOTNET_API_BASE}/api/Portfolio/get/${serviceInfoId}`,
  PORTFOLIO_UPSERT: `${DOTNET_API_BASE}/api/Portfolio/insert`, // JSON (add/update)
  PORTFOLIO_UPLOAD: `${DOTNET_API_BASE}/api/Portfolio/uploaddocuments`, // multipart (image)
  PORTFOLIO_DELETE: `${DOTNET_API_BASE}/api/Portfolio/delete`, // POST { portfolioId }

  PORTFOLIO_LIST: `${DOTNET_API_BASE.replace(
    /\/+$/,
    ""
  )}/api/Portfolio/getportfolio`, // for front end
};
