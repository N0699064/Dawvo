import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
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
    // Mock form submission
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
      <section className="pt-64 pb-20 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="px-16 py-20 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs text-gray-500 tracking-widest mb-6 uppercase font-light">
                Contact Us
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
                Let's discuss your energy future
              </h1>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Get in touch with our team to learn how DAVVO Energy can transform your distributed energy infrastructure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-lg mb-4">
                  <Mail className="h-6 w-6 text-[#2E7D32]" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@davvoenergy.com</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-lg mb-4">
                  <Phone className="h-6 w-6 text-[#2E7D32]" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-lg mb-4">
                  <MapPin className="h-6 w-6 text-[#2E7D32]" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Global Operations</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border border-gray-200">
              <CardContent className="p-10">
                <h2 className="text-3xl font-light text-gray-900 mb-8">Send us a message</h2>
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
                    className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-6 rounded-md text-base transition-all duration-300"
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