import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast.success('Thank you! We will get back to you soon.');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Laxmi Market, Near Station Road',
        'Kalyan West, Mumbai - 421301',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@khandelwalsweets.com', 'orders@khandelwalsweets.com'],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Monday - Sunday', '8:00 AM - 9:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to place an order? We'd love to hear from you. Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you need..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d73.13!3d19.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7955b7f5c2c7b%3A0x1234567890abcdef!2sLaxmi%20Market%2C%20Kalyan%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Khandelwal Mishthan Bhandar Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
