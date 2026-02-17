/**
 * Contact Page
 * CV Mandiri Multi Usaha – Contact form, office info, map, floating buttons
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  X,
  ChevronDown,
} from "lucide-react";
import { contactSchema, ContactFormSchema } from "@/lib/validations/contactSchema";
import { COMPANY_INFO, SERVICE_CATEGORIES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ─────────────────────────────────────────────
// WHATSAPP FLOATING BUTTON
// ─────────────────────────────────────────────
function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan layanan Mandiri Multi Usaha");
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[50] flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          <p className="whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
            Chat dengan Kami
          </p>
          <p className="text-xs text-gray-500">Respon dalam 5 menit</p>
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/40 transition-all duration-300 hover:bg-green-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat WhatsApp"
      >
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>

        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-40" />
      </motion.button>
    </div>
  );
}

// ─────────────────────────────────────────────
// LIVE CHAT WIDGET (UI only)
// ─────────────────────────────────────────────
function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-[50]">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-all hover:bg-primary-700"
        whileHover={{ scale: 1.05 }}
        aria-label="Live Chat"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </motion.button>

      {/* Chat Panel */}
      {isOpen && (
        <motion.div
          className="absolute bottom-14 right-0 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Live Support</p>
                <p className="text-xs text-primary-100">Kami online sekarang</p>
              </div>
            </div>
          </div>

          {/* Messages (demo) */}
          <div className="h-48 space-y-3 overflow-y-auto p-4">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-gray-100 px-4 py-2.5 dark:bg-gray-900">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Halo! Selamat datang di Mandiri Multi Usaha 👋
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-gray-100 px-4 py-2.5 dark:bg-gray-900">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Bagaimana kami bisa membantu Anda hari ini?
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 dark:border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ketik pesan..."
                className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white transition-colors hover:bg-primary-700">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">
              Demo UI – Hubungi via WhatsApp untuk respon nyata
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Card variant="bordered" className="p-8">
      <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Kirim Pesan</h3>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Isi formulir di bawah dan tim kami akan menghubungi Anda
      </p>

      {/* Success Message */}
      {submitted && (
        <motion.div
          className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              Pesan berhasil dikirim!
            </p>
            <p className="text-xs text-green-600 dark:text-green-500">
              Tim kami akan menghubungi Anda dalam 24 jam
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Nama */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nama Lengkap <span className="text-secondary-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Budi Santoso"
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          />
          {errors.name && <p className="mt-1 text-xs text-secondary-500">{errors.name.message}</p>}
        </div>

        {/* Email + Phone row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email <span className="text-secondary-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="budi@example.com"
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-secondary-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nomor Telepon <span className="text-secondary-500">*</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="082322047740"
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-secondary-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Subjek <span className="text-secondary-500">*</span>
          </label>
          <input
            {...register("subject")}
            type="text"
            placeholder="Pertanyaan tentang sewa printer"
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-secondary-500">{errors.subject.message}</p>
          )}
        </div>

        {/* Layanan */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Layanan yang Diminati
          </label>
          <select
            {...register("service")}
            className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
          >
            <option value="">Pilih layanan...</option>
            {SERVICE_CATEGORIES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Pesan */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Pesan <span className="text-secondary-500">*</span>
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Ceritakan kebutuhan Anda..."
            className="w-full resize-y rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-secondary-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          variant="primary"
          size="lg"
          type="submit"
          fullWidth
          loading={isSubmitting}
          icon={<Send className="h-5 w-5" />}
          iconPosition="right"
        >
          Kirim Pesan
        </Button>
      </form>
    </Card>
  );
}

// ─────────────────────────────────────────────
// CONTACT PAGE (main export)
// ─────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      {/* Hero */}
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
              Kontak
            </span>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Hubungi <span className="text-gradient">Kami</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui cara yang paling
              nyaman bagi Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left – Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>
            </div>

            {/* Right – Office Info */}
            <div className="space-y-6">
              {/* Office Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card variant="bordered" className="p-6">
                  <h3 className="mb-5 text-lg font-bold text-gray-900 dark:text-white">
                    Informasi Kantor
                  </h3>

                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="dark:bg-primary-950 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                        <MapPin className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Alamat
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {COMPANY_INFO.address.full}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="dark:bg-secondary-950 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-50">
                        <Phone className="h-5 w-5 text-secondary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Telepon
                        </p>
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="text-sm text-primary-600 hover:underline"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="dark:bg-primary-950 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                        <Mail className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Email
                        </p>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-sm text-primary-600 hover:underline"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-3">
                      <div className="dark:bg-secondary-950 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-50">
                        <Clock className="h-5 w-5 text-secondary-600" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Jam Operasional
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Sen–Jum: {COMPANY_INFO.businessHours.weekdays}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Sabtu: {COMPANY_INFO.businessHours.saturday}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Minggu: {COMPANY_INFO.businessHours.sunday}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Google Maps placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card variant="bordered" className="overflow-hidden">
                  <div className="flex h-56 flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <MapPin className="h-10 w-10 text-primary-500" />
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Google Maps
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600">
                      Ganti dengan embed Google Maps
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Lokasi: Yogyakarta, Indonesia
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Quick WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card variant="glass" className="border border-green-200 p-6 dark:border-green-800">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        WhatsApp
                      </p>
                      <p className="text-xs text-gray-500">Respon cepat</p>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => {
                      const msg = encodeURIComponent("Halo, saya ingin konsultasi.");
                      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, "_blank");
                    }}
                    className="bg-green-600 shadow-green-500/30 hover:bg-green-700"
                    icon={<Send className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    Chat Sekarang
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <WhatsAppFloatingButton />
      <LiveChatWidget />
    </>
  );
}
