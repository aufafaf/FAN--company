/**
 * Services Data
 * CV Mandiri Multi Usaha
 */

import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "sewa-printer",
    title: "Sewa Printer",
    slug: "sewa-printer",
    description: "Solusi sewa printer fleksibel untuk berbagai kebutuhan bisnis",
    longDescription:
      "Dapatkan printer berkualitas tinggi dari berbagai brand ternama dengan sistem sewa yang fleksibel. Pilih dari kontrak harian, mingguan, bulanan, hingga tahunan sesuai kebutuhan Anda. Kami menyediakan layanan delivery gratis untuk area Yogyakarta dan instalasi penuh tanpa biaya tambahan.",
    icon: "Printer",
    features: [
      "Pilihan printer dari berbagai brand & model",
      "Kontrak fleksibel (harian hingga tahunan)",
      "Free delivery & instalasi",
      "Maintenance rutin termasuk",
      "Penggantian unit backup tersedia",
      "Konsultasi gratis untuk pemilihan printer",
    ],
    pricing: {
      starting: 150000,
      description: "per bulan, tergantung jenis printer",
    },
    popular: true,
  },
  {
    id: "service-maintenance",
    title: "Service & Maintenance",
    slug: "service-maintenance",
    description: "Perawatan berkala dan maintenance printer untuk performa optimal",
    longDescription:
      "Jaga printer Anda tetap berfungsi optimal dengan layanan service dan maintenance rutin dari tim ahli kami. Kami menggunakan spare parts original dan teknisi bersertifikat untuk memastikan kualitas servis terbaik.",
    icon: "Wrench",
    features: [
      "Maintenance berkala sesuai jadwal",
      "Penggantian spare parts original",
      "Cleaning & optimasi performa",
      "Kalibrasi warna profesional",
      "On-site service di lokasi Anda",
      "Laporan service transparan",
    ],
    pricing: {
      starting: 200000,
      description: "per sesi maintenance",
    },
    popular: false,
  },
  {
    id: "perbaikan-printer",
    title: "Perbaikan All Brand",
    slug: "perbaikan",
    description: "Perbaikan printer untuk semua brand dengan garansi layanan",
    longDescription:
      "Tim teknisi berpengalaman kami siap memperbaiki printer dari berbagai brand. Dengan peralatan modern dan spare parts berkualitas, kami menjamin perbaikan yang cepat dan profesional.",
    icon: "Settings",
    features: [
      "Perbaikan semua brand printer",
      "Diagnosis gratis sebelum perbaikan",
      "Garansi perbaikan 30 hari",
      "Spare parts original & berkualitas",
      "Estimasi biaya transparan",
      "Pick-up & delivery service",
    ],
    pricing: {
      starting: 100000,
      description: "mulai dari, tergantung jenis kerusakan",
    },
    popular: false,
  },
  {
    id: "konsultasi-printer",
    title: "Konsultasi Printer Bisnis",
    slug: "konsultasi",
    description: "Konsultasi gratis untuk solusi printer yang tepat bagi bisnis Anda",
    longDescription:
      "Tidak tahu printer apa yang cocok untuk kebutuhan bisnis Anda? Tim konsultan kami siap membantu menganalisis kebutuhan dan merekomendasikan solusi printer yang paling efisien dan cost-effective.",
    icon: "MessageCircle",
    features: [
      "Analisis kebutuhan bisnis Anda",
      "Rekomendasi printer yang tepat",
      "Perbandingan harga & fitur",
      "Konsultasi gratis tanpa komitmen",
      "Follow-up hingga keputusan final",
      "Dukungan implementasi penuh",
    ],
    pricing: {
      starting: 0,
      description: "Gratis konsultasi",
    },
    popular: true,
  },
];

/**
 * Team Members Data
 */

import { TeamMember } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Ahmad Susanto",
    position: "Direktur Utama",
    department: "Management",
    bio: "Pengalaman 20+ tahun di industri printer dan teknologi. Membangun Mandiri Multi Usaha menjadi perusahaan penyedia printer terpercaya.",
    photo: "/images/team/ahmad-susanto.jpg",
    expertise: ["Business Strategy", "Leadership", "Industry Expert"],
  },
  {
    id: "team-2",
    name: "Dewi Lestari",
    position: "General Manager",
    department: "Operations",
    bio: "Mengelola operasional perusahaan dengan fokus pada kepuasan pelanggan dan efisiensi bisnis.",
    photo: "/images/team/dewi-lestari.jpg",
    expertise: ["Operations", "Customer Service", "Process Improvement"],
  },
  {
    id: "team-3",
    name: "Budi Santoso",
    position: "Head of Technical",
    department: "Technical",
    bio: "Sertifikasi resmi dari Canon, Epson, dan HP. Berpengalaman 15 tahun dalam maintenance dan perbaikan printer.",
    photo: "/images/team/budi-santoso.jpg",
    expertise: ["Printer Repair", "Maintenance", "Canon Certified"],
  },
  {
    id: "team-4",
    name: "Rina Kartika",
    position: "Customer Relations",
    department: "Customer Service",
    bio: "Menghandle hubungan pelanggan dengan pendekatan yang ramah dan profesional untuk memastikan kepuasan optimal.",
    photo: "/images/team/rina-kartika.jpg",
    expertise: ["CRM", "Client Relations", "Problem Solving"],
  },
  {
    id: "team-5",
    name: "Hendra Wijaya",
    position: "Senior Technician",
    department: "Technical",
    bio: "Teknisi senior dengan keahlian mendalam dalam perbaikan printer laser dan inkjet dari berbagai brand.",
    photo: "/images/team/hendra-wijaya.jpg",
    expertise: ["LaserJet Repair", "Inkjet Service", "Multi-Brand"],
  },
  {
    id: "team-6",
    name: "Sari Dewi",
    position: "Sales & Marketing",
    department: "Sales",
    bio: "Bertanggung jawab atas strategi pemasaran dan pengembangan bisnis baru untuk pertumbuhan perusahaan.",
    photo: "/images/team/sari-dewi.jpg",
    expertise: ["Digital Marketing", "Sales Strategy", "Brand Development"],
  },
];
