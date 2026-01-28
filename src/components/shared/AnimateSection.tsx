"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimateSection({ children, className }: AnimateSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px", amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

