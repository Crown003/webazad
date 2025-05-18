const AboutSection = () => {
  return (
    <section id="about" className="scroll-my-20 bg-white py-16 md:py-24">
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
            <h3 className="text-2xl font-semibold text-gray-900">Honoring Craftsmanship, Built on 25+ Years of Expertise.</h3>
            <p className="text-gray-600">
              Established in 2025, HomeGallery's foundation rests on over 25 years of mastery in fine woodworking. Our seasoned artisans meticulously blend traditional techniques with contemporary design, crafting exquisite, enduring furniture. More than mere furnishings, our pieces are lasting works of art, designed to elevate your home with timeless elegance.              </p>
            <p className="text-gray-600">
              Beyond exceptional craftsmanship, we are deeply committed to environmental responsibility. By exclusively using sustainable, high-quality materials, we ensure each creation reflects both superior quality and ecological consciousness. From initial design to final finish, meticulous care and unwavering quality define HomeGallery. Experience furniture born from decades of expertise, enriching your life for years to come.              </p>
            <div className="grid grid-cols-2  gap-4 mt-8">
              {/* <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-4xl font-bold text-amber-700">Designs on Demand</h4>
                <p className="text-gray-600 mt-2">Custom Designs are also available</p>
              </div> */}
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-4xl font-bold text-amber-700">2500+</h4>
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