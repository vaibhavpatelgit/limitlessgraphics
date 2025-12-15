export const metadata = { title: "Dashboard | Admin" };

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Published Services", value: "—" },
          { label: "Draft Services", value: "—" },
          { label: "Portfolio Items", value: "—" },
        ].map((k, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5"
          >
            <div className="text-3xl font-semibold">{k.value}</div>
            <div className="text-neutral-400 mt-1">{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
