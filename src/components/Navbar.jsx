import React, { useState } from "react";
// import { Link } from "react-scroll";
import cv from '../assets/Karm Pandya Resume.pdf'
import navlogo from '../assets/navlogo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const downloadcv = () => {
    window.open(cv);
  };

  return (
    <div className='sticky top-0 z-50'>
      <nav className="bg-white/90 backdrop-blur-xl shadow-sm py-3 md:py-5 flex justify-between items-center px-4 md:px-8 nav">

        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform animate-slideDown">
          <img src={navlogo} alt='navlogo' className="rounded-full h-8 w-8 md:h-10 md:w-10 shadow-md border border-gray-300" />
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-stone-900 tracking-tight">
            Karm Pandya
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center gap-3 lg:gap-5 text-sm md:text-base lg:text-lg">
          <a href="#home" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 py-1 hover:text-white hover:bg-blue-700 rounded transition-colors" >
            Home
          </a>
          <a href="#about" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 py-1 hover:text-white hover:bg-blue-700 rounded transition-colors" >
            About
          </a>
          <a href="#projects" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 py-1 hover:text-white hover:bg-blue-700 rounded transition-colors" >
            Projects
          </a>
          <a href="#blogs" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 py-1 hover:text-white hover:bg-blue-700 rounded transition-colors" >
            Blogs
          </a>
          <a href="#contact" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 py-1 hover:text-white hover:bg-blue-700 rounded transition-colors" >
            Contact
          </a>
          <button onClick={downloadcv} className="ml-2 px-3 py-1 bg-blue-700 text-white text-sm md:text-base rounded-lg hover:bg-blue-800 transition-colors animate-slideDown">
            CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={downloadcv} className="px-3 py-1 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors">
            CV
          </button>
          <button onClick={toggleMenu} className="p-2 rounded hover:bg-gray-100 transition-colors">
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-stone-900`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg border-t">
          <div className="flex flex-col py-4 px-4 space-y-3">
            <a href="#home" onClick={closeMenu} className="text-stone-900 font-medium py-2 px-3 hover:bg-blue-50 rounded transition-colors" >
              Home
            </a>
            <a href="#about" onClick={closeMenu} className="text-stone-900 font-medium py-2 px-3 hover:bg-blue-50 rounded transition-colors" >
              About
            </a>
            <a href="#projects" onClick={closeMenu} className="text-stone-900 font-medium py-2 px-3 hover:bg-blue-50 rounded transition-colors" >
              Projects
            </a>
            <a href="#blogs" onClick={closeMenu} className="text-stone-900 font-medium py-2 px-3 hover:bg-blue-50 rounded transition-colors" >
              Blogs
            </a>
            <a href="#contact" onClick={closeMenu} className="text-stone-900 font-medium py-2 px-3 hover:bg-blue-50 rounded transition-colors" >
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