"use client";

import { useEffect, useMemo, useState } from "react";

import axios from "axios";
import Modal from "@/components/Admin/Modal"; // Casesensitive on vercel
import { API } from "@/lib/config";
import { Editor } from "@tinymce/tinymce-react";
import { PORTFOLIO_IMAGE_BASE } from "@/lib/config";
const PAGE_SIZE = 20;

export default function ServiceInfoClient() {
  // master data (for dropdown)
  const [serviceTypes, setServiceTypes] = useState([]); // {value: ServicesID, label: titile}
  // table data (service info rows)
  const [rows, setRows] = useState([]); // { ServiceInfoId, ServicesID, title, Description }
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  // modal
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  // form state
  const [form, setForm] = useState({
    ServiceInfoId: 0, // 0 = add, >0 = edit
    ServicesID: "", // dropdown value (string/number)
    title: "",
    Description: "", // rich text (HTML)
  });
  // ---- Portfolio modal state ----
  const [pfOpen, setPfOpen] = useState(false);
  const [pfLoading, setPfLoading] = useState(false);
  const [pfRows, setPfRows] = useState([]); // list for current ServiceInfoId
  const [pfServiceInfoId, setPfServiceInfoId] = useState(null);

  // Add/Edit portfolio form
  const [pfForm, setPfForm] = useState({
    portfolioId: 0, // 0 = add, >0 = update (kept for future use)
    ServiceInfoId: 0, // filled from row.ServiceInfoId
    title: "",
    file: null, // image file (optional on add; required if you want an image)
  });
  // ---------- Load dropdown options (service types) ----------
  async function loadServiceTypes() {
    try {
      console.log("➡️ Fetching service types:", API.LIST);
      const res = await axios.get(API.LIST, { withCredentials: false });

      const arr = Array.isArray(res.data?.GetAllService)
        ? res.data.GetAllService
        : [];

      const options = arr.map((r) => ({
        value: Number(r.ServicesID),
        label: r.titile ?? "",
      }));

      console.log("✅ Service types loaded:", options);
      setServiceTypes(options);
    } catch (err) {
      console.error("❌ Failed to load service types:", err);
      setServiceTypes([]);
    }
  }

  // ---------- Load service info rows ----------
  async function loadInfos() {
    const res = await axios.get(API.SINFO_LIST, { withCredentials: false });
    // Expecting something like: { GetAllServiceInfo: [{ ServiceInfoId, ServicesID, title, Description }, ...] }
    const arr = Array.isArray(res.data?.GetAllService)
      ? res.data.GetAllService
      : Array.isArray(res.data)
      ? res.data
      : [];

    const normalized = arr.map((r) => ({
      ServiceInfoId: Number(r.ServiceInfoId ?? r.serviceInfoId ?? r.Id ?? 0),
      ServicesID: Number(
        r.ServicesID ?? r.servicesID ?? r.ServiceId ?? r.serviceId ?? 0
      ),
      title: r.title ?? "",
      Description: r.Description ?? r.description ?? "",
      _raw: r,
    }));

    setRows(normalized);
  }

  async function loadAll() {
    setLoading(true);
    try {
      await Promise.all([loadServiceTypes(), loadInfos()]);
    } catch (e) {
      console.error(e);
      alert("Failed to load data. Check API URLs and CORS/HTTPS.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  // ---------- filter + paginate ----------
  const filtered = useMemo(() => {
    if (!q) return rows;
    const qq = q.toLowerCase();
    return rows.filter((r) => (r.title || "").toLowerCase().includes(qq));
  }, [rows, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const pageRows = filtered.slice(
    (pageSafe - 1) * PAGE_SIZE,
    pageSafe * PAGE_SIZE
  );

  // ---------- open Add ----------
  function openNew() {
    setForm({
      ServiceInfoId: 0,
      ServicesID: serviceTypes.length ? serviceTypes[0].value : "", // only if loaded
      title: "",
      Description: "",
    });
    setOpen(true);
  }

  // ---------- open Edit ----------
  function openEdit(row) {
    setForm({
      ServiceInfoId: Number(row.ServiceInfoId),
      ServicesID: Number(row.ServicesID),
      title: row.title ?? "",
      Description: row.Description ?? "",
    });
    setOpen(true);
  }

  // ---------- upsert (add/edit) ----------
  async function submit(e) {
    e.preventDefault();
    try {
      setSubmitting(true);

      const payload = {
        // exact keys you requested
        ServicesID: Number(form.ServicesID || 0),
        ServiceInfoId: Number(form.ServiceInfoId || 0),
        title: form.title,
        Description: form.Description, // HTML from the editor
      };
      console.log("Checl payload--", payload);
      // POST one endpoint for both add & update (like your previous page)
      const upRes = await axios.post(API.SINFO_UPSERT, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });

      // Optional: handle wrapper { ServiceInfoAdd: { error, message, Data: {...} } }
      const upJson = upRes.data || {};
      const newId =
        upJson?.ServiceInfoAdd?.Data?.ServiceInfoId ??
        upJson?.Data?.ServiceInfoId ??
        upJson?.ServiceInfoId ??
        payload.ServiceInfoId;

      // After save, close and refresh
      setOpen(false);
      await loadInfos();
    } catch (e) {
      console.error(e);
      const msg =
        e?.response?.data?.message ||
        e?.response?.data ||
        e.message ||
        "Submit failed";
      alert(String(msg));
    } finally {
      setSubmitting(false);
    }
  }

  // ---------- delete ----------
  async function onDelete(id) {
    if (!confirm("Delete this item?")) return;
    try {
      // Your legacy pattern uses GET with route param:
      await axios.get(API.SINFO_DELETE(id), { withCredentials: false });
      await loadInfos();
    } catch (e) {
      console.error(e);
      alert("Delete failed (check endpoint).");
    }
  }

  // helper to get label for dropdown value
  function getServiceLabel(id) {
    const found = serviceTypes.find((s) => s.value === Number(id));
    return found?.label || `#${id}`;
  }
  // open modal for a row
  async function openPortfolio(row) {
    setPfServiceInfoId(Number(row.ServiceInfoId));
    setPfForm({
      portfolioId: 0,
      ServiceInfoId: Number(row.ServiceInfoId),
      title: "",
      file: null,
    });
    setPfOpen(true);
    await loadPortfolioList(Number(row.ServiceInfoId));
  }

  // load list for a specific ServiceInfoId
  async function loadPortfolioList(serviceInfoId) {
    setPfLoading(true);
    try {
      console.log("➡️ Portfolio list GET:", API.PORTFOLIO_LIST(serviceInfoId));
      const res = await axios.get(API.PORTFOLIO_LIST(serviceInfoId), {
        withCredentials: false,
      });
      console.log("✅ Portfolio list raw:", res.data);

      // Accept both shapes:
      // { GetSpecificPortfolio: [ {...}, {...} ] }  <-- current
      // { GetSpecificPortfolio: { ... } }           <-- older
      // [] / {} / null                               <-- empty
      const gp = res.data?.GetSpecificPortfolio;
      const arr = Array.isArray(gp) ? gp : gp ? [gp] : [];

      const normalized = arr.map((r) => ({
        portfolioId: Number(r.portfolioId ?? r.PortfolioId ?? r.id ?? 0),
        ServiceInfoId: Number(r.ServiceInfoId ?? r.serviceInfoId ?? 0),
        title: r.title ?? "",
        imageUrl: r.image
          ? String(r.image).startsWith("http")
            ? r.image
            : `${PORTFOLIO_IMAGE_BASE}${r.image}`
          : null,
        _raw: r,
      }));

      console.log("📦 Parsed portfolio items:", normalized);
      setPfRows(normalized);
    } catch (e) {
      console.error("❌ Portfolio list failed:", e);
      setPfRows([]);
    } finally {
      setPfLoading(false);
    }
  }

  // add (or update) a portfolio: JSON first, then image upload if file selected
  async function submitPortfolio(e) {
    e.preventDefault();
    try {
      setPfLoading(true);

      const payload = {
        portfolioId: Number(pfForm.portfolioId || 0),
        ServiceInfoId: Number(pfForm.ServiceInfoId || pfServiceInfoId || 0),
        title: pfForm.title,
        // image is set by upload call, not here
      };

      const upRes = await axios.post(API.PORTFOLIO_UPSERT, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });
      const upJson = upRes.data || {};

      // try to extract new/existing id
      const newId =
        upJson?.PortfolioAddOrUpdate?.Data?.portfolioId ??
        upJson?.Data?.portfolioId ??
        upJson?.portfolioId ??
        payload.portfolioId;

      // if user selected a file, upload it now
      if (pfForm.file && newId) {
        const fd = new FormData();
        fd.append("portfolioId", String(newId));
        fd.append("file", pfForm.file); // backend reads Request.Files[*]
        await axios.post(API.PORTFOLIO_UPLOAD, fd, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: false,
        });
      }

      // reset form (stay in modal), refresh list
      setPfForm({
        portfolioId: 0,
        ServiceInfoId: Number(pfForm.ServiceInfoId || pfServiceInfoId || 0),
        title: "",
        file: null,
      });
      await loadPortfolioList(Number(pfServiceInfoId));
    } catch (e) {
      console.error(e);
      alert(e?.response?.data?.message || e.message || "Save failed");
    } finally {
      setPfLoading(false);
    }
  }

  // delete a portfolio row
  async function deletePortfolio(portfolioId) {
    if (!confirm("Delete this portfolio item?")) return;
    try {
      await axios.post(
        API.PORTFOLIO_DELETE,
        { portfolioId: Number(portfolioId) },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      await loadPortfolioList(Number(pfServiceInfoId));
    } catch (e) {
      console.error(e);
      alert("Delete failed");
    }
  }
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Services Info</h1>
        <div className="flex gap-2">
          <input
            placeholder="Search title..."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            className="w-full sm:w-64 rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={openNew}
            disabled={!serviceTypes.length}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 font-medium disabled:opacity-50"
          >
            + Add New
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left bg-neutral-900/70">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-6" colSpan={3}>
                  Loading…
                </td>
              </tr>
            ) : pageRows.length === 0 ? (
              <tr>
                <td className="px-4 py-6" colSpan={3}>
                  No records.
                </td>
              </tr>
            ) : (
              pageRows.map((r, idx) => (
                <tr
                  key={r.ServiceInfoId}
                  className="border-t border-neutral-800"
                >
                  <td className="px-4 py-3">
                    {(pageSafe - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3">{r.title || "-"}</td>

                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => openPortfolio(r)}
                        className="rounded-lg bg-indigo-600/80 hover:bg-indigo-600 px-3 py-1"
                      >
                        Portfolio
                      </button>
                      <button
                        onClick={() => openEdit(r)}
                        className="rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3 py-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(r.ServiceInfoId)}
                        className="rounded-lg bg-red-600/80 hover:bg-red-600 px-3 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm text-neutral-400">
          Page {pageSafe} of {totalPages} • {filtered.length} total
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={pageSafe <= 1}
            className="rounded-xl border border-neutral-700 px-3 py-1 disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={pageSafe >= totalPages}
            className="rounded-xl border border-neutral-700 px-3 py-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={form.ServiceInfoId ? "Edit Services Info" : "Add Services Info"}
      >
        <form onSubmit={submit} className="space-y-4">
          <input type="hidden" value={form.ServiceInfoId} readOnly />

          {/* Services Name (dropdown) */}
          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Services Name
            </label>
            <select
              required
              value={form.ServicesID}
              onChange={(e) =>
                setForm({ ...form, ServicesID: Number(e.target.value) })
              }
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="" disabled>
                Select a service…
              </option>
              {serviceTypes.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            {form.ServicesID && (
              <p className="mt-1 text-xs text-neutral-500">
                Selected: {getServiceLabel(form.ServicesID)} (ID{" "}
                {form.ServicesID})
              </p>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter a title"
            />
          </div>

          {/* Description (rich editor) */}
          {/* Description (rich editor) */}
          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Description
            </label>
            <div className="rounded-xl border border-neutral-700 bg-neutral-800">
              <Editor
                tinymceScriptSrc="/tinymce/tinymce.min.js" // load from /public/tinymce
                value={form.Description}
                onEditorChange={(content) =>
                  setForm({ ...form, Description: content })
                }
                init={{
                  // tell TinyMCE where to fetch its own assets (skins/plugins)
                  base_url: "/tinymce", // IMPORTANT (underscore!)
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
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic underline | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | removeformat | help",
                  skin: "oxide-dark",
                  content_css: "dark",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color:#fff; background:#1e1e1e; }",
                }}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2 bg-neutral-800"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              className="rounded-xl px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-medium disabled:opacity-50"
              disabled={isSubmitting}
            >
              {form.ServiceInfoId
                ? isSubmitting
                  ? "Updating..."
                  : "Edit"
                : isSubmitting
                ? "Saving..."
                : "Save"}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={pfOpen}
        onClose={() => setPfOpen(false)}
        title={`Portfolio • ServiceInfo #${pfServiceInfoId ?? "-"}`}
      >
        <form onSubmit={submitPortfolio} className="space-y-4">
          <input type="hidden" value={pfForm.ServiceInfoId} readOnly />

          {/* Add new portfolio item */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm text-neutral-300 mb-1">
                Title
              </label>
              <input
                required
                value={pfForm.title}
                onChange={(e) =>
                  setPfForm({ ...pfForm, title: e.target.value })
                }
                className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Portfolio item title"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-neutral-300 mb-1">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setPfForm({ ...pfForm, file: e.target.files?.[0] || null })
                }
                className="block w-full text-sm text-neutral-300 file:mr-4 file:rounded-xl file:border-0 file:bg-neutral-800 file:px-3 file:py-2 file:text-neutral-200 hover:file:bg-neutral-700"
              />
              {pfForm.file && (
                <p className="mt-1 text-xs text-neutral-500">
                  {pfForm.file.name} • {(pfForm.file.size / 1024).toFixed(0)} KB
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setPfOpen(false)}
              className="rounded-xl px-4 py-2 bg-neutral-800"
              disabled={pfLoading}
            >
              Close
            </button>
            <button
              className="rounded-xl px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-medium disabled:opacity-50"
              disabled={pfLoading}
            >
              {pfLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>

        {/* Existing items */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Existing items</h3>
          {pfLoading ? (
            <div className="text-sm text-neutral-400">Loading…</div>
          ) : pfRows.length === 0 ? (
            <div className="text-sm text-neutral-400">No portfolio items.</div>
          ) : (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pfRows.map((p) => (
                <li
                  key={p.portfolioId}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-3"
                >
                  <div className="text-sm font-medium mb-2">
                    {p.title || "-"}
                  </div>
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt=""
                      className="h-28 w-full object-cover rounded-lg border border-neutral-800"
                    />
                  ) : (
                    <div className="h-28 w-full rounded-lg bg-neutral-800 grid place-items-center text-neutral-500 text-xs">
                      No image
                    </div>
                  )}
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => deletePortfolio(p.portfolioId)}
                      className="rounded-lg bg-red-600/80 hover:bg-red-600 px-3 py-1 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Modal>
    </div>
  );
}
