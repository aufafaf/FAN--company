/**
 * ScrollProgress Component
 * Visual indicator showing page scroll progress
 */

"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-20 z-50 h-1 origin-left bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600"
      style={{ scaleX }}
    />
  );
}
