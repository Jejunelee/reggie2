"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback } from "react";

export default function Hero() {
  const handleExploreClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      const headerHeight = 80;
      const targetPosition = featuresSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Shared text content
  const subtitle = "EXPLORING THE FILIPINO SPIRIT THROUGH FOOD AND BEYOND";
  const description = "Welcome to my world—where flavors tell stories, traditions inspire, and every journey connects us.";

  return (
    <section className="relative min-h-[100svh] md:min-h-screen bg-[#0b0d0d] overflow-hidden">
      {/* Ambient glows — mobile only */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#ca8643]/[0.08] blur-3xl md:hidden" />
      <div className="pointer-events-none absolute bottom-0 -right-16 h-64 w-64 rounded-full bg-[#ca8643]/[0.06] blur-3xl md:hidden" />

      {/* Gradient overlay — desktop only */}
      <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-[#0b0d0d] via-[#0b0d0d]/70 to-transparent lg:via-[#0b0d0d]/30" />

      {/* ================= MOBILE (< md): text-only hero ================= */}
      <div className="md:hidden relative z-20 flex min-h-[100svh] flex-col justify-center px-6 py-28">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 h-px w-12 origin-left bg-[#ca8643]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[11px] font-bold leading-snug tracking-[0.18em] text-[#ca8643]"
        >
          {subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 font-angleton text-[13vw] font-medium leading-[1.04] tracking-[-0.03em] text-white xs:text-5xl"
        >
          Food. Culture.
          <br />
          Heritage. Stories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[32ch] text-sm font-light leading-relaxed tracking-[0.02em] text-gray-300"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <ExploreButton onClick={handleExploreClick} isMobile />
        </motion.div>
      </div>

      {/* ================= TABLET / DESKTOP (>= md): original two-column with photo ================= */}
      <div className="hidden md:block absolute inset-0 z-20 pt-24 lg:pt-28">
        <div className="relative h-full w-full max-w-7xl mx-auto px-10 lg:px-16">
          <div className="grid grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 xl:gap-14 h-full items-center">
            {/* Left Column */}
            <div className="flex flex-col justify-center items-start text-left min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-2 text-3xl font-angleton font-medium tracking-[-0.08em] text-white lg:text-5xl xl:text-6xl whitespace-nowrap"
              >
                Food. Culture.
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 text-3xl font-angleton font-medium tracking-[-0.08em] text-white lg:text-5xl xl:text-6xl whitespace-nowrap"
              >
                Heritage. Stories.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="mb-[-2px] text-[10px] font-bold tracking-[0.1em] text-[#ca8643] lg:text-sm"
              >
                EXPLORING THE FILIPINO SPIRIT
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 text-[10px] font-bold tracking-[0.1em] text-[#ca8643] lg:text-sm"
              >
                THROUGH FOOD AND BEYOND
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 max-w-sm lg:max-w-md text-sm lg:text-lg font-light leading-relaxed tracking-[0.03em] text-gray-300"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
              >
                <ExploreButton onClick={handleExploreClick} isDesktop />
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex items-end justify-center lg:justify-end self-stretch h-full">
              <div className="relative w-full h-[440px] lg:h-[580px] xl:h-[680px] 2xl:h-[700px]">
                <Image
                  src="/Landing/Hero1.png"
                  alt="Filipino food and culture"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 50vw, 55vw"
                  quality={85}
                  style={{ objectPosition: "center bottom" }}
                />

                {/* Decorative gold glow pulse */}
                <motion.div
                  className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#ca8643]/10 blur-2xl lg:h-48 lg:w-48 lg:blur-3xl pointer-events-none"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted Button Component
interface ExploreButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isMobile?: boolean;
  isDesktop?: boolean;
}

function ExploreButton({ onClick, isMobile, isDesktop }: ExploreButtonProps) {
  const baseStyles = "group relative inline-flex items-center overflow-hidden border-2 border-[#ca8643] text-[#ca8643] transition-colors cursor-pointer font-angleton font-bold";
  
  const mobileStyles = "px-5 py-2.5 text-xs tracking-[0.18em] active:bg-[#ca8643] active:text-[#0b0d0d]";
  const desktopStyles = "px-4 py-1.5 text-[10px] tracking-[0.15em] hover:bg-[#b88746] hover:text-[#0b0d0d] lg:px-6 lg:py-2.5 lg:text-sm lg:tracking-[0.2em] whitespace-nowrap";

  return (
    <a
      href="#features"
      onClick={onClick}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
    >
      {isDesktop && (
        <motion.span
          className="absolute inset-0 bg-[#ca8643]"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <span className="relative z-10 flex items-center">
        EXPLORE MY WORLD
        <motion.span
          className="ml-2 inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.4 }}
        >
          →
        </motion.span>
      </span>
    </a>
  );
}