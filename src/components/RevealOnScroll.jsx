"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RevealOnScroll({
  children,
  y = 24,
  duration = 0.45,
  amount = 0.35,
  margin = "-10% 0% -10% 0%",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount, margin });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
