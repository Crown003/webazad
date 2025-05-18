import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">HomeGallery</h2>
            <p className="text-gray-400">
              Crafting fine furniture from last 25 years. Dedicated to quality, sustainability, and timeless design.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com/share/164LAPpsbQ/" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20}/>
              </Link>
              <Link href="https://www.instagram.com/homegallery.site?igsh=MXBsYTd5NXI3MnNuNA==" className="text-gray-400 hover:text-white">
                <FaInstagram size={20}/>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20}/>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md text-white bg-gray-800 focus:outline"
              />
              <button className="bg-amber-700 px-4 py-2 rounded-r-md hover:bg-amber-800 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HomeGallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
