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
      {/* ===== MOBILE: Refined Magazine Style ===== */}
      <div className="md:hidden relative min-h-[100svh] bg-[#0b0d0d] flex items-center justify-center">
        <div className="w-full px-6">
          <div className="flex items-center gap-4">
            {/* Left Column - Text */}
            <div className="flex-1 max-w-[58%]">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="mb-5 h-px w-10 bg-[#ca8643]"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.25 }}
                className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#ca8643] uppercase"
              >
                Food • Culture • Heritage
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.45 }}
                className="font-angleton text-[clamp(2rem,6vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white"
              >
                Food. Culture.
                <br />
                Heritage. Stories.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.85 }}
                className="mt-4 text-[clamp(0.7rem,1.8vw,0.9rem)] font-light leading-relaxed text-gray-300 max-w-[30ch]"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.25 }}
                className="mt-6"
              >
                <ExploreButton onClick={handleExploreClick} isMobile />
              </motion.div>
            </div>

            {/* Right Column - Image - Flush to right edge */}
            <div className="relative h-[70vh] w-[42%] flex-shrink-0 -mr-6">
              <div className="absolute inset-0">
                <Image
                  src="/Landing/Hero1.png"
                  alt="Filipino food and culture"
                  fill
                  className="object-cover"
                  priority
                  sizes="42vw"
                  quality={95}
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
              {/* Gradient fade on the left edge - REDUCED OPACITY for more visible image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d0d] via-[#0b0d0d]/1 to-transparent" />
              {/* Subtle overlay at bottom - REDUCED OPACITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0d]/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== TABLET / DESKTOP (>= md): original two-column with photo ===== */}
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
                  quality={95}
                  style={{ objectPosition: "center bottom" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPLORE BUTTON COMPONENT
// ============================================================
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