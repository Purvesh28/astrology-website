"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-400">Shree</span>Parshuram
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm text-white/80">

          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

        {/* Desktop Button */}
      

        <Button
          text="Book Now"
          className="hidden md:block px-6 py-3 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition duration-300 shadow-lg shadow-yellow-500/20"
        />



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-white/80">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Services
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </a>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
            Book Now
          </button>

        </div>
      )}

    </header>
  );
}