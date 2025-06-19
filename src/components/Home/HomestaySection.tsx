import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wifi, Utensils, Mountain, Star, Users } from 'lucide-react';

const HomestaySection: React.FC = () => {
  const amenities = [
    { icon: Home, name: 'Cozy Rooms', description: 'Traditional yet comfortable accommodation' },
    { icon: Wifi, name: 'Free WiFi', description: 'Stay connected with high-speed internet' },
    { icon: Utensils, name: 'Local Cuisine', description: 'Authentic Garhwali meals prepared fresh' },
    { icon: Mountain, name: 'Mountain Views', description: 'Wake up to breathtaking Himalayan vistas' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Experience Authentic
                <span className="block text-emerald-600">Himalayan Hospitality</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay with a local family in the heart of Raithal village and immerse yourself in the rich culture 
                and traditions of the Garhwal Himalayas. Our homestay offers the perfect blend of comfort and authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{amenity.name}</h3>
                      <p className="text-sm text-gray-600">{amenity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-3">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-sm text-gray-600">(4.9/5 from 150+ guests)</span>
              </div>
              <blockquote className="text-gray-700 italic">
                "The warmth of the family and the stunning views made our stay unforgettable. 
                The home-cooked meals were absolutely delicious!"
              </blockquote>
              <cite className="text-sm text-gray-600 mt-2 block">- Sarah & Mike, Germany</cite>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/homestay"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
              <button 
                onClick={() => {
                  const phoneNumber = '918970308534';
                  const message = 'Hi! I would like to book a stay at Raithal Homestay. Can you provide availability and rates?';
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 text-center"
              >
                Check Availability
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://static.workaway.info/gfx/foto/8/6/5/8/7/865878414764/xl/865878414764_166903697800976.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Homestay exterior"
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipNASykahL7WBaVH7Bem7p7JcEjU7Q3bDGJYHbWj=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                alt="Traditional meal"
                className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipPp50DLWNGdHrps1AQMk3pw6JAG0NJE5LtYj3hp=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                alt="Cozy room"
                className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOqrlhsnusWpTpqa_aq3HYOyDH_2FVSCC2G-si4=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Mountain view"
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomestaySection;