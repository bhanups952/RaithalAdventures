import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Users, Award, Compass } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleWhatsAppInquiry = () => {
    const phoneNumber = '918970308534';
    const message = 'Hi! I would like to inquire about trekking packages at Raithal Adventures.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Explore the Heart of the
            <span className="block text-emerald-400">Himalayas</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
            Experience authentic mountain adventures with Raithal Adventures. 
            Discover pristine trails, breathtaking vistas, and warm hospitality 
            in the lap of the Himalayas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12 px-4">
            <button 
              onClick={handleWhatsAppInquiry}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Book Your Adventure</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link 
              to="/treks"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
            >
              Explore Treks
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4 max-w-xl mx-auto">
            <div className="text-center">
              <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 mx-auto mb-1" />
              <div className="text-xl sm:text-2xl font-bold">6</div>
              <div className="text-xs sm:text-sm opacity-90">Premium Treks</div>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 mx-auto mb-1" />
              <div className="text-xl sm:text-2xl font-bold">500+</div>
              <div className="text-xs sm:text-sm opacity-90">Happy Trekkers</div>
            </div>
            <div className="text-center">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 mx-auto mb-1" />
              <div className="text-xl sm:text-2xl font-bold">10+</div>
              <div className="text-xs sm:text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 mx-auto mb-1" />
              <div className="text-xl sm:text-2xl font-bold">100%</div>
              <div className="text-xs sm:text-sm opacity-90">Local Expertise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={() => {
          const nextSection = document.getElementById('next-section');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;