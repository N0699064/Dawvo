import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const { toast } = useToast();
  const { setRef, getStyle } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-8 md:pt-20 pb-12 md:pb-20 px-4 md:px-8">
        <div className="h-2 md:h-8"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-0 md:px-8 mb-10 md:mb-16">
            <div className="max-w-3xl">
              <p 
                ref={setRef(0)} data-index="0"
                className="text-xs text-gray-500 tracking-[0.2em] mb-4 md:mb-6 uppercase font-light"
                style={getStyle(0)}
              >
                Contact Us
              </p>
              <h1 
                ref={setRef(1)} data-index="1"
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6 md:mb-8"
                style={getStyle(1, 150)}
              >
                Let's discuss your energy future
              </h1>
              <p 
                ref={setRef(2)} data-index="2"
                className="text-sm md:text-base text-gray-800 leading-relaxed font-light"
                style={getStyle(2, 300)}
              >
                Get in touch with our team to learn how DAVVO Energy can transform your distributed energy infrastructure.
              </p>
            </div>
          </div>

          <div 
            ref={setRef(3)} data-index="3"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16 px-0 md:px-8"
            style={getStyle(3)}
          >
            <Card className="border border-gray-200">
              <CardContent className="p-5 md:p-8 text-center">
                <div className="inline-flex p-3 md:p-4 bg-gray-50 rounded-lg mb-3 md:mb-4">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Email</h3>
                <p className="text-xs md:text-sm text-gray-700 font-light">info@davvoenergy.com</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-5 md:p-8 text-center">
                <div className="inline-flex p-3 md:p-4 bg-gray-50 rounded-lg mb-3 md:mb-4">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Phone</h3>
                <p className="text-xs md:text-sm text-gray-700 font-light">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-5 md:p-8 text-center">
                <div className="inline-flex p-3 md:p-4 bg-gray-50 rounded-lg mb-3 md:mb-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Location</h3>
                <p className="text-xs md:text-sm text-gray-700 font-light">Global Operations</p>
              </CardContent>
            </Card>
          </div>

          <div 
            ref={setRef(4)} data-index="4"
            className="max-w-2xl mx-auto px-0 md:px-8"
            style={getStyle(4)}
          >
            <Card className="border border-gray-200">
              <CardContent className="p-5 md:p-10">
                <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-800 mb-1.5 md:mb-2">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-800 mb-1.5 md:mb-2">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full" placeholder="your.email@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-800 mb-1.5 md:mb-2">
                      Company
                    </label>
                    <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="w-full" placeholder="Your company name" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-800 mb-1.5 md:mb-2">
                      Message *
                    </label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} className="w-full min-h-[120px] md:min-h-[150px]" placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white py-5 md:py-6 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
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
