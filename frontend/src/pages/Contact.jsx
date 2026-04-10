import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting DAVVO Energy. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-20 px-8">
        <div className="h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-8 mb-16">
            <div className="max-w-3xl">
              <p 
                className="text-xs text-gray-400 tracking-[0.2em] mb-6 uppercase font-light transition-all duration-1000"
                style={getVisibility(0)}
              >
                Contact Us
              </p>
              <h1 
                className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8 transition-all duration-1000"
                style={getVisibility(150)}
              >
                Let's discuss your energy future
              </h1>
              <p 
                className="text-base text-gray-600 leading-relaxed font-light transition-all duration-1000"
                style={getVisibility(300)}
              >
                Get in touch with our team to learn how DAVVO Energy can transform your distributed energy infrastructure.
              </p>
            </div>
          </div>

          <div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 px-8 transition-all duration-1000"
            style={getVisibility(500)}
          >
            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-lg mb-4">
                  <Mail className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600 font-light">info@davvoenergy.com</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-lg mb-4">
                  <Phone className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-sm text-gray-600 font-light">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-lg mb-4">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Location</h3>
                <p className="text-sm text-gray-600 font-light">Global Operations</p>
              </CardContent>
            </Card>
          </div>

          <div 
            className="max-w-2xl mx-auto px-8 transition-all duration-1000"
            style={getVisibility(700)}
          >
            <Card className="border border-gray-200">
              <CardContent className="p-10">
                <h2 className="text-2xl font-light text-gray-900 mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;