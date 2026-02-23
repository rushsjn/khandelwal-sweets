import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Khandelwal Mishthan Bhandar"
              className="h-12 w-auto"
            />
            <span
              className={`hidden sm:block font-bold text-lg transition-colors ${
                isScrolled ? 'text-red-700' : 'text-white'
              }`}
            >
              Khandelwal Mishthan Bhandar
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
