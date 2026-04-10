import React, { useEffect, useState } from 'react';
import { Separator } from '../components/ui/separator';

const PlatformArchitecture = () => {
  const [scrollY, setScrollY] = useState(0);

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

  const layers = [
    {
      number: '1',
      title: 'Clean Energy Marketplace Layer',
      description: 'The marketplace layer provides access to distributed renewable energy technologies and services.',
      content: 'This layer enables users to discover, compare, and access solutions such as:',
      points: [
        'Solar energy systems',
        'Battery storage technologies',
        'Electric vehicle charging infrastructure',
        'Clean energy services and solutions'
      ],
      footer: 'The marketplace supports the adoption of renewable energy technologies while connecting users, suppliers, and innovators within a unified platform.'
    },
    {
      number: '2',
      title: 'Monitoring & Analytics Layer',
      description: 'The monitoring and analytics layer enables real-time visibility into energy systems.',
      content: 'This layer focuses on:',
      points: [
        'Monitoring energy generation and consumption',
        'Tracking system performance and efficiency',
        'Analysing energy usage patterns',
        'Providing insights into carbon impact and sustainability metrics'
      ],
      footer: 'By enabling real-time data visibility, this layer allows users and system operators to better understand and manage distributed energy systems.'
    },
    {
      number: '3',
      title: 'Climate AI Optimisation Layer',
      description: 'The Climate AI layer represents the intelligence engine of the Davwo platform.',
      content: 'This layer is designed to:',
      points: [
        'Analyse real-time and historical energy data',
        'Optimise energy consumption and system performance',
        'Provide predictive insights for energy demand and supply',
        'Support cost efficiency and energy optimisation'
      ],
      footer: 'Through artificial intelligence, this layer enhances the performance and coordination of distributed energy systems.'
    },
    {
      number: '4',
      title: 'Distributed Energy Coordination Layer',
      description: 'This layer integrates multiple energy technologies into a coordinated digital infrastructure.',
      content: 'It focuses on:',
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
      <section className="pt-20 pb-16 px-8">
        <div className="h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <p 
              className="text-xs text-gray-400 tracking-[0.2em] mb-6 uppercase font-light transition-all duration-1000"
              style={getVisibility(0)}
            >
              Platform Architecture
            </p>
            <h1 
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8 transition-all duration-1000"
              style={getVisibility(150)}
            >
              Davwo Energy Platform Architecture
            </h1>
            <p 
              className="text-base text-gray-600 leading-relaxed font-light mb-6 transition-all duration-1000"
              style={getVisibility(300)}
            >
              Davwo Energy is developing a Climate AI Optimisation Infrastructure platform designed to improve how distributed renewable energy systems are monitored, coordinated, and optimised.
            </p>
            <p 
              className="text-base text-gray-600 leading-relaxed font-light transition-all duration-1000"
              style={getVisibility(350)}
            >
              As energy systems become increasingly decentralised, the need for intelligent digital infrastructure capable of integrating multiple technologies is critical. The Davwo platform is structured as a multi-layered system that connects clean energy technologies, data analytics, and artificial intelligence into a unified infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architecture Layers */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <Separator className="mb-12" />
            <h2 
              className="text-2xl font-light text-gray-900 mb-16 transition-all duration-1000"
              style={getVisibility(500)}
            >
              Core Architecture Layers
            </h2>

            <div className="space-y-20">
              {layers.map((layer, index) => (
                <div 
                  key={index}
                  className="transition-all duration-1000"
                  style={getVisibility(600 + index * 200)}
                >
                  <div className="flex gap-6 mb-4">
                    <span className="text-4xl font-extralight text-gray-300">{layer.number}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-normal text-gray-900 mb-3">
                        {layer.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                        {layer.description}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed font-light mb-3">
                        {layer.content}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {layer.points.map((point, idx) => (
                          <li key={idx} className="text-sm text-gray-600 font-light flex items-start">
                            <span className="text-gray-400 mr-3">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {layer.footer}
                      </p>
                    </div>
                  </div>
                  {index < layers.length - 1 && <Separator className="mt-12" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-1000"
              style={getVisibility(1800)}
            >
              <Separator className="mb-12 bg-gray-300" />
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Platform Integration
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                The Davwo Energy platform integrates these layers into a unified system where:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Users can access clean energy technologies
                </li>
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Energy systems are monitored in real time
                </li>
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Artificial intelligence optimises system performance
                </li>
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Distributed energy resources are intelligently coordinated
                </li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                This integrated approach enables more efficient, scalable, and intelligent renewable energy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Vision */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-1000"
              style={getVisibility(2000)}
            >
              <Separator className="mb-12" />
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Technology Vision
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
                Davwo Energy aims to contribute to the development of next-generation digital infrastructure for clean energy systems, supporting the transition toward decentralised, data-driven, and optimised energy ecosystems.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                The platform is being developed with a focus on:
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Scalability across different energy markets
                </li>
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Integration with emerging renewable technologies
                </li>
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Data-driven decision-making and optimisation
                </li>
                <li className="text-sm text-gray-600 font-light flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  Supporting the global transition to sustainable energy systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Outlook */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-1000"
              style={getVisibility(2200)}
            >
              <Separator className="mb-12 bg-gray-300" />
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Development Outlook
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                The Davwo Energy platform is currently in the early development phase, with a structured roadmap guiding its evolution toward deployment.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                The initial platform launch is targeted for 2027, with a focus on the United Kingdom and European markets, followed by broader expansion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformArchitecture;
