"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const NavItem = ({ href, children, active }) => (
  <Link
    href={href}
    className={`block rounded-xl px-3 py-2 text-sm md:text-[15px] transition
      ${
        active
          ? "bg-neutral-800 text-white"
          : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
      }`}
  >
    {children}
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const is = (p) => pathname === p || pathname.startsWith(p + "/");

  return (
    <aside className="w-full md:w-64 shrink-0">
      {/* Mobile toggle */}
      <div className="mb-4 md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-left"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <motion.nav
        layout
        className={`rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3 ${
          open ? "block" : "hidden md:block"
        }`}
      >
        <div className="mb-3 px-2">
          <div className="text-lg font-semibold">Limitless Admin</div>
          <div className="text-xs text-neutral-400">Image is everything.</div>
        </div>

        <div className="space-y-2">
          <NavItem href="/admin/dashboard" active={is("/admin/dashboard")}>
            Dashboard
          </NavItem>

          <div className="rounded-xl bg-neutral-900/40 p-2">
            <div className="px-2 pb-1 text-xs uppercase tracking-wide text-neutral-400">
              Services
            </div>
            <div className="space-y-1">
              <NavItem
                href="/admin/services/service-type"
                active={is("/admin/services/service-type")}
              >
                Service Type
              </NavItem>
              <NavItem
                href="/admin/services/services-info"
                active={is("/admin/services/services-info")}
              >
                Services Info
              </NavItem>
            </div>
          </div>

          <NavItem href="/admin/portfolio" active={is("/admin/portfolio")}>
            Portfolio
          </NavItem>

          <div className="pt-2">
            <form action="/admin/login/logout" method="post">
              <button className="w-full rounded-xl bg-red-600/80 hover:bg-red-600 px-3 py-2 text-sm">
                Logout
              </button>
            </form>
          </div>
        </div>
      </motion.nav>
    </aside>
  );
}
