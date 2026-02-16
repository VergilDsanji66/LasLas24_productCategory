import { Phone, MapPin, Drumstick } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-700 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <Drumstick className="h-8 w-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">Las Las 24</h1>
              <p className="text-blue-200">Home Of Premium Chickens</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">081 542 5533 / 066 345 1564</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Thohoyandou</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;