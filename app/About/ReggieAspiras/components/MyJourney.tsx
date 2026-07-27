"use client";

import { motion } from "framer-motion";

export default function MyJourney() {
  return (
    <section className="relative bg-[#f4f1ea] overflow-hidden px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-0">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20">
          {/* Left Column - Image (hidden on mobile) */}
          <div className="hidden lg:flex items-end justify-start">
            <div className="relative w-full h-[55vh] lg:h-[80vh] rounded-lg overflow-hidden">
              <img
                src="/Journey/J.png"
                alt="Reggie Aspiras - Culinary Storyteller"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center items-start w-full py-4 sm:py-8 lg:py-12">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-angleton text-3xl font-medium tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl lg:text-5xl w-full"
            >
              My Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 sm:mt-6 text-sm font-light leading-relaxed tracking-[0.02em] text-[#333333] sm:text-base lg:text-base"
            >
              What began as a passion for writing grew into a lifelong career 
              dedicated to food, hospitality, and storytelling. Every opportunity has deepened my 
              appreciation for the people, traditions, and craftsmanship behind every great dining experience.
              <br />
              <br />
              Over the years, I've worn many hats: chef, bestselling author, columnist, educator, consultant, 
              and media personality. Each role has allowed me to contribute to the growth of the Philippine 
              culinary industry while continuously learning from chefs, restaurateurs, and hospitality professionals.
              <br />
              <br />
              Today, I remain committed to preserving Filipino culinary heritage, mentoring the next generation, 
              and sharing stories that celebrate our culture through food. My journey continues to be driven 
              by authenticity, passion, and a genuine love for bringing people together around the table.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 sm:mt-8 w-full"
            >
              <p className="text-sm font-medium leading-relaxed text-[#ca8643] sm:text-lg lg:text-2xl">
                "FOOD HAS ALWAYS BEEN MORE THAN A PROFESSION TO ME. IT HAS BEEN
                A LIFELONG JOURNEY OF DISCOVERY."
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}