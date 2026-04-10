import React, { useEffect, useState } from 'react';

const Programme = () => {
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
    
    if (progress >= 1 && !revealed.has(index)) {
      setRevealed(new Set([...revealed, index]));
    }
    
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
              Programme
            </p>
            <h1 
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8 transition-all duration-600"
              style={getVisibility(150, 1)}
            >
              Our Programmes
            </h1>
            <p 
              className="text-base text-gray-800 leading-relaxed transition-all duration-600"
              style={getVisibility(300, 2)}
            >
              Comprehensive solutions for distributed energy optimization and clean infrastructure deployment through our innovative platform layers.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel 1: Technologies */}
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

      {/* 3D Circular Carousel - Smaller Cards, All Visible */}
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
                      transform: `rotateY(${index * 90}deg) translateZ(350px)`
                    }}
                  >
                    <div className="layer-card">
                      <div className="flex flex-col gap-4">
                        <span className="text-4xl font-extralight text-gray-200">
                          {layer.number}
                        </span>
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-2">
                            {layer.title}
                          </h3>
                          <p className="text-xs text-gray-700 leading-relaxed font-light">
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

      {/* Carousel 2: Benefits */}
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
                Programme Integration
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-8">
                Our programmes integrate cutting-edge technologies across all platform layers to deliver comprehensive energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 3: Features */}
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

      {/* Technology Focus */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(1600, 9)}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Programme Focus
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-4">
                Our programmes are designed to accelerate the adoption and optimization of distributed clean energy systems worldwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Focus Area</p>
                  <p className="text-sm font-medium text-gray-900">Innovation</p>
                </div>
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Focus Area</p>
                  <p className="text-sm font-medium text-gray-900">Deployment</p>
                </div>
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Focus Area</p>
                  <p className="text-sm font-medium text-gray-900">Coordination</p>
                </div>
                <div className="p-6 bg-white rounded-sm border border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Approach</p>
                  <p className="text-sm font-medium text-gray-900">Scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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

        /* 3D Circular Carousel - Smaller, All Visible */
        .carousel-3d-container {
          perspective: 1500px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .carousel-3d {
          position: relative;
          width: 100%;
          height: 300px;
          transform-style: preserve-3d;
          animation: rotate3d 30s linear infinite;
        }

        .carousel-3d:hover {
          animation-play-state: paused;
        }

        @keyframes rotate3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        .carousel-3d-item {
          position: absolute;
          width: 380px;
          height: 100%;
          left: 50%;
          top: 50%;
          margin-left: -190px;
          margin-top: -150px;
          transform-style: preserve-3d;
        }

        .layer-card {
          width: 100%;
          height: 100%;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 2px;
          padding: 2rem;
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
            height: 350px;
          }

          .carousel-3d {
            height: 250px;
          }

          .carousel-3d-item {
            width: 280px;
            margin-left: -140px;
            margin-top: -125px;
          }

          .layer-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Programme;