import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Khandelwal Mishthan Bhandar"
                className="h-16 w-auto bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving authentic Indian sweets since 1985. Experience the taste of tradition with our freshly prepared, high-quality sweets made with love.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Specialties</h4>
            <ul className="space-y-3">
              {['Kaju Katli', 'Motichoor Laddoo', 'Badam Barfi', 'Gulab Jamun', 'Peda', 'Rasgulla'].map(
                (product, index) => (
                  <li key={index}>
                    <span className="text-gray-400">{product}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Laxmi Market, Near Station Road<br />
                  Kalyan West, Mumbai - 421301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">info@khandelwalsweets.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Khandelwal Mishthan Bhandar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ in Kalyan West, Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
