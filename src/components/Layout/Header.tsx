import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ReactComponent as RaithalLogo } from './Raithaladventureslogo.svg'; // ✅ SVG import

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Treks',
      href: '/treks',
      dropdown: [
        { name: 'Dayara Bugyal', href: '/trek/dayara-bugyal' },
        { name: 'Surya Top', href: '/trek/surya-top' },
        { name: 'Gidara', href: '/trek/gidara' },
        { name: 'Dodital', href: '/trek/dodital' },
        { name: 'Kedartal', href: '/trek/kedartal' },
        { name: 'Gomukh Tapovan', href: '/trek/gomukh-tapovan' },
      ],
    },
    { name: 'Homestay', href: '/homestay' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const baseTextClass = scrolled ? 'text-gray-700' : 'text-white';
  const hoverTextClass = scrolled ? 'hover:text-emerald-600' : 'hover:text-white';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <RaithalLogo className={`h-8 w-8 ${scrolled ? 'text-emerald-600' : 'text-white'}`} />
            <div className={`text-xl font-bold ${baseTextClass}`}>
              Raithal <span className="text-emerald-600">Adventures</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href || location.pathname.startsWith('/trek')
                          ? 'text-emerald-600'
                          : `${baseTextClass} ${hoverTextClass}`
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-emerald-600'
                        : `${baseTextClass} ${hoverTextClass}`
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${baseTextClass} ${hoverTextClass}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <Link
                        to={item.href}
                        className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-emerald-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
