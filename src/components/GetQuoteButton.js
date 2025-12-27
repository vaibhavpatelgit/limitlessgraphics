"use client";

import { useQuoteModal } from "./QuoteModalProvider";

export default function GetQuoteButton({
  className = "",
  children = "Get Quote",
}) {
  const { openModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className={
        className ||
        "rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 px-4 py-2 text-sm font-extrabold text-black"
      }
    >
      {children || "Get Quote"}
    </button>
  );
}
