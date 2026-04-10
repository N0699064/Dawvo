import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Scroll Animations */}
      <section className="pt-20 pb-24 px-8 bg-white min-h-screen flex items-center" ref={heroRef}>
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="px-16 py-20">
            <div className="max-w-3xl">
              <p 
                className={`text-xs text-gray-400 tracking-[0.2em] mb-8 uppercase font-light transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                Climate AI Optimisation Infrastructure
              </p>
              <h1 
                className={`text-6xl md:text-7xl font-extralight text-gray-900 leading-[1.1] mb-10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                AI-driven optimisation for distributed energy performance, resilience, and scalable clean infrastructure.
              </h1>
              <p 
                className={`text-lg text-gray-600 mb-12 leading-relaxed font-light transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                DAVVO Energy builds infrastructure-grade climate AI systems that optimise distributed energy assets, enhance grid resilience, and accelerate clean energy integration.
              </p>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
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