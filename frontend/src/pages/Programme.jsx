import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Cloud, Database, Zap, Network } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Programme = () => {
  const { setRef, getStyle } = useScrollReveal();
  const [activeCard, setActiveCard] = useState(null);

  const technologies = [
    'Solar Energy Systems', 'Battery Storage', 'EV Charging', 'Smart Grid',
    'Energy Analytics', 'AI Optimization', 'Real-time Monitoring',
    'Carbon Tracking', 'Demand Forecasting', 'System Integration'
  ];

  const benefits = [
    '99.9% Uptime', 'Real-time Data', 'Cost Optimization', 'Carbon Reduction',
    'Scalable Infrastructure', 'Predictive Analytics', 'Automated Control',
    'Energy Efficiency', 'Grid Resilience', 'Smart Coordination'
  ];

  const features = [
    'Cloud-Native Architecture', 'Multi-Region Deployment', 'Auto-Scaling',
    'Machine Learning', 'Data Security', 'API Integration', 'IoT Connectivity',
    'Performance Monitoring', 'Advanced Reporting', 'System Optimization'
  ];

  const layers = [
    {
      number: '01', icon: Cloud,
      title: 'Clean Energy Marketplace Layer',
      description: 'Access to distributed renewable energy technologies and services. Connect with solar systems, battery storage, EV charging infrastructure, and clean energy solutions.',
      color: 'from-blue-50 to-cyan-50'
    },
    {
      number: '02', icon: Database,
      title: 'Monitoring & Analytics Layer',
      description: 'Real-time visibility into energy systems. Track generation, consumption, performance, efficiency, and sustainability metrics across your infrastructure.',
      color: 'from-green-50 to-emerald-50'
    },
    {
      number: '03', icon: Zap,
      title: 'Climate AI Optimisation Layer',
      description: 'Intelligence engine analyzing real-time and historical data. Optimizes consumption, provides predictive insights, and supports cost efficiency.',
      color: 'from-purple-50 to-violet-50'
    },
    {
      number: '04', icon: Network,
      title: 'Distributed Energy Coordination Layer',
      description: 'Coordinates solar, battery storage, and EV charging systems. Manages distributed resources and enables intelligent energy flow across locations.',
      color: 'from-orange-50 to-amber-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-8 md:pt-20 pb-8 md:pb-12 px-4 md:px-8">
        <div className="h-2 md:h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <p 
              ref={setRef(0)} data-index="0"
              className="text-xs text-gray-500 tracking-[0.2em] mb-4 md:mb-6 uppercase font-light"
              style={getStyle(0)}
            >
              Programme
            </p>
            <h1 
              ref={setRef(1)} data-index="1"
              className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8"
              style={getStyle(1, 150)}
            >
              Our Programmes
            </h1>
            <p 
              ref={setRef(2)} data-index="2"
              className="text-sm md:text-base text-gray-800 leading-relaxed"
              style={getStyle(2, 300)}
            >
              Comprehensive solutions for distributed energy optimization and clean infrastructure deployment through our innovative platform layers.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel 1: Technologies */}
      <section className="py-6 md:py-8 overflow-hidden bg-white">
        <div className="carousel-container">
          <div className="carousel-track animate-scroll-right">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="carousel-item">
                <div className="px-5 md:px-8 py-3 md:py-4 bg-gray-50 rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer">
                  <span className="text-xs md:text-sm font-light">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Layer Cards */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <h2 
              ref={setRef(3)} data-index="3"
              className="text-xl md:text-2xl font-light text-gray-900 mb-8 md:mb-12 text-center"
              style={getStyle(3)}
            >
              Core Architecture Layers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={index}
                    ref={setRef(4 + index)}
                    data-index={4 + index}
                    style={getStyle(4 + index)}
                  >
                    <Card
                      className={`border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                        activeCard === index 
                          ? 'border-gray-900 shadow-2xl md:scale-105' 
                          : 'border-gray-200 hover:border-gray-400 hover:shadow-lg'
                      }`}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                      data-testid={`programme-card-${index}`}
                    >
                      <CardContent className="p-0">
                        <div className={`p-5 md:p-8 bg-gradient-to-br ${layer.color} transition-all duration-500`}>
                          <div className="flex items-start justify-between">
                            <div className={`p-3 md:p-4 bg-white rounded-lg shadow-sm transition-all duration-500 ${
                              activeCard === index ? 'scale-110' : ''
                            }`}>
                              <Icon className="h-6 w-6 md:h-8 md:w-8 text-gray-900" />
                            </div>
                            <span className="text-4xl md:text-5xl font-extralight text-gray-300">
                              {layer.number}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-5 md:p-8">
                          <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 md:mb-3">
                            {layer.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                            {layer.description}
                          </p>
                          
                          <div className="mt-4 md:mt-6 h-1 bg-gray-100 rounded overflow-hidden">
                            <div 
                              className={`h-full bg-gray-900 transition-all duration-700 ${
                                activeCard === index ? 'w-full' : 'w-0'
                              }`}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 2: Benefits */}
      <section className="py-6 md:py-8 overflow-hidden bg-gray-50">
        <div className="carousel-container">
          <div className="carousel-track animate-scroll-left">
            {[...benefits, ...benefits].map((benefit, index) => (
              <div key={index} className="carousel-item">
                <div className="px-5 md:px-8 py-3 md:py-4 bg-white rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer">
                  <span className="text-xs md:text-sm font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Focus */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(8)} data-index="8"
              style={getStyle(8)}
            >
              <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4 md:mb-6 text-center">
                Programme Focus
              </h2>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-8 md:mb-12 text-center max-w-3xl mx-auto">
                Our programmes are designed to accelerate the adoption and optimization of distributed clean energy systems worldwide.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {['Innovation', 'Deployment', 'Coordination', 'Scalable'].map((item, idx) => (
                  <Card key={idx} className="border-none bg-gray-50 hover:bg-gray-900 group transition-all duration-300 cursor-pointer">
                    <CardContent className="p-5 md:p-8 text-center">
                      <p className="text-xl md:text-2xl font-extralight text-gray-900 group-hover:text-white transition-colors mb-1 md:mb-2">
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <p className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-white transition-colors">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 3: Features */}
      <section className="py-6 md:py-8 overflow-hidden bg-white">
        <div className="carousel-container">
          <div className="carousel-track animate-scroll-right">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="carousel-item">
                <div className="px-5 md:px-8 py-3 md:py-4 bg-gray-50 rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer">
                  <span className="text-xs md:text-sm font-light">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .carousel-container {
          position: relative;
          width: 100%;
        }
        .carousel-track {
          display: flex;
          gap: 0.75rem;
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
      `}</style>
    </div>
  );
};

export default Programme;
