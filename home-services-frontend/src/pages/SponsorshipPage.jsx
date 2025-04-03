import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Star,
  Users,
  TrendingUp,
  Globe,
  Award,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Gift
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistSection from '../components/WaitlistSection';

const SponsorshipPage = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const sponsorshipTiers = [
    {
      name: 'Silver Partner',
      price: '₹49,999',
      duration: 'per quarter',
      features: [
        'Brand visibility on our platform',
        'Social media mentions',
        'Newsletter features',
        'Priority customer referrals',
        'Quarterly performance reports'
      ],
      icon: <Star className="h-8 w-8" />,
      popular: false
    },
    {
      name: 'Gold Partner',
      price: '₹99,999',
      duration: 'per quarter',
      features: [
        'All Silver Partner benefits',
        'Featured listing on homepage',
        'Co-branded marketing materials',
        'Exclusive event invitations',
        'Monthly strategy meetings',
        'Custom analytics dashboard'
      ],
      icon: <Trophy className="h-8 w-8" />,
      popular: true
    },
    {
      name: 'Platinum Partner',
      price: '₹199,999',
      duration: 'per quarter',
      features: [
        'All Gold Partner benefits',
        'Industry exclusivity rights',
        'Custom integration solutions',
        'Dedicated account manager',
        'Joint PR opportunities',
        'VIP customer service',
        'Annual partnership summit'
      ],
      icon: <Award className="h-8 w-8" />,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Market Reach',
      description: 'Access to our vast network of premium customers across major cities'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Growth Potential',
      description: 'Exponential business growth through strategic partnership'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Customer Base',
      description: 'Direct access to high-value, quality-focused customer segments'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge home service technology'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Premium Customers' },
    { value: '8+', label: 'Major Cities' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '₹50M+', label: 'Monthly Revenue' }
  ];

  const successStories = [
    {
      company: 'LuxeCare Solutions',
      result: '3.5x ROI increase',
      testimonial: 'Partnering with GreenForce transformed our market presence and customer acquisition strategy.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3'
    },
    {
      company: 'EcoClean Pro',
      result: '2.8x Customer Growth',
      testimonial: 'The partnership opened new avenues for business expansion and premium client relationships.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3'
    },
    {
      company: 'SmartHome Tech',
      result: '4.2x Revenue Boost',
      testimonial: 'Our collaboration led to unprecedented growth and market leadership in smart home services.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3'
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
              <span className="text-white">Strategic</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Partnership Program
              </span>
            </h1>
            <p className="text-xl text-green-100/80 max-w-3xl mx-auto mb-12">
              Join forces with the leading home services platform and unlock unprecedented growth opportunities.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setShowWaitlist(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="flex items-center">
                  Become a Partner
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
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

        {/* Stats Section */}
        <div className="py-20 bg-[#002812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#001a0e] p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-green-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Partnership
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                Benefits
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#002812] p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="text-green-400 mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-green-100/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="py-20 bg-[#002812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                Partnership Tier
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <div key={index} className={`relative bg-[#001a0e] rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'border-2 border-green-500' : ''
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-green-400 mb-6">{tier.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-green-400">{tier.price}</span>
                    <span className="text-green-100/70 ml-2">{tier.duration}</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-green-100">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowWaitlist(true)}
                    className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90'
                        : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Partner
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                Success Stories
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-[#002812] rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="relative h-48">
                    <img
                      src={story.image}
                      alt={story.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a0e] to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                    <div className="text-green-400 font-bold mb-4">{story.result}</div>
                    <p className="text-green-100/70">{story.testimonial}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-[#002812]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001a0e] rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 ml-2">
                    Transform Your Business?
                  </span>
                </h2>
                <p className="text-xl text-green-100/80 mb-8">
                  Join our partnership program today and unlock a world of opportunities
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <button
                    onClick={() => setShowWaitlist(true)}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    Become a Partner
                  </button>
                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
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

export default SponsorshipPage; 