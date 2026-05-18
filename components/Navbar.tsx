"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { logo } from "@/fonts";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface backdrop-blur-sm shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="#home"
          className={`${logo.className} antialiased text-foreground font-black text-2xl tracking-tight shrink-0`}
        >
          King<span className="text-primary">Cutz</span>
        </Link>

        <div className="flex gap-8 items-center">
          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-semibold uppercase tracking-widest text-foreground hover:text-mute transition-colors duration-200 group"
                >
                  {link.label}

                  {/* Underline indicator */}
                  <span className="absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#booking"
              className="bg-primary hover:bg-muted text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 shrink-0"
        >
          <span
            className={`block h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
            }`}
          />
          <span
            className={`block h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-4"
            }`}
          />
          <span
            className={`block h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-6"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface backdrop-blur-sm ${
          menuOpen ? "max-h-96 border-t border-borderline" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="pt-4">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-primary hover:bg-secondary text-foreground font-bold text-xs uppercase tracking-widest px-6 py-4 transition-all duration-300"
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
