import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
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

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in AI-driven energy optimization'
    },
    {
      title: 'Sustainability',
      description: 'Committed to a cleaner, greener energy future'
    },
    {
      title: 'Excellence',
      description: 'Delivering world-class solutions and service'
    },
    {
      title: 'Collaboration',
      description: 'Working together towards shared energy goals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-20 px-8">
        <div className="h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8">
            <div className="max-w-3xl">
              <p 
                className="text-xs text-gray-400 tracking-[0.2em] mb-6 uppercase font-light transition-all duration-1000"
                style={getVisibility(0)}
              >
                About DAVVO Energy
              </p>
              <h1 
                className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8 transition-all duration-1000"
                style={getVisibility(150)}
              >
                Pioneering the future of clean energy
              </h1>
              <p 
                className="text-base text-gray-600 leading-relaxed mb-6 font-light transition-all duration-1000"
                style={getVisibility(300)}
              >
                DAVVO Energy is at the forefront of AI-driven energy optimization, helping organizations worldwide transform their distributed energy resources into intelligent, resilient, and sustainable infrastructure.
              </p>
              <p 
                className="text-base text-gray-600 leading-relaxed font-light transition-all duration-1000"
                style={getVisibility(400)}
              >
                Founded on the principle that clean energy should be accessible, efficient, and scalable, we combine cutting-edge artificial intelligence with deep energy sector expertise to deliver solutions that make a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="text-2xl font-light text-gray-900 mb-12 text-center transition-all duration-1000"
            style={getVisibility(600)}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="transition-all duration-1000"
                style={getVisibility(800 + index * 100)}
              >
                <Card className="border-none shadow-none bg-white hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-sm text-gray-600 font-light">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;