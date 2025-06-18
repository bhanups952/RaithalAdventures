import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Best Time to Trek Dayara Bugyal: A Complete Seasonal Guide',
      excerpt: 'Discover the perfect season for your Dayara Bugyal adventure. From snow-covered meadows in winter to lush green carpets in summer, each season offers unique experiences.',
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Devendra Singh Rawat',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Trekking Guide',
      tags: ['Dayara Bugyal', 'Best Time', 'Seasonal Guide']
    },
    {
      id: 2,
      title: 'Essential Packing List for Himalayan Treks: What Locals Recommend',
      excerpt: 'Learn from local guides about the must-have items for your Himalayan adventure. Our comprehensive packing list covers everything from clothing to emergency supplies.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Ramesh Singh',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Preparation',
      tags: ['Packing', 'Equipment', 'Safety']
    },
    {
      id: 3,
      title: 'Traditional Garhwali Cuisine: A Foodie\'s Guide to Mountain Flavors',
      excerpt: 'Explore the authentic flavors of the Garhwal region. From nutritious mandua roti to warming pahadi dal, discover the healthy mountain diet that fuels trekkers.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Sunita Rawat',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Culture & Food',
      tags: ['Garhwali Cuisine', 'Culture', 'Local Food']
    },
    {
      id: 4,
      title: 'High Altitude Acclimatization: Tips from Local Mountain Guides',
      excerpt: 'Learn the secrets of proper acclimatization from guides who have spent their lives in the mountains. Prevent altitude sickness and enjoy your trek safely.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Devendra Singh Rawat',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Health & Safety',
      tags: ['Altitude', 'Health', 'Safety Tips']
    },
    {
      id: 5,
      title: 'Sustainable Trekking: How to Leave No Trace in the Himalayas',
      excerpt: 'Discover responsible trekking practices that protect the pristine mountain environment. Learn how to minimize your impact while maximizing your experience.',
      image: 'https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Ramesh Singh',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Sustainability',
      tags: ['Eco-friendly', 'Environment', 'Responsible Tourism']
    },
    {
      id: 6,
      title: 'Village Life in Raithal: Stories from the Heart of Garhwal',
      excerpt: 'Get an intimate look at daily life in our mountain village. From traditional farming to ancient customs, discover the rich heritage of Garhwali culture.',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Sunita Rawat',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Culture & Lifestyle',
      tags: ['Village Life', 'Culture', 'Traditions']
    }
  ];

  const categories = [
    'All Posts',
    'Trekking Guide',
    'Preparation',
    'Culture & Food',
    'Health & Safety',
    'Sustainability',
    'Culture & Lifestyle'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mountain Stories</h1>
            <p className="text-xl">Insights, tips, and tales from the Himalayas</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <img 
                  src={filteredPosts[0].image} 
                  alt={filteredPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(filteredPosts[0].date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="flex items-center text-xs text-gray-500">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-gray-500">{formatDate(post.date)}</p>
                    </div>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1">
                    <span>Read</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-emerald-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Mountain Stories</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our blog newsletter and get the latest trekking tips, cultural insights, 
            and mountain stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact for Blog Contributions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have a <span className="text-emerald-600">Mountain Story</span> to Share?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We love featuring guest stories from fellow trekkers and mountain enthusiasts. 
            Share your adventure with our community!
          </p>
          <button 
            onClick={() => {
              const phoneNumber = '919876543210';
              const message = 'Hi! I have a mountain story/experience I would like to share on your blog. Can you provide details about guest contributions?';
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
          >
            Share Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;