import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = ({ onShowWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#001a0e]/95 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GreenForce</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium relative ${
                location.pathname === '/'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              Home
              {location.pathname === '/' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium relative ${
                location.pathname === '/services'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              Services
              {location.pathname === '/services' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium relative ${
                location.pathname === '/pricing'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              Pricing
              {location.pathname === '/pricing' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium relative ${
                location.pathname === '/about'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              About
              {location.pathname === '/about' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium relative ${
                location.pathname === '/contact'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              Contact Us
              {location.pathname === '/contact' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
            <Link
              to="/privacy"
              className={`text-sm font-medium relative ${
                location.pathname === '/privacy'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              Privacy Policy
              {location.pathname === '/privacy' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
            <Link
              to="/sponsorship"
              className={`text-sm font-medium relative ${
                location.pathname === '/sponsorship'
                  ? 'text-green-400'
                  : 'text-green-100 hover:text-green-400'
              } transition-colors duration-300`}
            >
              Sponsorship
              {location.pathname === '/sponsorship' && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                />
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onShowWaitlist}
              className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-[#002812] hover:bg-[#003920] transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-green-400" />
              ) : (
                <Menu className="h-6 w-6 text-green-400" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#002812] mt-2 rounded-2xl border border-green-500/10 overflow-hidden">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg text-green-100/80 hover:text-green-400 hover:bg-[#003920] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-lg text-green-100/80 hover:text-green-400 hover:bg-[#003920] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-lg text-green-100/80 hover:text-green-400 hover:bg-[#003920] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg text-green-100/80 hover:text-green-400 hover:bg-[#003920] transition-all"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-lg text-green-100/80 hover:text-green-400 hover:bg-[#003920] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/sponsorship"
                className="block px-3 py-2 rounded-lg text-green-100/80 hover:text-green-400 hover:bg-[#003920] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Sponsorship
              </Link>
            </div>
            <div className="px-4 py-3 border-t border-green-500/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onShowWaitlist();
                }}
                className="w-full px-3 py-2 text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 