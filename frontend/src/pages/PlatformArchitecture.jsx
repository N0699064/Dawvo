import React, { useEffect, useState } from 'react';
import { Database, Network, Cpu, Cloud, Lock, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

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

  const architectureComponents = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-native architecture built on enterprise-grade infrastructure',
      details: [
        'Multi-region deployment for high availability',
        'Auto-scaling based on demand',
        '99.99% uptime SLA',
        'Disaster recovery and backup systems'
      ]
    },
    {
      icon: Cpu,
      title: 'AI Processing Engine',
      description: 'Advanced machine learning models for real-time energy optimization',
      details: [
        'Deep learning algorithms for pattern recognition',
        'Predictive analytics for demand forecasting',
        'Real-time optimization algorithms',
        'Continuous model improvement'
      ]
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Robust data storage and processing for distributed energy resources',
      details: [
        'Time-series database for energy metrics',
        'Real-time data streaming and processing',
        'Historical data analytics',
        'Data validation and quality assurance'
      ]
    },
    {
      icon: Network,
      title: 'Integration Layer',
      description: 'Seamless connectivity with existing energy management systems',
      details: [
        'RESTful API for third-party integrations',
        'Support for industry-standard protocols',
        'IoT device connectivity',
        'Legacy system compatibility'
      ]
    },
    {
      icon: Lock,
      title: 'Security Framework',
      description: 'Enterprise-grade security protecting your energy data',
      details: [
        'End-to-end encryption',
        'Role-based access control',
        'Compliance with industry standards',
        'Regular security audits'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and reporting capabilities',
      details: [
        'Real-time performance dashboards',
        'Custom reporting and analytics',
        'Alert and notification systems',
        'Performance benchmarking'
      ]
    }
  ];

  const layers = [
    {
      name: 'Presentation Layer',
      description: 'User-friendly dashboards and interfaces for monitoring and control',
      technologies: ['React', 'WebSocket', 'D3.js', 'Responsive Design']
    },
    {
      name: 'Application Layer',
      description: 'Business logic and orchestration for energy optimization',
      technologies: ['FastAPI', 'Microservices', 'Event-Driven Architecture', 'API Gateway']
    },
    {
      name: 'Intelligence Layer',
      description: 'AI/ML models for prediction, optimization, and decision-making',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow']
    },
    {
      name: 'Data Layer',
      description: 'Distributed data storage and real-time processing',
      technologies: ['MongoDB', 'Redis', 'Apache Kafka', 'TimescaleDB']
    },
    {
      name: 'Infrastructure Layer',
      description: 'Cloud infrastructure and DevOps automation',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-8">
        <div className="h-20"></div>
        <div className="max-w-[1600px] mx-auto">
          <div className="px-16 py-20">
            <div className="max-w-2xl">
              <p 
                className="text-xs text-gray-400 tracking-[0.2em] mb-8 uppercase font-light transition-all duration-1000"
                style={getVisibility(0)}
              >
                Platform Architecture
              </p>
              <h1 
                className="text-6xl md:text-7xl font-extralight text-gray-900 leading-[1.1] mb-8 transition-all duration-1000"
                style={getVisibility(150)}
              >
                Built for scale, designed for resilience
              </h1>
              <p 
                className="text-lg text-gray-600 leading-relaxed font-light transition-all duration-1000"
                style={getVisibility(300)}
              >
                Our platform architecture combines cutting-edge technology with proven infrastructure patterns to deliver a robust, scalable solution for distributed energy optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div 
            className="text-center mb-16 transition-all duration-1000"
            style={getVisibility(600)}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Core Components
            </h2>
            <p className="text-lg text-gray-600">
              Six pillars supporting intelligent energy optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <div
                  key={index}
                  className="transition-all duration-1000"
                  style={getVisibility(800 + index * 100)}
                >
                  <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 group h-full">
                    <CardHeader>
                      <div className="mb-4 inline-flex p-3 bg-gray-50 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
                        <Icon className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl font-medium">{component.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{component.description}</p>
                      <ul className="space-y-2">
                        {component.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-gray-500 flex items-start">
                            <span className="text-gray-900 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Layered Architecture */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div 
            className="text-center mb-16 transition-all duration-1000"
            style={getVisibility(1600)}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Layered Architecture
            </h2>
            <p className="text-lg text-gray-600">
              A modular, scalable approach to energy optimization
            </p>
          </div>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <div
                key={index}
                className="transition-all duration-1000"
                style={getVisibility(1800 + index * 100)}
              >
                <Card className="border-l-4 border-l-gray-900 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0 md:flex-1">
                        <h3 className="text-2xl font-medium text-gray-900 mb-2">
                          {layer.name}
                        </h3>
                        <p className="text-gray-600">
                          {layer.description}
                        </p>
                      </div>
                      <div className="md:flex-1 md:ml-8">
                        <div className="flex flex-wrap gap-2">
                          {layer.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8">
        <div 
          className="max-w-[1400px] mx-auto transition-all duration-1000"
          style={getVisibility(2400)}
        >
          <Tabs defaultValue="scalability" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="scalability">Scalability</TabsTrigger>
              <TabsTrigger value="reliability">Reliability</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="scalability" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-light text-gray-900 mb-6">Designed to Scale</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our architecture scales horizontally to handle increasing loads, from single installations to nationwide deployments. Microservices architecture ensures each component can scale independently based on demand.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Auto-scaling based on real-time demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Load balancing across multiple regions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Containerized deployment for rapid scaling</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reliability" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-light text-gray-900 mb-6">Built for Reliability</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  High availability and fault tolerance are core to our design. Redundant systems, automated failover, and continuous monitoring ensure your energy operations never stop.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">99.99% uptime guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Automated backup and disaster recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Real-time health monitoring and alerts</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-light text-gray-900 mb-6">Optimized Performance</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Low-latency processing and efficient resource utilization ensure rapid response times for critical energy decisions. Our platform processes millions of data points per second.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Sub-second response times for critical operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Optimized database queries and caching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Edge computing for reduced latency</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default PlatformArchitecture;