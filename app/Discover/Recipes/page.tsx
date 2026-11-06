// app/discover/recipes/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChefHat, 
  Clock,
  Users,
  Star,
} from "lucide-react";
import { recipes } from "@/lib/recipes";


export default function RecipesPage() {
  const categories = ["All", ...Array.from(new Set(recipes.map((recipe) => recipe.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = selectedCategory === "All"
    ? recipes
    : recipes.filter((recipe) => recipe.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "text-green-600 bg-green-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Hard": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < Math.floor(rating)
                ? "fill-[#b88746] text-[#b88746]"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
        <span className="ml-1 text-xs font-medium text-[#0b0d0d]/70">
          {rating}
        </span>
      </div>
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
            <ChefHat className="h-6 w-6 text-[#b88746]" />
            <span className="h-px w-12 bg-[#b88746]" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Filipino Recipes
          </h1>
          <p className="mx-auto max-w-lg text-sm text-gray-400 sm:text-base">
            Discover authentic Filipino recipes from traditional favorites to modern interpretations
          </p>
        </div>
      </section>

      <div>
            {categories.length > 2 && (
              <section className="border-b border-[#0b0d0d]/5 bg-white/50 py-4">
                <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-[#b88746] text-white"
                            : "border border-[#0b0d0d]/10 text-[#0b0d0d]/70 hover:border-[#b88746] hover:text-[#b88746]"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="py-12 sm:py-16">
              <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#0b0d0d] sm:text-2xl">
                    {selectedCategory === "All" ? "All Recipes" : selectedCategory}
                  </h2>
                  <p className="text-sm text-[#0b0d0d]/60">
                    {filteredRecipes.length} recipes found
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {filteredRecipes.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0b0d0d]/5 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="relative bg-[#f4f1ea]">
                        <Image
                          src={recipe.image}
                          alt={recipe.imageAlt ?? recipe.title}
                          width={recipe.imageWidth ?? 1200}
                          height={recipe.imageHeight ?? 1600}
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="h-auto w-full"
                        />
                        {recipe.featured && (
                          <div className="absolute top-3 right-3 rounded-full bg-[#b88746] px-3 py-1 text-xs font-bold text-white uppercase">
                            Featured
                          </div>
                        )}
                        <div className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                          {recipe.difficulty}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="mb-2 text-base font-bold text-[#0b0d0d] transition-colors group-hover:text-[#b88746]">
                          {recipe.title}
                        </h3>
                        <p className="mb-3 flex-1 text-xs leading-relaxed text-[#0b0d0d]/70">
                          {recipe.description}
                        </p>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                            <Clock className="mr-1 h-3 w-3" />
                            {recipe.prepTime}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                            <Users className="mr-1 h-3 w-3" />
                            {recipe.servings}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                            {recipe.category}
                          </span>
                        </div>
                        <div className="mt-auto flex items-center justify-between border-t border-[#0b0d0d]/5 pt-3">
                          <div className="flex items-center gap-1">
                            {renderStars(recipe.rating)}
                          </div>
                          <Link
                            href={`/discover/recipes/${recipe.slug}`}
                            className="inline-flex items-center text-xs font-medium text-[#b88746] transition-colors hover:text-[#d4a15b] group-hover:gap-2"
                          >
                            View Recipe
                            <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-[#b88746] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#d4a15b] hover:shadow-lg hover:shadow-[#b88746]/20 hover:-translate-y-0.5"
                >
                  Request a Recipe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
      </div>
    </main>
  );
}