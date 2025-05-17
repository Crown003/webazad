const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About HomeGallery</h2>
          <div className="h-1 w-20 bg-amber-700 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/primarySofa.jpg" 
              alt="Our workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Crafting Excellence Since 1995</h3>
            <p className="text-gray-600">
              For over 25 years, ElegantWood has been dedicated to creating furniture that stands the test of time. Our artisans combine traditional woodworking techniques with modern design principles to create pieces that are both functional and beautiful.
            </p>
            <p className="text-gray-600">
              We source only the finest sustainable materials, ensuring that each piece not only enhances your home but also respects our environment. From concept to creation, quality is at the heart of everything we do.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-4xl font-bold text-amber-700">2,500+</h4>
                <p className="text-gray-600 mt-2">Happy Customers</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-4xl font-bold text-amber-700">500+</h4>
                <p className="text-gray-600 mt-2">Unique Designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;