import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <a 
            href="tel:0632834546"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-blue-100 font-medium">063 283 4546</p>
            <p className="text-sm text-blue-100">066 345 1564</p>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/27632834546"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-blue-100 font-medium">063 283 4546</p>
            <p className="text-sm text-blue-100">Fast order processing</p>
          </a>

          {/* Email */}
          <a 
            href="mailto:laslas24ndima@gmail.com"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-blue-100 text-sm">laslas24ndima@gmail.com</p>
            <p className="text-sm text-blue-100 mt-2">For inquiries</p>
          </a>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-blue-100 text-sm">Stand No 88 Khwecha Street</p>
            <p className="text-blue-100 text-sm">Thohoyandou shatandima</p>
            <div className="mt-4 flex items-center justify-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">8AM - 6PM Daily</span>
            </div>
          </div>
        </div>

        {/* Bulk Orders */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bulk Orders Available
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact us for wholesale pricing and custom orders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0632834546"
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Call Now: 063 283 4546
              </a>
              <a 
                href="tel:0663451564"
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Call Now: 066 345 1564
              </a>
              <a 
                href="https://wa.me/27632834546"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-white"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;