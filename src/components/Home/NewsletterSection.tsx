import React, { useState } from "react";
import { Mail, Send, Mountain, Calendar, Users, Award } from "lucide-react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    { icon: Mountain, text: "Exclusive trek updates" },
    { icon: Calendar, text: "Seasonal offers & discounts" },
    { icon: Users, text: "Group trek announcements" },
    { icon: Award, text: "Trekking tips & guides" },
  ];

  return (
    <section
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/wild-travel.in/wp-content/uploads/2025/02/Dayara-Bugyal-Trek.webp?resize=1080%2C566&ssl=1')",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Stay Connected with the
              <span className="block">Mountains</span>
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Join our Whatsapp community to receive the latest updates on trek schedules,
              seasonal offers, weather conditions, and exclusive insights from
              our local mountain guides.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-emerald-100">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Join Our Community
              </h3>
              <p className="text-gray-600">
              Over 500+ happy trekkers have experienced the magic of the Himalayas with us. Get exclusive access to trek updates, seasonal offers, and mountain stories
              </p>
            </div>


<div className="text-center mt-12">
            <button 
              onClick={() => {
                const phoneNumber = '918970308534';
                const message = 'Hi! I would like to plan my Himalayan adventure with Raithal Adventures. Can you help me choose the right trek?';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="w-full bg-green-500 text-white py-4 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Start Your Adventure
            </button>
        </div>

  
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
