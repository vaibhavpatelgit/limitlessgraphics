export default function Loading() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 py-16">
        {/* header skeleton */}
        <div className="h-10 w-60 rounded-xl bg-white/10 animate-pulse" />
        <div className="mt-3 h-5 w-96 rounded-lg bg-white/10 animate-pulse" />

        {/* generic grid skeleton */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] bg-white/10 animate-pulse" />
              <div className="p-4">
                <div className="h-4 w-24 rounded bg-white/10 animate-pulse" />
                <div className="mt-3 h-5 w-44 rounded bg-white/10 animate-pulse" />
                <div className="mt-2 h-4 w-full rounded bg-white/10 animate-pulse" />
                <div className="mt-2 h-4 w-4/5 rounded bg-white/10 animate-pulse" />
                <div className="mt-4 h-9 w-28 rounded-full bg-white/10 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
