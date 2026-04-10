import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ChevronRight } from 'lucide-react';

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

  const layers = [
    {
      number: '01',
      title: 'Clean Energy Marketplace Layer',
      description: 'The marketplace layer provides access to distributed renewable energy technologies and services.',
      points: [
        'Solar energy systems',
        'Battery storage technologies',
        'Electric vehicle charging infrastructure',
        'Clean energy services and solutions'
      ],
      footer: 'The marketplace supports the adoption of renewable energy technologies while connecting users, suppliers, and innovators within a unified platform.'
    },
    {
      number: '02',
      title: 'Monitoring & Analytics Layer',
      description: 'The monitoring and analytics layer enables real-time visibility into energy systems.',
      points: [
        'Monitoring energy generation and consumption',
        'Tracking system performance and efficiency',
        'Analysing energy usage patterns',
        'Providing insights into carbon impact and sustainability metrics'
      ],
      footer: 'By enabling real-time data visibility, this layer allows users and system operators to better understand and manage distributed energy systems.'
    },
    {
      number: '03',
      title: 'Climate AI Optimisation Layer',
      description: 'The Climate AI layer represents the intelligence engine of the Davwo platform.',
      points: [
        'Analyse real-time and historical energy data',
        'Optimise energy consumption and system performance',
        'Provide predictive insights for energy demand and supply',
        'Support cost efficiency and energy optimisation'
      ],
      footer: 'Through artificial intelligence, this layer enhances the performance and coordination of distributed energy systems.'
    },
    {
      number: '04',
      title: 'Distributed Energy Coordination Layer',
      description: 'This layer integrates multiple energy technologies into a coordinated digital infrastructure.',
      points: [
        'Coordinating solar, battery storage, and EV charging systems',
        'Managing distributed energy resources across multiple locations',
        'Supporting intelligent energy flow and system interaction',
        'Enabling scalable integration of renewable energy systems'
      ],
      footer: 'This layer forms the foundation for a more connected and resilient energy ecosystem.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8 bg-gradient-to-b from-white to-gray-50">
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
            <div className="max-w-3xl">
              <p 
                className="text-base text-gray-800 leading-relaxed font-light mb-6 transition-all duration-600"
                style={getVisibility(300, 2)}
              >
                Davwo Energy is developing a Climate AI Optimisation Infrastructure platform designed to improve how distributed renewable energy systems are monitored, coordinated, and optimised.
              </p>
              <p 
                className="text-base text-gray-700 leading-relaxed font-light transition-all duration-600"
                style={getVisibility(350, 3)}
              >
                As energy systems become increasingly decentralised, the need for intelligent digital infrastructure capable of integrating multiple technologies is critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architecture Layers - Visual Cards */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <h2 
              className="text-2xl font-light text-gray-900 mb-4 transition-all duration-600"
              style={getVisibility(500, 4)}
            >
              Core Architecture Layers
            </h2>
            <p 
              className="text-sm text-gray-600 font-light mb-12 transition-all duration-600"
              style={getVisibility(550, 5)}
            >
              Four interconnected layers powering intelligent energy systems
            </p>

            <div className="space-y-8">
              {layers.map((layer, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                  style={getVisibility(600 + index * 150, 6 + index)}
                >
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Number Badge */}
                      <div className="w-24 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                        <span className="text-4xl font-extralight text-white">
                          {layer.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-8">
                        <h3 className="text-xl font-normal text-gray-900 mb-4 flex items-center">
                          {layer.title}
                          <ChevronRight className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                        </h3>
                        
                        <p className="text-base text-gray-700 leading-relaxed font-light mb-6">
                          {layer.description}
                        </p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {layer.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700 font-light">{point}</span>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-600 leading-relaxed font-light italic border-l-2 border-gray-200 pl-4">
                          {layer.footer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(1400, 10)}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Platform Integration
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-6">
                The Davwo Energy platform integrates these layers into a unified system:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-4"></div>
                    <p className="text-sm text-gray-700 font-light">Users can access clean energy technologies</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-4"></div>
                    <p className="text-sm text-gray-700 font-light">Energy systems are monitored in real time</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-4"></div>
                    <p className="text-sm text-gray-700 font-light">Artificial intelligence optimises system performance</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-4"></div>
                    <p className="text-sm text-gray-700 font-light">Distributed energy resources are intelligently coordinated</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Vision */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(1800, 11)}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Technology Vision
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-8 max-w-3xl">
                Davwo Energy aims to contribute to the development of next-generation digital infrastructure for clean energy systems, supporting the transition toward decentralised, data-driven, and optimised energy ecosystems.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Scalability', 'Integration', 'Optimization', 'Sustainability'].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="h-1 w-12 bg-gray-900 mb-4 group-hover:w-full transition-all duration-300"></div>
                    <p className="text-sm font-medium text-gray-900">{item}</p>
                    <p className="text-xs text-gray-600 font-light mt-1">Focus Area</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Outlook */}
      <section className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(2000, 12)}
            >
              <h2 className="text-2xl font-light mb-6">
                Development Outlook
              </h2>
              <p className="text-base text-gray-300 leading-relaxed font-light mb-4 max-w-3xl">
                The Davwo Energy platform is currently in the early development phase, with a structured roadmap guiding its evolution toward deployment.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="text-4xl font-extralight">2027</div>
                <div className="h-12 w-px bg-gray-700"></div>
                <p className="text-sm text-gray-400 font-light">
                  Initial platform launch targeted for UK and European markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformArchitecture;