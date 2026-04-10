import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Cloud, Database, Zap, Network } from 'lucide-react';

const Programme = () => {
  const [scrollY, setScrollY] = useState(0);
  const [revealed, setRevealed] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);

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
      icon: Cloud,
      title: 'Clean Energy Marketplace Layer',
      description: 'Access to distributed renewable energy technologies and services. Connect with solar systems, battery storage, EV charging infrastructure, and clean energy solutions.',
      color: 'from-blue-50 to-cyan-50'
    },
    {
      number: '02',
      icon: Database,
      title: 'Monitoring & Analytics Layer',
      description: 'Real-time visibility into energy systems. Track generation, consumption, performance, efficiency, and sustainability metrics across your infrastructure.',
      color: 'from-green-50 to-emerald-50'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Climate AI Optimisation Layer',
      description: 'Intelligence engine analyzing real-time and historical data. Optimizes consumption, provides predictive insights, and supports cost efficiency.',
      color: 'from-purple-50 to-violet-50'
    },
    {
      number: '04',
      icon: Network,
      title: 'Distributed Energy Coordination Layer',
      description: 'Coordinates solar, battery storage, and EV charging systems. Manages distributed resources and enables intelligent energy flow across locations.',
      color: 'from-orange-50 to-amber-50'
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
                <div className="px-8 py-4 bg-gray-50 rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer">
                  <span className="text-sm font-light">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Layer Cards */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <h2 
              className="text-2xl font-light text-gray-900 mb-12 text-center transition-all duration-600"
              style={getVisibility(500, 3)}
            >
              Core Architecture Layers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <Card
                    key={index}
                    className={`border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                      activeCard === index 
                        ? 'border-gray-900 shadow-2xl scale-105' 
                        : 'border-gray-200 hover:border-gray-400 hover:shadow-lg'
                    }`}
                    style={getVisibility(600 + index * 100, 4 + index)}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <CardContent className="p-0">
                      {/* Icon Header */}
                      <div className={`p-8 bg-gradient-to-br ${layer.color} transition-all duration-500`}>
                        <div className="flex items-start justify-between">
                          <div className={`p-4 bg-white rounded-lg shadow-sm transition-all duration-500 ${
                            activeCard === index ? 'scale-110' : ''
                          }`}>
                            <Icon className="h-8 w-8 text-gray-900" />
                          </div>
                          <span className="text-5xl font-extralight text-gray-300">
                            {layer.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                          {layer.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed font-light">
                          {layer.description}
                        </p>
                        
                        {/* Progress bar on hover */}
                        <div className="mt-6 h-1 bg-gray-100 rounded overflow-hidden">
                          <div 
                            className={`h-full bg-gray-900 transition-all duration-700 ${
                              activeCard === index ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
                <div className="px-8 py-4 bg-white rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer">
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Focus */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(1200, 8)}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">
                Programme Focus
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-12 text-center max-w-3xl mx-auto">
                Our programmes are designed to accelerate the adoption and optimization of distributed clean energy systems worldwide.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Innovation', 'Deployment', 'Coordination', 'Scalable'].map((item, idx) => (
                  <Card key={idx} className="border-none bg-gray-50 hover:bg-gray-900 group transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <p className="text-2xl font-extralight text-gray-900 group-hover:text-white transition-colors mb-2">
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                <div className="px-8 py-4 bg-gray-50 rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer">
                  <span className="text-sm font-light">{feature}</span>
                </div>
              </div>
            ))}
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
      `}</style>
    </div>
  );
};

export default Programme;