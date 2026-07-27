// app/discover/kitchen/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChefHat, 
  ChevronLeft, 
  ChevronRight,
  Utensils,
  Clock,
  Users,
  Star,
  Video,
  BookOpen,
  Lock
} from "lucide-react";

type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prepTime: string;
  cookTime: string;
  servings: number;
  featured?: boolean;
  slug: string;
};

// Placeholder data - will be replaced with Supabase fetch
const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Chicken Adobo",
    description: "The quintessential Filipino dish - tender chicken braised in soy sauce, vinegar, and garlic.",
    image: "/recipe-1.jpg",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: 4,
    featured: true,
    slug: "classic-chicken-adobo",
  },
  {
    id: "2",
    title: "Sinigang na Baboy",
    description: "A comforting sour soup made with pork, tamarind, and fresh vegetables.",
    image: "/recipe-2.jpg",
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "1 hour",
    servings: 6,
    featured: false,
    slug: "sinigang-na-baboy",
  },
  {
    id: "3",
    title: "Leche Flan",
    description: "A rich and creamy caramel custard dessert that's a Filipino favorite.",
    image: "/recipe-3.jpg",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: 8,
    featured: false,
    slug: "leche-flan",
  },
  {
    id: "4",
    title: "Lumpiang Shanghai",
    description: "Crispy Filipino spring rolls filled with seasoned ground pork and vegetables.",
    image: "/recipe-4.jpg",
    difficulty: "Easy",
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 6,
    featured: true,
    slug: "lumpiang-shanghai",
  },
  {
    id: "5",
    title: "Kare-Kare",
    description: "A rich oxtail stew with peanut sauce, served with shrimp paste and vegetables.",
    image: "/recipe-5.jpg",
    difficulty: "Hard",
    prepTime: "30 min",
    cookTime: "3 hours",
    servings: 6,
    featured: false,
    slug: "kare-kare",
  },
  {
    id: "6",
    title: "Pancit Canton",
    description: "Stir-fried egg noodles with vegetables, meat, and savory sauce.",
    image: "/recipe-6.jpg",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    featured: false,
    slug: "pancit-canton",
  },
];

export default function KitchenPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.ceil(recipes.length / 3);

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

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "text-green-600 bg-green-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Hard": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
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
            <ChefHat className="h-6 w-6 text-[#b88746]" />
            <span className="h-px w-12 bg-[#b88746]" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Reggie's Kitchen
          </h1>
          <p className="mx-auto max-w-lg text-sm text-gray-400 sm:text-base">
            Discover authentic Filipino recipes from my kitchen to yours
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
                <p className="text-sm text-gray-400">Recipes are being prepared</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Carousel with Blur */}
        <div className="relative">
          <div className="pointer-events-none blur-sm select-none">
            <section className="py-12 sm:py-16">
              <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#0b0d0d] sm:text-2xl">
                    Featured Recipes
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
                    {recipes.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="w-full flex-shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                      >
                        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 border border-[#0b0d0d]/5 h-full flex flex-col">
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1ea]">
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1d1d] to-[#0b0d0d] text-gray-500">
                              <Utensils className="h-12 w-12 text-[#b88746] opacity-50" />
                            </div>
                            {/* Uncomment when images are ready */}
                            {/* <Image
                              src={recipe.image}
                              alt={recipe.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            
                            {/* Featured Badge */}
                            {recipe.featured && (
                              <div className="absolute top-3 right-3 rounded-full bg-[#b88746] px-3 py-1 text-xs font-bold text-white uppercase">
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-base font-bold text-[#0b0d0d] group-hover:text-[#b88746] transition-colors line-clamp-2">
                                {recipe.title}
                              </h3>
                            </div>
                            <p className="mb-3 text-xs leading-relaxed text-[#0b0d0d]/70 line-clamp-2 flex-1">
                              {recipe.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                                {recipe.difficulty}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                <Clock className="h-3 w-3 mr-1" />
                                {recipe.prepTime}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                <Users className="h-3 w-3 mr-1" />
                                {recipe.servings}
                              </span>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-[#0b0d0d]/5 mt-auto">
                              <Link
                                href={`/discover/kitchen/${recipe.slug}`}
                                className="inline-flex items-center text-xs font-medium text-[#b88746] transition-colors hover:text-[#d4a15b] group-hover:gap-2"
                              >
                                View Recipe
                                <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                {totalSlides > 1 && (
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
                )}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0b0d0d] py-12">
              <div className="mx-auto max-w-[1400px] px-6 text-center sm:px-10 lg:px-16">
                <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  Hungry for More?
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-sm text-gray-400">
                  Explore more recipes and bring the taste of the Philippines to your table.
                </p>
                <Link
                  href="/discover/recipes"
                  className="group inline-flex items-center rounded-lg bg-[#b88746] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#d4a15b] hover:shadow-lg hover:shadow-[#b88746]/20 hover:-translate-y-0.5"
                >
                  View All Recipes
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