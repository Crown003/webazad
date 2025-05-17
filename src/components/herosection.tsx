import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Timeless Furniture for Modern Living
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Transform your space with our handcrafted furniture pieces. Designed with passion, made to last generations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-amber-700 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800 transition duration-300 flex items-center justify-center">
                Explore Collection
                <ChevronRight size={20} className="ml-2" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/hero.jpg" 
              alt="Elegant living room setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;