import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Platform Architecture', path: '/platform-architecture' },
    { name: 'Programme', path: '/programme' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="relative bg-white z-50">
      <div className="border-[5px] border-black/85 rounded-2xl px-6 py-6 md:px-20 md:py-10 flex justify-between items-center bg-white animate-border-pulse">
        <Link to="/" className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
            alt="DAVVO Energy Logo" 
            className="h-44 sm:h-56 md:h-64 lg:h-80"
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
              {link.name.toUpperCase()}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Open menu"
          data-testid="menu-open-btn"
        >
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex flex-col"
          data-testid="fullscreen-mobile-menu"
        >
          {/* Top bar with close */}
          <div className="flex justify-end items-center px-8 py-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close menu"
              data-testid="menu-close-btn"
            >
              <X className="h-8 w-8 text-gray-900" />
            </button>
          </div>

          {/* Nav Links - Centered, Large Text */}
          <div className="flex-1 flex flex-col items-center justify-center gap-2 pb-16">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="relative py-4"
                data-testid={`mobile-nav-${link.path.replace('/', '') || 'home'}`}
              >
                <span className={`text-3xl sm:text-4xl font-light tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-gray-900' 
                    : 'text-gray-400 hover:text-gray-700'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gray-900"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
