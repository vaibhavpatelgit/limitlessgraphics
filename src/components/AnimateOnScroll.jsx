"use client";
import useInView from "@/lib/useInView";

/** Mounts once and wires scroll-reveal globally */
export default function AnimateOnScroll({
  selector = "[data-animate]",
  options,
}) {
  useInView(selector, options);
  return null;
}
