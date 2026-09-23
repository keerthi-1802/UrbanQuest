import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "top-4 left-4 w-fit" : "top-0 left-0 w-full"
      }`}
    >
      <div
        className={`flex items-center transition-all duration-500 ${
          scrolled
            ? "h-20 w-fit rounded-2xl border border-white/10 bg-black/70 px-3 shadow-2xl backdrop-blur-xl"
            : "h-20 w-full justify-center border-b border-white/10 bg-[#060606]/80 px-6 backdrop-blur-md"
        }`}
      >
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Po Get It"
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-20" : "h-16 lg:h-20"
            }`}
          />
        </a>
      </div>
    </header>
  );
}