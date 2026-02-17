/**
 * Footer Component
 * Site footer with sitemap, company info, and social links
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, Send } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan layanan Mandiri Multi Usaha");
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom pb-8 pt-16">
        <motion.div
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 shadow-lg">
                  <span className="text-xl font-bold text-white">MM</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{COMPANY_INFO.name}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{COMPANY_INFO.description}</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href={COMPANY_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-900 p-2 transition-colors hover:bg-primary-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-900 p-2 transition-colors hover:bg-secondary-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-900 p-2 transition-colors hover:bg-primary-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="mb-6 font-bold text-white">Navigasi</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="mb-6 font-bold text-white">Layanan Kami</h4>
            <ul className="space-y-3">
              {SERVICE_CATEGORIES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-block text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h4 className="mb-6 font-bold text-white">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-gray-400">{COMPANY_INFO.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary-400"
                >
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span className="text-sm">{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-primary-400"
                >
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span className="text-sm">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400" />
                <div className="text-sm text-gray-400">
                  <p>Senin - Jumat: {COMPANY_INFO.businessHours.weekdays}</p>
                  <p>Sabtu: {COMPANY_INFO.businessHours.saturday}</p>
                  <p>Minggu: {COMPANY_INFO.businessHours.sunday}</p>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl"
            >
              <Send className="h-4 w-4" />
              Chat WhatsApp
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <p>
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-primary-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-primary-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
