"use client"
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Image src="/logo.png" alt="logo" height={80} width={80} />
                        {/* <h1 className="text-2xl font-bold text-gray-800"></h1> */}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">About</a>
                        <a href="#products" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Products</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Contact</a>
                        <button className="bg-amber-700 text-white px-4 py-2 rounded-md font-medium hover:bg-amber-800 transition duration-300">
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 transition duration-500"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t overflow-hidden transition-max-h duration-500 ${isMenuOpen ? 'max-h-96 py-2' : 'max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#home" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">Home</a>
                    <a href="#about" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">About</a>
                    <a href="#products" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">Products</a>
                    <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">Contact</a>
                    <button className="w-full text-left px-3 py-2 bg-amber-700 text-white rounded-md font-medium hover:bg-amber-800 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;