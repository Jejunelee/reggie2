// app/discover/classroom/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  Users, 
  MapPin,
  Video,
  Lock
} from "lucide-react";

type Class = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  image: string;
  type: "in-person" | "online";
  spots: number;
  featured?: boolean;
  slug: string;
};

// Placeholder data - will be replaced with Supabase fetch
const classes: Class[] = [
  {
    id: "1",
    title: "Intro to Filipino Cooking",
    description: "Learn the fundamentals of Filipino cuisine including adobo, sinigang, and lumpia. Perfect for beginners!",
    instructor: "Reggie Aspiras",
    date: "2026-08-15",
    time: "10:00 AM - 2:00 PM",
    duration: "4 hours",
    price: "$75",
    image: "/class-1.jpg",
    type: "in-person",
    spots: 12,
    featured: true,
    slug: "intro-to-filipino-cooking",
  },
  {
    id: "2",
    title: "Advanced Adobo Workshop",
    description: "Master the art of adobo with regional variations and modern interpretations.",
    instructor: "Reggie Aspiras",
    date: "2026-08-22",
    time: "2:00 PM - 6:00 PM",
    duration: "4 hours",
    price: "$95",
    image: "/class-2.jpg",
    type: "in-person",
    spots: 10,
    featured: false,
    slug: "advanced-adobo-workshop",
  },
  {
    id: "3",
    title: "Filipino Desserts Masterclass",
    description: "Create decadent Filipino desserts like leche flan, ube halaya, and bibingka.",
    instructor: "Reggie Aspiras",
    date: "2026-08-29",
    time: "10:00 AM - 1:00 PM",
    duration: "3 hours",
    price: "$85",
    image: "/class-3.jpg",
    type: "online",
    spots: 20,
    featured: false,
    slug: "filipino-desserts-masterclass",
  },
  {
    id: "4",
    title: "Sunday Family Feast",
    description: "Cook a complete Filipino Sunday feast including lechon kawali, pancit, and more.",
    instructor: "Reggie Aspiras",
    date: "2026-09-05",
    time: "9:00 AM - 3:00 PM",
    duration: "6 hours",
    price: "$120",
    image: "/class-4.jpg",
    type: "in-person",
    spots: 8,
    featured: true,
    slug: "sunday-family-feast",
  },
  {
    id: "5",
    title: "Plant-Based Filipino Classics",
    description: "Explore vegan and plant-based versions of traditional Filipino favorites.",
    instructor: "Reggie Aspiras",
    date: "2026-09-12",
    time: "11:00 AM - 2:00 PM",
    duration: "3 hours",
    price: "$80",
    image: "/class-5.jpg",
    type: "online",
    spots: 25,
    featured: false,
    slug: "plant-based-filipino-classics",
  },
  {
    id: "6",
    title: "Filipino Street Food Favorites",
    description: "Recreate popular Filipino street food like isaw, kwek-kwek, and fish balls.",
    instructor: "Reggie Aspiras",
    date: "2026-09-19",
    time: "1:00 PM - 5:00 PM",
    duration: "4 hours",
    price: "$70",
    image: "/class-6.jpg",
    type: "in-person",
    spots: 15,
    featured: false,
    slug: "filipino-street-food-favorites",
  },
];

export default function ClassroomPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.ceil(classes.length / 3);

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
            <GraduationCap className="h-6 w-6 text-[#b88746]" />
            <span className="h-px w-12 bg-[#b88746]" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Reggie's Classroom
          </h1>
          <p className="mx-auto max-w-lg text-sm text-gray-400 sm:text-base">
            Learn the art of Filipino cooking with hands-on classes and workshops
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
                <p className="text-sm text-gray-400">Classes are being prepared</p>
              </div>
            </div>
          </div>
        </div>

        {/* Classes Carousel with Blur */}
        <div className="relative">
          <div className="pointer-events-none blur-sm select-none">
            <section className="py-12 sm:py-16">
              <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#0b0d0d] sm:text-2xl">
                    Upcoming Classes
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
                    {classes.map((classItem) => (
                      <div
                        key={classItem.id}
                        className="w-full flex-shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                      >
                        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 border border-[#0b0d0d]/5 h-full flex flex-col">
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1ea]">
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1d1d] to-[#0b0d0d] text-gray-500">
                              <GraduationCap className="h-12 w-12 text-[#b88746] opacity-50" />
                            </div>
                            {/* Uncomment when images are ready */}
                            {/* <Image
                              src={classItem.image}
                              alt={classItem.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            
                            {/* Type Badge */}
                            <div className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm flex items-center gap-1.5">
                              {classItem.type === "online" ? (
                                <Video className="h-3 w-3" />
                              ) : (
                                <MapPin className="h-3 w-3" />
                              )}
                              {classItem.type === "online" ? "Online" : "In-Person"}
                            </div>

                            {/* Featured Badge */}
                            {classItem.featured && (
                              <div className="absolute top-3 right-3 rounded-full bg-[#b88746] px-3 py-1 text-xs font-bold text-white uppercase">
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-base font-bold text-[#0b0d0d] group-hover:text-[#b88746] transition-colors line-clamp-2 mb-2">
                              {classItem.title}
                            </h3>
                            <p className="mb-3 text-xs leading-relaxed text-[#0b0d0d]/70 line-clamp-2 flex-1">
                              {classItem.description}
                            </p>
                            
                            <div className="space-y-1.5 mb-3">
                              <div className="flex items-center gap-2 text-xs text-[#0b0d0d]/60">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{new Date(classItem.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-[#0b0d0d]/60">
                                <Clock className="h-3.5 w-3.5" />
                                <span>{classItem.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-[#0b0d0d]/60">
                                <Users className="h-3.5 w-3.5" />
                                <span>{classItem.spots} spots available</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-[#0b0d0d]/5">
                              <span className="text-sm font-bold text-[#b88746]">{classItem.price}</span>
                              <Link
                                href={`/discover/classroom/${classItem.slug}`}
                                className="inline-flex items-center text-xs font-medium text-[#b88746] transition-colors hover:text-[#d4a15b] group-hover:gap-2"
                              >
                                Book Now
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
                  Ready to Cook?
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-sm text-gray-400">
                  Join Reggie's classroom and discover the joy of Filipino cooking.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-[#b88746] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#d4a15b] hover:shadow-lg hover:shadow-[#b88746]/20 hover:-translate-y-0.5"
                >
                  Contact for Booking
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