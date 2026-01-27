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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

