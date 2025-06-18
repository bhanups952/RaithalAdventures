import React from 'react';
import { Leaf, Recycle, Users, Heart, Shield, Mountain, Droplets, TreePine, Award, CheckCircle } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  const principles = [
    {
      icon: Leaf,
      title: 'Leave No Trace',
      description: 'We follow strict Leave No Trace principles, ensuring that our presence in the mountains leaves minimal environmental impact.',
      actions: [
        'Pack out all waste including biodegradable items',
        'Use designated camping areas only',
        'Respect wildlife and maintain safe distances',
        'Stay on marked trails to prevent erosion'
      ]
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Tourism should benefit local communities. We work directly with village families to ensure economic benefits reach the grassroots level.',
      actions: [
        'Hire local guides and porters exclusively',
        'Source food and supplies from village families',
        'Support local handicraft and agriculture',
        'Provide fair wages and working conditions'
      ]
    },
    {
      icon: Mountain,
      title: 'Environmental Conservation',
      description: 'We actively participate in conservation efforts to protect the pristine Himalayan ecosystem for future generations.',
      actions: [
        'Regular trail cleanup drives',
        'Plastic-free trekking initiatives',
        'Reforestation programs with native species',
        'Wildlife habitat protection awareness'
      ]
    },
    {
      icon: Heart,
      title: 'Cultural Preservation',
      description: 'We help preserve and promote the rich Garhwali culture and traditions through authentic cultural exchanges.',
      actions: [
        'Traditional cooking classes with local families',
        'Support for local festivals and customs',
        'Documentation of oral histories and traditions',
        'Promotion of traditional crafts and skills'
      ]
    }
  ];

  const initiatives = [
    {
      title: 'Plastic-Free Trekking',
      description: 'Complete elimination of single-use plastics from all our treks',
      impact: '500+ plastic bottles saved monthly',
      icon: Recycle
    },
    {
      title: 'Solar Energy Adoption',
      description: 'Solar-powered homestay and camping equipment',
      impact: '80% renewable energy usage',
      icon: Droplets
    },
    {
      title: 'Native Tree Plantation',
      description: 'Annual plantation drives with indigenous species',
      impact: '200+ trees planted yearly',
      icon: TreePine
    },
    {
      title: 'Waste Management',
      description: 'Comprehensive waste segregation and management system',
      impact: '100% waste properly disposed',
      icon: Shield
    }
  ];

  const certifications = [
    {
      title: 'Responsible Tourism Certified',
      description: 'Certified by Uttarakhand Tourism Board for sustainable practices',
      year: '2023'
    },
    {
      title: 'Eco-Tourism Excellence',
      description: 'Recognized for outstanding contribution to eco-tourism',
      year: '2022'
    },
    {
      title: 'Community Tourism Award',
      description: 'Awarded for empowering local communities through tourism',
      year: '2021'
    }
  ];

  const commitments = [
    'Carbon-neutral trekking operations by 2025',
    'Zero waste to landfill policy',
    '100% local sourcing for food and supplies',
    'Fair trade practices with all local partners',
    'Annual environmental impact assessments',
    'Continuous education for guides and guests'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
          alt="Sustainable tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Sustainable Mountain Tourism</h1>
            <p className="text-xl">Protecting the Himalayas while sharing their beauty</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commitment to <span className="text-emerald-600">Responsible Tourism</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Raithal Adventures, we believe that tourism should be a force for good. Our sustainable practices 
            ensure that the pristine beauty of the Himalayas is preserved while providing meaningful benefits 
            to local communities. Every trek you take with us contributes to conservation efforts and community development.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-emerald-600">Sustainability Principles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{principle.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Green Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-emerald-600">Green Initiatives</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <div key={index} className="bg-emerald-50 rounded-lg p-6 text-center hover:bg-emerald-100 transition-colors duration-300">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-700 mb-4">{initiative.description}</p>
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {initiative.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-emerald-600">Environmental Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">0</div>
              <div className="text-gray-600">Plastic Bottles Used</div>
              <div className="text-sm text-gray-500 mt-1">Since 2022</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-gray-600">Trees Planted</div>
              <div className="text-sm text-gray-500 mt-1">Annual plantation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-600">Local Families</div>
              <div className="text-sm text-gray-500 mt-1">Directly benefited</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600">Waste Managed</div>
              <div className="text-sm text-gray-500 mt-1">Properly disposed</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            <span className="text-emerald-600">Certifications</span> & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="text-emerald-600 font-semibold">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Commitments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-emerald-600">Future Commitments</span>
          </h2>
          <div className="bg-emerald-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How You Can Help */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Every trekker can contribute to sustainable mountain tourism. Here's how you can make a difference:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Respect Nature</h3>
              <p className="text-emerald-100">Follow Leave No Trace principles and respect wildlife habitats</p>
            </div>
            <div className="bg-emerald-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Support Local</h3>
              <p className="text-emerald-100">Buy local products and engage with community experiences</p>
            </div>
            <div className="bg-emerald-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Travel Light</h3>
              <p className="text-emerald-100">Pack only essentials and avoid single-use items</p>
            </div>
            <div className="bg-emerald-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Educate Others</h3>
              <p className="text-emerald-100">Share sustainable practices with fellow travelers</p>
            </div>
            <div className="bg-emerald-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Choose Responsible</h3>
              <p className="text-emerald-100">Select tour operators committed to sustainability</p>
            </div>
            <div className="bg-emerald-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Give Back</h3>
              <p className="text-emerald-100">Participate in conservation activities during your visit</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Us in <span className="text-emerald-600">Protecting the Himalayas</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose sustainable tourism and be part of the solution. Together, we can ensure that the beauty 
            of the Himalayas is preserved for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const phoneNumber = '919876543210';
                const message = 'Hi! I am interested in sustainable trekking options. Can you provide details about your eco-friendly treks?';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Book Sustainable Trek
            </button>
            <button 
              onClick={() => {
                const phoneNumber = '919876543210';
                const message = 'Hi! I would like to learn more about your sustainability initiatives and how I can contribute.';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;