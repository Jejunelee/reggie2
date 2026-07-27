"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="relative w-full min-h-[100svh] lg:h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-105"
        style={{
          backgroundImage: "url('/About/BG.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />

      {/* ===================== MOBILE ===================== */}
      <div className="relative z-10 lg:hidden min-h-[100svh] flex flex-col justify-end px-6 pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white text-4xl font-angleton font-base mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white text-sm font-bold tracking-wide uppercase mb-4"
        >
          A Lifetime Dedicated To Food
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white text-lg leading-relaxed font-light max-w-lg"
        >
          Food has always been more than a profession to me—it has been a
          lifelong journey of discovery, passion, and unwavering dedication.
        </motion.p>
      </div>

      {/* ===================== DESKTOP ===================== */}
      <div className="relative z-10 hidden lg:flex h-full max-w-7xl mx-auto px-12 items-center">
        <div className="grid grid-cols-2 gap-[30rem] w-full">
          {/* Left Side */}
          <div className="flex items-center">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-6xl font-angleton font-base"
            >
              About Me
            </motion.h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-xl font-bold tracking-wide uppercase"
            >
              A Lifetime Dedicated To Food
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-2xl leading-tight font-light max-w-lg"
            >
              Food has always been more than a profession to me—it has been a
              lifelong journey of discovery, passion, and unwavering dedication.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}