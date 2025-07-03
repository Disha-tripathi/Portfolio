import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1500;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-[600px] w-[90%] z-50 rounded-[50px] transition-all duration-500 border-none bg-white ${
        scrolled
          ? "bg-opacity-5 backdrop-blur-xl shadow-sm"
          : "bg-opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="text-3xl sm:text-4xl font-bold text-white/80">D.</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-white  sm:text-[17px] font-poppins font-extralight">
            <li>
              <a
                href="#home"
                className="transition-colors duration-300 hover:text-[#94B3FD]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-colors duration-300 hover:text-[#94B3FD]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="transition-colors duration-300 hover:text-[#94B3FD]"
              >
                Work
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className={`hidden md:inline-block px-6 sm:px-8 py-2 rounded-[20px] transition-all duration-300 font-medium ${
                scrolled
                  ? "bg-green-500/10 text-white border border-green-500 hover:bg-[#F1EFEC] hover:text-green-600"
                  : "bg-white/20 text-white hover:bg-white/30 border border-white/20"
              }`}
            >
              Contact
            </a>

            {/* Hamburger icon */}
            <button
              className="md:hidden text-white text-3xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/60 backdrop-blur-lg rounded-b-[30px] py-6 flex flex-col items-center space-y-4 text-white font-medium">
          <a
            href="#home"
            className="hover:text-[#94B3FD]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#94B3FD]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-[#94B3FD]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#contact"
            className={`px-6 py-2 rounded-[20px] border transition-all duration-300 ${
              scrolled
                ? "bg-green-500/50 border-green-500 hover:bg-[#F1EFEC] hover:text-green-600"
                : "bg-white/20 border-white/20 hover:bg-white/30"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
