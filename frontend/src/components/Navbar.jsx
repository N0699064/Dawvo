import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const topNavLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PLATFORM ARCHITECTURE', path: '/platform-architecture' },
    { name: 'PROGRAMME', path: '/programme' }
  ];

  const bottomNavLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="px-8 py-6">
        <div className="border-[3px] border-black px-16 py-12 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
              alt="DAVVO Energy Logo" 
              className="h-32"
            />
          </Link>
          
          <div className="flex flex-col items-end gap-6">
            {/* Top row navigation */}
            <div className="flex items-center gap-12">
              {topNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-gray-900 uppercase relative ${
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
            
            {/* Bottom row navigation */}
            <div className="flex items-center gap-12">
              {bottomNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-gray-900 uppercase relative ${
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;