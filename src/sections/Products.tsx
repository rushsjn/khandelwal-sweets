import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ShoppingCart, Info } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Kaju Katli',
      description: 'Premium cashew fudge made with the finest cashews and pure ghee. A perfect blend of richness and sweetness.',
      price: '₹800/kg',
      category: 'Premium Sweets',
      image: 'https://shaadisweets.com/wp-content/uploads/2025/08/20250823_1547_Kaju-Katli-Delicacy_simple_compose_01k3b6wr5tf60r3k9txnrwcvvc-600x600.png',
    },
    {
      id: 2,
      name: 'Motichoor Laddoo',
      description: 'Traditional Indian sweet made from fine boondi pearls soaked in sugar syrup. Perfect for celebrations.',
      price: '₹450/kg',
      category: 'Traditional',
      image: 'https://agrasweetsbanjara.com/cdn/shop/files/Motichur-Laddu-agrasweets-banjara_grande.jpg?v=1731671743',
    },
    {
      id: 3,
      name: 'Badam Barfi',
      description: 'Rich almond fudge crafted with premium almonds, milk, and sugar. A royal treat for special occasions.',
      price: '₹900/kg',
      category: 'Premium Sweets',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/538539840/JE/HY/PM/98575395/sweets-500x500.jpg',
    },
    {
      id: 4,
      name: 'Gulab Jamun',
      description: 'Soft, spongy milk solids dumplings soaked in fragrant sugar syrup. A classic favorite for all ages.',
      price: '₹400/kg',
      category: 'Traditional',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp',
    },
    {
      id: 5,
      name: 'Peda',
      description: 'Delicious milk-based sweet with a soft, grainy texture. Available in various flavors including kesar and elaichi.',
      price: '₹550/kg',
      category: 'Milk Sweets',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhMZo128Xfl06NjdFGbNOxjrlnGDQRfPPbw&s',
    },
    {
      id: 6,
      name: 'Rasgulla',
      description: 'Soft and spongy cottage cheese balls in light sugar syrup. A Bengali specialty loved nationwide.',
      price: '₹350/kg',
      category: 'Traditional',
      image: 'https://static.toiimg.com/thumb/msid-66476205,width-1280,height-720,imgsize-1460248,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
    },
  ];

  const categories = ['All', 'Premium Sweets', 'Traditional', 'Milk Sweets'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Delicious Sweets & Snacks
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of authentic Indian sweets, crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="text-xs text-red-600 font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {selectedProduct?.name}
              </DialogTitle>
              <DialogDescription className="text-red-600 font-semibold">
                {selectedProduct?.price}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">{selectedProduct?.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Category: <span className="font-medium text-gray-700">{selectedProduct?.category}</span>
                </span>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Products;
