"use client";

import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-[#6a6a6a] text-base px-4 py-0 border-b border-gray-200">
      <div className="max-w-[1180px] mx-auto flex justify-between items-center">
        {/* Mobile Menu Toggle - visible on small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={20} className="text-[#6a6a6a]" />
            ) : (
              <FaBars size={20} className="text-[#6a6a6a]" />
            )}
          </button>
        </div>

        {/* Nav Links - hidden on mobile, shown on desktop */}
        <nav className={`flex space-x-6 ${isMenuOpen ? 'flex-col space-x-0 space-y-4 py-4 absolute top-[100%] left-0 w-full bg-white shadow-md' : 'hidden md:flex'}`}>
          <a href="#" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>

        {/* Right side - Search Icon */}
        <div>
          <FaSearch className="text-[#6a6a6a] hover:text-black cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Bottombar;