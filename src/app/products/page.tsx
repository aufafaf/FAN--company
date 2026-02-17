/**
 * Products / Catalog Page
 * CV Mandiri Multi Usaha – Printer catalog with filter, search, modal
 */

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Filter, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { PRINTER_BRANDS, PRINTER_TYPES } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { staggerContainer, staggerItem, modalVariants, backdropVariants } from "@/lib/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
interface FilterState {
  search: string;
  brand: string;
  type: string;
  availability: string; // "all" | "available"
  sortBy: string;
}

// ─────────────────────────────────────────────
// PRODUCT MODAL
// ─────────────────────────────────────────────
function ProductModal({
  product,
  onClose,
}: {
  product: (typeof PRODUCTS)[0];
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan ${product.name}. Bisa saya dapatkan info harga dan ketersediaan?`
    );
    window.open(`https://wa.me/6282322047740?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-gray-950"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-gray-100 dark:bg-gray-900/90 dark:hover:bg-gray-800"
          >
            <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image Gallery */}
            <div className="p-6">
              <div className="dark:from-primary-950 dark:to-secondary-950 mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="text-center">
                  <div className="mb-2 text-8xl">🖨️</div>
                  <p className="text-sm text-gray-500">{product.name}</p>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-sm transition-all ${
                      activeImage === i
                        ? "dark:bg-primary-950 border-primary-500 bg-primary-50"
                        : "border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    🖨️
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {product.brand} · {product.type}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                </div>
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary-500 text-secondary-500" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>
                )}
              </div>

              <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-400">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(product.pricing.monthly)}
                  </span>
                  <span className="text-sm text-gray-500">/bulan</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Harian: {formatCurrency(product.pricing.daily || 0)} · Mingguan:{" "}
                  {formatCurrency(product.pricing.weekly || 0)}
                </p>
                {/* Stock badge */}
                <div className="mt-2">
                  {product.available ? (
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600 dark:bg-green-950">
                      ✓ Tersedia ({product.stock} unit)
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600 dark:bg-red-950">
                      ✗ Tidak Tersedia
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-5">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Fitur Utama
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <details className="mb-6">
                <summary className="cursor-pointer text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Lihat Spesifikasi Lengkap
                </summary>
                <div className="mt-3 space-y-1.5 text-sm">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-500">{key}</span>
                      <span className="max-w-[60%] text-right text-gray-700 dark:text-gray-300">
                        {Array.isArray(val) ? val.join(", ") : val}
                      </span>
                    </div>
                  ))}
                </div>
              </details>

              {/* CTA buttons */}
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={handleWhatsApp}
                  icon={<Phone className="h-4 w-4" />}
                  disabled={!product.available}
                >
                  {product.available ? "Request Quote" : "Tidak Tersedia"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// PRODUCTS PAGE
// ─────────────────────────────────────────────
export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    brand: "",
    type: "",
    availability: "all",
    sortBy: "default",
  });
  const [selectedProduct, setSelectedProduct] = useState<(typeof PRODUCTS)[0] | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // ── filtered & sorted products ──
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (filters.brand) result = result.filter((p) => p.brand === filters.brand);
    if (filters.type) result = result.filter((p) => p.type === filters.type);
    if (filters.availability === "available") result = result.filter((p) => p.available);

    // sort
    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case "price-high":
        result.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ search: "", brand: "", type: "", availability: "all", sortBy: "default" });
  };

  const activeFilterCount = [
    filters.brand,
    filters.type,
    filters.availability !== "all" ? "1" : "",
  ].filter(Boolean).length;

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
              Katalog
            </span>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Katalog <span className="text-gradient">Printer Kami</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Temukan printer yang tepat untuk kebutuhan bisnis Anda dari koleksi lengkap kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          {/* Search + Filter bar */}
          <div className="mb-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari printer..."
                  value={filters.search}
                  onChange={(e) => updateFilter("search", e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                />
              </div>

              {/* Filter toggle (mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-xl border-2 border-gray-200 px-4 py-3 dark:border-gray-800 sm:hidden"
              >
                <Filter className="h-4 w-4" />
                Filter
                {activeFilterCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Desktop filters */}
            <div
              className={`mt-4 grid grid-cols-2 gap-3 lg:grid-cols-5 ${showFilters ? "block" : "hidden sm:grid"}`}
            >
              <select
                value={filters.brand}
                onChange={(e) => updateFilter("brand", e.target.value)}
                className="cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="">Semua Brand</option>
                {PRINTER_BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>

              <select
                value={filters.type}
                onChange={(e) => updateFilter("type", e.target.value)}
                className="cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="">Semua Tipe</option>
                {PRINTER_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={filters.availability}
                onChange={(e) => updateFilter("availability", e.target.value)}
                className="cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="all">Semua Status</option>
                <option value="available">Tersedia</option>
              </select>

              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter("sortBy", e.target.value)}
                className="cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="default">Urutan Default</option>
                <option value="price-low">Harga: Rendah → Tinggi</option>
                <option value="price-high">Harga: Tinggi → Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>

              {/* Reset */}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="rounded-xl border-2 border-secondary-300 px-4 py-2.5 text-sm font-medium text-secondary-600 transition-colors hover:bg-secondary-50"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-gray-500">
            Menampilkan <strong>{filteredProducts.length}</strong> dari{" "}
            <strong>{PRODUCTS.length}</strong> produk
          </p>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <Card
                  variant="bordered"
                  tilt
                  clickable
                  onClick={() => setSelectedProduct(product)}
                  className="group flex h-full flex-col overflow-hidden transition-colors hover:border-primary-300 dark:hover:border-primary-800"
                >
                  {/* Thumbnail */}
                  <div className="dark:from-primary-950 dark:to-secondary-950 relative flex h-48 items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
                    <span className="text-6xl">🖨️</span>
                    {!product.available && (
                      <span className="absolute right-3 top-3 rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600 dark:bg-red-950">
                        Sold Out
                      </span>
                    )}
                    {product.rating && product.rating >= 4.5 && (
                      <span className="dark:bg-secondary-950 absolute left-3 top-3 flex items-center gap-1 rounded-full bg-secondary-100 px-2 py-0.5 text-xs font-bold text-secondary-600">
                        <Star className="h-3 w-3 fill-secondary-500 text-secondary-500" />
                        Top Rated
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                      {product.brand} · {product.type}
                    </span>
                    <h3 className="mb-2 mt-1 font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    {product.rating && (
                      <div className="mb-3 flex items-center gap-1.5">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3.5 w-3.5 ${
                                i < Math.floor(product.rating!)
                                  ? "fill-secondary-500 text-secondary-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          {formatCurrency(product.pricing.monthly)}
                        </span>
                        <span className="text-xs text-gray-500">/bln</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary-500 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No results */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">
                Tidak ditemukan produk yang sesuai filter Anda.
              </p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filter
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
