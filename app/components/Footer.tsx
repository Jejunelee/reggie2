// app/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Circle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#17320b]">
      <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-8 w-24 transition-all duration-300 hover:scale-105 hover:opacity-80 sm:h-9 sm:w-28"
        >
          <Image
            src="/Logo/Logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* Copyright */}
        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-100 sm:text-xs">
          2026 All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 sm:gap-5">
          <Link
            href="#"
            aria-label="Instagram"
            className="text-gray-300 transition-all hover:scale-110 hover:text-[#b88746]"
          >
            <Circle className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>

          <Link
            href="#"
            aria-label="Facebook"
            className="text-gray-300 transition-all hover:scale-110 hover:text-[#b88746]"
          >
            <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>

          <Link
            href="#"
            aria-label="YouTube"
            className="text-gray-300 transition-all hover:scale-110 hover:text-[#b88746]"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}