"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type SubItem = { label: string; href: string };
type NavItem = { label: string; href?: string; subItems?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    subItems: [
      { label: "Who Am I", href: "/About/ReggieAspiras" },
      { label: "Philippine Heritage Kitchen", href: "https://phk.com.ph" },
    ],
  },
  {
    label: "DISCOVER",
    subItems: [
      { label: "Recipes", href: "/Discover/Recipes" },
      { label: "Reggie's Classroom", href: "/Discover/Classroom" },
      { label: "Reggie's Kitchen", href: "/Discover/Kitchen" },
    ],
  },
  {
    label: "MY PRODUCTS",
    subItems: [
      {
        label: "Reggie's Cookbooks",
        href: "https://www.instagram.com/randcoessentials?igsh=MWM0NWlwb203MDBoMw%3D%3D&utm_source=qr",
      },
      {
        label: "Reggie's Products",
        href: "https://www.instagram.com/randcoessentials?igsh=MWM0NWlwb203MDBoMw%3D%3D&utm_source=qr",
      },
    ],
  },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      
      // Check if click is outside all dropdowns
      const isDropdownClick = Object.values(dropdownRefs.current).some(
        (ref) => ref?.contains(target)
      );
      
      const isMenuClick = menuRef.current?.contains(target);
      const isButtonClick = buttonRef.current?.contains(target);
      
      if (!isDropdownClick && !isMenuClick && !isButtonClick) {
        setIsMobileOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
    setOpenDropdown(null);
  };

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = (label: string) => {
    // Don't close if mouse is moving to the dropdown
    setTimeout(() => {
      const dropdown = dropdownRefs.current[label];
      if (dropdown && !dropdown.matches(':hover')) {
        setOpenDropdown(null);
      }
    }, 100);
  };

  // Smooth scroll handler for contact
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    setIsMobileOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "py-2 bg-[#0b0d0d]/95 backdrop-blur-xl shadow-2xl shadow-black/30" 
          : "py-0 bg-[]"
      }`}
    >
      <nav className={`mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 transition-all duration-500 ease-in-out ${
        isScrolled ? "h-16" : "h-20 sm:h-24 lg:h-28"
      }`}>
        {/* Logo */}
        <Link
          href="/"
          className={`relative flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-80 ${
            isScrolled ? "h-8 w-28" : "h-10 w-32 sm:h-12 sm:w-40"
          }`}
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

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
              onMouseLeave={() => item.subItems && handleMouseLeave(item.label)}
            >
              {item.subItems ? (
                <>
                  <button
                    onClick={(e) => toggleDropdown(item.label, e)}
                    className={`group flex items-center gap-1 font-medium tracking-[0.15em] transition-all duration-300 ${
                      isScrolled ? "text-[13px] sm:text-[14px]" : "text-[13px] sm:text-[14px] xl:text-[15px]"
                    } ${
                      openDropdown === item.label
                        ? "text-[#b88746]"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-[2px] w-full bg-[#b88746] transition-all duration-300 ${
                        openDropdown === item.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </span>
                    <ChevronDown
                      className={`h-3 w-3 transition-all duration-300 ${
                        openDropdown === item.label ? "rotate-180 text-[#b88746]" : "group-hover:rotate-180"
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div 
                      ref={(el) => {
                        dropdownRefs.current[item.label] = el;
                      }}
                      className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-[#0b0d0d] to-[#1a1c1c] shadow-2xl"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={() => handleMouseLeave(item.label)}
                    >
                      <div className="py-2">
                        {item.subItems.map((sub, index) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            target={sub.href.startsWith('http') ? "_blank" : undefined}
                            rel={sub.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="group relative block overflow-hidden px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:text-[#b88746]"
                            onClick={() => setOpenDropdown(null)}
                            style={{
                              animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
                            }}
                          >
                            <span className="relative z-10">{sub.label}</span>
                            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[#b88746]/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#b88746] transition-all duration-300 group-hover:w-full" />
                          </Link>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#b88746] to-transparent" />
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className={`group relative font-medium tracking-[0.15em] text-gray-200 transition-all duration-300 hover:text-white ${
                    isScrolled ? "text-[13px] sm:text-[14px]" : "text-[13px] sm:text-[14px] xl:text-[15px]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b88746] transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact - Updated with smooth scroll handler */}
        <a
          href="#contact"
          onClick={handleContactClick}
          className={`group relative hidden font-medium tracking-[0.15em] text-[#b88746] transition-all duration-300 hover:text-[#d4a15b] lg:block cursor-pointer ${
            isScrolled ? "text-[13px] sm:text-[14px]" : "text-[13px] sm:text-[14px] xl:text-[15px]"
          }`}
        >
          <span>CONTACT</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b88746] transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Mobile Toggle */}
        <button
          ref={buttonRef}
          onClick={toggleMobile}
          className="group flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-gray-300 transition-all duration-300 ${
              isScrolled ? "w-5" : "w-6"
            } ${
              isMobileOpen ? "translate-y-2 rotate-45" : "group-hover:w-7"
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-300 transition-all duration-300 ${
              isScrolled ? "w-5" : "w-6"
            } ${
              isMobileOpen ? "opacity-0" : "group-hover:w-7"
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-300 transition-all duration-300 ${
              isScrolled ? "w-5" : "w-6"
            } ${
              isMobileOpen ? "-translate-y-2 -rotate-45" : "group-hover:w-7"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isMobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 border-t border-white/10 bg-gradient-to-b from-[#0b0d0d] to-[#1a1c1c] px-6 py-6 shadow-2xl sm:px-10">
          {NAV_ITEMS.map((item, index) => (
            <div 
              key={item.label} 
              className="w-full text-center"
              style={{
                animation: isMobileOpen ? `fadeInUp 0.4s ease-out ${index * 0.08}s both` : 'none'
              }}
            >
              {item.subItems ? (
                <>
                  <button
                    onClick={(e) => toggleDropdown(item.label, e)}
                    className="flex w-full items-center justify-center gap-2 py-2 text-center text-base font-medium tracking-[0.15em] text-gray-200 transition-all duration-300 hover:text-white sm:text-lg"
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#b88746] transition-all duration-300 ${
                        openDropdown === item.label ? "w-full" : ""
                      }`} />
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-all duration-300 ${
                        openDropdown === item.label ? "rotate-180 text-[#b88746]" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openDropdown === item.label ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="mt-1 flex flex-col items-center gap-2 border-t border-white/5 pt-2">
                      {item.subItems.map((sub, subIndex) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          target={sub.href.startsWith('http') ? "_blank" : undefined}
                          rel={sub.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="group relative w-full overflow-hidden py-2 text-center text-sm text-gray-400 transition-all duration-300 hover:text-[#b88746] sm:text-base"
                          onClick={() => setOpenDropdown(null)}
                          style={{
                            animation: openDropdown === item.label 
                              ? `slideInRight 0.3s ease-out ${subIndex * 0.06}s both` 
                              : 'none'
                          }}
                        >
                          <span className="relative z-10">{sub.label}</span>
                          <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[#b88746]/5 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="group relative block w-full py-2 text-center text-base font-medium tracking-[0.15em] text-gray-200 transition-all duration-300 hover:text-white sm:text-lg"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#b88746] transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>
          ))}
          {/* Mobile Contact - Updated with smooth scroll handler */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="group relative w-full py-2 text-center text-base font-medium tracking-[0.15em] text-[#b88746] transition-all duration-300 hover:text-[#d4a15b] sm:text-lg cursor-pointer"
            style={{
              animation: isMobileOpen ? `fadeInUp 0.4s ease-out ${NAV_ITEMS.length * 0.08}s both` : 'none'
            }}
          >
            <span>CONTACT</span>
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#b88746] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}