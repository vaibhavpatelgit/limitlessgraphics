import "../globals.css";
import Sidebar from "./Sidebar";

export const metadata = { title: "Admin | Limitless Graphics" };

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex gap-4 py-6">
          <Sidebar />
          <main className="flex-1 rounded-2xl bg-neutral-900/60 backdrop-blur p-4 md:p-6 border border-neutral-800 shadow-xl">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
