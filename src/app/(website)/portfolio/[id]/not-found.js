import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 text-center text-white">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <p className="mt-2 text-white/70">Try another link from the portfolio.</p>
      <Link href="/portfolio" className="rainbow-link mt-4 inline-block">
        ← Back to portfolio
      </Link>
    </main>
  );
}
