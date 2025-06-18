import React, { useState, useEffect } from 'react';

const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzttAXQO_0SnBvIgL9d_6vRbmcLxPnBhqadglnyeH9IQhj6SQupCRCW_EEsPhZY0yjSyA/exec'); // Replace with actual Apps Script URL
        const data = await response.json();

        const items = data.map((item: any, index: number) => ({
          id: index,
          src: item.url,
          title: item.name,
          description: 'Uploaded from Drive',
        }));

        setGalleryItems(items);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Discover the Beauty of Raithal</h1>
          <p className="text-lg">A glimpse into our treks, homestays, and village life.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our <span className="text-emerald-600">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden shadow-md">
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Items Fallback */}
        {galleryItems.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No images found. Make sure your Drive is connected and accessible.
          </p>
        )}
      </section>
    </div>
  );
};

export default GalleryPage;
