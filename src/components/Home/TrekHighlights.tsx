import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp, Users, Mountain, Calendar } from 'lucide-react';

const TrekHighlights: React.FC = () => {
  const treks = [
    {
      id: 'dayara-bugyal',
      name: 'Dayara Bugyal',
      image: 'https://photos.app.goo.gl/vawSjKZa6fEXtESU6?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Easy-Moderate',
      duration: '4 Days',
      altitude: '3,408m',
      season: 'Apr-Jun, Sep-Nov',
      highlights: ['360° Himalayan Views', 'Alpine Meadows', 'Snow Trekking']
    },
    {
      id: 'surya-top',
      name: 'Surya Top',
      image: 'https://bluemountainscottages.com/wp-content/uploads/2021/03/Dayara-Bugyal-Trek-in-Uttarakhand.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Easy-Moderate',
      duration: '6 Days',
      altitude: '3,900m',
      season: 'Mar-Jun, Sep-Dec',
      highlights: ['Sunrise Views', 'Rhododendron Forests', 'Local Villages']
    },
    {
      id: 'gidara',
      name: 'Gidara Bugyal',
      image: 'https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/bb70eee3-6da7-4362-b5e9-28e2847601a4_Gidara+Bugyal+Trek+-+Indiahikes+-+Akshay+Aralikatti+3-6.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Easy-Moderate',
      duration: '7 Days',
      altitude: '4,250m',
      season: 'Apr-Jun, Sep-Nov',
      highlights: ['Remote Trails', 'Alpine Grasslands', 'High Altitude Camp']
    },
    {
      id: 'dodital',
      name: 'Dodital',
      image: 'https://t.eucdn.in/tourism/lg/dodital-in-summers-5646747.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Moderate',
      duration: '6 Days',
      altitude: '4,110m',
      season: 'May-Jun, Sep-Oct',
      highlights: ['Sacred Lake', 'Trout Fishing', 'Dense Forests']
    },
    {
      id: 'kedartal',
      name: 'Kedartal',
      image: 'https://images.prismic.io/indiahike/ede9728a-50dd-45f0-a370-f79f4e3e4c56_Kedartal_Indiahikes_Kumar+Kale_2021_+%281%29.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Difficult',
      duration: '6 Days',
      altitude: '4,750m',
      season: 'May-Jun, Sep-Oct',
      highlights: ['Glacial Lake', 'Thalay Sagar Views', 'High Altitude']
    },
    {
      id: 'gomukh-tapovan',
      name: 'Gomukh Tapovan',
      image: 'https://images.prismic.io/indiahike/d50921e6-039a-4251-9190-221239a46d8a_Gaumukh+Tapovan_Sooraj+Kumar_View+of+Mount+Shivling+at+Tapovan.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      difficulty: 'Difficult',
      duration: '6 Days',
      altitude: '4,463m',
      season: 'May-Jun, Sep-Oct',
      highlights: ['Gangotri Glacier', 'Shivling Peak', 'Spiritual Journey']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Easy-Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Moderate': return 'bg-orange-100 text-orange-800';
      case 'Difficult': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="next-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Premium Treks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the pristine beauty of the Himalayas through our carefully curated trekking experiences. 
            Each journey offers unique landscapes, cultural insights, and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <div key={trek.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trek.image} 
                  alt={trek.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trek.difficulty)}`}>
                    {trek.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{trek.name}</h3>
                
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
                    {trek.highlights.map((highlight, index) => (
                      <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to={`/trek/${trek.id}`}
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 text-center block"
                >
                  Explore Trek
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't decide which trek to choose? Our local experts are here to help!
          </p>
          <button 
            onClick={() => {
              const phoneNumber = '918970308534';
              const message = 'Hi! I need help choosing the right trek for me. Can you provide guidance?';
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Users className="h-5 w-5" />
            <span>Get Expert Advice</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrekHighlights;
