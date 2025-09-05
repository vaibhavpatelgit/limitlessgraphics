import Container from "@/components/Container";
import ServicesParallaxStack from "@/components/ServicesParallaxStack";
import Link from "next/link";

export const metadata = { title: "Services — Limitless Graphics" };

export default function ServicesPage() {
  return (
    <>
      {/* Parallax stack */}
      <ServicesParallaxStack />
    </>
  );
}
