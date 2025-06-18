import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-emerald-400" />
              <div className="text-xl font-bold">
                Raithal <span className="text-emerald-400">Adventures</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Experience the pristine beauty of the Himalayas with our expertly guided treks 
              and authentic homestay experiences in the heart of Uttarakhand.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/homestay" className="text-gray-300 hover:text-emerald-400 transition-colors">Homestay</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-emerald-400 transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-emerald-400 transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li><Link to="/trek/dayara-bugyal" className="text-gray-300 hover:text-emerald-400 transition-colors">Dayara Bugyal</Link></li>
              <li><Link to="/trek/surya-top" className="text-gray-300 hover:text-emerald-400 transition-colors">Surya Top</Link></li>
              <li><Link to="/trek/dodital" className="text-gray-300 hover:text-emerald-400 transition-colors">Dodital</Link></li>
              <li><Link to="/trek/kedartal" className="text-gray-300 hover:text-emerald-400 transition-colors">Kedartal</Link></li>
              <li><Link to="/trek/gomukh-tapovan" className="text-gray-300 hover:text-emerald-400 transition-colors">Gomukh Tapovan</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  Raithal Village, Uttarkashi<br />
                  Uttarakhand, India - 249141
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300 text-sm">+91 8970308534</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300 text-sm">info@raithaladventures.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest trek updates and seasonal offers</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-r-md hover:bg-emerald-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Raithal Adventures. All rights reserved. | Designed for sustainable mountain tourism.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;