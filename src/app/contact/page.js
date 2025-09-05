// NO "use client" here

import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact — Limitless Graphics",
  description:
    "Get a fast quote for vehicle wraps, printed vinyl & signage, windows/tint and glass graphics. Serving Saskatoon and nearby.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <ContactClient />
    </main>
  );
}
