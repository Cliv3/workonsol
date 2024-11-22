"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">$WORK</div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row absolute md:relative 
          top-full left-0 w-full md:w-auto 
          bg-blue-600/50 md:bg-transparent
          md:space-x-6 p-4 md:p-0
        `}>
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-blue-200 py-2 md:py-0"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('why-work')} 
            className="text-white hover:text-blue-200 py-2 md:py-0"
          >
            Why $WORK
          </button>
          <button 
            onClick={() => scrollToSection('roadmap')} 
            className="text-white hover:text-blue-200 py-2 md:py-0"
          >
            Roadmap
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;