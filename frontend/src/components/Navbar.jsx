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
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-12 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
            alt="DAVVO Energy Logo" 
            className="h-14"
          />
        </Link>
        
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-medium tracking-wider transition-all duration-300 hover:text-[#2E7D32] uppercase ${
                location.pathname === link.path 
                  ? 'text-[#2E7D32]' 
                  : 'text-gray-500'
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