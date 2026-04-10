import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';

const Programme = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVisibility = (delay = 0) => {
    const threshold = 150 + delay;
    const progress = Math.min(Math.max((scrollY - threshold) / 300, 0), 1);
    return {
      opacity: progress,
      transform: `translateY(${(1 - progress) * 60}px)`
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-20 px-8">
        <div className="h-20"></div>
        <div className="max-w-[1600px] mx-auto">
          <div className="px-16 py-20">
            <div className="max-w-2xl">
              <p 
                className="text-xs text-gray-400 tracking-[0.2em] mb-8 uppercase font-light transition-all duration-1000"
                style={getVisibility(0)}
              >
                Programme
              </p>
              <h1 
                className="text-6xl md:text-7xl font-extralight text-gray-900 leading-[1.1] mb-10 transition-all duration-1000"
                style={getVisibility(150)}
              >
                Our Programmes
              </h1>
              <p 
                className="text-lg text-gray-600 leading-relaxed mb-10 font-light transition-all duration-1000"
                style={getVisibility(300)}
              >
                Comprehensive solutions for distributed energy optimization and clean infrastructure deployment.
              </p>
              <div
                className="transition-all duration-1000"
                style={getVisibility(450)}
              >
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
                  Learn More About Our Programmes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programme;