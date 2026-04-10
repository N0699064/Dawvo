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

  // Calculate visibility based on scroll position - slower animations
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
      {/* Hero Section with Scroll-Triggered Animations */}
      <section className="pt-20 pb-24 px-8 bg-white min-h-screen" ref={heroRef}>
        {/* Add some initial spacing so content starts below */}
        <div className="h-40"></div>
        
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="px-16 py-20">
            <div className="max-w-3xl">
              <p 
                className="text-xs text-gray-400 tracking-[0.2em] mb-8 uppercase font-light transition-all duration-1000"
                style={getVisibility(0)}
              >
                Climate AI Optimisation Infrastructure
              </p>
              <h1 
                className="text-6xl md:text-7xl font-extralight text-gray-900 leading-[1.1] mb-10 transition-all duration-1000"
                style={getVisibility(150)}
              >
                AI-driven optimisation for distributed energy performance, resilience, and scalable clean infrastructure.
              </h1>
              <p 
                className="text-lg text-gray-600 mb-12 leading-relaxed font-light transition-all duration-1000"
                style={getVisibility(300)}
              >
                DAVVO Energy builds infrastructure-grade climate AI systems that optimise distributed energy assets, enhance grid resilience, and accelerate clean energy integration.
              </p>
              <div 
                className="flex gap-4 transition-all duration-1000"
                style={getVisibility(450)}
              >
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Explore the Platform
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-10 py-7 rounded-sm text-sm font-medium transition-all duration-300"
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