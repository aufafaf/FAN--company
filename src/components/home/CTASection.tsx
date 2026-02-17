/**
 * CTASection Component
 * Final call-to-action with micro-interactions
 */

"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function CTASection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan Mandiri Multi Usaha. Bisa saya dapatkan informasi lebih lanjut?"
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700" />

      {/* Animated circles */}
      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5"
        animate={{ scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-400" />
            Konsultasi Gratis Tersedia
          </motion.div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Siap untuk Solusi Printer <span className="text-secondary-300">Terbaik?</span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-primary-100">
            Hubungi kami sekarang dan dapatkan konsultasi gratis untuk kebutuhan printer bisnis
            Anda. Tim ahli kami siap membantu.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* WhatsApp CTA */}
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsApp}
              icon={<MessageSquare className="h-5 w-5" />}
              className="shadow-xl shadow-secondary-500/30 hover:shadow-2xl hover:shadow-secondary-500/40"
            >
              Chat WhatsApp
            </Button>

            {/* Phone CTA */}
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone className="h-5 w-5" />}
                className="border-white/30 text-white hover:border-white/50 hover:bg-white/10"
              >
                {COMPANY_INFO.phone}
              </Button>
            </a>

            {/* Products link */}
            <Link href="/products">
              <Button
                variant="ghost"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
                className="text-white hover:bg-white/10"
              >
                Lihat Katalog
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { label: "500+ Client", sub: "Terpercaya" },
              { label: "15+ Tahun", sub: "Pengalaman" },
              { label: "98%", sub: "Kepuasan" },
              { label: "24/7", sub: "Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-white">{item.label}</div>
                <div className="text-sm text-primary-200">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
