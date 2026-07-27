"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Lead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-20"
      style={{
        backgroundImage: "url('/Landing/Lead/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#f4f1ea]/95" />
      
      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#b88746]/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#b88746]/5 blur-3xl" />
      
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-angleton text-3xl font-semibold tracking-[-0.03em] text-[#0b0d0d] text-center"
          >
            Want to create
            <br />
            something together?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-md mx-auto text-center text-sm font-base leading-relaxed tracking-[0.02em] text-[#0b0d0d]/80"
          >
            Whether you're looking for an experienced food writer, a trusted
            restaurant consultant, or a speaker for your next culinary event,
            let's create meaningful conversations around food and hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="w-full rounded-2xl bg-white/90 backdrop-blur-sm p-6 shadow-sm border border-[#0b0d0d]/5">
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-[10px] font-bold tracking-[0.1em] text-[#0b0d0d]/70 uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-[#0b0d0d]/10 bg-white/50 px-4 py-3 text-sm font-light text-[#0b0d0d] placeholder-[#0b0d0d]/40 transition-colors focus:border-[#b88746] focus:outline-none focus:ring-1 focus:ring-[#b88746]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-[10px] font-bold tracking-[0.1em] text-[#0b0d0d]/70 uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-[#0b0d0d]/10 bg-white/50 px-4 py-3 text-sm font-light text-[#0b0d0d] placeholder-[#0b0d0d]/40 transition-colors focus:border-[#b88746] focus:outline-none focus:ring-1 focus:ring-[#b88746]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-[10px] font-bold tracking-[0.1em] text-[#0b0d0d]/70 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-[#0b0d0d]/10 bg-white/50 px-4 py-3 text-sm font-light text-[#0b0d0d] placeholder-[#0b0d0d]/40 transition-colors focus:border-[#b88746] focus:outline-none focus:ring-1 focus:ring-[#b88746] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-[#b88746] px-6 py-3 text-sm font-medium text-white transition-all active:bg-[#d4a15b] active:shadow-lg"
                >
                  <span className="relative z-10 font-angleton font-bold tracking-[0.05em] flex items-center justify-center">
                    Send Message
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout (lg and above) - Two Column */}
        <div className="hidden lg:grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 xl:gap-20">
          {/* Left Section - Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-angleton text-3xl font-semibold tracking-[-0.03em] text-[#0b0d0d] sm:text-4xl lg:text-5xl mb-4"
            >
              Want to create
              <br />
              something together?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-sm font-base leading-relaxed tracking-[0.02em] text-[#0b0d0d]/80 sm:text-base lg:text-lg"
            >
              Whether you're looking for an experienced food writer, a trusted
              restaurant consultant, or a speaker for your next culinary event,
              let's create meaningful conversations around food and hospitality.
            </motion.p>
          </div>

          {/* Right Section - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <div className="w-full rounded-2xl bg-white/90 backdrop-blur-sm p-8 shadow-sm border border-[#0b0d0d]/5">
              <form onSubmit={handleSubmit} className="w-full space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[10px] font-bold tracking-[0.1em] text-[#0b0d0d]/70 uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-[#0b0d0d]/10 bg-white/50 px-4 py-3 text-sm font-light text-[#0b0d0d] placeholder-[#0b0d0d]/40 transition-colors focus:border-[#b88746] focus:outline-none focus:ring-1 focus:ring-[#b88746]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[10px] font-bold tracking-[0.1em] text-[#0b0d0d]/70 uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-[#0b0d0d]/10 bg-white/50 px-4 py-3 text-sm font-light text-[#0b0d0d] placeholder-[#0b0d0d]/40 transition-colors focus:border-[#b88746] focus:outline-none focus:ring-1 focus:ring-[#b88746]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[10px] font-bold tracking-[0.1em] text-[#0b0d0d]/70 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-[#0b0d0d]/10 bg-white/50 px-4 py-3 text-sm font-light text-[#0b0d0d] placeholder-[#0b0d0d]/40 transition-colors focus:border-[#b88746] focus:outline-none focus:ring-1 focus:ring-[#b88746] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-[#b88746] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#d4a15b] hover:shadow-lg hover:shadow-[#b88746]/20"
                >
                  <span className="relative z-10 font-angleton font-bold tracking-[0.05em] flex items-center justify-center">
                    Send Message
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}