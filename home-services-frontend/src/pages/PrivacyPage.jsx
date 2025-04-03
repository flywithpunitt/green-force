import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Server, Bell, Key, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  const sections = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Service usage data and preferences",
        "Device information and IP address",
        "Payment information (securely processed)",
        "Location data (with your consent)",
        "Communication records with our support team"
      ]
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "Providing and improving our services",
        "Processing your service requests",
        "Sending service updates and notifications",
        "Personalizing your experience",
        "Analyzing usage patterns to improve our platform",
        "Ensuring platform security and preventing fraud"
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Data Storage and Security",
      content: [
        "Industry-standard encryption protocols",
        "Regular security audits and updates",
        "Secure data centers with 24/7 monitoring",
        "Limited employee access to personal data",
        "Regular backup procedures",
        "Compliance with data protection regulations"
      ]
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access your personal information",
        "Request data correction or deletion",
        "Opt-out of marketing communications",
        "Data portability rights",
        "Withdraw consent for data processing",
        "Lodge complaints with supervisory authorities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a0e]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#002812] opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Privacy </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Policy
            </span>
          </h1>
          <p className="text-xl text-green-100/80 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </div>

      {/* Last Updated Banner */}
      <div className="bg-[#002812] border-y border-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <p className="text-green-100/70">
              Last Updated: <span className="text-white">January 15, 2024</span>
            </p>
            <Link
              to="/contact"
              className="text-green-400 hover:text-green-300 font-medium flex items-center gap-2"
            >
              <Bell className="h-5 w-5" />
              Get Updates
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-green-100/70 leading-relaxed">
              This Privacy Policy explains how GreenForce ("we," "our," or "us") collects, uses, and protects your personal information. 
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#002812] to-[#001f0d] border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-green-100/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#002812] border border-green-500/10">
              <div className="flex items-center gap-3 mb-6">
                <Key className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
              </div>
              <p className="text-green-100/70 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze usage patterns.
              </p>
              <Link
                to="/privacy"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Learn more about our Privacy Policy →
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-[#002812] border border-green-500/10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
              </div>
              <p className="text-green-100/70 mb-4">
                Please review our Terms of Service for a complete understanding of your rights and obligations.
              </p>
              <Link
                to="/privacy"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Read our Privacy Policy →
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Have Privacy Concerns?</h2>
            <p className="text-green-100/70 mb-8">
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage; 