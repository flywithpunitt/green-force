import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitStatus === 'error') setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          source: 'contact'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'Bhubaneswar',
      address: '789 Janpath, Near Ram Mandir, Bhubaneswar, Odisha',
      phone: '+91 98765 43213',
      email: 'bhubaneswar@greenforce.com',
      hours: 'Mon-Sat: 9AM - 6PM',
    },
    {
      city: 'Mumbai',
      address: '123 Business Park, Andheri East',
      phone: '+91 98765 43210',
      email: 'mumbai@greenforce.com',
      hours: 'Mon-Sat: 9AM - 6PM',
    },
    {
      city: 'Delhi',
      address: '456 Tech Hub, Connaught Place',
      phone: '+91 98765 43211',
      email: 'delhi@greenforce.com',
      hours: 'Mon-Sat: 9AM - 6PM',
    },
  ];

  return (
    <div className="min-h-screen bg-[#001a0e]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#002812] opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Touch
            </span>
          </h1>
          <p className="text-xl text-green-100/80 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help you with all your home service needs.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Contact Cards */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#002812] to-[#001f0d] border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
            <Phone className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-green-100/70 mb-4">Available 24/7 for emergencies</p>
            <a href="tel:+919876543210" className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#002812] to-[#001f0d] border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
            <Mail className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-green-100/70 mb-4">We'll respond within 24 hours</p>
            <a href="mailto:contact@greenforce.com" className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              contact@greenforce.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#002812] to-[#001f0d] border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
            <MessageSquare className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
            <p className="text-green-100/70 mb-4">Chat with our support team</p>
            <button 
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Start Chat
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#002812] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    <span>There was an error submitting your message. Please try again later.</span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-green-100 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#001a0e] border border-green-500/20 text-white focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-green-100 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#001a0e] border border-green-500/20 text-white focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-green-100 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#001a0e] border border-green-500/20 text-white focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-green-100 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#001a0e] border border-green-500/20 text-white focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-green-100 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-[#001a0e] border border-green-500/20 text-white focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-[#002812] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Find Us on Map</h2>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40927345944!2d85.75041001015315!3d20.300828336237685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1645523645826!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-3">Our Main Office</h3>
                <div className="flex items-start gap-3 text-green-100/70">
                  <MapPin className="h-5 w-5 text-green-400 mt-1" />
                  <span>789 Janpath, Near Ram Mandir, Bhubaneswar, Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-20 bg-[#002812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#003920] border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-green-100/70">
                    <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-100/70">
                    <Phone className="h-5 w-5 text-green-400" />
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-green-400 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-green-100/70">
                    <Mail className="h-5 w-5 text-green-400" />
                    <a href={`mailto:${office.email}`} className="hover:text-green-400 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-green-100/70">
                    <Clock className="h-5 w-5 text-green-400" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-[#001a0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-green-100/80 mb-8">
            Our support team is here to help you with any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              View FAQ
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage; 