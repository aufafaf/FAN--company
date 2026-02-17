/**
 * Application Constants
 * CV Mandiri Multi Usaha
 */

// Company Information
export const COMPANY_INFO = {
  name: "CV Mandiri Multi Usaha",
  tagline: "Solusi Lengkap Printer Anda - Sewa, Service, Terpercaya",
  description:
    "Perusahaan penyewaan dan service printer terbesar di Yogyakarta. Kami menyediakan layanan sewa printer untuk segala kebutuhan bisnis Anda dengan harga terjangkau dan pelayanan terbaik.",
  email: "info@mandirimultiusaha.com",
  phone: "082322047740",
  whatsapp: "6282322047740",
  address: {
    street: "Jl. Contoh No. 123",
    city: "Yogyakarta",
    province: "D.I. Yogyakarta",
    postalCode: "55281",
    full: "Yogyakarta, Indonesia",
  },
  socialMedia: {
    facebook: "https://facebook.com/mandirimultiusaha",
    instagram: "https://instagram.com/mandirimultiusaha",
    twitter: "https://twitter.com/mandirimultiusaha",
    linkedin: "https://linkedin.com/company/mandirimultiusaha",
  },
  businessHours: {
    weekdays: "08:00 - 17:00 WIB",
    saturday: "08:00 - 14:00 WIB",
    sunday: "Tutup",
  },
};

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/services", label: "Layanan" },
  { href: "/products", label: "Produk" },
  { href: "/contact", label: "Kontak" },
];

// Service Categories
export const SERVICE_CATEGORIES = [
  {
    id: "sewa-printer",
    title: "Sewa Printer",
    slug: "sewa-printer",
    icon: "Printer",
    description: "Layanan sewa printer untuk kebutuhan jangka pendek maupun panjang",
  },
  {
    id: "service-maintenance",
    title: "Service & Maintenance",
    slug: "service-maintenance",
    icon: "Wrench",
    description: "Perawatan berkala dan perbaikan printer semua merk",
  },
  {
    id: "perbaikan",
    title: "Perbaikan All Brand",
    slug: "perbaikan",
    icon: "Settings",
    description: "Perbaikan printer berbagai merk dengan teknisi berpengalaman",
  },
  {
    id: "konsultasi",
    title: "Konsultasi Printer",
    slug: "konsultasi",
    icon: "MessageCircle",
    description: "Konsultasi pemilihan printer yang tepat untuk bisnis Anda",
  },
];

// Statistics Data
export const STATS_DATA = [
  {
    value: 500,
    suffix: "+",
    label: "Client Puas",
    description: "Perusahaan yang telah mempercayai kami",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Printer Tersedia",
    description: "Unit printer siap disewa",
  },
  {
    value: 15,
    suffix: "+",
    label: "Tahun Pengalaman",
    description: "Melayani dengan dedikasi",
  },
  {
    value: 98,
    suffix: "%",
    label: "Kepuasan Client",
    description: "Rating kepuasan pelanggan",
  },
];

// Product Brands
export const PRINTER_BRANDS = [
  "Canon",
  "Epson",
  "HP",
  "Brother",
  "Xerox",
  "Kyocera",
  "Ricoh",
  "Samsung",
];

// Product Types
export const PRINTER_TYPES = [
  "Inkjet",
  "LaserJet",
  "Multifunction",
  "Plotter",
  "Thermal",
  "Dot Matrix",
];

// Rental Periods
export const RENTAL_PERIODS = [
  { value: "daily", label: "Harian", multiplier: 1 },
  { value: "weekly", label: "Mingguan", multiplier: 7 },
  { value: "monthly", label: "Bulanan", multiplier: 30 },
  { value: "yearly", label: "Tahunan", multiplier: 365 },
];

