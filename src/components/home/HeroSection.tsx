/**
 * HeroSection Component
 * Main hero section with 3D floating animations
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Printer, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { fadeIn, slideUp } from "@/lib/animations";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan sewa printer dari Mandiri Multi Usaha"
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="dark:to-primary-950/20 relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-950 dark:via-gray-900">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-secondary-400/20 to-primary-400/20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Badge */}
            <motion.div variants={fadeIn}>
              <span className="dark:bg-primary-950 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:border-primary-800 dark:text-primary-300">
                <CheckCircle className="h-4 w-4" />
                #1 Penyedia Sewa Printer Yogyakarta
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
              variants={slideUp}
            >
              <span className="text-gradient">Solusi Lengkap</span>
              <br />
              <span className="text-gray-900 dark:text-white">Printer Anda</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="max-w-xl text-xl leading-relaxed text-gray-600 dark:text-gray-400"
              variants={slideUp}
            >
              {COMPANY_INFO.tagline}
            </motion.p>

            {/* Features List */}
            <motion.ul className="space-y-3" variants={slideUp}>
              {[
                "Sewa printer mulai dari 150rb/bulan",
                "Service & maintenance gratis",
                "Support 24/7 via WhatsApp",
                "Free delivery area Yogyakarta",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={slideUp}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleWhatsAppClick}
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Konsultasi Gratis
              </Button>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Lihat Katalog
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="flex items-center gap-8 pt-4" variants={fadeIn}>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Puas</div>
              </div>
              <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
              </div>
              <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Kepuasan</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Printer Visualization */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Main Printer Card */}
              <motion.div
                className="glass relative rounded-3xl p-8 shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-96 items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{
                      rotateY: [0, 15, 0, -15, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Printer className="h-64 w-64 text-primary-600" />

                    {/* Floating Feature Cards */}
                    <motion.div
                      className="glass absolute -left-8 -top-8 rounded-2xl p-4 shadow-xl"
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="text-sm font-medium text-primary-600">Harga Terjangkau</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        150rb/bln
                      </div>
                    </motion.div>

                    <motion.div
                      className="glass absolute -bottom-8 -right-8 rounded-2xl p-4 shadow-xl"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <div className="text-sm font-medium text-secondary-600">Service Gratis</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-50 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">Scroll untuk lebih lanjut</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-400 p-2">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-gray-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
