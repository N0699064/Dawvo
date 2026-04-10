import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PlatformArchitecture = () => {
  const { setRef, getStyle } = useScrollReveal();

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
      <section className="pt-8 md:pt-20 pb-10 md:pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="h-2 md:h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <p 
              ref={setRef(0)} data-index="0"
              className="text-xs text-gray-500 tracking-[0.2em] mb-4 md:mb-6 uppercase font-light"
              style={getStyle(0)}
            >
              Platform Architecture
            </p>
            <h1 
              ref={setRef(1)} data-index="1"
              className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8"
              style={getStyle(1, 150)}
            >
              Davwo Energy Platform Architecture
            </h1>
            <div className="max-w-3xl">
              <p 
                ref={setRef(2)} data-index="2"
                className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-4 md:mb-6"
                style={getStyle(2, 300)}
              >
                Davwo Energy is developing a Climate AI Optimisation Infrastructure platform designed to improve how distributed renewable energy systems are monitored, coordinated, and optimised.
              </p>
              <p 
                ref={setRef(3)} data-index="3"
                className="text-sm md:text-base text-gray-700 leading-relaxed font-light"
                style={getStyle(3, 350)}
              >
                As energy systems become increasingly decentralised, the need for intelligent digital infrastructure capable of integrating multiple technologies is critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architecture Layers */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <h2 
              ref={setRef(4)} data-index="4"
              className="text-xl md:text-2xl font-light text-gray-900 mb-3 md:mb-4"
              style={getStyle(4)}
            >
              Core Architecture Layers
            </h2>
            <p 
              ref={setRef(5)} data-index="5"
              className="text-xs md:text-sm text-gray-600 font-light mb-8 md:mb-12"
              style={getStyle(5, 100)}
            >
              Four interconnected layers powering intelligent energy systems
            </p>

            <div className="space-y-6 md:space-y-8">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  ref={setRef(6 + index)}
                  data-index={6 + index}
                  style={getStyle(6 + index)}
                >
                  <Card
                    className="border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                    data-testid={`layer-card-${index}`}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Number Badge */}
                        <div className="w-full md:w-24 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors py-3 md:py-0">
                          <span className="text-2xl md:text-4xl font-extralight text-white">
                            {layer.number}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 p-5 md:p-8">
                          <h3 className="text-base md:text-xl font-normal text-gray-900 mb-3 md:mb-4 flex items-center">
                            {layer.title}
                            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                          </h3>
                          
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light mb-4 md:mb-6">
                            {layer.description}
                          </p>
                          
                          {/* Features Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                            {layer.points.map((point, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-1.5 md:mt-2 flex-shrink-0"></div>
                                <span className="text-xs md:text-sm text-gray-700 font-light">{point}</span>
                              </div>
                            ))}
                          </div>
                          
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light italic border-l-2 border-gray-200 pl-3 md:pl-4">
                            {layer.footer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(10)} data-index="10"
              style={getStyle(10)}
            >
              <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4 md:mb-6">
                Platform Integration
              </h2>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-4 md:mb-6">
                The Davwo Energy platform integrates these layers into a unified system:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-3 md:mb-4"></div>
                    <p className="text-xs md:text-sm text-gray-700 font-light">Users can access clean energy technologies</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-3 md:mb-4"></div>
                    <p className="text-xs md:text-sm text-gray-700 font-light">Energy systems are monitored in real time</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-3 md:mb-4"></div>
                    <p className="text-xs md:text-sm text-gray-700 font-light">Artificial intelligence optimises system performance</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-8 h-1 bg-gray-900 mb-3 md:mb-4"></div>
                    <p className="text-xs md:text-sm text-gray-700 font-light">Distributed energy resources are intelligently coordinated</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Vision */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(11)} data-index="11"
              style={getStyle(11)}
            >
              <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-4 md:mb-6">
                Technology Vision
              </h2>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-6 md:mb-8 max-w-3xl">
                Davwo Energy aims to contribute to the development of next-generation digital infrastructure for clean energy systems, supporting the transition toward decentralised, data-driven, and optimised energy ecosystems.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {['Scalability', 'Integration', 'Optimization', 'Sustainability'].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="h-1 w-10 md:w-12 bg-gray-900 mb-3 md:mb-4 group-hover:w-full transition-all duration-300"></div>
                    <p className="text-xs md:text-sm font-medium text-gray-900">{item}</p>
                    <p className="text-xs text-gray-600 font-light mt-1">Focus Area</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Outlook */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(12)} data-index="12"
              style={getStyle(12)}
            >
              <h2 className="text-xl md:text-2xl font-light mb-4 md:mb-6">
                Development Outlook
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light mb-4 max-w-3xl">
                The Davwo Energy platform is currently in the early development phase, with a structured roadmap guiding its evolution toward deployment.
              </p>
              <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
                <div className="text-3xl md:text-4xl font-extralight">2027</div>
                <div className="h-10 md:h-12 w-px bg-gray-700"></div>
                <p className="text-xs md:text-sm text-gray-400 font-light">
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