// Pricing Tiers
export const PRICING_TIERS = [
  {
    id: "basic",
    name: "Basic",
    description: "Cocok untuk kebutuhan pribadi atau home office",
    features: [
      "Printer Inkjet Standard",
      "Gratis maintenance 1x/bulan",
      "Support via WhatsApp",
      "Minimum sewa 3 bulan",
      "Free delivery Yogyakarta",
    ],
    priceMonthly: 150000,
    priceYearly: 1500000,
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal untuk UMKM dan small business",
    features: [
      "Printer LaserJet/Multifunction",
      "Gratis maintenance 2x/bulan",
      "Priority support 24/7",
      "Minimum sewa 6 bulan",
      "Free delivery & instalasi",
      "Gratis penggantian toner",
    ],
    priceMonthly: 350000,
    priceYearly: 3500000,
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Solusi lengkap untuk perusahaan besar",
    features: [
      "Printer High-End All Type",
      "Unlimited maintenance",
      "Dedicated account manager",
      "Custom contract duration",
      "Free delivery nationwide",
      "Gratis semua supplies",
      "Network setup support",
      "Regular performance report",
    ],
    priceMonthly: 750000,
    priceYearly: 7500000,
    popular: false,
  },
];

// Company Values
export const COMPANY_VALUES = [
  {
    id: "quality",
    title: "Kualitas Terbaik",
    description: "Printer berkualitas tinggi dari brand ternama",
    icon: "Award",
  },
  {
    id: "service",
    title: "Pelayanan Prima",
    description: "Tim support siap membantu 24/7",
    icon: "Headphones",
  },
  {
    id: "trust",
    title: "Terpercaya",
    description: "Dipercaya oleh 500+ perusahaan",
    icon: "Shield",
  },
  {
    id: "innovation",
    title: "Inovasi",
    description: "Solusi printer yang modern dan efisien",
    icon: "Lightbulb",
  },
];

// Timeline Data
export const COMPANY_TIMELINE = [
  {
    year: "2009",
    title: "Berdiri",
    description: "CV Mandiri Multi Usaha resmi beroperasi di Yogyakarta",
  },
  {
    year: "2012",
    title: "Ekspansi Layanan",
    description: "Menambah layanan maintenance dan perbaikan printer",
  },
  {
    year: "2015",
    title: "100 Client",
    description: "Mencapai milestone 100 client korporat",
  },
  {
    year: "2018",
    title: "Workshop Baru",
    description: "Membuka workshop dengan fasilitas modern",
  },
  {
    year: "2021",
    title: "500+ Client",
    description: "Dipercaya oleh lebih dari 500 perusahaan",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Launching sistem booking online dan customer portal",
  },
];

// FAQ Data
export const FAQ_DATA = [
  {
    question: "Berapa minimum periode sewa printer?",
    answer:
      "Minimum periode sewa tergantung paket yang dipilih. Untuk paket Basic minimum 3 bulan, Professional 6 bulan, sedangkan Enterprise bisa custom sesuai kebutuhan.",
  },
  {
    question: "Apakah ada biaya instalasi?",
    answer:
      "Untuk area Yogyakarta, instalasi dan delivery GRATIS. Untuk luar kota akan dikenakan biaya sesuai jarak.",
  },
  {
    question: "Bagaimana jika printer rusak?",
    answer:
      "Kami menyediakan layanan maintenance gratis sesuai paket. Jika ada kerusakan, teknisi kami akan datang dalam 24 jam untuk perbaikan.",
  },
  {
    question: "Apakah saya harus menyediakan toner/tinta?",
    answer:
      "Untuk paket Professional dan Enterprise, toner/tinta sudah termasuk. Untuk paket Basic, toner/tinta ditanggung penyewa.",
  },
  {
    question: "Bagaimana cara perpanjang kontrak?",
    answer:
      "Hubungi kami minimal 2 minggu sebelum kontrak berakhir melalui WhatsApp atau telepon untuk proses perpanjangan.",
  },
];

// SEO Metadata
export const SEO_DEFAULT = {
  title: "CV Mandiri Multi Usaha - Sewa & Service Printer Yogyakarta",
  description:
    "Layanan sewa printer terlengkap di Yogyakarta. Service & maintenance printer all brand. Harga terjangkau, pelayanan terbaik. Hubungi 082322047740",
  keywords:
    "sewa printer yogyakarta, rental printer, service printer, printer canon, printer epson, printer hp, maintenance printer, perbaikan printer",
  ogImage: "/images/og-image.jpg",
  twitterCard: "summary_large_image",
};

// Animation Durations (in seconds)
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Z-Index Layers
export const Z_INDEX = {
  modal: 1000,
  modalBackdrop: 999,
  navbar: 100,
  dropdown: 90,
  tooltip: 80,
  floatingButton: 70,
  base: 1,
};
