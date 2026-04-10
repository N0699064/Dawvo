import React from 'react';
import { Button } from '../components/ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  const { setRef, getStyle } = useScrollReveal();

  return (
    <div className="bg-white">
      <section className="pt-8 md:pt-20 pb-16 md:pb-24 px-4 md:px-8 bg-white lg:min-h-screen">
        <div className="h-2 md:h-8"></div>
        
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="px-0 md:px-8">
            <div className="max-w-3xl">
              <p 
                ref={setRef(0)}
                data-index="0"
                className="text-xs text-gray-500 tracking-[0.2em] mb-4 md:mb-6 uppercase font-light"
                style={getStyle(0)}
              >
                Climate AI Optimisation Infrastructure
              </p>
              <h1 
                ref={setRef(1)}
                data-index="1"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 md:mb-8"
                style={getStyle(1, 150)}
              >
                AI-driven optimisation for distributed energy performance, resilience, and scalable clean infrastructure.
              </h1>
              <p 
                ref={setRef(2)}
                data-index="2"
                className="text-sm md:text-base text-gray-800 mb-8 md:mb-10 leading-relaxed font-light"
                style={getStyle(2, 300)}
              >
                DAVVO Energy builds infrastructure-grade climate AI systems that optimise distributed energy assets, enhance grid resilience, and accelerate clean energy integration.
              </p>
              <div 
                ref={setRef(3)}
                data-index="3"
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                style={getStyle(3, 450)}
              >
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-10 py-5 md:py-6 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                  data-testid="explore-platform-btn"
                >
                  Explore the Platform
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 md:px-10 py-5 md:py-6 rounded-sm text-sm font-medium transition-all duration-300"
                  data-testid="partner-btn"
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
