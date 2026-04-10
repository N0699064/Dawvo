import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

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
      <section className="pt-20 pb-24 px-8 bg-white min-h-screen" ref={heroRef}>
        <div className="h-8"></div>
        
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="px-8">
            <div className="max-w-3xl">
              <p 
                className="text-xs text-gray-400 tracking-[0.2em] mb-6 uppercase font-light transition-all duration-1000"
                style={getVisibility(0)}
              >
                Climate AI Optimisation Infrastructure
              </p>
              <h1 
                className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8 transition-all duration-1000"
                style={getVisibility(150)}
              >
                AI-driven optimisation for distributed energy performance, resilience, and scalable clean infrastructure.
              </h1>
              <p 
                className="text-base text-gray-600 mb-10 leading-relaxed font-light transition-all duration-1000"
                style={getVisibility(300)}
              >
                DAVVO Energy builds infrastructure-grade climate AI systems that optimise distributed energy assets, enhance grid resilience, and accelerate clean energy integration.
              </p>
              <div 
                className="flex gap-4 transition-all duration-1000"
                style={getVisibility(450)}
              >
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Explore the Platform
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-10 py-6 rounded-sm text-sm font-medium transition-all duration-300"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;