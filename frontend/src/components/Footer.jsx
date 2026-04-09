import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img 
              src="https://customer-assets.emergentagent.com/job_1045df7f-45d6-4bd9-a099-b96d9fef1478/artifacts/nv29josx_B35DD144-A99A-4EFA-8C62-789D6F70D141%20%281%29.webp" 
              alt="DAVVO Energy Logo" 
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              A Taste of Clean Energy
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">Home</a></li>
              <li><a href="/platform-architecture" className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">Platform Architecture</a></li>
              <li><a href="/programme" className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">Programme</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">About</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <p className="text-sm text-gray-600 mb-2">info@davvoenergy.com</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} DAVVO Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;