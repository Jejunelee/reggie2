"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type FeatureCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  isExternal?: boolean;
};

const features: FeatureCard[] = [
  {
    title: "Reggie's Kitchen",
    description: "Discover authentic Filipino dishes passed down through generations.",
    image: "/Landing/Highlights/1x.png",
    href: "/Discover/Kitchen",
  },
  {
    title: "Reggie's Recipes",
    description: "Discover authentic Filipino dishes passed down through generations.",
    image: "/Landing/Highlights/2x.png",
    href: "/Discover/Recipes",
  },
  {
    title: "Reggie's Classroom",
    description: "Step into my kitchen and learn the art of Filipino cooking.",
    image: "/Landing/Highlights/3x.png",
    href: "/Discover/Classroom",
  },
  {
    title: "Timeless Products",
    description: "Blended sauces and mouthwatering cookbooks",
    image: "/Landing/Highlights/4x.png",
    href: "https://www.instagram.com/randcoessentials?igsh=MWM0NWlwb203MDBoMw%3D%3D&utm_source=qr",
    isExternal: true,
  },
];

export default function Features() {
  const [isHighlightVisible, setIsHighlightVisible] = useState(false);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHighlightVisible(entry.intersectionRatio > 0.6);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );

    const currentRef = highlightRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="features"
      className="relative py-12 sm:py-12 lg:py-16 bg-[#f4f1ea] overflow-hidden scroll-mt-20"
    >
      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#b88746]/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#b88746]/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b88746]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <h2 className="text-2xl font-medium text-[#0b0d0d] sm:text-3xl lg:text-4xl">
            FEATURED
          </h2>
          <div 
            ref={highlightRef}
            className={`font-angleton text-2xl font-bold transition-all duration-700 ease-out sm:text-3xl lg:text-4xl ${
              isHighlightVisible 
                ? "text-[#b88746] scale-110" 
                : "text-[#0b0d0d] scale-100"
            }`}
          >
            HIGHLIGHTS
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Extracted Feature Card Component
function FeatureCard({ feature }: { feature: FeatureCard }) {
  const cardContent = (
    <>
      {/* Card Glow Effects */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#b88746]/0 via-[#b88746]/10 to-[#b88746]/0 opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-l from-[#b88746]/0 via-[#b88746]/5 to-[#b88746]/0 opacity-0 blur-md transition-opacity duration-700 delay-75 group-hover:opacity-100" />

      {/* Image Container */}
      <div className="relative aspect-[3/3.5] overflow-hidden bg-[#0b0d0d] rounded-t-xl">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="mb-1.5 text-sm font-bold tracking-[0.05em] text-white sm:text-base">
            {feature.title}
          </h3>
          
          <p className="mb-3 text-xs leading-relaxed text-gray-200 sm:text-sm">
            {feature.description}
          </p>
          
          <div className="flex items-center text-[11px] font-medium tracking-[0.15em] text-[#b88746] transition-all duration-300 group-hover:text-[#d4a15b]">
            <span className="relative">
              Learn More
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#b88746] transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>

        {/* Bottom Border Glows */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#b88746] transition-all duration-700 group-hover:w-full" />
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#b88746]/30 blur-sm transition-all duration-700 delay-100 group-hover:w-full" />
      </div>
    </>
  );

  // If external link, use anchor tag with target="_blank"
  if (feature.isExternal) {
    return (
      <a
        href={feature.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 block cursor-pointer"
      >
        {cardContent}
      </a>
    );
  }

  // Internal links use Next.js Link
  return (
    <Link
      href={feature.href}
      className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 block cursor-pointer"
    >
      {cardContent}
    </Link>
  );
}