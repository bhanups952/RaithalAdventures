import React from 'react';
import { Heart, Mountain, Users, Award, MapPin, Clock, Star, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We believe in providing genuine cultural experiences that connect travelers with local traditions and the natural beauty of the Himalayas.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. Our guides are trained in first aid and wilderness safety, ensuring a secure adventure for all.'
    },
    {
      icon: Mountain,
      title: 'Environmental Responsibility',
      description: 'We practice sustainable tourism, protecting the pristine mountain environment for future generations to enjoy.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Tourism should benefit local communities. We work with village families to ensure tourism supports their livelihoods.'
    }
  ];

  const teamMembers = [
    {
      name: 'Praveen Singh',
      role: 'Founder & Lead Guide',
      image: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/whatsapp-image-2025-06-18-at-14.38.49_b3c99ef5.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '8+ years',
      description: 'Born and raised in Raithal, Devendra has been guiding trekkers through the Garhwal Himalayas for over 8 years. His deep knowledge of local trails and culture makes every journey special.'
    },
  ];

  const achievements = [
    { icon: Users, number: '500+', label: 'Happy Trekkers' },
    { icon: Mountain, number: '6', label: 'Trek Routes' },
    { icon: Award, number: '4.9/5', label: 'Guest Rating' },
    { icon: Clock, number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
          alt="Raithal village"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl">Sharing the magic of the Himalayas with the world</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Born in the <span className="text-emerald-600">Heart of the Himalayas</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Raithal Adventures was born from a simple dream - to share the pristine beauty and rich culture 
                of our mountain village with travelers from around the world. Founded in 2019 by local villagers 
                who grew up trekking these ancient trails, we offer authentic mountain experiences that go beyond 
                typical tourism.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our village of Raithal sits at 2,200 meters above sea level, serving as a gateway to some of the 
                most spectacular trekking destinations in the Garhwal Himalayas. What started as helping fellow 
                villagers guide occasional trekkers has grown into a mission to promote responsible, sustainable 
                mountain tourism.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that the best adventures come from genuine connections - with nature, with culture, 
                and with the people who call these mountains home. Every trek we organize and every guest we 
                welcome becomes part of our extended mountain family.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMTzVBmXmTufVyDFIVJjFjxFg6j-YyXVmc67oyC=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Village life"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOCzX_pu7ma6IlFyVFs6fAgWQt9_M-7cq-y0pwb=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Local temple"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipPOjqB5P9kZUMxHDfDNU3uFWkOll5ASwRMHqDMw=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Traditional food"
                className="w-full h-48 object-cover rounded-lg shadow-md col-span-2"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-emerald-50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To provide authentic, safe, and sustainable mountain experiences while supporting local communities 
              and preserving the natural beauty of the Himalayas for future generations.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We <span className="text-emerald-600">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our <span className="text-emerald-600">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center mb-3">
                    <Clock className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-emerald-600">Journey So Far</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Raithal Village</span> - Our Home
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Uttarkashi District, Uttarakhand, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mountain className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Altitude</p>
                  <p className="text-gray-600">2,200 meters (7,218 feet) above sea level</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Population</p>
                  <p className="text-gray-600">Approximately 50 families in traditional Garhwali village</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Raithal is a picturesque village that serves as the base camp for many famous treks including 
              Dayara Bugyal, one of India's most beautiful high-altitude meadows. The village maintains its 
              traditional character with stone houses, terraced fields, and warm hospitality that has welcomed 
              travelers for generations.
            </p>
          </div>
          <div className="bg-emerald-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Reach Raithal</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">From Delhi (425 km)</p>
                <p className="text-gray-600">Delhi → Dehradun → Uttarkashi → Raithal (10-12 hours by road)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Nearest Railway Station</p>
                <p className="text-gray-600">Dehradun (200 km) - Well connected to major cities</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Nearest Airport</p>
                <p className="text-gray-600">Jolly Grant Airport, Dehradun (215 km)</p>
              </div>
              <div className="bg-emerald-200 p-4 rounded-lg mt-4">
                <p className="text-emerald-800 text-sm">
                  <strong>Note:</strong> We can arrange transportation from Dehradun to Raithal, but it has to paid seaprately. 
                  Contact us for pickup services and detailed travel guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mountain Family</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Whether you're seeking adventure on the trails or peace in our homestay, we invite you to experience 
            the magic of the Himalayas with people who call it home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const phoneNumber = '918970308534';
                const message = 'Hi! I would like to plan my Himalayan adventure with Raithal Adventures. Can you help me choose the right experience?';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Plan Your Adventure
            </button>
            <button 
              onClick={() => {
                const phoneNumber = '918970308534';
                const message = 'Hi! I would like to learn more about Raithal Adventures and your services.';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;