import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp, Users, Mountain, Calendar, Star, Filter, Search } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const TreksPage: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const treks = [
    {
      id: 'dayara-bugyal',
      name: 'Dayara Bugyal Trek',
      image: 'https://himalayanwarrior.com/wp-content/uploads/2022/06/uttarkashiwodkow-3.jpg',
      difficulty: 'Easy-Moderate',
      duration: '4 Days',
      altitude: '3,408m',
      season: 'Apr-Jun, Sep-Nov',
      price: '₹4,999',
      rating: 4.9,
      reviews: 156,
      description: 'One of the most beautiful high-altitude meadows in India, offering spectacular 360-degree views of the Himalayan peaks.',
      highlights: ['360° Himalayan Views', 'Alpine Meadows', 'Snow Trekking', 'Rhododendron Forests']
    },
    {
      id: 'surya-top',
      name: 'Surya Top',
      image: 'https://bluemountainscottages.com/wp-content/uploads/2021/03/Dayara-Bugyal-Trek-in-Uttarakhand.jpg',
      difficulty: 'Easy-Moderate',
      duration: '6 Days',
      altitude: '3,900m',
      season: 'Mar-Jun, Sep-Dec',
      price: '₹9,499',
      rating: 4.8,
      reviews: 89,
      description: 'Perfect for beginners, offering spectacular sunrise views over the Himalayan peaks with cultural village experiences.',
      highlights: ['Sunrise Views', 'Rhododendron Forests', 'Local Villages', 'Weekend Getaway']
    },
    {
      id: 'gidara',
      name: 'Gidara Bugyal',
      image: 'https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/bb70eee3-6da7-4362-b5e9-28e2847601a4_Gidara+Bugyal+Trek+-+Indiahikes+-+Akshay+Aralikatti+3-6.jpg',
      difficulty: 'Easy-Moderate',
      duration: '7 Days',
      altitude: '4,250m',
      season: 'Apr-Jun, Sep-Nov',
      price: '₹19,999',
      rating: 4.7,
      reviews: 67,
      description: 'A hidden gem offering peaceful trekking experience away from crowded trails with beautiful meadows and forests.',
      highlights: ['Hidden Gem', 'Peaceful Trails', 'Cultural Experience', 'Less Crowded']
    },
    {
      id: 'dodital',
      name: 'Dodital',
      image: 'https://t.eucdn.in/tourism/lg/dodital-in-summers-5646747.webp',
      difficulty: 'Moderate',
      duration: '6 Days',
      altitude: '4,110m',
      season: 'May-Jun, Sep-Oct',
      price: '₹7,999',
      rating: 4.8,
      reviews: 134,
      description: 'Sacred lake dedicated to Lord Ganesha, offering excellent trout fishing opportunities and dense forest trekking.',
      highlights: ['Sacred Lake', 'Trout Fishing', 'Dense Forests', 'Spiritual Journey']
    },
    {
      id: 'kedartal',
      name: 'Kedartal',
      image: 'https://images.prismic.io/indiahike/ede9728a-50dd-45f0-a370-f79f4e3e4c56_Kedartal_Indiahikes_Kumar+Kale_2021_+%281%29.jpg',
      difficulty: 'Difficult',
      duration: '6 Days',
      altitude: '4,750m',
      season: 'May-Jun, Sep-Oct',
      price: '₹15,999',
      rating: 4.9,
      reviews: 78,
      description: 'One of the most challenging treks, featuring a spectacular glacial lake at the base of Thalay Sagar peak.',
      highlights: ['Glacial Lake', 'Thalay Sagar Views', 'High Altitude', 'Advanced Trekking']
    },
    {
      id: 'gomukh-tapovan',
      name: 'Gomukh Tapovan',
      image: 'https://images.prismic.io/indiahike/d50921e6-039a-4251-9190-221239a46d8a_Gaumukh+Tapovan_Sooraj+Kumar_View+of+Mount+Shivling+at+Tapovan.jpg',
      difficulty: 'Difficult',
      duration: '6 Days',
      altitude: '4,463m',
      season: 'May-Jun, Sep-Oct',
      price: '₹17,499',
      rating: 5.0,
      reviews: 92,
      description: 'Ultimate spiritual and adventure journey to the source of Ganges with spectacular views of Shivling peak.',
      highlights: ['Gangotri Glacier', 'Shivling Peak', 'Spiritual Journey', 'Source of Ganges']
    }
  ];

  const difficulties = ['All', 'Easy', 'Easy-Moderate', 'Moderate', 'Difficult'];
  const durations = ['All', '2 Days', '3 Days', '4 Days', '5 Days', '7 Days', '8 Days'];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Easy-Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Moderate': return 'bg-orange-100 text-orange-800';
      case 'Difficult': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const filteredTreks = treks.filter(trek => {
    const matchesDifficulty = selectedDifficulty === 'All' || trek.difficulty === selectedDifficulty;
    const matchesDuration = selectedDuration === 'All' || trek.duration === selectedDuration;
    const matchesSearch = trek.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trek.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDifficulty && matchesDuration && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Himalayan Treks in Uttarakhand - Dayara Bugyal, Kedartal & More | Raithal Adventures"
        description="Explore the best Himalayan treks in Uttarakhand with expert guides. Dayara Bugyal, Kedartal, Gomukh Tapovan, Dodital and more. Book your adventure today!"
        keywords="Himalayan treks, Uttarakhand trekking, Dayara Bugyal trek, Kedartal trek, Gomukh Tapovan, mountain trekking India, guided treks"
        url="https://raithaladventures.in/treks"
      />

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
          alt="All Treks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Himalayan Treks</h1>
            <p className="text-xl">Discover the perfect adventure for your skill level</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search treks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="w-full lg:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="w-full lg:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedDifficulty('All');
                setSelectedDuration('All');
                setSearchTerm('');
              }}
              className="w-full lg:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredTreks.length} of {treks.length} treks
          </p>
        </div>

        {/* Treks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map((trek) => (
            <div key={trek.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trek.image} 
                  alt={trek.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trek.difficulty)}`}>
                    {trek.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-emerald-600 font-bold text-lg">{trek.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{trek.name}</h3>
                  <div className="flex items-center">
                    <div className="flex mr-2">{renderStars(trek.rating)}</div>
                    <span className="text-sm text-gray-600">({trek.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{trek.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mountain className="h-4 w-4 mr-2 text-emerald-600" />
                    <span>{trek.altitude}</span>
                  </div>
                  <div className="flex items-center text-gray-600 col-span-2">
                    <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                    <span>{trek.season}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trek.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {trek.highlights.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{trek.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link 
                    to={`/trek/${trek.id}`}
                    className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 text-center text-sm"
                  >
                    View Details
                  </Link>
                  <button 
                    onClick={() => {
                      const phoneNumber = '918970308534';
                      const message = `Hi! I'm interested in the ${trek.name} trek. Can you provide more information?`;
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    className="flex-1 border-2 border-emerald-600 text-emerald-600 py-3 px-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 text-center text-sm"
                  >
                    Quick Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTreks.length === 0 && (
          <div className="text-center py-12">
            <Mountain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No treks found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSelectedDifficulty('All');
                setSelectedDuration('All');
                setSearchTerm('');
              }}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Trek Comparison */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Choose Your <span className="text-emerald-600">Perfect Adventure</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beginner Friendly</h3>
              <p className="text-gray-600 mb-4">Perfect for first-time trekkers</p>
              <div className="space-y-2">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Surya Top</div>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Dayara Bugyal</div>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Gidara</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intermediate</h3>
              <p className="text-gray-600 mb-4">For experienced trekkers</p>
              <div className="space-y-2">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Dodital</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
              <p className="text-gray-600 mb-4">For seasoned mountaineers</p>
              <div className="space-y-2">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Kedartal</div>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Gomukh Tapovan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-emerald-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Our local experts can help you select the perfect trek based on your experience, 
            fitness level, and preferences. Get personalized recommendations!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const phoneNumber = '918970308534';
                const message = 'Hi! I need help choosing the right trek for me. Can you provide guidance based on my experience and preferences?';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Expert Advice
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreksPage;