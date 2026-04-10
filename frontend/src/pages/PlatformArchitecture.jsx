import React, { useEffect, useState } from 'react';

const PlatformArchitecture = () => {
  const [scrollY, setScrollY] = useState(0);
  const [revealed, setRevealed] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVisibility = (delay = 0, index = 0) => {
    const threshold = 150 + delay;
    const progress = Math.min(Math.max((scrollY - threshold) / 300, 0), 1);
    
    // Mark as revealed once fully visible
    if (progress >= 1 && !revealed.has(index)) {
      setRevealed(new Set([...revealed, index]));
    }
    
    // If already revealed, stay visible
    if (revealed.has(index)) {
      return {
        opacity: 1,
        transform: 'translateY(0px)'
      };
    }
    
    return {
      opacity: progress,
      transform: `translateY(${(1 - progress) * 60}px)`
    };
  };

  const technologies = [
    'Solar Energy Systems',
    'Battery Storage',
    'EV Charging',
    'Smart Grid',
    'Energy Analytics',
    'AI Optimization',
    'Real-time Monitoring',
    'Carbon Tracking',
    'Demand Forecasting',
    'System Integration'
  ];

  const benefits = [
    '99.9% Uptime',
    'Real-time Data',
    'Cost Optimization',
    'Carbon Reduction',
    'Scalable Infrastructure',
    'Predictive Analytics',
    'Automated Control',
    'Energy Efficiency',
    'Grid Resilience',
    'Smart Coordination'
  ];

  const features = [
    'Cloud-Native Architecture',
    'Multi-Region Deployment',
    'Auto-Scaling',
    'Machine Learning',
    'Data Security',
    'API Integration',
    'IoT Connectivity',
    'Performance Monitoring',
    'Advanced Reporting',
    'System Optimization'
  ];

  const layers = [
    {
      number: '01',
      title: 'Clean Energy Marketplace Layer',
      description: 'Access to distributed renewable energy technologies and services. Connect with solar systems, battery storage, EV charging infrastructure, and clean energy solutions.',
    },
    {
      number: '02',
      title: 'Monitoring & Analytics Layer',
      description: 'Real-time visibility into energy systems. Track generation, consumption, performance, efficiency, and sustainability metrics across your infrastructure.',
    },
    {
      number: '03',
      title: 'Climate AI Optimisation Layer',
      description: 'Intelligence engine analyzing real-time and historical data. Optimizes consumption, provides predictive insights, and supports cost efficiency.',
    },
    {
      number: '04',
      title: 'Distributed Energy Coordination Layer',
      description: 'Coordinates solar, battery storage, and EV charging systems. Manages distributed resources and enables intelligent energy flow across locations.',
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-8">
        <div className="h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <p 
              className="text-xs text-gray-500 tracking-[0.2em] mb-6 uppercase font-light transition-all duration-600"
              style={getVisibility(0, 0)}
            >
              Platform Architecture
            </p>
            <h1 
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8 transition-all duration-600"
              style={getVisibility(150, 1)}
            >
              Davwo Energy Platform Architecture
            </h1>
            <p 
              className="text-base text-gray-800 leading-relaxed font-light transition-all duration-600"
              style={getVisibility(300, 2)}
            >
              A Climate AI Optimisation Infrastructure platform designed to improve how distributed renewable energy systems are monitored, coordinated, and optimised through intelligent digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel 1: Technologies - Scroll Right */}
      <section className="py-8 overflow-hidden bg-white">
        <div className="carousel-container">
          <div className="carousel-track animate-scroll-right">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="carousel-item">
                <div className="px-8 py-4 bg-gray-50 rounded-full border border-gray-200 whitespace-nowrap">
                  <span className="text-sm font-light text-gray-800">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Layers - 3D Circular Carousel */}
      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <h2 
              className="text-2xl font-light text-gray-900 mb-16 text-center transition-all duration-600"
              style={getVisibility(500, 3)}
            >
              Core Architecture Layers
            </h2>

            <div 
              className="carousel-3d-container"
              style={getVisibility(600, 4)}
            >
              <div className="carousel-3d">
                {layers.map((layer, index) => (
                  <div 
                    key={index}
                    className="carousel-3d-item"
                    style={{
                      transform: `rotateY(${index * 90}deg) translateZ(450px)`
                    }}
                  >
                    <div className="layer-card">
                      <div className="flex items-start gap-6">
                        <span className="text-5xl font-extralight text-gray-200">
                          {layer.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-normal text-gray-900 mb-3">
                            {layer.title}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed font-light">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 2: Benefits - Scroll Left */}
      <section className="py-8 overflow-hidden bg-gray-50">
        <div className="carousel-container">
          <div className="carousel-track animate-scroll-left">
            {[...benefits, ...benefits].map((benefit, index) => (
              <div key={index} className="carousel-item">
                <div className="px-8 py-4 bg-white rounded-full border border-gray-200 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(1200, 8)}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Platform Integration
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-8">
                A unified system where users access clean energy technologies, systems are monitored in real time, artificial intelligence optimises performance, and distributed energy resources are intelligently coordinated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 3: Features - Scroll Right */}
      <section className="py-8 overflow-hidden bg-white">
        <div className="carousel-container">
          <div className="carousel-track animate-scroll-right">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="carousel-item">
                <div className="px-8 py-4 bg-gray-50 rounded-full border border-gray-200 whitespace-nowrap">
                  <span className="text-sm font-light text-gray-800">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Vision */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(1600, 9)}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Technology Vision
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-4">
                Contributing to next-generation digital infrastructure for clean energy systems, supporting the transition toward decentralised, data-driven, and optimised energy ecosystems.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Focus Area</p>
                  <p className="text-sm font-medium text-gray-900">Scalability</p>
                </div>
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Focus Area</p>
                  <p className="text-sm font-medium text-gray-900">Integration</p>
                </div>
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Focus Area</p>
                  <p className="text-sm font-medium text-gray-900">Optimization</p>
                </div>
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Target</p>
                  <p className="text-sm font-medium text-gray-900">Launch 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for Carousels and 3D Carousel */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          will-change: transform;
        }

        .carousel-item {
          flex-shrink: 0;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        /* 3D Circular Carousel */
        .carousel-3d-container {
          perspective: 2000px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .carousel-3d {
          position: relative;
          width: 100%;
          height: 400px;
          transform-style: preserve-3d;
          animation: rotate3d 30s linear infinite;
        }

        .carousel-3d:hover {
          animation-play-state: paused;
        }

        @keyframes rotate3d {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .carousel-3d-item {
          position: absolute;
          width: 500px;
          height: 100%;
          left: 50%;
          top: 50%;
          margin-left: -250px;
          margin-top: -200px;
          transform-style: preserve-3d;
          transition: opacity 0.5s;
        }

        .layer-card {
          width: 100%;
          height: 100%;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 2px;
          padding: 3rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          transition: all 0.3s;
        }

        .layer-card:hover {
          border-color: #111827;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .carousel-3d-container {
            height: 400px;
          }

          .carousel-3d {
            height: 300px;
          }

          .carousel-3d-item {
            width: 320px;
            margin-left: -160px;
            margin-top: -150px;
          }

          .layer-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PlatformArchitecture;