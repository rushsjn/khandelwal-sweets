import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every sweet is crafted with care and traditional recipes passed down through generations.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest ingredients to ensure the best taste and freshness.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We serve with a smile and dedication.',
    },
    {
      icon: Sparkles,
      title: 'Fresh Daily',
      description: 'All our sweets are prepared fresh every day to maintain authentic flavor.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            About Khandelwal Mishthan Bhandar
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/public/Img10/firstImg.png"
                alt="Traditional Indian Sweets"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">
                  Serving Sweetness Since 1985
                </p>
                <p className="text-gray-200 text-sm">
                  Over 39 years of sweet memories
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              A Legacy of Sweetness in Kalyan West
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Located in the heart of Laxmi Market, near Station Road in Kalyan West, Mumbai, 
              Khandelwal Mishthan Bhandar has been a beloved destination for sweet lovers for 
              nearly four decades. Our shop is known for its high-quality, fresh, and affordable 
              Indian sweets and snacks.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From traditional barfi and laddoos to a wide variety of desserts, we take pride 
              in maintaining the authentic taste that our customers have come to love. Our 
              commitment to quality and customer satisfaction has made us a household name 
              in the community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">39+</p>
                <p className="text-sm text-gray-500">Years of Service</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">50+</p>
                <p className="text-sm text-gray-500">Sweet Varieties</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">10K+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
