import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="border-[4px] border-black px-20 py-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
            alt="DAVVO Energy Logo" 
            className="h-52"
          />
        </Link>
        
        <div className="flex flex-col items-end gap-4">
          {/* Top row navigation */}
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className={`text-base font-normal tracking-normal transition-all duration-300 hover:text-gray-900 uppercase relative ${
                location.pathname === '/' 
                  ? 'text-gray-900' 
                  : 'text-gray-600'
              }`}
            >
              HOME
              {location.pathname === '/' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
              )}
            </Link>
            <Link
              to="/platform-architecture"
              className={`text-base font-normal tracking-normal transition-all duration-300 hover:text-gray-900 uppercase whitespace-nowrap relative ${
                location.pathname === '/platform-architecture' 
                  ? 'text-gray-900' 
                  : 'text-gray-600'
              }`}
            >
              PLATFORM ARCHITECTURE
              {location.pathname === '/platform-architecture' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
              )}
            </Link>
            <Link
              to="/programme"
              className={`text-base font-normal tracking-normal transition-all duration-300 hover:text-gray-900 uppercase relative ${
                location.pathname === '/programme' 
                  ? 'text-gray-900' 
                  : 'text-gray-600'
              }`}
            >
              PROGRAMME
              {location.pathname === '/programme' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
              )}
            </Link>
          </div>
          
          {/* Bottom row navigation */}
          <div className="flex items-center gap-10 pr-48">
            <Link
              to="/about"
              className={`text-base font-normal tracking-normal transition-all duration-300 hover:text-gray-900 uppercase relative ${
                location.pathname === '/about' 
                  ? 'text-gray-900' 
                  : 'text-gray-600'
              }`}
            >
              ABOUT
              {location.pathname === '/about' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`text-base font-normal tracking-normal transition-all duration-300 hover:text-gray-900 uppercase relative ${
                location.pathname === '/contact' 
                  ? 'text-gray-900' 
                  : 'text-gray-600'
              }`}
            >
              CONTACT
              {location.pathname === '/contact' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"></span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;