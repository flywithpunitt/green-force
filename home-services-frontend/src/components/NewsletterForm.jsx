import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../services/api';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Set loading state
    setStatus('loading');
    setMessage('');

    try {
      // Call the API to subscribe
      await subscribeToNewsletter(email);
      
      // Handle success
      setStatus('success');
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">
        Subscribe to our newsletter
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="bg-gray-800 border border-gray-700 rounded-l-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full text-sm sm:text-base text-white"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`bg-green-500 hover:bg-green-400 text-white rounded-r-lg px-3 sm:px-4 transition duration-300 text-sm sm:text-base flex items-center justify-center min-w-[60px] ${
              status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Send'
            )}
          </button>
        </div>
        {message && (
          <div
            className={`flex items-center gap-2 text-sm ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm; 