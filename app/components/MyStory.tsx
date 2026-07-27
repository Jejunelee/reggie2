"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MyStory() {
  return (
    <section className="relative bg-[#000000] overflow-hidden">
      {/* Top background from #f4f1ea - 25% */}
      <div className="absolute top-0 left-0 right-0 h-[15%] md:h-[25%] bg-[#f4f1ea]" />

      <div className="relative z-10 w-full">
        {/* Mobile Layout - Text only, no image */}
        <div className="lg:hidden flex flex-col justify-center min-h-screen px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-angleton text-4xl font-medium tracking-[-0.03em] text-white"
          >
            My Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-sm font-light leading-relaxed tracking-[0.02em] text-gray-300"
          >
            For more than four decades, Reggie Aspiras has been at the
            forefront of the Philippine culinary scene, documenting its
            evolution through insightful storytelling, trusted restaurant
            reviews, and meaningful collaborations with the country's leading
            chefs, restaurateurs, and hospitality brands.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <p className="text-sm font-medium leading-relaxed text-[#ca8643]">
              "FOOD HAS ALWAYS BEEN MORE THAN A PROFESSION TO ME. IT HAS BEEN A
              LIFELONG JOURNEY OF DISCOVERY."
            </p>
          </motion.blockquote>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-[1.1fr_1fr] min-h-[900px] lg:h-[calc(100vh-4rem)]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center items-start text-left pt-72 pb-24 px-6 sm:px-10 lg:pl-16 lg:pr-0 max-w-[1400px] mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-angleton text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
            >
              My Story
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-sm font-light leading-relaxed tracking-[0.02em] text-gray-300 sm:text-xl lg:text-xl"
            >
              For more than four decades, Reggie Aspiras has been at the
              forefront of the Philippine culinary scene, documenting its
              evolution through insightful storytelling, trusted restaurant
              reviews, and meaningful collaborations with the country's leading
              chefs, restaurateurs, and hospitality brands.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl"
            >
              <p className="text-sm font-medium leading-relaxed text-[#ca8643] sm:text-lg lg:text-2xl">
                "FOOD HAS ALWAYS BEEN MORE THAN A PROFESSION TO ME. IT HAS BEEN A
                LIFELONG JOURNEY OF DISCOVERY."
              </p>
            </motion.blockquote>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-end justify-end">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/Landing/Me.png"
                alt="Reggie Aspiras - Culinary Storyteller"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}