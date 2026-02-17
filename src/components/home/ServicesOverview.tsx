/**
 * ServicesOverview Component
 * Homepage services grid with 3D hover effects
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Printer, Wrench, Settings, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "@/components/ui/Card";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  Wrench,
  Settings,
  MessageCircle,
};

export default function ServicesOverview() {
  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Decorative background */}
      <div className="dark:bg-primary-950/30 pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl" />
      <div className="dark:bg-secondary-950/30 pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary-100/40 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dark:bg-primary-950 mb-6 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Layanan Kami
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Solusi Printer <span className="text-gradient">Lengkap & Terpercaya</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Dari sewa printer hingga maintenance profesional, kami menyediakan layanan menyeluruh
            untuk memenuhi semua kebutuhan printer bisnis Anda.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICE_CATEGORIES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Printer;
            const gradients = [
              "from-primary-500 to-primary-700",
              "from-secondary-500 to-secondary-700",
              "from-primary-600 to-secondary-600",
              "from-secondary-600 to-primary-600",
            ];

            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card
                  variant="bordered"
                  tilt
                  className="group flex h-full flex-col p-6 transition-colors hover:border-primary-300 dark:hover:border-primary-800"
                >
                  {/* Icon */}
                  <motion.div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} mb-6 flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-1 leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-all duration-300 hover:gap-3 group-hover:text-primary-700 dark:text-primary-400"
                  >
                    Pelajari Lebih
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
