import Link from "next/link";
import Container from "@/components/Container";

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
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
            href="/services"
          >
            View Services
          </Link>
          <Link
            className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
            href="/contact"
          >
            Get a Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
