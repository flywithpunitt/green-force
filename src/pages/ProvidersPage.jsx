import React, { useState } from 'react';
import { Star, MapPin, Clock, Award, Shield, ThumbsUp } from 'lucide-react';

const ProvidersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Providers' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚰' },
    { id: 'electrical', name: 'Electrical', icon: '⚡' },
    { id: 'gardening', name: 'Gardening', icon: '🌱' },
    { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' }
  ];

  const providers = [
    {
      id: 1,
      name: 'John Smith',
      category: 'cleaning',
      rating: 4.9,
      reviews: 234,
      experience: '5+ years',
      specialties: ['Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
      availability: 'Available Now',
      location: 'Central Delhi',
      image: '👨‍🔧',
      verified: true
    },
    {
      id: 2,
      name: 'Maria Garcia',
      category: 'gardening',
      rating: 5.0,
      reviews: 189,
      experience: '8+ years',
      specialties: ['Landscape Design', 'Plant Care', 'Garden Maintenance'],
      availability: 'Available Tomorrow',
      location: 'South Delhi',
      image: '👩‍🌾',
      verified: true
    },
    {
      id: 3,
      name: 'David Chen',
      category: 'plumbing',
      rating: 4.8,
      reviews: 312,
      experience: '6+ years',
      specialties: ['Pipe Repair', 'Installation', 'Emergency Services'],
      availability: 'Available Now',
      location: 'Gurgaon',
      image: '👨‍🔧',
      verified: true
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      category: 'cooking',
      rating: 4.9,
      reviews: 156,
      experience: '7+ years',
      specialties: ['International Cuisine', 'Dietary Specific', 'Event Catering'],
      availability: 'Available Now',
      location: 'Noida',
      image: '👩‍🍳',
      verified: true
    },
    {
      id: 5,
      name: 'Michael Brown',
      category: 'electrical',
      rating: 4.7,
      reviews: 278,
      experience: '4+ years',
      specialties: ['Wiring', 'Installation', 'Maintenance'],
      availability: 'Busy',
      location: 'West Delhi',
      image: '👨‍🔧',
      verified: true
    }
  ];

  const filteredProviders = selectedCategory === 'all'
    ? providers
    : providers.filter(provider => provider.category === selectedCategory);

  const stats = [
    { icon: <Shield className="h-6 w-6" />, label: 'Verified Providers', value: '500+' },
    { icon: <ThumbsUp className="h-6 w-6" />, label: 'Satisfaction Rate', value: '98%' },
    { icon: <Award className="h-6 w-6" />, label: 'Expert Partners', value: '1000+' }
  ];

  return (
    <div className="min-h-screen bg-[#001a0e] py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expert <span className="text-green-400">Service Providers</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Meet our verified and highly skilled professionals ready to deliver exceptional service
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

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-[#003920] rounded-2xl p-6 border border-green-900 hover:shadow-xl hover:shadow-green-900/20 transition duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                  {provider.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{provider.name}</h3>
                    {provider.verified && (
                      <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white">{provider.rating}</span>
                    <span className="text-gray-400">({provider.reviews} reviews)</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-green-400" />
                      {provider.experience} experience
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-green-400" />
                      {provider.location}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-green-900/50 text-green-400 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${
                      provider.availability === 'Available Now'
                        ? 'text-green-400'
                        : provider.availability === 'Busy'
                        ? 'text-red-400'
                        : 'text-yellow-400'
                    }`}>
                      {provider.availability}
                    </span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-400 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-300 mb-6">
            Are you a skilled professional looking to expand your client base?
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-400 transition duration-300">
            Become a Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvidersPage; 