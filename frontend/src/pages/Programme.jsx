import React from 'react';
import { Button } from '../components/ui/button';

const Programme = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-20 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="px-16 py-20">
            <div className="max-w-2xl">
              <p className="text-xs text-gray-500 tracking-widest mb-6 uppercase font-light">
                Programme
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
                Our Programmes
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-10 font-light">
                Comprehensive solutions for distributed energy optimization and clean infrastructure deployment.
              </p>
              <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-6 rounded-md text-sm font-medium transition-all duration-300">
                Learn More About Our Programmes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programme;