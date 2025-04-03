import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Wrench, 
  Droplet, 
  Zap, 
  Leaf, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Award,
  Heart,
  Users,
  Calendar,
  MapPin,
  Phone,
  MessageCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistSection from '../components/WaitlistSection';

const ServicesPage = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Home className="h-5 w-5" /> },
    { id: 'cleaning', name: 'Home Cleaning', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'plumbing', name: 'Plumbing', icon: <Droplet className="h-5 w-5" /> },
    { id: 'electrical', name: 'Electrical', icon: <Zap className="h-5 w-5" /> },
    { id: 'gardening', name: 'Gardening', icon: <Leaf className="h-5 w-5" /> },
  ];

  const services = [
    {
      id: 1,
      name: 'Deep Cleaning',
      category: 'cleaning',
      description: 'Thorough cleaning of your entire home, including hard-to-reach areas.',
      features: ['Dusting & Vacuuming', 'Bathroom Cleaning', 'Kitchen Cleaning', 'Window Cleaning'],
      duration: '4-6 hours',
      price: '₹2,999',
      rating: 4.8,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3',
      additionalInfo: 'Includes eco-friendly cleaning products'
    },
    {
      id: 2,
      name: 'Plumbing Repair',
      category: 'plumbing',
      description: 'Expert plumbing services for leaks, clogs, and installations.',
      features: ['Leak Detection', 'Pipe Repair', 'Fixture Installation', 'Drain Cleaning'],
      duration: '2-4 hours',
      price: '₹1,999',
      rating: 4.9,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3',
      additionalInfo: '24/7 emergency service available'
    },
    {
      id: 3,
      name: 'Electrical Services',
      category: 'electrical',
      description: 'Professional electrical work for your home or office.',
      features: ['Wiring Installation', 'Switchboard Repair', 'Lighting Setup', 'Safety Checks'],
      duration: '3-5 hours',
      price: '₹2,499',
      rating: 4.7,
      reviews: 85,
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3',
      additionalInfo: 'Licensed and certified electricians'
    },
    {
      id: 4,
      name: 'Garden Maintenance',
      category: 'gardening',
      description: 'Regular upkeep and beautification of your garden space.',
      features: ['Lawn Mowing', 'Plant Care', 'Weed Control', 'Seasonal Planting'],
      duration: '2-3 hours',
      price: '₹1,799',
      rating: 4.6,
      reviews: 75,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      additionalInfo: 'Sustainable gardening practices'
    },
    {
      id: 5,
      name: 'Premium House Cleaning',
      category: 'cleaning',
      description: 'Luxury cleaning service with attention to every detail.',
      features: ['Deep Sanitization', 'Carpet Shampooing', 'Upholstery Cleaning', 'Air Purification'],
      duration: '6-8 hours',
      price: '₹4,999',
      rating: 4.9,
      reviews: 150,
      image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-4.0.3',
      additionalInfo: 'Premium cleaning equipment and products'
    },
    {
      id: 6,
      name: 'Smart Home Installation',
      category: 'electrical',
      description: 'Complete smart home setup and automation services.',
      features: ['Smart Lighting', 'Security Systems', 'Home Automation', 'Voice Control Setup'],
      duration: '4-6 hours',
      price: '₹5,999',
      rating: 4.8,
      reviews: 110,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3',
      additionalInfo: 'Compatible with all major smart home platforms'
    },
    {
      id: 7,
      name: 'Luxury Landscape Design',
      category: 'gardening',
      description: 'Transform your outdoor space into a stunning landscape.',
      features: ['Custom Design', 'Water Features', 'Lighting Design', 'Premium Plants'],
      duration: '8-10 hours',
      price: '₹7,999',
      rating: 4.9,
      reviews: 90,
      image: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.0.3',
      additionalInfo: 'Includes 3D design visualization'
    },
    {
      id: 8,
      name: 'Premium Bathroom Renovation',
      category: 'plumbing',
      description: 'Complete bathroom makeover with premium fixtures.',
      features: ['Luxury Fixtures', 'Tile Work', 'Vanity Installation', 'LED Lighting'],
      duration: '3-4 days',
      price: '₹29,999',
      rating: 4.8,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3',
      additionalInfo: 'Includes design consultation'
    },
    {
      id: 9,
      name: 'Home Theater Setup',
      category: 'electrical',
      description: 'Professional installation of home entertainment systems.',
      features: ['4K Projector Setup', 'Surround Sound', 'Acoustic Treatment', 'Smart Control'],
      duration: '5-7 hours',
      price: '₹8,999',
      rating: 4.7,
      reviews: 80,
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3',
      additionalInfo: 'Includes calibration and testing'
    },
    {
      id: 10,
      name: 'Pool Maintenance',
      category: 'cleaning',
      description: 'Complete pool cleaning and maintenance service.',
      features: ['Water Testing', 'Chemical Balance', 'Filter Cleaning', 'Surface Cleaning'],
      duration: '3-4 hours',
      price: '₹3,499',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3',
      additionalInfo: 'Weekly and monthly plans available'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Verified Professionals',
      description: 'All our service providers are thoroughly vetted and background checked.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'On-Time Service',
      description: 'We value your time and ensure punctual service delivery.'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with a satisfaction guarantee.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Customer Support',
      description: '24/7 support to address any concerns or queries.'
    }
  ];

  const serviceAreas = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'
  ];

  const additionalFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Our professionals have years of experience in their respective fields.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Insured Services',
      description: 'All our services are fully insured for your peace of mind.'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Communication',
      description: 'Stay updated with real-time notifications about your service.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Best Practices',
      description: 'We follow industry-leading standards and best practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a0e]">
      <div className="absolute inset-0 bg-[url('/src/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        <Navbar onShowWaitlist={() => setShowWaitlist(true)} />

        {/* Hero Section */}
        <div className="relative pt-32 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#002812] opacity-50"></div>
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#047857] to-[#059669] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Premium</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Home Services
              </span>
            </h1>
            <p className="text-xl text-green-100/80 max-w-3xl mx-auto mb-12">
              Experience the luxury of professional home services, delivered with excellence and care.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-[#002812]/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/10">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Premium Quality</h3>
                <p className="text-green-100/70 text-sm">Only the finest materials and expert professionals for your home</p>
              </div>
              <div className="bg-[#002812]/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/10">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Time Saving</h3>
                <p className="text-green-100/70 text-sm">Efficient service delivery that respects your schedule</p>
              </div>
              <div className="bg-[#002812]/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/10">
                <Star className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-green-100/70 text-sm">Your happiness is our top priority</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowWaitlist(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Book a Service
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Service Introduction */}
        <div className="py-16 bg-[#002812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Elevate Your Home Experience
            </h2>
            <p className="text-lg text-green-100/80 max-w-3xl mx-auto mb-12">
              From basic maintenance to luxury upgrades, our comprehensive range of services is designed to transform your living space into a haven of comfort and style. Each service is delivered with meticulous attention to detail and a commitment to excellence.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#001a0e] p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-green-100">Expert Professionals</div>
              </div>
              <div className="bg-[#001a0e] p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-green-100">Happy Customers</div>
              </div>
              <div className="bg-[#001a0e] p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-green-100">Satisfaction Rate</div>
              </div>
              <div className="bg-[#001a0e] p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-green-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-16 bg-[#002812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'bg-[#001a0e] text-green-100 hover:bg-[#003920]'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                .map((service) => (
                  <div key={service.id} className="group">
                    <div className="bg-[#002812] rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                      <div className="relative h-48">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001a0e] to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {service.duration}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 text-yellow-400" />
                            <span className="text-green-100">{service.rating}</span>
                            <span className="text-green-100/50">({service.reviews})</span>
                          </div>
                        </div>
                        <p className="text-green-100/70 mb-4">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-green-100">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-green-400 mb-4">
                          {service.additionalInfo}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-green-400">{service.price}</div>
                          <button
                            onClick={() => setShowWaitlist(true)}
                            className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="py-20 bg-[#002812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              What Sets Us
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                Apart
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-[#001a0e] p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="text-green-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-green-100/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Why Choose Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                Premium Services
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#002812] p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="text-green-400 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-green-100/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="py-20 bg-[#002812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Our Service
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                Coverage
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-[#001a0e] p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                  <MapPin className="h-6 w-6 text-green-400 mx-auto mb-4" />
                  <div className="text-green-400 font-medium text-lg">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Services Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#002812] rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    24/7 Emergency Services
                  </span>
                </h2>
                <p className="text-xl text-green-100/80 mb-8">
                  Available round the clock for urgent home service needs
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-green-400" />
                    <span className="text-green-100">Quick Response Time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-green-400" />
                    <span className="text-green-100">Certified Experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-green-400" />
                    <span className="text-green-100">Priority Support</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  Request Emergency Service
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-[#002812]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Premium Home Services
            </h2>
            <p className="text-xl text-green-100/80 mb-8">
              Join thousands of satisfied customers who trust us with their homes
            </p>
            <div className="inline-flex gap-4">
              <button
                onClick={() => setShowWaitlist(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                Get Started
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Footer />

        {/* Waitlist Modal */}
        {showWaitlist && <WaitlistSection onClose={() => setShowWaitlist(false)} />}
      </div>
    </div>
  );
};

export default ServicesPage; 