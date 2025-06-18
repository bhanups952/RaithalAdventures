import React, { useState, useEffect } from 'react';

const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'treks', 'homestay', 'culture', 'village'];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('AKfycbwPnk72Li7Y8uwY4MazyoXfbh9pBhHDrBzYC5fuqFq_'); // Replace this with your Web App URL
        const data = await response.json();

        const items = data.map((item: any, index: number) => {
          let category = 'all';
          const name = item.name.toLowerCase();
          if (name.includes('trek')) category = 'treks';
          else if (name.includes('home')) category = 'homestay';
          else if (name.includes('culture')) category = 'culture';
          else if (name.includes('village')) category = 'village';

          return {
            id: index,
            src: item.url,
            title: item.name,
            category,
            description: 'Uploaded from Drive'
          };
        });

        setGalleryItems(items);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    fetchImages();
  }, []);

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Explore Our <span className="text-emerald-600">Gallery</span></h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-xl overflow-hidden shadow-md">
            <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-12">No images found in this category.</p>
      )}
    </div>
  );
};

export default GalleryPage;
