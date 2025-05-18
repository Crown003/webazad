"use client"
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image src="/logo.png" alt="logo" height={80} width={80} />
                        </Link>
                        {/* <h1 className="text-2xl font-bold text-gray-800"></h1> */}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#home" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Home</Link>
                        <Link href="#about" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">About</Link>
                        <Link href="#products" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Products</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Contact</Link>
                        <Link href="https://wa.me/918004260555" target="_blank">
                            <button className="bg-[#25aa66] cursor-pointer text-white px-2 py-2 rounded-md font-medium hover:bg-[#259966] transition duration-300">
                                Connect Now <FaWhatsapp className="inline" size={20} />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex gap-2 items-center">
                        <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="https://wa.me/918004260555" className="w-full" target="_blank">
                                <button className="bg-[#25aa66] text-left cursor-pointer text-white px-2 py-2 rounded-md font-medium hover:bg-[#259966] transition duration-300">
                                    Connect Now <FaWhatsapp className="inline" size={20} />
                                </button>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 transition duration-500"
                        >
                            {isMenuOpen ? <X className="cursor-pointer h-6 w-6" /> : <Menu className="cursor-pointer h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t overflow-hidden transition-max-h duration-500 ${isMenuOpen ? 'max-h-96 py-2' : 'max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="#home" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">Home</Link>
                    <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="#about" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">About</Link>
                    <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="#products" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">Products</Link>
                    <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300">Contact</Link>
                    {/* <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="https://wa.me/" className="w-full" target="_blank">
                        <button className="bg-[#25aa66] w-full text-left cursor-pointer text-white px-2 py-2 rounded-md font-medium hover:bg-[#259966] transition duration-300">
                            Connect Now <FaWhatsapp className="inline" size={20} />
                        </button>
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;