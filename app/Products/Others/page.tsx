// app/products/others/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, ChevronLeft, ChevronRight, Tag, ShoppingBag, Lock } from "lucide-react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  purchase_link?: string;
  slug: string;
};

// Placeholder data - will be replaced with Supabase fetch
const products: Product[] = [
  {
    id: "1",
    name: "Reggie's Signature Spice Blend",
    description: "A carefully curated blend of authentic Filipino spices, perfect for adobo and everyday cooking.",
    price: "$12.99",
    image: "/product-1.jpg",
    category: "Spices",
    purchase_link: "#",
    slug: "signature-spice-blend",
  },
  {
    id: "2",
    name: "Heritage Kitchen Apron",
    description: "Premium quality apron featuring traditional Filipino embroidery designs.",
    price: "$29.99",
    image: "/product-2.jpg",
    category: "Merchandise",
    purchase_link: "#",
    slug: "heritage-kitchen-apron",
  },
  {
    id: "3",
    name: "Filipino Cooking Class Set",
    description: "Complete set of essential tools and ingredients for mastering Filipino cuisine at home.",
    price: "$49.99",
    image: "/product-3.jpg",
    category: "Kitchen Tools",
    purchase_link: "#",
    slug: "cooking-class-set",
  },
  {
    id: "4",
    name: "Reggie's Recipe Cards",
    description: "Beautifully illustrated recipe cards featuring classic Filipino dishes with step-by-step instructions.",
    price: "$19.99",
    image: "/product-4.jpg",
    category: "Merchandise",
    purchase_link: "#",
    slug: "recipe-cards",
  },
  {
    id: "5",
    name: "Bamboo Kitchen Utensil Set",
    description: "Eco-friendly bamboo utensils handcrafted by Filipino artisans.",
    price: "$34.99",
    image: "/product-5.jpg",
    category: "Kitchen Tools",
    purchase_link: "#",
    slug: "bamboo-utensil-set",
  },
  {
    id: "6",
    name: "Filipino Dessert Mix Bundle",
    description: "Traditional dessert mixes including leche flan, ube halaya, and more.",
    price: "$24.99",
    image: "/product-6.jpg",
    category: "Food Products",
    purchase_link: "#",
    slug: "dessert-mix-bundle",
  },
];

export default function OthersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.ceil(products.length / 3);

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
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#b88746] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-[#b88746] blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center sm:px-10 lg:px-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#b88746]" />
            <Package className="h-6 w-6 text-[#b88746]" />
            <span className="h-px w-12 bg-[#b88746]" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Reggie's Products
          </h1>
          <p className="mx-auto max-w-lg text-sm text-gray-400 sm:text-base">
            Discover our curated collection of Filipino culinary essentials
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
                <p className="text-sm text-gray-400">Products are being prepared</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Content with Blur */}
        <div className="relative">
          <div className="pointer-events-none blur-sm select-none">
            {/* Category Filters */}
            <section className="border-b border-[#0b0d0d]/5 bg-white/50 py-4">
              <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button className="rounded-full bg-[#b88746] px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-[#d4a15b]">
                    All
                  </button>
                  <button className="rounded-full border border-[#0b0d0d]/10 px-4 py-1.5 text-xs font-medium text-[#0b0d0d]/70 transition-all hover:border-[#b88746] hover:text-[#b88746]">
                    Spices
                  </button>
                  <button className="rounded-full border border-[#0b0d0d]/10 px-4 py-1.5 text-xs font-medium text-[#0b0d0d]/70 transition-all hover:border-[#b88746] hover:text-[#b88746]">
                    Merchandise
                  </button>
                  <button className="rounded-full border border-[#0b0d0d]/10 px-4 py-1.5 text-xs font-medium text-[#0b0d0d]/70 transition-all hover:border-[#b88746] hover:text-[#b88746]">
                    Kitchen Tools
                  </button>
                  <button className="rounded-full border border-[#0b0d0d]/10 px-4 py-1.5 text-xs font-medium text-[#0b0d0d]/70 transition-all hover:border-[#b88746] hover:text-[#b88746]">
                    Food Products
                  </button>
                </div>
              </div>
            </section>

            {/* Products Carousel */}
            <section className="py-12 sm:py-16">
              <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#0b0d0d] sm:text-2xl">
                    Featured Products
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
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="w-full flex-shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                      >
                        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 border border-[#0b0d0d]/5">
                          <div className="relative aspect-square overflow-hidden bg-[#f4f1ea]">
                            {/* Placeholder - Replace with actual product image */}
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1d1d] to-[#0b0d0d] text-gray-500">
                              <ShoppingBag className="h-12 w-12 text-[#b88746] opacity-50" />
                            </div>
                            {/* Uncomment when images are ready */}
                            {/* <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            
                            {/* Category Tag */}
                            <div className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                              {product.category}
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="mb-1 flex items-center justify-between">
                              <h3 className="text-base font-bold text-[#0b0d0d] group-hover:text-[#b88746] transition-colors">
                                {product.name}
                              </h3>
                              <span className="flex items-center text-sm font-bold text-[#b88746]">
                                <Tag className="mr-1 h-3 w-3" />
                                {product.price}
                              </span>
                            </div>
                            <p className="mb-3 text-xs leading-relaxed text-[#0b0d0d]/70 line-clamp-2">
                              {product.description}
                            </p>
                            <Link
                              href={product.purchase_link || "#"}
                              className="inline-flex items-center text-xs font-medium text-[#b88746] transition-colors hover:text-[#d4a15b] group-hover:gap-2"
                            >
                              Shop Now
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
                  Shop Our Collection
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-sm text-gray-400">
                  Bring the taste of the Philippines to your kitchen with our curated products.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-[#b88746] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#d4a15b] hover:shadow-lg hover:shadow-[#b88746]/20 hover:-translate-y-0.5"
                >
                  Contact for Orders
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