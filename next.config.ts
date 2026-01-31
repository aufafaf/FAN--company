// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode untuk detect potential problems
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: [], // Tambahkan domain external images jika ada
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental features (opsional)
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

module.exports = nextConfig;