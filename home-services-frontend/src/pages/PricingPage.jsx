import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Clock, Star, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import WaitlistSection from '../components/WaitlistSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricingPage = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleShowWaitlist = () => {
    setShowWaitlist(true);
  };

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for occasional service needs',
      monthlyPrice: 499,
      yearlyPrice: 4999,
      features: [
        'Access to all basic services',
        '2 emergency calls per month',
        'Standard response time',
        'Email support',
        'Mobile app access',
      ],
      notIncluded: [
        'Priority scheduling',
        'Dedicated account manager',
        'Custom service packages',
        'Annual maintenance plan',
      ],
      popular: false,
      color: 'from-green-400 to-green-600',
      savings: '1989',
    },
    {
      name: 'Premium',
      description: 'Ideal for regular home maintenance',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'All Basic features',
        'Unlimited emergency calls',
        'Priority scheduling',
        'Dedicated account manager',
        '24/7 phone support',
        'Exclusive discounts',
        'Quarterly maintenance',
      ],
      notIncluded: [
        'Custom service packages',
        'Annual maintenance plan',
      ],
      popular: true,
      color: 'from-green-500 to-emerald-600',
      savings: '1989',
    },
    {
      name: 'Enterprise',
      description: 'Complete coverage for your home',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'All Premium features',
        'Custom service packages',
        'Annual maintenance plan',
        'Multi-home coverage',
        'VIP support',
        'Personal concierge',
        'Preventive maintenance',
        'Extended warranty',
      ],
      notIncluded: [],
      popular: false,
      color: 'from-emerald-500 to-emerald-700',
      savings: '3989',
    },
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, UPI, net banking, and digital wallets. All payments are processed securely through our platform.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. If you cancel, you will continue to have access to the service until the end of your current billing period.',
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'No, there is no minimum contract period. You can choose between monthly or yearly billing cycles, with yearly subscriptions offering significant savings.',
    },
    {
      question: 'What happens if I need services beyond my plan?',
      answer: 'Additional services can be availed at exclusive member prices. Premium and Enterprise members receive special discounts on all extra services.',
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No hidden charges. All applicable charges are clearly mentioned in the plan details. Any additional services will be quoted upfront before proceeding.',
    },
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Satisfaction Guarantee',
      description: 'If you are not satisfied with our service, we will make it right or give you a full refund.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible Scheduling',
      description: 'Book services at your convenience with 24/7 availability.',
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Expert Professionals',
      description: 'All our service providers are verified experts in their field.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#001a0e]">
      <Navbar />
      {showWaitlist && <WaitlistSection onClose={() => setShowWaitlist(false)} />}

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Simple, Transparent</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Pricing for Everyone
          </span>
        </h1>
        <p className="text-green-100/80 text-lg mb-12">
          Choose the perfect plan for your home maintenance needs. All plans include access to
          <br />our quality services and professional support.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-[#001a0b]/50 backdrop-blur-sm border border-green-500/10 mb-12">
          <div className="flex items-center gap-6 px-4">
            <span className={`text-lg font-medium transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-green-100/70'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 rounded-full transition-colors duration-300 bg-[#002812] border border-green-500/20"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 bg-gradient-to-r from-green-400 to-green-500 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors duration-300 ${billingCycle === 'yearly' ? 'text-white' : 'text-green-100/70'}`}>
              Yearly
              <span className="ml-2 text-sm font-bold text-green-400">(Save 20%)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 -mt-4 mb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a0e] via-transparent to-transparent"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-b from-[#002812] to-[#001f0d] rounded-3xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-green-500 transform scale-105 lg:scale-110 shadow-xl shadow-green-500/20' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-8 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-green-100/70 mb-8 min-h-[40px]">{plan.description}</p>
                <div className="relative flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-white absolute -left-4 top-4">₹</span>
                  <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                </div>
                <p className="text-green-100/70 text-sm uppercase tracking-wider font-medium mb-2">
                  PER {billingCycle === 'monthly' ? 'MONTH' : 'YEAR'}
                </p>
                {billingCycle === 'yearly' && (
                  <p className="text-green-400 text-sm font-medium">
                    Save ₹{plan.savings} yearly
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8 min-h-[320px]">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-green-100 hover:text-green-400 transition-colors duration-200">
                    <div className="bg-green-500/10 rounded-full p-1 mr-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, index) => (
                  <div key={index} className="flex items-center text-green-100/50">
                    <div className="bg-green-500/5 rounded-full p-1 mr-3">
                      <X className="h-4 w-4 text-green-100/30 flex-shrink-0" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleShowWaitlist}
                className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${
                  plan.color
                } text-white font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20`}
              >
                {plan.popular ? 'Get Started Now' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#002812] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-green-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-green-100/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">Frequently Asked</span>
            <span className="text-green-400 ml-2">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#002812] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-green-100/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-[#003920] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-green-100/80 text-lg mb-8">
              Our team is here to help you choose the perfect plan for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShowWaitlist}
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-all duration-300"
              >
                Contact Sales
              </button>
              <button
                onClick={handleShowWaitlist}
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingPage; 