import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
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
      <section className="pt-20 pb-20 px-8">
        <div className="h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div className="max-w-3xl">
              <p 
                className="text-xs text-gray-500 tracking-[0.2em] mb-6 uppercase font-light transition-all duration-600"
                style={getVisibility(0, 0)}
                data-testid="about-label"
              >
                About Davwo Energy
              </p>
              <h1 
                className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8 transition-all duration-600"
                style={getVisibility(150, 1)}
                data-testid="about-heading"
              >
                Building Climate AI Infrastructure for the Future of Clean Energy
              </h1>
              <p 
                className="text-base text-gray-800 leading-relaxed mb-6 font-light transition-all duration-600"
                style={getVisibility(300, 2)}
              >
                Davwo Energy is developing a Climate AI Optimisation Infrastructure platform designed to improve how distributed renewable energy systems are monitored, coordinated, and optimised.
              </p>
              <p 
                className="text-base text-gray-800 leading-relaxed mb-6 font-light transition-all duration-600"
                style={getVisibility(350, 3)}
              >
                As renewable energy adoption accelerates globally, energy systems are becoming increasingly decentralised and complex. Technologies such as solar energy, battery storage, and electric vehicle charging networks are expanding rapidly, requiring intelligent digital infrastructure to operate efficiently within modern energy ecosystems.
              </p>
              <p 
                className="text-base text-gray-800 leading-relaxed mb-6 font-light transition-all duration-600"
                style={getVisibility(400, 4)}
              >
                Davwo Energy aims to address this challenge by developing a platform that integrates real-time monitoring, advanced data analytics, artificial intelligence, and distributed energy coordination to support more efficient, resilient, and intelligent clean energy systems.
              </p>
              <p 
                className="text-base text-gray-800 leading-relaxed font-light transition-all duration-600"
                style={getVisibility(450, 5)}
              >
                Our focus is on building infrastructure that enables renewable energy technologies not only to exist, but to work together intelligently at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="max-w-3xl transition-all duration-600"
              style={getVisibility(600, 6)}
            >
              <h2 
                className="text-2xl font-light text-gray-900 mb-6"
                data-testid="mission-heading"
              >
                Our Mission
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light">
                To develop intelligent digital infrastructure that enables the coordination, optimisation, and scalability of distributed renewable energy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="transition-all duration-600"
              style={getVisibility(800, 7)}
            >
              <h2 
                className="text-2xl font-light text-gray-900 mb-4"
                data-testid="approach-heading"
              >
                Our Approach
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-4">
                Davwo Energy is designed as a multi-layered digital infrastructure platform that supports the integration and optimisation of distributed energy technologies.
              </p>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-12">
                Our approach focuses on four core components:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approachItems.map((item, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg"
                  style={getVisibility(900 + index * 100, 8 + index)}
                  data-testid={`approach-card-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="w-8 h-1 bg-gray-900 mb-6"></div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-light">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Davwo Story */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="max-w-3xl transition-all duration-600"
              style={getVisibility(1400, 12)}
            >
              <h2 
                className="text-2xl font-light text-gray-900 mb-6"
                data-testid="story-heading"
              >
                The Davwo Story
              </h2>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-6">
                The name Davwo originates from the Urhobo language spoken in Oghara, Delta State, Nigeria, where the word means "Taste."
              </p>
              <p className="text-base text-gray-800 leading-relaxed font-light mb-6">
                Davwo Energy represents the idea of enabling people and communities to experience the benefits of clean and sustainable energy — a true taste of clean energy.
              </p>
              <p className="text-base text-gray-800 leading-relaxed font-light">
                This reflects our belief that the global transition to renewable energy should not only be technological, but also accessible, intelligent, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <h2 
              className="text-2xl font-light text-gray-900 mb-16 transition-all duration-600"
              style={getVisibility(1600, 13)}
              data-testid="team-heading"
            >
              Founding Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Founder */}
              <div 
                className="transition-all duration-600"
                style={getVisibility(1700, 14)}
                data-testid="founder-card"
              >
                <div className="mb-8">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_28e960a8-a78e-435a-ac6d-9ef32f1cc9c1/artifacts/r9n4qt9f_WhatsApp%20Image%202026-04-06%20at%2013.11.13.jpeg"
                      alt="Awikpe Anirejoritse Collins"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  Awikpe Anirejoritse Collins
                </h3>
                <p className="text-sm text-gray-500 font-light tracking-wide uppercase mb-6">
                  Founder & CEO
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Awikpe Anirejoritse Collins is the founder of Davwo Energy and holds a Master's degree in International Relations from the University of Hertfordshire. His work focuses on climate innovation, energy transition, and the development of intelligent digital infrastructure for clean energy systems.
                </p>
              </div>

              {/* Co-Founder */}
              <div 
                className="transition-all duration-600"
                style={getVisibility(1800, 15)}
                data-testid="cofounder-card"
              >
                <div className="mb-8">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_28e960a8-a78e-435a-ac6d-9ef32f1cc9c1/artifacts/xn01c8f0_WhatsApp%20Image%202026-04-06%20at%2013.11.32.jpeg"
                      alt="Salma (Shamma) Chentite"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  Salma (Shamma) Chentite
                </h3>
                <p className="text-sm text-gray-500 font-light tracking-wide uppercase mb-6">
                  Co-Founder & Chief Operating Officer
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Salma Chentite is an Environmental Advisor at Costain Group PLC and an Environmental Science student at Brunel University London. Her work focuses on sustainable infrastructure, environmental impact assessment, and advancing environmentally responsible practices in large-scale infrastructure projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div 
              className="max-w-3xl transition-all duration-600"
              style={getVisibility(2000, 16)}
            >
              <h2 
                className="text-2xl font-light mb-6"
                data-testid="looking-ahead-heading"
              >
                Looking Ahead
              </h2>
              <p className="text-base text-gray-300 leading-relaxed font-light mb-6">
                Davwo Energy is focused on developing the next generation of Climate AI infrastructure to support distributed renewable energy systems.
              </p>
              <p className="text-base text-gray-300 leading-relaxed font-light">
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
