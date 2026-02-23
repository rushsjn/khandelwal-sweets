import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp',
      alt: 'Fresh Gulab Jamuns',
      caption: 'Fresh Gulab Jamuns',
    },
    {
      src: 'https://www.jcookingodyssey.com/wp-content/uploads/2023/02/barfi-recipe-with-milk-powder.jpg',
      alt: 'Assorted Barfi Collection',
      caption: 'Assorted Barfi Collection',
    },
    {
      src: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/11/Boondi-Laddu-H3.jpg?resize=600%2C904&ssl=1',
      alt: 'Colorful Laddoos',
      caption: 'Colorful Laddoos',
    },
    {
      src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTw-7cEvSwastShXrKr9HMOwiUfaRE88QCExp0kbTRq9Km7UwhJ',
      alt: 'Traditional Pedas',
      caption: 'Traditional Pedas',
    },
    {
      src: 'https://static.toiimg.com/thumb/55048826.cms?width=1200&height=900',
      alt: 'Kaju Katli',
      caption: 'Premium Kaju Katli',
    },
    {
      src: 'https://static.toiimg.com/photo/52743612.cms',
      alt: 'Soft Rasgullas',
      caption: 'Soft Rasgullas',
    },
    {
      src: '/public/Img10/shopdis.png',
      alt: 'Sweet Shop Display',
      caption: 'Our Shop Display',
    },
    {
      src: '/public/Img10/festivalSp.png',
      alt: 'Festival Specials',
      caption: 'Festival Specials',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Visual Treat
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our delicious collection of sweets and the moments we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative overflow-hidden ${
                index === 0 || index === 5 ? 'h-64 md:h-full' : 'h-48'
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.caption}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
