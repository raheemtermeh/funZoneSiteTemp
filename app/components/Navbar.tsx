"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "خانه", href: "#home" },
    { name: "آموزش بازی‌ها", href: "#games" },
    { name: "راهنمای اپ‌ها", href: "#apps" },
    { name: "تیم ما", href: "#team" },
    { name: "سرمایه‌گذاری", href: "#investment" },
    { name: "کمپین‌ها", href: "#campaigns" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#9d00ff] flex items-center justify-center">
              <span className="text-xl">🎮</span>
            </div>
            <span className="bg-gradient-to-r from-[#00f0ff] via-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent">
              FunZone
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-[#00f0ff]/30 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10">
              ورود
            </Button>
            <Button className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90">
              ثبت‌نام
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="border-[#00f0ff]/30 w-full">
                  ورود
                </Button>
                <Button className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] w-full">
                  ثبت‌نام
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
