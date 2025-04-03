import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Sponsorship', path: '/sponsorship' },
    ],
    services: [
      { name: 'Home Cleaning', path: '/services#cleaning' },
      { name: 'Plumbing', path: '/services#plumbing' },
      { name: 'Electrical', path: '/services#electrical' },
      { name: 'Gardening', path: '/services#gardening' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, url: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, url: '#', name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, url: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-950 text-white pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,_rgba(34,_197,_94,_0.1),_transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-1">
            <Link 
              to="/" 
              className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4 sm:mb-6 inline-block"
            >
              GreenForce
            </Link>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Transforming home maintenance through innovation and excellence
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-green-400">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition duration-300 text-sm sm:text-base">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-green-400">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition duration-300 text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-green-400">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">📧</span>
                <span className="text-gray-400 text-sm sm:text-base">support@homeservices.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">📞</span>
                <span className="text-gray-400 text-sm sm:text-base">+1-800-HOME-SRV</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">📍</span>
                <span className="text-gray-400 text-sm sm:text-base">123 Service Avenue, Suite 400<br />San Francisco, CA 94105</span>
              </li>
            </ul>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 sm:mt-24 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            &copy; {currentYear} HomeServices. All Rights Reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            {footerLinks.support.map((link, index) => (
              <Link key={index} to={link.path} className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition duration-300">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 