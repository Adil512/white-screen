'use client';
import { useState } from 'react';
import { translations } from '@/translations';
import { 
  Users, 
  Target, 
  Award, 
  Globe2, 
  Monitor, 
  Camera, 
  Laptop, 
  Heart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

export default function About({ currentLang = 'en' }) {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: "1M+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "150+", label: "Countries", icon: <Globe2 className="w-6 h-6" /> },
    { number: "4.9", label: "User Rating", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Heart className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every pixel we display, ensuring the highest quality for our users.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Continuously improving our platform to meet the evolving needs of professionals worldwide.",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Accessibility",
      description: "Making professional tools accessible to everyone, anywhere, anytime.",
      icon: <Globe2 className="w-8 h-8" />
    },
    {
      title: "User-Centric",
      description: "Every feature and update is designed with our users' needs in mind.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const industries = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "IT Professionals",
      description: "Monitor testing and calibration tools for tech experts.",
      features: ["Dead Pixel Detection", "Color Calibration", "Screen Testing"]
    },
    {
      icon: <Camera className="w-12 h-12 text-green-600" />,
      title: "Photographers",
      description: "Perfect lighting solutions for professional photography.",
      features: ["Product Photography", "Studio Lighting", "Background Solutions"]
    },
    {
      icon: <Laptop className="w-12 h-12 text-purple-600" />,
      title: "Content Creators",
      description: "Professional backgrounds for video content and streaming.",
      features: ["Virtual Backgrounds", "Streaming Setup", "Professional Lighting"]
    }
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Sarah Chen",
      role: "Head of Development",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Michael Ross",
      role: "UX Director",
      image: "/api/placeholder/120/120"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Mission to Perfect<br />Digital Display
            </h1>
            <p className="text-xl opacity-90">
              Empowering professionals worldwide with precise color display solutions
            </p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Journey to Excellence
                </h2>
                <p className="text-gray-600 mb-6">
                  Started in 2020, White Screen has grown from a simple tool to a comprehensive platform 
                  trusted by professionals worldwide. Our commitment to quality and user experience has 
                  made us the go-to solution for display testing and color management.
                </p>
                <p className="text-gray-600 mb-8">
                  Today, we serve millions of users across 150+ countries, providing essential tools 
                  for IT professionals, photographers, and content creators.
                </p>
                <div className="flex items-center text-blue-600 font-semibold cursor-pointer group">
                  Learn more about our technology
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map((item) => (
                  <div key={item} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={`/api/placeholder/300/300`}
                      alt="About us image"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-6">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <ul className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience why millions of professionals trust White Screen
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:-translate-y-1 duration-200">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}