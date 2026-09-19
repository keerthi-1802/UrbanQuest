import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060606]/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-white">
          Po Get It
        </a>


        {/* Desktop CTA */}
        <div className="hidden md:block">
          {/* CTA */}
          <a
            href="#alpha"
            className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-tight text-black">
                Join Alpha
              </span>
              <span className="text-xs leading-tight text-black/60">
                Free early access
              </span>
            </div>

            <span className="text-xl text-black transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#060606] md:hidden">
          <nav className="flex flex-col px-6 py-5">
            <a href="#about" className="py-3 text-white/80">About</a>
            <a href="#features" className="py-3 text-white/80">Features</a>
            <a href="#how" className="py-3 text-white/80">How it Works</a>
            <a href="#faq" className="py-3 text-white/80">FAQ</a>

            <a
              href="#alpha"
              className="mt-4 flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-black"
            >
              Join Alpha
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}