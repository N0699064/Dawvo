import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ChevronDown } from 'lucide-react';
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
      number: '01',
      title: 'Clean Energy Marketplace Layer',
      description: 'Access to distributed renewable energy technologies and services. Connect with solar systems, battery storage, EV charging infrastructure, and clean energy solutions.'
    },
    {
      number: '02',
      title: 'Monitoring & Analytics Layer',
      description: 'Real-time visibility into energy systems. Track generation, consumption, performance, efficiency, and sustainability metrics across your infrastructure.'
    },
    {
      number: '03',
      title: 'Climate AI Optimisation Layer',
      description: 'Intelligence engine analyzing real-time and historical data. Optimizes consumption, provides predictive insights, and supports cost efficiency.'
    },
    {
      number: '04',
      title: 'Distributed Energy Coordination Layer',
      description: 'Coordinates solar, battery storage, and EV charging systems. Manages distributed resources and enables intelligent energy flow across locations.'
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

      {/* Core Architecture Layers - Accordion */}
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

            <div 
              ref={setRef(4)} data-index="4"
              className="max-w-3xl mx-auto"
              style={getStyle(4)}
            >
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                  data-testid={`programme-accordion-${index}`}
                >
                  <button
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-sm md:text-base font-light text-gray-400">{layer.number}</span>
                      <span className="text-sm md:text-base font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
                        {layer.title}
                      </span>
                    </div>
                    <ChevronDown className={`h-4 w-4 md:h-5 md:w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeCard === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeCard === index ? 'max-h-40 pb-5 md:pb-6' : 'max-h-0'
                  }`}>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light pl-8 md:pl-12">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
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
