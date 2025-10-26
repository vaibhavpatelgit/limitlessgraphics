export const DOTNET_API_BASE = "https://localhost:44329"; // change if needed

export const API = {
  LIST: `${DOTNET_API_BASE}/api/Service/GetAllService`,
  UPSERT: `${DOTNET_API_BASE}/api/Service/insertService`,
  DELETE: (id) => `${DOTNET_API_BASE}/api/Service/DeleteService/${id}`,
  UPLOAD: `${DOTNET_API_BASE}/api/Service/uploaddocuments`,

  // --- NEW: Services Info endpoints (adjust these to match your .NET routes) ---
  // List all service infos
  SINFO_LIST: `${DOTNET_API_BASE}/api/Service/GetAllServiceInfo`,
  // Insert + Update (same endpoint pattern as before)
  SINFO_UPSERT: `${DOTNET_API_BASE}/api/Service/insertServiceInfo`,
  // Delete by id (GET route param, same legacy pattern)
  SINFO_DELETE: (id) =>
    `${DOTNET_API_BASE}/api/Service/DeleteServiceInfo/${id}`,

  PORTFOLIO_LIST: (serviceInfoId) =>
    `${DOTNET_API_BASE}/api/Portfolio/get/${serviceInfoId}`,
  PORTFOLIO_UPSERT: `${DOTNET_API_BASE}/api/Portfolio/insert`, // JSON (add/update)
  PORTFOLIO_UPLOAD: `${DOTNET_API_BASE}/api/Portfolio/uploaddocuments`, // multipart (image)
  PORTFOLIO_DELETE: `${DOTNET_API_BASE}/api/Portfolio/delete`, // POST { portfolioId }
};
// If the API returns only a filename (e.g. "abc.jpg"), we can build a full URL:
export const IMAGE_BASE = `${DOTNET_API_BASE}/Files/Services/`;
export const PORTFOLIO_IMAGE_BASE = `${DOTNET_API_BASE}/Files/portfolio/`; // NEW
