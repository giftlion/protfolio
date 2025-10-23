"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, createLucideIcon } from "lucide-react";

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always set dark mode
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle removed - dark mode only

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border border-gray-800"
          : "bg-transparent"
      } rounded-full px-6 py-3`}
    >
      <div className="flex items-center gap-6">
        {/* <button
          onClick={scrollToTop}
          className="text-white font-semibold hover:text-gray-300 transition-colors"
        >
          Netanel
        </button> */}

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/giftlion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/netanel-arie-cohen-466b85317/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/giftlion12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="X"
          >
            <XIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
