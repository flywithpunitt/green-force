import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Shield, Award, Leaf, Clock, Wrench, CheckCircle, Rocket, Globe, Star, Trophy } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistSection from '../components/WaitlistSection';

const AboutPage = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Expert Providers' },
    { number: '50+', label: 'Cities Covered' },
    { number: '100K+', label: 'Services Completed' },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs and satisfaction in mind."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust & Safety",
      description: "We maintain the highest standards of safety and security in all our services."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and reducing environmental impact."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Reliability",
      description: "Punctual, professional service delivery you can always count on."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Excellence",
      description: "Continuous improvement in our service quality and customer experience."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Building stronger communities through reliable home services."
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with a vision to revolutionize home services.',
      icon: <Rocket className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded to 20+ cities and built a network of 200+ providers.',
      icon: <Globe className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      year: '2022',
      title: 'Tech Innovation',
      description: 'Launched our AI-powered service matching system.',
      icon: <Trophy className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'
    },
    {
      year: '2023',
      title: 'Going Green',
      description: 'Implemented eco-friendly initiatives across all services.',
      icon: <Star className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-[#001a0e]">
      <Navbar onShowWaitlist={() => setShowWaitlist(true)} />

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#002812] opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Transforming</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Home Services
            </span>
          </h1>
          <p className="text-xl text-green-100/80 max-w-3xl mx-auto mb-12">
            We're on a mission to make quality home services accessible, reliable, and sustainable for everyone.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#002812]/50 backdrop-blur-sm border border-green-500/10">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  {stat.number}
                </div>
                <div className="text-green-100/80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-[#002812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-green-100/80 text-lg mb-6">
                To revolutionize the home services industry by providing reliable, high-quality services 
                that make home maintenance effortless for our customers while creating sustainable 
                opportunities for skilled professionals.
              </p>
              <div className="space-y-4">
                {['Quality Assurance', 'Customer Satisfaction', 'Professional Growth', 'Community Impact'].map((item, index) => (
                  <div key={index} className="flex items-center text-green-100">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a0e] to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="h-24 w-24 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#002812] hover:bg-[#003920] transition-colors duration-300">
                <div className="text-green-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-green-100/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Journey Section */}
      <div className="py-20 bg-[#002812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Our Journey of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
              Excellence
            </span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-transparent"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-[#001a0e] rounded-2xl p-8 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-green-500/20">
                            {milestone.icon}
                          </div>
                          <div>
                            <div className="text-green-400 font-medium">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-green-100/70">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>

                  {/* Image */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-green-100/80 mb-8">
            Be part of our mission to transform the home services industry
          </p>
          <div className="inline-flex gap-4">
            <button
              onClick={() => setShowWaitlist(true)}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
            >
              Get Started
            </button>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      {/* Waitlist Modal */}
      {showWaitlist && <WaitlistSection onClose={() => setShowWaitlist(false)} />}
    </div>
  );
};

export default AboutPage; 