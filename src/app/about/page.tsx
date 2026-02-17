/**
 * About Page
 * CV Mandiri Multi Usaha - Company Profile
 */

"use client";

import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Lightbulb,
  Headphones,
  Users,
  Clock,
  Star,
  Target,
  Mail,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { COMPANY_TIMELINE, COMPANY_VALUES } from "@/lib/constants";
import { TEAM_MEMBERS } from "@/lib/data/services";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "@/components/ui/Card";

// ─────────────────────────────────────────────
// ICON MAP
// ─────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Headphones,
  Shield,
  Lightbulb,
};

// ─────────────────────────────────────────────
// TIMELINE SECTION
// ─────────────────────────────────────────────
function Timeline() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dark:bg-primary-950 mb-6 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Perjalanan Kami
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Timeline <span className="text-gradient">Perusahaan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Dari awal berdiri hingga menjadi pemimpin industri
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:block" />
          <div className="absolute bottom-0 left-6 top-0 w-1 rounded-full bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:hidden" />

          {COMPANY_TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              className={`relative mb-10 flex items-start gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} ml-14 md:ml-0`}>
                <Card
                  variant="bordered"
                  className="p-6 transition-colors hover:border-primary-300 dark:hover:border-primary-800"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-sm font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </Card>
              </div>

              {/* Dot (center) – desktop only */}
              <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:flex">
                <div className="h-5 w-5 rounded-full border-4 border-primary-500 bg-white shadow-md dark:bg-gray-950" />
              </div>

              {/* Dot – mobile */}
              <div className="absolute left-6 top-6 flex -translate-x-1/2 md:hidden">
                <div className="border-3 h-4 w-4 rounded-full border-primary-500 bg-white shadow-md dark:bg-gray-950" />
              </div>

              {/* Spacer for alternate side (desktop) */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VISION & MISSION SECTION
// ─────────────────────────────────────────────
function VisionMission() {
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
          <span className="dark:bg-secondary-950 mb-6 inline-block rounded-full bg-secondary-50 px-4 py-1.5 text-sm font-semibold text-secondary-600 dark:text-secondary-400">
            Visi & Misi
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Komitmen Kami
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card variant="glass" className="h-full p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Visi</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Menjadi perusahaan penyedia solusi printer terlengkap dan terpercaya di Indonesia,
                dengan menghadirkan inovasi teknologi yang memudahkan kebutuhan bisnis Anda.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Pemimpin pasar di industri sewa printer",
                  "Ekspansi ke seluruh Indonesia",
                  "Inovasi solusi digital printer",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                    <span className="text-gray-600 dark:text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card variant="glass" className="h-full p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-700 shadow-lg">
                <Star className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Misi</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Memberikan layanan sewa dan service printer berkualitas tinggi dengan harga yang
                terjangkau, didukung oleh tim profesional dan teknologi terkini.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Layanan pelanggan yang responsif dan profesional",
                  "Produk berkualitas dari brand ternama",
                  "Harga transparan tanpa biaya tersembunyi",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary-500" />
                    <span className="text-gray-600 dark:text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// COMPANY VALUES SECTION
// ─────────────────────────────────────────────
function CompanyValues() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Nilai-Nilai Perusahaan</h2>
          <p className="text-lg text-primary-100">
            Prinsip yang menjadi fondasi dalam setiap langkah kami
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {COMPANY_VALUES.map((value) => {
            const Icon = ICON_MAP[value.icon] || Shield;
            return (
              <motion.div key={value.id} variants={staggerItem}>
                <motion.div
                  className="glass group cursor-default rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 transition-colors group-hover:bg-white/30"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-100">{value.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TEAM SECTION (with flip animation on hover)
// ─────────────────────────────────────────────
function TeamSection() {
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
          <span className="dark:bg-primary-950 mb-6 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Tim Kami
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Orang-Orang <span className="text-gradient">Di Balik Layar</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tim profesional berpengalaman yang berkomitmen memberikan layanan terbaik
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div key={member.id} variants={staggerItem} className="perspective group">
              <div className="relative h-96 cursor-pointer" style={{ perspective: "1000px" }}>
                {/* Front Card */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-100 transition-all duration-500 group-hover:border-primary-300 dark:border-gray-800 dark:bg-gray-900 dark:group-hover:border-primary-800"
                  style={{
                    backfaceVisibility: "hidden",
                    transition: "transform 0.6s ease",
                    transform: "rotateY(0deg)",
                  }}
                >
                  {/* Avatar placeholder gradient */}
                  <div className="relative flex h-56 items-end justify-center overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 pb-4">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-white blur-xl" />
                      <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-white blur-lg" />
                    </div>
                    <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/40 bg-white/20 shadow-xl">
                      <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                      {member.position}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Hover untuk info lebih lanjut →
                    </p>
                  </div>
                </div>

                {/* Back Card (flip) */}
                <div
                  className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-6"
                  style={{
                    backfaceVisibility: "hidden",
                    transition: "transform 0.6s ease",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{member.name}</h3>
                    <p className="mb-4 text-sm text-primary-200">{member.position}</p>
                    <p className="text-sm leading-relaxed text-white/80">{member.bio}</p>
                  </div>

                  {member.expertise && (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-200">
                        Keahlian
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CSS for flip on group-hover */}
                <style>{`
                  .group:hover > div > div:nth-child(1) { transform: rotateY(180deg) !important; }
                  .group:hover > div > div:nth-child(2) { transform: rotateY(0deg) !important; }
                `}</style>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ABOUT PAGE (main export)
// ─────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-32 md:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              Tentang Kami
            </span>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Mengenal <span className="text-gradient">Mandiri Multi Usaha</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Perusahaan penyewaan dan service printer terbesar di Yogyakarta, melayani berbagai
              kebutuhan bisnis dengan dedikasi dan profesionalisme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <Timeline />
      <VisionMission />
      <CompanyValues />
      <TeamSection />
    </>
  );
}
