import React, { useState, useEffect } from 'react';
import { Star, Clock, Shield, Award, ThumbsUp, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚰' },
    { id: 'electrical', name: 'Electrical', icon: '⚡' },
    { id: 'gardening', name: 'Gardening', icon: '🌱' },
    { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' }
  ];

  const services = [
    {
      id: 1,
      name: 'Deep Home Cleaning',
      category: 'cleaning',
      description: 'Comprehensive cleaning service that covers every corner of your home',
      features: [
        'Deep carpet cleaning',
        'Window washing',
        'Bathroom sanitization',
        'Kitchen deep cleaning',
        'Dusting and vacuuming'
      ],
      duration: '4-6 hours',
      price: '₹1,499',
      rating: 4.9,
      reviews: 234,
      image: '🧹',
      popular: true
    },
    {
      id: 2,
      name: 'Emergency Plumbing',
      category: 'plumbing',
      description: '24/7 emergency plumbing services for all your urgent needs',
      features: [
        'Leak repair',
        'Drain cleaning',
        'Pipe replacement',
        'Water heater repair',
        'Sewer line services'
      ],
      duration: '1-3 hours',
      price: '₹999',
      rating: 4.8,
      reviews: 312,
      image: '🚰',
      popular: true
    },
    {
      id: 3,
      name: 'Electrical Maintenance',
      category: 'electrical',
      description: 'Professional electrical services for your home and office',
      features: [
        'Wiring installation',
        'Circuit breaker repair',
        'Lighting installation',
        'Safety inspections',
        'Emergency repairs'
      ],
      duration: '2-4 hours',
      price: '₹1,299',
      rating: 4.7,
      reviews: 278,
      image: '⚡'
    },
    {
      id: 4,
      name: 'Garden Design & Maintenance',
      category: 'gardening',
      description: 'Transform your outdoor space with expert gardening services',
      features: [
        'Landscape design',
        'Plant care',
        'Lawn maintenance',
        'Tree trimming',
        'Irrigation systems'
      ],
      duration: '3-5 hours',
      price: '₹1,999',
      rating: 4.9,
      reviews: 189,
      image: '🌱'
    },
    {
      id: 5,
      name: 'Personal Chef Service',
      category: 'cooking',
      description: 'Professional chefs bringing gourmet experiences to your home',
      features: [
        'Custom menu planning',
        'Special dietary accommodations',
        'Event catering',
        'Cooking classes',
        'Meal prep services'
      ],
      duration: '4-8 hours',
      price: '₹2,499',
      rating: 4.9,
      reviews: 156,
      image: '👨‍🍳'
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  const stats = [
    { icon: <Shield className="h-6 w-6" />, label: 'Service Guarantee', value: '100%' },
    { icon: <ThumbsUp className="h-6 w-6" />, label: 'Customer Satisfaction', value: '98%' },
    { icon: <Award className="h-6 w-6" />, label: 'Expert Professionals', value: '500+' }
  ];

  const benefits = [
    {
      title: 'Professional Quality',
      description: 'Our service providers are thoroughly vetted and trained to deliver excellence',
      icon: <CheckCircle2 className="h-8 w-8" />
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book services at your convenience with our flexible timing options',
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden charges or surprises',
      icon: <Sparkles className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a0e]">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#001a0e]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-green-500 text-white p-2 rounded-lg">
                <span role="img" aria-label="logo" className="text-xl">🌱</span>
              </div>
              <span className="text-white font-bold text-xl">GreenForce</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Providers', path: '/providers' },
                { name: 'About', path: '/about' }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="relative px-4 py-2 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center px-6 py-2.5 text-sm font-medium text-green-400 hover:text-white border border-green-500 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105">
                Join Waitlist
              </button>
              <button className="px-6 py-2.5 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-900/20 hover:shadow-green-900/30">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 pt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Premium <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our comprehensive range of professional services designed to meet all your home maintenance needs
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#003920] rounded-xl p-6 border border-green-900">
                  <div className="flex items-center justify-center text-green-400 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#003920] rounded-xl p-6 border border-green-900">
                <div className="text-green-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white'
                    : 'bg-[#003920] text-gray-300 hover:bg-green-900'
                } transition duration-300`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#003920] rounded-2xl p-6 border border-green-900 hover:shadow-xl hover:shadow-green-900/20 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                    {service.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-green-400" />
                        {service.duration}
                      </div>
                      <div className="text-green-400 font-semibold">
                        Starting from {service.price}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Features:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-green-900/50 text-green-400 text-xs px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-green-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-400 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Service?</h2>
            <p className="text-gray-300 mb-6">
              Contact us for personalized service packages tailored to your specific requirements
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-400 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 