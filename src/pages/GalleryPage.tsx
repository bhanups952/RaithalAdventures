import React, { useEffect, useState } from 'react';

interface ImageItem {
  url: string;
  alt: string;
}

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

  const WORDPRESS_GALLERY_URL = 'https://raithaladventuresgallery.wordpress.com/2025/06/19/gallery/';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(WORDPRESS_GALLERY_URL);
        const html = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgElements = doc.querySelectorAll('img');

        const imageList: ImageItem[] = Array.from(imgElements).map((img) => ({
          url: img.getAttribute('src') || '',
          alt: img.getAttribute('alt') || 'Image',
        }));

        setImages(imageList);
      } catch (error) {
        console.error('Error fetching WordPress images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Explore Our <span className="text-emerald-600">Gallery</span>
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : images.length === 0 ? (
        <p className="text-center text-red-500">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <img src={img.url} alt={img.alt} className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="font-medium text-gray-800">{img.alt}</p>
                <p className="text-sm text-gray-500">From WordPress</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
