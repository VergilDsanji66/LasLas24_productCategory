import { hero } from '../assets/Assets.js';
import { Phone, ArrowRight } from 'lucide-react';
import servicesData from '../assets/servicesData';

const HeroSection = () => {
  const categories = [...new Set(servicesData.map(service => service.category))];
  const categoryItems = hero.slice(1).map((item, index) => ({
    ...item,
    category: categories[index] || item.title
  }));

  const handleCategoryClick = (category) => {
    const section = document.getElementById(category.toLowerCase());
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Our <span className="text-red-600">Premium</span> Products
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Fresh chickens, eggs, Archaar and coal delivered to your doorstep in Thohoyandou
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categoryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCategoryClick(item.category)}
              className="group bg-white rounded-xl shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-100">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.category}
                </h3>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
        
        <a 
          href="tel:0632834546"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          <Phone className="h-6 w-6" />
          Order Now: 063 283 4546
        </a>
      </div>
    </section>
  );
};

export default HeroSection;