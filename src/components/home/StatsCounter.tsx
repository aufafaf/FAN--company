/**
 * StatsCounter Component
 * Animated statistics counter with intersection observer
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { STATS_DATA } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

function Counter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Dipercaya Oleh Ratusan Perusahaan
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-primary-100">
            Pengalaman puluhan tahun melayani berbagai kebutuhan printer bisnis
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {STATS_DATA.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={staggerItem}>
              <motion.div
                className="glass rounded-2xl p-8 transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="mb-3 text-5xl font-bold text-white md:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mb-2 text-xl font-semibold text-white">{stat.label}</div>
                <div className="text-sm text-primary-100">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Shapes */}
      <motion.div
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
