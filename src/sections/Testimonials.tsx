import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Khandelwal Mishthan Bhandar has been our family favorite for years! Their Kaju Katli is absolutely divine - melts in your mouth. The quality and taste have remained consistent over the years. Highly recommended!',
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'I always order sweets from here for my office events. The packaging is excellent, delivery is always on time, and most importantly, the sweets are fresh and delicious. Their Motichoor Laddoos are the best in Kalyan!',
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Homemaker',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'During festivals, this is our go-to place for all sweets. The variety is amazing and the prices are very reasonable. The staff is courteous and always ready to help with custom orders. A true gem in Kalyan!',
    },
    {
      id: 4,
      name: 'Vikram Mehta',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'I live abroad and whenever I visit India, I make sure to stop by Khandelwal Mishthan Bhandar. Their Gulab Jamuns remind me of my childhood. The taste is authentic and the hygiene standards are excellent.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Customer Love
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who keep coming back for more.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-red-100">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 text-center italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Customer Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-red-100 mb-3"
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-red-600 w-8'
                    : 'bg-red-200 hover:bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '39+', label: 'Years of Trust' },
            { value: '98%', label: 'Would Recommend' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-red-600">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
