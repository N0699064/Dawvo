import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { setRef, getStyle } = useScrollReveal();

  const approachItems = [
    {
      title: 'Monitoring & Analytics',
      description: 'Real-time tracking of energy generation, consumption, and system performance across distributed energy systems.'
    },
    {
      title: 'Climate AI Optimisation',
      description: 'Application of artificial intelligence to analyse energy data, improve efficiency, and support predictive energy management.'
    },
    {
      title: 'Distributed Energy Coordination',
      description: 'Integration of renewable energy technologies such as solar systems, battery storage, and electric vehicle charging networks within a coordinated infrastructure.'
    },
    {
      title: 'Clean Energy Marketplace',
      description: 'A digital platform connecting users, technology providers, and innovators within the clean energy ecosystem.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-8 md:pt-20 pb-12 md:pb-20 px-4 md:px-8">
        <div className="h-2 md:h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div className="max-w-3xl">
              <p 
                ref={setRef(0)} data-index="0"
                className="text-xs text-gray-500 tracking-[0.2em] mb-4 md:mb-6 uppercase font-light"
                style={getStyle(0)}
                data-testid="about-label"
              >
                About Davwo Energy
              </p>
              <h1 
                ref={setRef(1)} data-index="1"
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8"
                style={getStyle(1, 150)}
                data-testid="about-heading"
              >
                Building Climate AI Infrastructure for the Future of Clean Energy
              </h1>
              <p 
                ref={setRef(2)} data-index="2"
                className="text-sm md:text-base text-gray-800 leading-relaxed mb-4 md:mb-6 font-light"
                style={getStyle(2, 300)}
              >
                Davwo Energy is developing a Climate AI Optimisation Infrastructure platform designed to improve how distributed renewable energy systems are monitored, coordinated, and optimised.
              </p>
              <p 
                ref={setRef(3)} data-index="3"
                className="text-sm md:text-base text-gray-800 leading-relaxed mb-4 md:mb-6 font-light"
                style={getStyle(3, 350)}
              >
                As renewable energy adoption accelerates globally, energy systems are becoming increasingly decentralised and complex. Technologies such as solar energy, battery storage, and electric vehicle charging networks are expanding rapidly, requiring intelligent digital infrastructure to operate efficiently within modern energy ecosystems.
              </p>
              <p 
                ref={setRef(4)} data-index="4"
                className="text-sm md:text-base text-gray-800 leading-relaxed mb-4 md:mb-6 font-light"
                style={getStyle(4, 400)}
              >
                Davwo Energy aims to address this challenge by developing a platform that integrates real-time monitoring, advanced data analytics, artificial intelligence, and distributed energy coordination to support more efficient, resilient, and intelligent clean energy systems.
              </p>
              <p 
                ref={setRef(5)} data-index="5"
                className="text-sm md:text-base text-gray-800 leading-relaxed font-light"
                style={getStyle(5, 450)}
              >
                Our focus is on building infrastructure that enables renewable energy technologies not only to exist, but to work together intelligently at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(6)} data-index="6"
              className="max-w-3xl"
              style={getStyle(6)}
            >
              <h2 
                className="text-xl md:text-2xl font-light text-gray-900 mb-4 md:mb-6"
                data-testid="mission-heading"
              >
                Our Mission
              </h2>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light">
                To develop intelligent digital infrastructure that enables the coordination, optimisation, and scalability of distributed renewable energy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(7)} data-index="7"
              style={getStyle(7)}
            >
              <h2 
                className="text-xl md:text-2xl font-light text-gray-900 mb-3 md:mb-4"
                data-testid="approach-heading"
              >
                Our Approach
              </h2>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-3 md:mb-4">
                Davwo Energy is designed as a multi-layered digital infrastructure platform that supports the integration and optimisation of distributed energy technologies.
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-8 md:mb-12">
                Our approach focuses on four core components:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {approachItems.map((item, index) => (
                <div
                  key={index}
                  ref={setRef(8 + index)}
                  data-index={8 + index}
                  style={getStyle(8 + index)}
                >
                  <Card
                    className="border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg h-full"
                    data-testid={`approach-card-${index}`}
                  >
                    <CardContent className="p-5 md:p-8">
                      <div className="w-8 h-1 bg-gray-900 mb-4 md:mb-6"></div>
                      <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Davwo Story */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(12)} data-index="12"
              className="max-w-3xl"
              style={getStyle(12)}
            >
              <h2 
                className="text-xl md:text-2xl font-light text-gray-900 mb-4 md:mb-6"
                data-testid="story-heading"
              >
                The Davwo Story
              </h2>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-4 md:mb-6">
                The name Davwo originates from the Urhobo language spoken in Oghara, Delta State, Nigeria, where the word means "Taste."
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-4 md:mb-6">
                Davwo Energy represents the idea of enabling people and communities to experience the benefits of clean and sustainable energy — a true taste of clean energy.
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light">
                This reflects our belief that the global transition to renewable energy should not only be technological, but also accessible, intelligent, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <h2 
              ref={setRef(13)} data-index="13"
              className="text-xl md:text-2xl font-light text-gray-900 mb-10 md:mb-16"
              style={getStyle(13)}
              data-testid="team-heading"
            >
              Founding Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Founder */}
              <div 
                ref={setRef(14)} data-index="14"
                style={getStyle(14)}
                data-testid="founder-card"
              >
                <div className="mb-4 md:mb-6">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_28e960a8-a78e-435a-ac6d-9ef32f1cc9c1/artifacts/r9n4qt9f_WhatsApp%20Image%202026-04-06%20at%2013.11.13.jpeg"
                      alt="Awikpe Anirejoritse Collins"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1">
                  Awikpe Anirejoritse Collins
                </h3>
                <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-3 md:mb-4">
                  Founder & CEO
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                  Awikpe Anirejoritse Collins is the founder of Davwo Energy and holds a Master's degree in International Relations from the University of Hertfordshire. His work focuses on climate innovation, energy transition, and the development of intelligent digital infrastructure for clean energy systems.
                </p>
              </div>

              {/* Co-Founder */}
              <div 
                ref={setRef(15)} data-index="15"
                style={getStyle(15)}
                data-testid="cofounder-card"
              >
                <div className="mb-4 md:mb-6">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_28e960a8-a78e-435a-ac6d-9ef32f1cc9c1/artifacts/xn01c8f0_WhatsApp%20Image%202026-04-06%20at%2013.11.32.jpeg"
                      alt="Salma (Shamma) Chentite"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1">
                  Salma (Shamma) Chentite
                </h3>
                <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-3 md:mb-4">
                  Co-Founder & Chief Operating Officer
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                  Salma Chentite is an Environmental Advisor at Costain Group PLC and an Environmental Science student at Brunel University London. Her work focuses on sustainable infrastructure, environmental impact assessment, and advancing environmentally responsible practices in large-scale infrastructure projects.
                </p>
              </div>

              {/* Lead Technical Architect */}
              <div 
                ref={setRef(16)} data-index="16"
                style={getStyle(16)}
                data-testid="tech-lead-card"
              >
                <div className="mb-4 md:mb-6">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_28e960a8-a78e-435a-ac6d-9ef32f1cc9c1/artifacts/ctcgsl6x_Generated%20Image%20April%2014%2C%202026%20-%2012_33AM.png"
                      alt="Jeff Conrad"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1">
                  Jeff Conrad
                </h3>
                <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-3 md:mb-4">
                  Lead Technical Architect
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                  Jeff Conrad studied Software Engineering at Nottingham Trent University. His expertise spans artificial intelligence, deep learning, and scalable system architecture, driving the technical development of Davwo Energy's Climate AI infrastructure platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8">
            <div 
              ref={setRef(17)} data-index="17"
              className="max-w-3xl"
              style={getStyle(17)}
            >
              <h2 
                className="text-xl md:text-2xl font-light mb-4 md:mb-6"
                data-testid="looking-ahead-heading"
              >
                Looking Ahead
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light mb-4 md:mb-6">
                Davwo Energy is focused on developing the next generation of Climate AI infrastructure to support distributed renewable energy systems.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                Our development programme includes platform development, research exploration, and ecosystem engagement aimed at enabling smarter, more resilient, and more efficient clean energy networks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
