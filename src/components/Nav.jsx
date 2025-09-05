"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/Container";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" }, // (you can create this page later)
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

function NavLink({ href, label, isActive, onClick }) {
  const common =
    "rainbow-underline inline-flex items-center py-2 px-2 text-sm sm:text-base";
  const color = isActive ? "text-white" : "text-gray-300 hover:text-white";

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${common} ${color}`}
    >
      {label}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand / Logo (left) */}
          <Link href="/" className="font-semibold text-lg">
            Limitless Graphics
          </Link>

          {/* Mobile toggle: Gmail-style 3×3 rainbow dots */}
          <button
            className="sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="appgrid">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </button>

          {/* Desktop menu (RIGHT aligned, LEFT→RIGHT order) */}
          <nav className="hidden sm:flex w-full justify-end">
            <ul className="flex gap-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <NavLink
                    href={l.href}
                    label={l.label}
                    isActive={
                      l.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(l.href)
                    }
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav className="sm:hidden pb-3">
            <ul className="flex flex-col items-end gap-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <NavLink
                    href={l.href}
                    label={l.label}
                    isActive={
                      l.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(l.href)
                    }
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
