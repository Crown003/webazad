import Image from "next/image";
const ProductShowcase = () => {

  return (
    <section id="products" className="scroll-my-20 bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Collection</h2>
          <div className="h-1 w-20 bg-amber-700 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our handcrafted furniture pieces, designed to bring elegance and comfort to your home.
          </p>
        </div>
        {/* {Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50  flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/products/bed.jpg"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -37%
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Product Category */}
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Bed
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Premium King Size Hydraulic Bed
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-3">
                  Give your bedroom a royal touch with this luxurious king-size hydraulic bed. A perfect blend of modern design and superior craftsmanship, this bed not only provides comfort but also makes smart use of your space.
                </p>

                {/* Rating */}
                {/* <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    <span>★★★★</span>
                  </div> */}
                {/* <span className="text-gray-500 text-sm ml-2">(4.2)</span>
                </div> */}

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹ 69,000</span>
                    <span className="text-sm text-gray-500 line-through">₹ 1,09,000</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">In Stock</span>
                </div>

              </div>
            </div>
          </div>
          <div className="p-8 bg-gray-50  flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/products/sofa.jpg"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -33%
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Product Category */}
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Sofa
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Modern Luxury Sofa Set with Pocket Spring Comfort
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-3">
                  Elevate your living space with this contemporary sofa set, blending comfort and style. It features a premium fabric sofa with teal accents and pocket springs for superior support, complemented by two lounge chairs and marble-top coffee tables. Perfect for modern homes valuing design and relaxation.
                </p>



                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹ 99,999</span>
                    <span className="text-sm text-gray-500 line-through">₹ 1,49,000
                    </span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">In Stock</span>
                </div>

              </div>
            </div>
          </div>
          <div className="p-8 bg-gray-50  flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/products/dining.jpg"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -50%
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Product Category */}
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Dining
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Premium Dining Table Set – Solid Sagwan Wood with Marble Finish
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-3">
                  Give your home's dining area a grand and royal touch with this 6-seater dining table set, crafted from high-quality Sagwan (Teak) wood. This set is the perfect combination of stylish design and unmatched durability.
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹ 79,000</span>
                    <span className="text-sm text-gray-500 line-through">₹ 158,000
                    </span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">In Stock</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-700 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800 transition duration-300">
            Contact For More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;