/**
 * Services Page
 * CV Mandiri Multi Usaha – Sewa Printer, Maintenance, Perbaikan, Konsultasi
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Printer, Wrench, Settings, MessageCircle, ChevronDown, Check, X } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { PRICING_TIERS, FAQ_DATA } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// ─────────────────────────────────────────────
// ICON MAP
// ─────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  Wrench,
  Settings,
  MessageCircle,
};

// ─────────────────────────────────────────────
// ACCORDION ITEM
// ─────────────────────────────────────────────
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-2 py-5 text-left transition-colors hover:text-primary-600 dark:hover:text-primary-400"
      >
        <span className="pr-4 font-semibold text-gray-900 dark:text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-primary-500" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-2 pb-5 leading-relaxed text-gray-600 dark:text-gray-400">{answer}</p>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SERVICE DETAIL SECTION
// ─────────────────────────────────────────────
function ServiceDetail({ service }: { service: (typeof SERVICES)[0] }) {
  const Icon = ICON_MAP[service.icon] || Printer;

  return (
    <div
      id={service.slug}
      className="border-b border-gray-100 py-16 last:border-0 dark:border-gray-900"
    >
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* Left – Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
              <Icon className="h-7 w-7 text-white" />
            </div>
            {service.popular && (
              <span className="dark:bg-secondary-950 rounded-full bg-secondary-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">
                Popular
              </span>
            )}
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            {service.title}
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {service.longDescription}
          </p>

          {service.pricing && (
            <div className="dark:bg-primary-950 mb-6 inline-flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Mulai dari</span>
              <span className="text-xl font-bold text-primary-600">
                {service.pricing.starting === 0
                  ? "Gratis"
                  : formatCurrency(service.pricing.starting)}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                – {service.pricing.description}
              </span>
            </div>
          )}
        </motion.div>

        {/* Right – Features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="bordered" className="p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
              Apa yang Anda Dapatkan
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="dark:bg-primary-950 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" size="md" className="mt-6 w-full">
              Hubungi Untuk Info Lebih Lanjut
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PRICING CARDS (3D tilt)
// ─────────────────────────────────────────────
function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dark:bg-primary-950 mb-6 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Paket Harga
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Pilih Paket <span className="text-gradient">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Paket fleksibel dengan harga transparan dan tanpa biaya tersembunyi
          </p>
        </motion.div>

        {/* Toggle monthly/yearly */}
        <motion.div
          className="mb-14 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span
            className={`text-sm font-medium ${!isYearly ? "text-gray-900 dark:text-white" : "text-gray-500"}`}
          >
            Bulanan
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative h-7 w-14 rounded-full transition-colors duration-300 ${
              isYearly ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            <div
              className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                isYearly ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${isYearly ? "text-gray-900 dark:text-white" : "text-gray-500"}`}
          >
            Tahunan
          </span>
          {isYearly && (
            <span className="dark:bg-secondary-950 rounded-full bg-secondary-100 px-2 py-0.5 text-xs font-bold text-secondary-600">
              Hemat 10%
            </span>
          )}
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div key={tier.id} variants={staggerItem}>
              <Card
                variant={tier.popular ? "elevated" : "bordered"}
                tilt
                className={`relative flex h-full flex-col p-8 ${
                  tier.popular ? "border-2 border-primary-500 shadow-xl shadow-primary-500/20" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(isYearly ? tier.priceYearly : tier.priceMonthly)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    /{isYearly ? "tahun" : "bulan"}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={tier.popular ? "primary" : "outline"} size="md" fullWidth>
                  Pilih Paket {tier.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// COMPARISON TABLE
// ─────────────────────────────────────────────
function ComparisonTable() {
  const features = [
    {
      label: "Jenis Printer",
      basic: "Inkjet Standard",
      pro: "LaserJet / MFP",
      enterprise: "All Type (High-End)",
    },
    { label: "Maintenance", basic: "1x / bulan", pro: "2x / bulan", enterprise: "Unlimited" },
    { label: "Support", basic: "WhatsApp", pro: "Priority 24/7", enterprise: "Dedicated Manager" },
    { label: "Minimum Kontrak", basic: "3 bulan", pro: "6 bulan", enterprise: "Custom" },
    {
      label: "Delivery",
      basic: "Free (Yogyakarta)",
      pro: "Free + Instalasi",
      enterprise: "Free Nationwide",
    },
    { label: "Toner / Tinta", basic: "Ditanggung Penyewa", pro: "Gratis", enterprise: "Gratis" },
    { label: "Network Setup", basic: false, pro: false, enterprise: true },
    { label: "Performance Report", basic: false, pro: false, enterprise: true },
    { label: "Backup Unit", basic: false, pro: true, enterprise: true },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dark:bg-secondary-950 mb-6 inline-block rounded-full bg-secondary-50 px-4 py-1.5 text-sm font-semibold text-secondary-600 dark:text-secondary-400">
            Perbandingan
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Bandingkan <span className="text-gradient">Paket Sewa</span>
          </h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="w-1/4 p-5 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Fitur
                </th>
                {["Basic", "Professional", "Enterprise"].map((name) => (
                  <th key={name} className="p-5 text-center">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${
                        name === "Professional"
                          ? "dark:bg-primary-950 bg-primary-100 text-primary-600 dark:text-primary-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-900 dark:hover:bg-gray-900/50"
                >
                  <td className="p-5 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {row.label}
                  </td>
                  {[row.basic, row.pro, row.enterprise].map((val, j) => (
                    <td key={j} className="p-5 text-center">
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check className="mx-auto h-5 w-5 text-primary-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-700" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FAQ SECTION (accordion)
// ─────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom mx-auto max-w-3xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Pertanyaan <span className="text-gradient">Umum</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Jawaban untuk pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SERVICES PAGE (main export)
// ─────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-32 md:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              Layanan
            </span>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Layanan <span className="text-gradient">Lengkap Kami</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Dari sewa printer hingga konsultasi bisnis, kami hadir untuk memenuhi semua kebutuhan
              printer perusahaan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          {SERVICES.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </section>

      <PricingSection />
      <ComparisonTable />
      <FAQSection />
    </>
  );
}
