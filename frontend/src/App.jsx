import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import OrderSteps from './components/OrderSteps';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <OrderSteps />
      <ContactSection />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Las Las. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Fresh products • Local delivery • Quality guaranteed</p>
        </div>
      </footer>
    </div>
  );
}

export default App;