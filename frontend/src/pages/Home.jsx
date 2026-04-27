import React from 'react';
import { Button } from '../components/ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check } from 'lucide-react';

const Home = () => {
  const { setRef, getStyle } = useScrollReveal();

  const capabilities = [
    'Real-time monitoring of distributed energy systems',
    'AI-driven optimisation and predictive intelligence',
    'System-level coordination across energy assets',
    'Infrastructure for scalable, decentralised energy'
  ];

  const benefits = [
    'Higher efficiency',
    'Lower costs',
    'Greater resilience',
    'Scalable clean energy adoption'
  ];

  const platformLayers = [
    'Marketplace for clean energy technologies',
    'Real-time monitoring and analytics',
    'Climate AI optimisation engine',
    'Distributed system coordination'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-8 md:pt-20 pb-16 md:pb-24 px-4 md:px-8 bg-white lg:min-h-screen flex items-center">
        <div className="w-full">
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6 md:mb-8"
                  style={getStyle(1, 150)}
                >
                  The Intelligence Layer for Distributed Energy Systems
                </h1>
                <p 
                  ref={setRef(2)}
                  data-index="2"
                  className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed font-light"
                  style={getStyle(2, 300)}
                >
                  AI-powered optimisation for resilient, scalable, and high-performance energy networks.
                </p>
                <p 
                  ref={setRef(3)}
                  data-index="3"
                  className="text-sm md:text-base text-gray-800 mb-8 md:mb-10 leading-relaxed font-light"
                  style={getStyle(3, 350)}
                >
                  DAVWO Energy builds infrastructure-grade climate AI that optimises distributed energy assets, strengthens grid resilience, and accelerates clean energy integration.
                </p>
                <div 
                  ref={setRef(4)}
                  data-index="4"
                  className="flex flex-col sm:flex-row gap-3 md:gap-4"
                  style={getStyle(4, 450)}
                >
                  <Button 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-10 py-5 md:py-6 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                    data-testid="explore-platform-btn"
                  >
                    Explore Platform
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
        </div>
      </section>

      {/* Energy is Decentralised Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(5)}
              data-index="5"
              className="max-w-3xl mb-10 md:mb-14"
              style={getStyle(5)}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8">
                Energy is no longer centralised.
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4 md:mb-6">
                Solar, battery storage, electric vehicles, and smart systems are transforming how energy is produced and consumed — but they remain fragmented.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                Davwo Energy solves this.
              </p>
            </div>

            <div 
              ref={setRef(6)}
              data-index="6"
              className="max-w-3xl"
              style={getStyle(6, 150)}
            >
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light mb-8 md:mb-10">
                We provide the intelligence layer that connects, optimises, and orchestrates distributed energy systems into a unified, high-performance network.
              </p>

              <div className="space-y-4 md:space-y-5">
                {capabilities.map((capability, index) => (
                  <div 
                    key={index}
                    ref={setRef(7 + index)}
                    data-index={7 + index}
                    style={getStyle(7 + index, 200)}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-sm bg-gray-900">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-800 font-light leading-relaxed">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating System Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(11)}
              data-index="11"
              className="max-w-3xl mb-10 md:mb-14"
              style={getStyle(11)}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8">
                Davwo Energy is building the operating system for decentralised energy.
              </h2>
            </div>

            <div 
              ref={setRef(12)}
              data-index="12"
              className="max-w-3xl"
              style={getStyle(12, 150)}
            >
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light">
                The future of energy is not just renewable — it is intelligent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(13)}
              data-index="13"
              className="max-w-3xl mb-10 md:mb-14"
              style={getStyle(13)}
            >
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6 md:mb-8">
                Without coordination and optimisation, distributed systems cannot reach their full potential.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light mb-8 md:mb-10">
                Davwo Energy enables:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  ref={setRef(14 + index)}
                  data-index={14 + index}
                  style={getStyle(14 + index, 200)}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-sm bg-gray-900">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-800 font-light leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(18)}
              data-index="18"
              className="max-w-3xl mb-10 md:mb-14"
              style={getStyle(18)}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8">
                Platform Overview
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-8 md:mb-10">
                A multi-layered infrastructure system powering intelligent energy networks:
              </p>
            </div>

            <div className="space-y-4 md:space-y-5 max-w-3xl">
              {platformLayers.map((layer, index) => (
                <div 
                  key={index}
                  ref={setRef(19 + index)}
                  data-index={19 + index}
                  style={getStyle(19 + index, 200)}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-sm bg-gray-900">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-800 font-light leading-relaxed">
                    {layer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Status Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(23)}
              data-index="23"
              className="max-w-3xl"
              style={getStyle(23)}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8">
                Development Status
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4 md:mb-6">
                Davwo Energy is in the architecture and early development phase, aligning research, technology, and ecosystem partnerships.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light">
                <span className="font-medium">Initial deployment:</span> UK and EU — 2027
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(24)}
              data-index="24"
              className="max-w-3xl mx-auto text-center"
              style={getStyle(24)}
            >
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light">
                We believe energy systems will become autonomous, intelligent, and fully interconnected — and we are building the infrastructure to make that possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
