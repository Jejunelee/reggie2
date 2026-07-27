"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  const y = useSpring(mouseY, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      style={{ x, y }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full"
        style={{
          background: "white",
          filter: "blur(40px)",
          opacity: 1,
          boxShadow: `
            0 0 40px rgba(255,255,255,1),
            0 0 80px rgba(255,255,255,0.95),
            0 0 120px rgba(255,255,255,0.85),
            0 0 180px rgba(255,255,255,0.65)
          `,
        }}
      />
    </motion.div>
  );
}