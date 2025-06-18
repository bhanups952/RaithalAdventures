import React, { useEffect, useState } from 'react';

interface ImageItem {
  name: string;
  url: string;
}

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_API_URL =
    'https://api.github.com/repos/<username>/<repo>/contents/<folder>'; // Replace

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();

        const imageList: ImageItem[] = data
          .filter((item: any) => item.type === 'file' && item.name.match(/\.(jpe?g|png|webp)$/i))
          .map((item: any) => ({
            name: item.name,
            url: item.download_url,
          }));

        setImages(imageList);
      } catch (error) {
        console.error('Error loading images:', error);
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
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
            >
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-medium text-gray-800">{img.name}</p>
                <p className="text-sm text-gray-500">From GitHub</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
