import React from 'react';
import { ArrowRight, Zap, TrendingUp, Shield, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Generate',
      description: 'AI-powered energy optimization that analyzes and generates solutions tailored to your distributed energy resources.'
    },
    {
      icon: TrendingUp,
      title: 'Optimize',
      description: 'Our technology continuously optimizes energy performance, matching supply with demand in real-time.'
    },
    {
      icon: Shield,
      title: 'Enhance',
      description: 'Improve grid resilience and reliability with intelligent monitoring and predictive maintenance.'
    },
    {
      icon: Globe,
      title: 'Scale',
      description: 'Deploy scalable clean infrastructure solutions that grow with your energy needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-64 pb-20 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="px-16 py-20">
            <div className="max-w-2xl">
              <p className="text-xs text-gray-500 tracking-widest mb-6 uppercase font-light">
                Climate AI Optimisation Infrastructure
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
                AI-driven optimisation for distributed energy performance, resilience, and scalable clean infrastructure.
              </h1>
              <p className="text-base text-gray-600 mb-10 leading-relaxed font-light">
                DAVVO Energy builds infrastructure-grade climate AI systems that optimise distributed energy assets, enhance grid resilience, and accelerate clean energy integration.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-6 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Explore the Platform
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-900 hover:bg-gray-50 text-gray-900 px-8 py-6 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              DAVVO elevates your energy infrastructure with intelligent optimization
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Using AI technology, our platform analyzes your distributed energy resources and automatically generates optimization strategies that complement your existing infrastructure, enhancing performance, resilience, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-none bg-gray-50 hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-10">
                    <div className="mb-6 inline-flex p-4 bg-white rounded-lg group-hover:bg-[#2E7D32] transition-colors duration-300">
                      <Icon className="h-8 w-8 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-6">
              "The quality of optimization is exceptional. The platform is intuitive. The results speak for themselves in improved efficiency and reduced costs."
            </blockquote>
            <p className="text-sm text-gray-500 tracking-wide uppercase">
              — Energy Innovation Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Ready to transform your energy infrastructure?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Join the future of clean, optimized, and resilient distributed energy systems.
            </p>
            <Button 
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-10 py-6 rounded-md text-base transition-all duration-300"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;