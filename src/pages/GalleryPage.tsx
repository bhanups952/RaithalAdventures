import React, { useState } from 'react';
import { X, Camera, Play, Mountain, Users, Home, MapPin } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'treks', name: 'Treks', icon: Mountain },
    { id: 'homestay', name: 'Homestay', icon: Home },
    { id: 'culture', name: 'Culture', icon: Users },
    { id: 'village', name: 'Village Life', icon: MapPin },
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://www.trekkersofindia.com/product/1764950536185064.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Dayara Bugyal Meadows',
      description: 'Expansive alpine meadows with 360-degree mountain views',
    },
    {
      id: 2,
      src: 'https://images.prismic.io/indiahike/c3000c9e-cf5f-4069-bdce-5f1c475b45b3_Sandakphu_SKP_May+2019+-+Indiahikes+-+Swathi+-+Sabargram+Campsite+-+Sleeping+Buddha+Mountain+Range_sunrise_mountains_.jpg?auto=compress,format?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Sunrise at Surya Top',
      description: 'Golden hour illuminating the Himalayan peaks',
    },
    {
      id: 3,
      src: 'https://www.roamingindian.com/wp-content/uploads/2023/12/Himalaya-View-from-Raithal-Village.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'homestay',
      title: 'Traditional Mountain Home',
      description: 'Authentic Garhwali architecture with modern comfort',
    },
    {
      id: 4,
      src: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img20231004083021.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'culture',
      title: 'Traditional Garhwali Thali',
      description: 'Organic, locally-sourced ingredients prepared with love',
    },
    {
      id: 5,
      src: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img_2213.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Mountain Trail',
      description: 'Well-marked paths through pristine forests',
    },
    {
      id: 6,
      src: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img20240226123903.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'culture',
      title: 'Ancient Temple',
      description: 'Centuries-old stone temple dedicated to local deities',
    },
    {
      id: 7,
      src: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img_2434.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'homestay',
      title: 'Cozy Guest Room',
      description: 'Comfortable accommodation with mountain views',
    },
    {
      id: 8,
      src: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img_2436.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Himalayan Sunset',
      description: 'Spectacular sunset views from high-altitude campsites',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'village',
      title: 'Organic Farm',
      description: 'Traditional farming methods in terraced fields',
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Sacred Lake',
      description: 'Crystal clear alpine lake surrounded by peaks',
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'culture',
      title: 'Local Family',
      description: 'Warm hospitality from our host family',
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'village',
      title: 'Raithal Village',
      description: 'Panoramic view of the traditional mountain village',
    },
    {
      id: 13,
      src: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Glacial Terrain',
      description: 'High-altitude landscape near Gomukh glacier',
    },
    {
      id: 14,
      src: 'https://images.pexels.com/photos/1761280/pexels-photo-1761280.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Mountain Campsite',
      description: 'Camping under the stars in pristine wilderness',
    },
    {
      id: 15,
      src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'culture',
      title: 'Village Elder',
      description: 'Wisdom and stories from longtime village residents',
    },
    {
      id: 16,
      src: 'https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img20231226101731_burst000_cover.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'treks',
      title: 'Mountain Campsite',
      description: 'Camping under the stars in pristine wilderness',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl">
              Capturing the beauty of Himalayan adventures
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Captured <span className="text-emerald-600">Memories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Every photo tells a story of adventure, culture, and natural
              beauty
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Trek Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Cultural Moments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-gray-600">Years Documenting</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own{' '}
            <span className="text-emerald-600">Memories?</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey through the Himalayas and
            capture your own amazing moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '919876543210';
                const message =
                  'Hi! I saw your beautiful gallery and would like to book a trek to capture similar memories.';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Book Your Adventure
            </button>
            <button
              onClick={() => {
                const phoneNumber = '919876543210';
                const message =
                  'Hi! Can you share more photos from recent treks? I would love to see more before booking.';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappURL, '_blank');
              }}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200"
            >
              Request More Photos
            </button>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
