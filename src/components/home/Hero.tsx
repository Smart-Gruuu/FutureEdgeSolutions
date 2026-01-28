"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/nav";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section
      className="relative min-h-[32rem] overflow-hidden bg-muted/50 bg-cover bg-center bg-no-repeat px-4 py-24 md:min-h-[36rem] md:py-32 lg:py-40"
      style={{ backgroundImage: "url(/hero_section.png)" }}
    >
      {/* Light overlay for light theme — readable dark text */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,hsl(152_69%_42%_/_.06),transparent)]" aria-hidden />
      <div className="container relative z-10 mx-auto">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {siteConfig.heroHeadline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-muted-foreground md:text-xl"
          >
            {siteConfig.heroSubline}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact#form">Contact us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">About us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
