import React from 'react';
import { Button } from '../components/ui/button';

const Programme = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm text-gray-500 tracking-wide mb-6 uppercase">
              Programme
            </p>
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 leading-tight mb-8">
              Our Programmes
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Comprehensive solutions for distributed energy optimization and clean infrastructure deployment.
            </p>
            <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-6 rounded-md text-base transition-all duration-300">
              Learn More About Our Programmes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programme;