import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PLATFORM ARCHITECTURE', path: '/platform-architecture' },
    { name: 'PROGRAMME', path: '/programme' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
            alt="DAVVO Energy Logo" 
            className="h-16"
          />
        </Link>
        
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#2E7D32] ${
                location.pathname === link.path 
                  ? 'text-[#2E7D32] border-b-2 border-[#2E7D32] pb-1' 
                  : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;