import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full mb-6">
            Since 1985
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Khandelwal
            <span className="text-red-500"> Mishthan Bhandar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
            Authentic Indian Sweets & Snacks
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the taste of tradition with our freshly prepared, high-quality sweets 
            made with love and the finest ingredients.
          </p>

          {/* Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="text-white text-sm">Laxmi Market, Kalyan West</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="text-white text-sm">8 AM - 9 PM Daily</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Phone className="w-5 h-5 text-red-400" />
              <span className="text-white text-sm">+91 98765 43210</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('#products')}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            >
              Explore Our Sweets
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
