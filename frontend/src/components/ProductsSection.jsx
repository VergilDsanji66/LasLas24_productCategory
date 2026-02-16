import { Phone, MessageCircle, Check } from 'lucide-react';
import servicesData from '../assets/servicesData.jsx';

const ProductsSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      {servicesData.map((category) => (
        <div 
          key={category.id} 
          id={category.category.toLowerCase()} 
          className="mb-16 scroll-mt-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {category.category}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our selection of premium {category.category.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <div key={`${category.id}-${item.id}`} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Product Image */}
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                    item.name === 'Hard Body Chickens' ? 'object-[0%_2%]' : 'object-center'
                  }`}
                />
              </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                        {category.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      {item.sec_name && (
                        <p className="text-gray-500 text-sm mt-1">{item.sec_name}</p>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-700 mb-2">
                      <Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      <span>Fresh Daily</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 mb-2">
                      <Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      <span>Local Delivery Available</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      <span>Quality Guaranteed</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a 
                      href="tel:0632834546"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call to Order
                    </a>
                    <a 
                      href="https://wa.me/27815425533"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsSection;