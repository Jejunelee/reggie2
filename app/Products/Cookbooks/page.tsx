// app/cookbook/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Lock } from "lucide-react";

type Cookbook = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  cover_image: string;
  published_date: string;
  purchase_link?: string;
  slug: string;
};

// Placeholder data - will be replaced with Supabase fetch
const cookbooks: Cookbook[] = [
  {
    id: "1",
    title: "Flavors of Home",
    subtitle: "A Journey Through Filipino Comfort Food",
    description:
      "Discover the warmth of Filipino home cooking with recipes passed down through generations.",
    cover_image: "/cookbook-1.jpg",
    published_date: "2024",
    purchase_link: "#",
    slug: "flavors-of-home",
  },
  {
    id: "2",
    title: "Heritage on a Plate",
    subtitle: "Celebrating Philippine Culinary Traditions",
    description:
      "Explore the rich tapestry of Philippine cuisine, from regional specialties to festive feasts.",
    cover_image: "/cookbook-2.jpg",
    published_date: "2023",
    purchase_link: "#",
    slug: "heritage-on-a-plate",
  },
  {
    id: "3",
    title: "The Filipino Kitchen",
    subtitle: "Essential Recipes for Every Home Cook",
    description:
      "Master the art of Filipino cooking with essential techniques and beloved recipes.",
    cover_image: "/cookbook-3.jpg",
    published_date: "2022",
    purchase_link: "#",
    slug: "the-filipino-kitchen",
  },
  {
    id: "4",
    title: "Taste of Tradition",
    subtitle: "Family Recipes Passed Down Through Generations",
    description:
      "A collection of cherished family recipes that tell the story of Filipino heritage.",
    cover_image: "/cookbook-4.jpg",
    published_date: "2021",
    purchase_link: "#",
    slug: "taste-of-tradition",
  },
  {
    id: "5",
    title: "Modern Filipino",
    subtitle: "Reimagining Classic Dishes for Today",
    description:
      "Traditional Filipino flavors meet modern techniques in this innovative cookbook.",
    cover_image: "/cookbook-5.jpg",
    published_date: "2020",
    purchase_link: "#",
    slug: "modern-filipino",
  },
];

export default function CookbookPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.ceil(cookbooks.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  return (
    <main className="bg-[#f4f1ea] min-h-screen">
      {/* Header */}
      <section className="relative bg-[#0b0d0d] py-26 sm:py-30 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#b88746] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-[#b88746] blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center sm:px-10 lg:px-16">
          {/* Decorative line */}
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#b88746]" />
            <BookOpen className="h-6 w-6 text-[#b88746]" />
            <span className="h-px w-12 bg-[#b88746]" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Reggie's Cookbooks
          </h1>
          <p className="mx-auto max-w-lg text-sm text-gray-400 sm:text-base">
            Explore my collection of culinary publications
          </p>
        </div>
      </section>

      {/* Lock Overlay - Coming Soon Banner */}
      <div className="relative">
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="rounded-2xl bg-[#0b0d0d]/95 backdrop-blur-sm px-8 py-6 shadow-2xl border border-[#b88746]/30 pointer-events-auto">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#b88746]/20 p-3">
                <Lock className="h-8 w-8 text-[#b88746]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Coming Soon!</h3>
                <p className="text-sm text-gray-400">Cookbooks are being prepared</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section with Blur */}
        <div className="relative">
          <div className="pointer-events-none blur-sm select-none">
            <section className="py-12 sm:py-16">
              <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#0b0d0d] sm:text-2xl">
                    Featured Cookbooks
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="rounded-full bg-[#b88746] p-2 text-white transition-all hover:bg-[#d4a15b] hover:scale-105 hover:shadow-lg hover:shadow-[#b88746]/30"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="rounded-full bg-[#b88746] p-2 text-white transition-all hover:bg-[#d4a15b] hover:scale-105 hover:shadow-lg hover:shadow-[#b88746]/30"
                      aria-label="Next"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden">
                  <div
                    ref={carouselRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {cookbooks.map((book) => (
                      <div
                        key={book.id}
                        className="w-full flex-shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                      >
                        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 border border-[#0b0d0d]/5">
                          <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f1ea]">
                            {/* Placeholder - Replace with actual cover image */}
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1d1d] to-[#0b0d0d] text-gray-500">
                              <BookOpen className="h-12 w-12 text-[#b88746] opacity-50" />
                            </div>
                            {/* Uncomment when images are ready */}
                            {/* <Image
                              src={book.cover_image}
                              alt={book.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <div className="p-4">
                            <div className="mb-1 text-xs font-medium text-[#b88746] uppercase tracking-wider">
                              {book.published_date}
                            </div>
                            <h3 className="mb-1 text-base font-bold text-[#0b0d0d] group-hover:text-[#b88746] transition-colors">
                              {book.title}
                            </h3>
                            {book.subtitle && (
                              <p className="mb-2 text-xs text-[#0b0d0d]/60">
                                {book.subtitle}
                              </p>
                            )}
                            <p className="mb-3 text-xs leading-relaxed text-[#0b0d0d]/70 line-clamp-2">
                              {book.description}
                            </p>
                            <Link
                              href={book.purchase_link || "#"}
                              className="inline-flex items-center text-xs font-medium text-[#b88746] transition-colors hover:text-[#d4a15b] group-hover:gap-2"
                            >
                              Learn More
                              <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="mt-6 flex justify-center gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-[#b88746]"
                          : "w-2 bg-[#0b0d0d]/20 hover:bg-[#0b0d0d]/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0b0d0d] py-12">
              <div className="mx-auto max-w-[1400px] px-6 text-center sm:px-10 lg:px-16">
                <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  Get Your Copy Today
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-sm text-gray-400">
                  Bring the flavors of the Philippines into your kitchen.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-[#b88746] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#d4a15b] hover:shadow-lg hover:shadow-[#b88746]/20 hover:-translate-y-0.5"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}