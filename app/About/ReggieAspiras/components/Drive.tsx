"use client";

import Image from "next/image";
import Link from "next/link";

export default function Drive() {
  return (
    <section className="bg-[#ca8643] py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-[1.5fr_1fr] lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-12 xl:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center items-start text-left">
            <h3 className="mb-2 lg:mb-3 text-sm sm:text-base lg:text-2xl font-bold tracking-[0.2em] text-white uppercase">
              WHAT DRIVES ME
            </h3>

            <h2 className="font-angleton text-2xl sm:text-3xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.2] text-white mb-3 lg:mb-4">
              Curiosity has always been
              <br />
              at the heart of what I do.
            </h2>

            <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-[#f4f1ea]/90 max-w-2xl">
              I'm constantly searching for stories that deserve to be told,
              flavors that deserve to be celebrated, and people whose passion
              deserves recognition. Whether I'm visiting a newly opened café,
              consulting for a restaurant, or speaking at an industry event, my
              goal remains the same: to help elevate the conversation around
              food and hospitality.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-end">
            <div className="relative w-full aspect-[3/4] lg:h-[500px] xl:h-[550px] rounded-lg overflow-hidden bg-[#1a1d1d]">
              <Image
                src="/About/Drive.png"
                alt="What Drives Reggie Aspiras"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 35vw, 50vw"
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}