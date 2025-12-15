"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Modal from "@/components/Admin/Modal";
import { API, IMAGE_BASE } from "@/lib/config";

const PAGE_SIZE = 20;

export default function ServiceTypeClient() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  // modal state
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  // form state
  const [form, setForm] = useState({
    ServiceId: 0, // 0 = add, >0 = edit
    ordernumber: "",
    description: "",
    title: "",
    file: null, // selected File (optional)
    currentImage: null, // preview current image filename/url
  });

  // ---------- Load list ----------
  async function load() {
    setLoading(true);
    try {
      const res = await axios.get(API.LIST, { withCredentials: false });
      // API shape: { GetAllService: [ { ServicesID, titile, coverimage, ordernumber }, ... ] }
      const arr = Array.isArray(res.data?.GetAllService)
        ? res.data.GetAllService
        : [];
      const normalized = arr.map((r) => {
        const filename = r.coverimage ?? null;
        const imageUrl = filename
          ? String(filename).startsWith("http")
            ? filename
            : `${IMAGE_BASE}${filename}`
          : null;
        return {
          id: r.ServicesID,
          ServiceId: r.ServicesID,
          title: r.titile ?? "",
          ordernumber: r.ordernumber ?? 0,
          description: r.description ?? r.Description ?? r.descriptions ?? "",
          imageUrl,
          _raw: r,
        };
      });
      setRows(normalized);
    } catch (e) {
      console.error(e);
      alert("Could not load services. Check API URL/CORS/HTTPS.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    load();
  }, []);

  // ---------- Client-side search + pagination ----------
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

  // ---------- Open modal: Add ----------
  function openNew() {
    setForm({
      ServiceId: 0,
      ordernumber: "",
      title: "",
      file: null,
      currentImage: null,
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
      currentImage: r.imageUrl || null,
    });
    setOpen(true);
  }

  // ---------- Upload cover image (second call) ----------
  async function uploadCover(servicesId, file) {
    const fd = new FormData();
    // Backend expects "ServicesID" in form data, and iterates Request.Files (any key). We'll use "file".
    fd.append("ServicesID", String(servicesId));
    fd.append("file", file);

    await axios.post(API.UPLOAD, fd, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: false,
    });
  }

  // ---------- Submit (Add/Edit) ----------
  async function submit(e) {
    e.preventDefault();
    try {
      setSubmitting(true);

      // 1) Upsert JSON first
      const payload = {
        ServicesID: Number(form.ServiceId || 0), // 👈 FIXED (was ServiceID)
        ordernumber: Number(form.ordernumber || 0),
        titile: form.title,
        description: form.description,
      };
      console.log("Check Payload-", payload);

      const upRes = await axios.post(API.UPSERT, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });

      const upJson = upRes.data || {};
      const newId =
        upJson?.ServiceAdd?.Data?.ServicesID ??
        upJson?.Data?.ServicesID ??
        upJson?.ServicesID ??
        payload.ServicesID;

      // 2) If a new file selected, upload
      if (form.file && newId) {
        await uploadCover(newId, form.file);
      }

      setOpen(false);
      await load();
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

  // ---------- Delete ----------
  async function onDelete(id) {
    if (!confirm("Delete this item?")) return;
    try {
      const res = await axios.get(API.DELETE(id), { withCredentials: false });
      console.log("Delete response:", res.data);
      await load();
      alert("Deleted successfully");
    } catch (e) {
      console.error("Delete failed:", e);
      alert("Delete failed (check endpoint).");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Service Type</h1>
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
            className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 font-medium"
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
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-6" colSpan={5}>
                  Loading…
                </td>
              </tr>
            ) : pageRows.length === 0 ? (
              <tr>
                <td className="px-4 py-6" colSpan={5}>
                  No records.
                </td>
              </tr>
            ) : (
              pageRows.map((r, idx) => (
                <tr key={r.id} className="border-t border-neutral-800">
                  <td className="px-4 py-3">
                    {(pageSafe - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3">{r.ordernumber}</td>
                  <td className="px-4 py-3">{r.title || "-"}</td>
                  <td className="px-4 py-3">
                    {r.imageUrl ? (
                      <img
                        src={r.imageUrl}
                        alt=""
                        className="h-10 w-16 object-cover rounded-lg border border-neutral-800"
                      />
                    ) : (
                      <span className="text-neutral-500">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => openEdit(r)}
                        className="rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3 py-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(r.id)}
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
        title={form.ServiceId ? "Edit Service Type" : "Add Service Type"}
      >
        <form onSubmit={submit} className="space-y-4">
          <input type="hidden" value={form.ServiceId} readOnly />

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Order Number
              </label>
              <input
                required
                type="number"
                min="0"
                step="1"
                value={form.ordernumber}
                onChange={(e) =>
                  setForm({ ...form, ordernumber: e.target.value })
                }
                className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g. 2"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Title
              </label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Example title"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={5}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Write a detailed description…"
            />
            <p className="mt-1 text-xs text-neutral-500">
              Markdown or plain text; you can paste multiple lines.
            </p>
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Image (one)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm({ ...form, file: e.target.files?.[0] || null })
              }
              className="block w-full text-sm text-neutral-300 file:mr-4 file:rounded-xl file:border-0 file:bg-neutral-800 file:px-3 file:py-2 file:text-neutral-200 hover:file:bg-neutral-700"
            />
            {/* Current image preview on edit */}
            {!form.file && form.currentImage && (
              <img
                src={form.currentImage}
                alt=""
                className="mt-2 h-12 w-20 object-cover rounded-md border border-neutral-800"
              />
            )}
            {form.file && (
              <p className="mt-1 text-xs text-neutral-500">
                {form.file.name} • {(form.file.size / 1024).toFixed(0)} KB (will
                upload after save)
              </p>
            )}
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
              {form.ServiceId
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
    </div>
  );
}
