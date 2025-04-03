import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaitlistSection from '../components/WaitlistSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone } from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

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

  const coreServices = [
    {
      name: 'Home Cleaning',
      description: 'Comprehensive cleaning solutions for every space in your home',
      icon: '🧹',
      background: 'bg-gradient-to-br from-green-600 to-green-900'
    },
    {
      name: 'Home Cooking',
      description: 'Expert chefs bringing gourmet experiences to your dining table',
      icon: '👨‍🍳',
      background: 'bg-gradient-to-br from-green-600 to-green-900'
    },
    {
      name: 'Plumbing Services',
      description: 'Fast, reliable solutions for all your plumbing emergencies',
      icon: '🚿',
      background: 'bg-gradient-to-br from-green-600 to-green-900'
    },
    {
      name: 'Electrical Services',
      description: 'Safe and certified electrical repairs and installations',
      icon: '⚡',
      background: 'bg-gradient-to-br from-green-600 to-green-900'
    },
    {
      name: 'Landscaping',
      description: 'Transform your outdoor spaces with expert gardening services',
      icon: '🌱',
      background: 'bg-gradient-to-br from-green-600 to-green-900'
    },
    {
      name: 'Home Renovation',
      description: 'Complete makeovers and remodeling for your living spaces',
      icon: '🏗️',
      background: 'bg-gradient-to-br from-green-600 to-green-900'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Working Professional',
      quote: 'HomeServices has completely transformed how I manage home maintenance. Their attention to detail is unmatched!',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Busy Entrepreneur',
      quote: 'The platform\'s matching algorithm is incredible. I always get the perfect service provider for my specific needs.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Homemaker',
      quote: 'Finally, a solution that makes home maintenance simple, transparent, and reliable. Their cleaning service is exceptional.',
      avatar: '👩‍🍳',
      rating: 4
    },
    {
      name: 'David Wilson',
      role: 'Remote Worker',
      quote: 'Having reliable home services during my work hours has been a game-changer. Professional and punctual every time.',
      avatar: '👨‍💼',
      rating: 5
    }
  ];

  const platformFeatures = [
    {
      title: 'Interactive Dashboard',
      description: 'Your personalized hub for service bookings, history, and recommendations',
      icon: '📊',
      color: 'bg-gradient-to-r from-green-600 to-green-800'
    },
    {
      title: 'AI-Powered Booking',
      description: 'Smart scheduling with real-time availability and tailored recommendations',
      icon: '🤖',
      color: 'bg-gradient-to-r from-green-600 to-green-800'
    },
    {
      title: 'Secure Transactions',
      description: 'Multiple payment options, transparent pricing, and service guarantees',
      icon: '💳',
      color: 'bg-gradient-to-r from-green-600 to-green-800'
    },
    {
      title: 'Live Tracking',
      description: 'Real-time updates, GPS tracking, and seamless communication',
      icon: '📍',
      color: 'bg-gradient-to-r from-green-600 to-green-800'
    }
  ];

  const emergencyServices = [
    { name: '24/7 Plumbing', icon: '🚰' },
    { name: 'Emergency Electrical', icon: '🔌' },
    { name: 'Locksmith Services', icon: '🔑' },
    { name: 'HVAC Emergencies', icon: '❄️' }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
    ));
  };
  
  const handleShowWaitlist = () => {
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar onShowWaitlist={() => setShowWaitlist(true)} />
      {showWaitlist && <WaitlistSection onClose={() => setShowWaitlist(false)} />}
      
      {/* Hero Section with Enhanced Design */}
      <div className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-[#002812] pt-16 sm:pt-32 pb-12 sm:pb-24">
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjUgMzVsOC44NCA4Ljg0YTMgMyAwIDAxMCA0LjI0TDY1IDU2LjkyIDU2LjE2IDQ4LjA4YTMgMyAwIDAxMC00LjI0TDY1IDM1em0tMjUgMGw4Ljg0IDguODRhMyAzIDAgMDEwIDQuMjRMNDAgNTYuOTJsLTguODQtOC44NGEzIDMgMCAwMTAtNC4yNEw0MCAzNXptLTI1IDBsOC44NCA4Ljg0YTMgMyAwIDAxMCA0LjI0TDE1IDU2LjkyIDYuMTYgNDguMDhhMyAzIDAgMDEwLTQuMjRMMTUgMzV6IiBmaWxsPSIjMDA0NzFiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-15 bg-repeat bg-[length:80px_80px]"></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-8 relative z-10 w-full max-w-7xl">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main heading with enhanced typography */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-3 sm:mb-6 leading-tight">
              <span className="text-white block sm:inline">Nurture.</span>
              <span className="text-white block sm:inline">Grow.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 block sm:inline">
                Thrive.
              </span>
            </h1>

            {/* Enhanced subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Expert services delivered at your doorstep, with 
              <span className="text-green-400"> uncompromising quality </span>
              and
              <span className="text-green-400"> reliability</span>
            </p>

            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleShowWaitlist}
                className="w-full sm:w-auto px-6 sm:px-12 py-3.5 sm:py-5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
              >
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-6 sm:px-12 py-3.5 sm:py-5 bg-transparent hover:bg-green-900/30 border-2 border-green-500 text-white font-bold rounded-full transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
              >
                <span>Our Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-green-400 mb-1">500+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Trusted Partners</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-gray-400 text-xs sm:text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-green-400 mb-1">98%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-24 sm:py-32 bg-[#001a0e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjVsNi42NCA2LjY0YTIgMiAwIDAxMCAyLjgzbC02LjY0IDYuNjQtNi42NC02LjY0YTIgMiAwIDAxMC0yLjgzTDUwIDI1em0tMjAgMGw2LjY0IDYuNjRhMiAyIDAgMDEwIDIuODNMMzAgNDEuMTFsLTYuNjQtNi42NGEyIDIgMCAwMTAtMi44M0wzMCAyNXptLTIwIDBsNi42NCA2LjY0YTIgMiAwIDAxMCAyLjgzTDEwIDQxLjExbC02LjY0LTYuNjRhMiAyIDAgMDEwLTIuODNMMTAgMjV6IiBmaWxsPSIjMDA0NzFiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-5"></div>
        
        <div className="container mx-auto px-8 sm:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-green-400 font-semibold">Launching Soon</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Home Services is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Coming Soon</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              We're working hard to bring you the most innovative home services platform. Join our waitlist to be the first to experience the future.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12">
              {[
                { label: 'Days', value: '30' },
                { label: 'Hours', value: '12' },
                { label: 'Minutes', value: '45' },
                { label: 'Seconds', value: '60' }
              ].map((item, index) => (
                <div key={index} className="bg-[#002812] rounded-xl p-4 sm:p-6 border border-green-500/10">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: '🚀',
                  title: 'Early Access',
                  description: 'Be among the first to experience our platform'
                },
                {
                  icon: '🎁',
                  title: 'Launch Benefits',
                  description: 'Special rewards for early adopters'
                },
                {
                  icon: '💎',
                  title: 'Exclusive Features',
                  description: 'Access to premium features at launch'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-[#002812] rounded-xl p-6 border border-green-500/10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShowWaitlist}
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Join Waitlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-green-500/10">
              <p className="text-gray-400 mb-4">Already joined by</p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-2xl font-bold text-green-400">1,234+</div>
                <div className="text-gray-400">waitlist members</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services Section with Hover Animation */}
      <div className="py-24 sm:py-32 bg-[#002812] relative">
        <div className="container mx-auto px-8 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-green-400">Premium Services</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
            Discover our range of professional services designed to transform your home and simplify your life
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {coreServices.map((service, index) => (
              <Link 
                key={index}
                to="/services"
                className="relative group overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:z-10 bg-[#003920] border border-green-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-900/20 opacity-80 group-hover:opacity-90 transition duration-300"></div>
                <div className="relative z-10 p-6 sm:p-8 text-white h-full flex flex-col">
                  <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition duration-300">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition duration-300">{service.name}</h3>
                  <p className="text-gray-200 mb-4 opacity-90 flex-grow text-sm sm:text-base">{service.description}</p>
                  <button 
                    onClick={(e) => { e.preventDefault(); handleShowWaitlist(); }}
                    className="mt-4 inline-flex items-center bg-green-500 hover:bg-green-400 text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition duration-300 self-start text-sm sm:text-base"
                  >
                    <span>Book Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 sm:py-32 bg-[#002812] relative overflow-hidden">
        <div className="container mx-auto px-8 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How GreenForce <span className="text-green-400">Works</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
            Experience the easiest way to book and manage professional services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-600/30 hidden md:block"></div>
            
            <div className="bg-[#003920] border border-green-900 backdrop-blur-lg rounded-2xl p-8 sm:p-12 relative z-10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20">
              <div className="bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-4 sm:mb-6 mx-auto">1</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-green-400">Book Your Service</h3>
              <p className="text-gray-300 text-center text-sm sm:text-base">
                Choose from our wide range of premium services and select a convenient time slot
              </p>
            </div>
            
            <div className="bg-[#003920] border border-green-900 backdrop-blur-lg rounded-2xl p-8 sm:p-12 relative z-10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20">
              <div className="bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-4 sm:mb-6 mx-auto">2</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-green-400">Meet Your Professional</h3>
              <p className="text-gray-300 text-center text-sm sm:text-base">
                We'll match you with a vetted, highly-rated professional who specializes in your needs
              </p>
            </div>
            
            <div className="bg-[#003920] border border-green-900 backdrop-blur-lg rounded-2xl p-8 sm:p-12 relative z-10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20">
              <div className="bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-4 sm:mb-6 mx-auto">3</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-green-400">Enjoy Peace of Mind</h3>
              <p className="text-gray-300 text-center text-sm sm:text-base">
                Relax while the work is completed to perfection, backed by our satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="py-24 sm:py-32 bg-[#001a0e] relative">
        <div className="container mx-auto px-8 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-green-400">Why Choose Us</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
            Experience the future of home services with our innovative platform
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <Link
                key={index}
                to="/about"
                className="p-6 rounded-2xl bg-[#002812] hover:bg-[#003920] border border-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Services Section */}
      <div className="py-16 bg-[#002812]">
        <div className="container mx-auto px-8 sm:px-12">
          <div className="bg-[#003920] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">24/7 Emergency Services</h2>
                <p className="text-green-100/80 text-lg">
                  Quick response team available round the clock for your emergencies
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {emergencyServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={handleShowWaitlist}
                    className="flex flex-col items-center p-4 rounded-xl bg-[#002812] hover:bg-[#004020] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="text-white font-medium text-center">{service.name}</div>
                  </button>
                ))}
              </div>
              <div className="mt-10 text-center">
                <button
                  onClick={handleShowWaitlist}
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Request Emergency Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 sm:py-32 bg-[#001a0e]">
        <div className="container mx-auto px-8 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-green-400">Customer Stories</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
            See what our satisfied customers have to say about their experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#002812] rounded-2xl p-6 border border-green-500/10">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32 bg-[#002812] relative overflow-hidden">
        <div className="container mx-auto px-8 sm:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-green-100/80 mb-10">
              Join thousands of satisfied customers who trust GreenForce for their home service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShowWaitlist}
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showWaitlist && <WaitlistSection onClose={() => setShowWaitlist(false)} />}
      <Footer />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Home;