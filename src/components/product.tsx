const ProductShowcase = () => {

  return (
    <section id="products" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Collection</h2>
          <div className="h-1 w-20 bg-amber-700 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our handcrafted furniture pieces, designed to bring elegance and comfort to your home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-amber-700 font-bold mt-4">{product.price}</p>
                <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))} */}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-700 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800 transition duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;