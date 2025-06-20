import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, Car, Train, Plane } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const phoneNumber = '918970308534';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'whatsapp'
    });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8970308534', '+91 6369543898'],
      description: 'Available 24/7 for emergencies'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['raithaladventures@gmail.com', 'praveensingh8812@gmail.com'],
      description: 'We respond within 2-4 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Raithal Village, Uttarkashi', 'Uttarakhand, India - 249141'],
      description: 'GPS: 30.8629° N, 78.5622° E'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Sun: 6:00 AM - 9:00 PM', 'Emergency: 24/7 Available'],
      description: 'Mountain Standard Time (IST)'
    }
  ];

  const quickActions = [
    {
      title: 'WhatsApp Chat',
      description: 'Instant messaging for quick queries',
      action: () => {
        const phoneNumber = '918970308534';
        const message = 'Hi! I have a question about your trekking and homestay services.';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      },
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Get Directions',
      description: 'GPS navigation to our location',
      action: () => window.open('https://maps.app.goo.gl/7banHv9QmhMTH3z28'),
      icon: Navigation,
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  const travelInfo = [
    {
      icon: Car,
      title: 'By Road',
      description: 'Delhi to Raithal: 425 km (10-12 hours)',
      details: 'Well-connected motorable road. We provide pickup services from Dehradun.'
    },
    {
      icon: Train,
      title: 'By Train',
      description: 'Nearest station: Dehradun (200 km)',
      details: 'Regular trains from Delhi, Mumbai, Kolkata. We arrange onward transportation.'
    },
    {
      icon: Plane,
      title: 'By Air',
      description: 'Jolly Grant Airport, Dehradun (215 km)',
      details: 'Daily flights from Delhi. Pre-arranged taxi services available.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
          alt="Contact us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl">We're here to help plan your perfect mountain adventure</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <button
                key={index}
                onClick={action.action}
                className={`${action.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center justify-center mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp QR Code</h3>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-3">Scan to chat with us instantly</p>
                <button 
                  onClick={() => {
                    const phoneNumber = '918970308534';
                    const message = 'Hi! I scanned your QR code and would like to inquire about your services.';
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, '_blank');
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  Open WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How to Reach Us */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to <span className="text-emerald-600">Reach Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelInfo.map((travel, index) => {
              const IconComponent = travel.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{travel.title}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{travel.description}</p>
                  <p className="text-gray-600 text-sm">{travel.details}</p>
                </div>
              );
            })}
          </div>
        </div>


{/* Map Background Section */}
<div className="mt-16 relative rounded-xl overflow-hidden h-[400px] shadow-md">
  {/* Embedded Google Map */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4064.447406213844!2d78.60373037607783!3d30.81806518150268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39088b26136af7d3%3A0x2b6432eeab6adf5d!2sRaithal%20Barbeque%20Homestay!5e1!3m2!1sen!2sin!4v1750239593495!5m2!1sen!2sin"
    className="absolute inset-0 w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>



  {/* Button - Bottom Right */}
  <div className="absolute bottom-4 right-4 pointer-events-auto">
    <button
      onClick={() =>
        window.open("https://maps.app.goo.gl/FSjtJTiKU9L9ievG6", "_blank", "noopener,noreferrer")
      }
      className="bg-emerald-600 text-white px-10
      py-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 inline-flex items-center gap-2 shadow-lg"
    >
      <Navigation className="w-4 h-4" />
      <span className="text-sm">Open in Maps</span>
    </button>
  </div>
</div>


      </div>
    </div>
  );
};

export default ContactPage;