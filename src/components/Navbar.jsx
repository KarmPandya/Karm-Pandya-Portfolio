import React, { useState } from "react";
// import { Link } from "react-scroll";
import navlogo from '../assets/navlogo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='sticky top-0 z-50'>
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm px-10 py-4 md:py-5 md:px-10 flex justify-between items-center nav border-b border-gray-200/30">

        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform animate-slideDown">
          <img src={navlogo} alt='navlogo' className="rounded-full h-8 w-8 md:h-10 md:w-10 shadow-sm border border-gray-300/50" />
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-stone-900 tracking-tight">
            Karm Pandya
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center gap-4 lg:gap-6 text-base md:text-lg lg:text-xl">
          <a href="#home" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-3 py-2 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
            Home
          </a>
          <a href="#about" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-3 py-2 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
            About
          </a>
          <a href="#projects" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-3 py-2 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
            Projects
          </a>
          <a href="#blogs" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-3 py-2 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
            Blogs
          </a>
          <a href="#contact" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-3 py-2 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-1 rounded hover:bg-gray-100/50 transition-colors">
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-stone-900`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-sm border-t border-gray-200/30">
          <div className="flex flex-col py-3 px-4 space-y-1">
            <a href="#home" onClick={closeMenu} className="text-stone-900 font-medium py-3 px-4 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
              Home
            </a>
            <a href="#about" onClick={closeMenu} className="text-stone-900 font-medium py-3 px-4 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
              About
            </a>
            <a href="#projects" onClick={closeMenu} className="text-stone-900 font-medium py-3 px-4 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
              Projects
            </a>
            <a href="#blogs" onClick={closeMenu} className="text-stone-900 font-medium py-3 px-4 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
              Blogs
            </a>
            <a href="#contact" onClick={closeMenu} className="text-stone-900 font-medium py-3 px-4 hover:text-white hover:bg-blue-700 rounded-lg transition-all" >
              Contact
            </a>
          </div>
        </div>
      )}

      <style>
        {
          `
        @keyframes slideDown{
            0% {
                transform: translateY(-100%);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
            }

            .animate-slideDown{
            animation: slideDown 1.2s ease-in-out;
            }
        `
        }
      </style>

    </div>


  );
};

export default Navbar;