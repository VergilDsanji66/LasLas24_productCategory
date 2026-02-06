const OrderSteps = () => {
  return (
    <section className="bg-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">How to Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Products</h3>
            <p className="text-gray-600">View our selection of chickens, eggs, Archaar and coal</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600">Call or WhatsApp with your order details</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Delivery/Pickup</h3>
            <p className="text-gray-600">We deliver in Thohoyandou or you can pickup</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;