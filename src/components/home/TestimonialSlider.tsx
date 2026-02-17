/**
 * TestimonialSlider Component
 * Carousel testimonials with parallax effect using embla-carousel
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function TestimonialSlider() {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Star rating render
  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-secondary-500 text-secondary-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="section-padding relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Decorative patterns */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="dark:bg-primary-950 absolute left-10 top-10 h-64 w-64 rounded-full bg-primary-100 blur-3xl" />
        <div className="dark:bg-secondary-950 absolute bottom-10 right-10 h-48 w-48 rounded-full bg-secondary-100 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dark:bg-secondary-950 mb-6 inline-block rounded-full bg-secondary-50 px-4 py-1.5 text-sm font-semibold text-secondary-600 dark:text-secondary-400">
            Testimoni
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Apa Kata <span className="text-gradient">Client Kami</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Kepercayaan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full flex-shrink-0 md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                >
                  <motion.div
                    className="glass flex h-full flex-col rounded-3xl p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                      <Quote className="h-5 w-5 text-white" />
                    </div>

                    {/* Stars */}
                    <div className="mb-4">{renderStars(testimonial.rating)}</div>

                    {/* Comment */}
                    {/* <p className="mb-6 flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
                      "{testimonial.comment}"
                    </p> */}
                    <p className="mb-6 flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-secondary-400">
                        <span className="text-lg font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {/* Prev Button */}
            <button
              className="dark:hover:bg-primary-950 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 hover:border-primary-500 hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:border-primary-500"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "h-3 w-8 bg-primary-600"
                      : "h-3 w-3 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              className="dark:hover:bg-primary-950 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 hover:border-primary-500 hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:border-primary-500"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
