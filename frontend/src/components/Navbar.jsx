import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PLATFORM ARCHITECTURE', path: '/platform-architecture' },
    { name: 'PROGRAMME', path: '/programme' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="relative bg-white z-50">
      {/* Outer black container - sharp corners */}
      <div className="bg-black p-[5px]">
        {/* Inner white container - rounded corners */}
        <div className="bg-white rounded-2xl px-20 py-10 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
              alt="DAVVO Energy Logo" 
              className="h-56 md:h-64 lg:h-80"
            />
          </Link>
          
          {/* Desktop Navigation - Single Line */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-normal tracking-wide transition-all duration-300 hover:text-gray-900 uppercase whitespace-nowrap relative ${
                  location.pathname === link.path 
                    ? 'text-gray-900' 
                    : 'text-gray-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black px-[5px] pb-[5px]">
          <div className="bg-white rounded-b-2xl">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-20 py-4 text-base font-normal tracking-wide transition-all duration-300 hover:bg-gray-50 uppercase ${
                    location.pathname === link.path 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;