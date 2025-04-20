
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`py-4 px-6 md:px-8 lg:px-16 flex items-center justify-between fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <Leaf className="h-6 w-6 text-fairgreen mr-2" />
        <span className="text-xl font-bold text-white">Fair<span className="text-fairgreen">Chain</span></span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-300 hover:text-fairgreen transition-colors">Features</a>
        <a href="#solution" className="text-gray-300 hover:text-fairgreen transition-colors">Solution</a>
        <a href="#technology" className="text-gray-300 hover:text-fairgreen transition-colors">Technology</a>
        <a href="#mobile-preview" className="text-gray-300 hover:text-fairgreen transition-colors">Mobile App</a>
        <a href="#impact" className="text-gray-300 hover:text-fairgreen transition-colors">Impact</a>
        {/* <Button className="bg-fairgreen hover:bg-fairgreen-600 text-white">Get Started</Button> */}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg py-4 px-6 border-b border-gray-800 md:hidden">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-fairgreen transition-colors py-2" 
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#solution" 
              className="text-gray-300 hover:text-fairgreen transition-colors py-2" 
              onClick={toggleMenu}
            >
              Solution
            </a>
            <a 
              href="#technology" 
              className="text-gray-300 hover:text-fairgreen transition-colors py-2" 
              onClick={toggleMenu}
            >
              Technology
            </a>
            <a 
              href="#mobile-preview" 
              className="text-gray-300 hover:text-fairgreen transition-colors py-2" 
              onClick={toggleMenu}
            >
              Mobile App
            </a>
            <a 
              href="#impact" 
              className="text-gray-300 hover:text-fairgreen transition-colors py-2" 
              onClick={toggleMenu}
            >
              Impact
            </a>
            {/* <Button className="bg-fairgreen hover:bg-fairgreen-600 text-white w-full">
              Get Started
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
