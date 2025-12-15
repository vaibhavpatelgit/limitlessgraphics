export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 text-white/80">
      <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 h-64" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 h-24" />
        <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 h-24" />
        <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 h-24" />
      </div>
    </main>
  );
}
