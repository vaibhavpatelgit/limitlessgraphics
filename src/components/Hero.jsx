import Link from "next/link";
import Container from "@/components/Container";
import GetQuoteButton from "@/components/quote/GetQuoteButton";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Limitless Graphics
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          Printed Vinyl & Signs • Vehicle & Fleet Wraps • Windows & Glass. Clean
          installs, durable materials, fast turnaround.
        </p>

        <div className="mt-8 relative z-20 flex flex-wrap gap-3">
          <Link
            href="/services"
            prefetch
            className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10 transition"
          >
            View Services
          </Link>

          <GetQuoteButton className="rounded-md bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 font-semibold text-black hover:opacity-95">
            Get a Quote
          </GetQuoteButton>
        </div>
      </Container>
    </section>
  );
}
