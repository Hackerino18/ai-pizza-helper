
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="font-cormorant font-bold text-2xl text-pizza-orange-dark">Zi' <span className="text-pizza-orange">CATIE</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-sm tracking-wide uppercase hover:text-pizza-orange transition-colors">Home</a>
            <a href="#menu" className="font-medium text-sm tracking-wide uppercase hover:text-pizza-orange transition-colors">Menu</a>
            <a href="#ai-assistant" className="font-medium text-sm tracking-wide uppercase hover:text-pizza-orange transition-colors">AI Assistant</a>
            <a href="#about" className="font-medium text-sm tracking-wide uppercase hover:text-pizza-orange transition-colors">About</a>
            <a href="#contact" className="font-medium text-sm tracking-wide uppercase hover:text-pizza-orange transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-pizza-orange-dark hover:text-pizza-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark text-white animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="font-medium text-sm tracking-wide uppercase hover:text-pizza-cream transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#menu" 
                className="font-medium text-sm tracking-wide uppercase hover:text-pizza-cream transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#ai-assistant" 
                className="font-medium text-sm tracking-wide uppercase hover:text-pizza-cream transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Assistant
              </a>
              <a 
                href="#about" 
                className="font-medium text-sm tracking-wide uppercase hover:text-pizza-cream transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="font-medium text-sm tracking-wide uppercase hover:text-pizza-cream transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
