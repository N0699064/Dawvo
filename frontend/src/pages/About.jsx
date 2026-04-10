import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
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
      <section className="pt-72 pb-20 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="px-16 py-20">
            <div className="max-w-2xl">
              <p className="text-xs text-gray-500 tracking-widest mb-6 uppercase font-light">
                About DAVVO Energy
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
                Pioneering the future of clean energy
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-6 font-light">
                DAVVO Energy is at the forefront of AI-driven energy optimization, helping organizations worldwide transform their distributed energy resources into intelligent, resilient, and sustainable infrastructure.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Founded on the principle that clean energy should be accessible, efficient, and scalable, we combine cutting-edge artificial intelligence with deep energy sector expertise to deliver solutions that make a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-none bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;