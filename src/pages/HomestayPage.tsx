import React from 'react';
import {
  Star,
  Wifi,
  Utensils,
  Car,
  Home,
  Users,
  Coffee,
  Mountain,
  MapPin,
  Phone,
  Mail,
  Camera,
  Thermometer,
  Calendar,
  Shield,
} from 'lucide-react';

const HomestayPage: React.FC = () => {
  const amenities = [
    {
      icon: Home,
      name: 'Cozy Rooms',
      description: 'Traditional rooms with modern comfort and mountain views',
    },
    {
      icon: Wifi,
      name: 'Free WiFi',
      description: 'High-speed internet connectivity throughout the property',
    },
    {
      icon: Utensils,
      name: 'Local Cuisine',
      description: 'Authentic Garhwali meals prepared with organic ingredients',
    },
    {
      icon: Coffee,
      name: 'Tea/Coffee',
      description: 'Complimentary tea and coffee throughout your stay',
    },
    {
      icon: Mountain,
      name: 'Mountain Views',
      description: 'Panoramic views of snow-capped Himalayan peaks',
    },
    {
      icon: Shield,
      name: 'Safe & Secure',
      description: 'Secure environment with 24/7 host availability',
    },
    {
      icon: Thermometer,
      name: 'Hot Water',
      description: 'Solar heated hot water supply',
    },
  ];

  const localAttractions = [
    {
      name: 'Raithal Village Walk',
      image:
        'https://montaxe.com/wp-content/uploads/2024/11/Raithal-Village.webp?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description:
        'Explore the traditional Garhwali village lifestyle and architecture',
      duration: '1-2 hours',
    },
    {
      name: 'Ancient Temples',
      image:
        'https://frequentmiler.com/wp-content/uploads/2022/04/Temple-in-Raithal-Retreat.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Visit centuries-old temples dedicated to local deities',
      duration: '2-3 hours',
    },
    {
      name: 'Sunset Point',
      image:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1274560585212663407/original/fb9752ce-671b-45f6-b1ef-e8d010287d1d.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Witness breathtaking sunsets over the Himalayan ranges',
      duration: '1 hour',
    },
    {
      name: 'Organic Farm Visit',
      image:
        'https://www.chardham-tours.com/wp-content/uploads/2020/01/banner-Pantwari-a-Himalayan-village-in-Uttarakhand-Village-Tourism.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description:
        'Learn about traditional farming methods and organic practices',
      duration: '2-3 hours',
    },
  ];

  const experiences = [
    {
      title: 'Cooking Class',
      description:
        'Learn to prepare traditional Garhwali dishes using local ingredients and age-old recipes.',
      price: '₹500 per person',
      duration: '2-3 hours',
    },
    {
      title: 'Village Photography Tour',
      description:
        'Guided photography tour capturing the essence of mountain village life and mesmerizing mountains.',
      price: '₹800 per person',
      duration: '3-4 hours',
    },
    {
      title: 'Handicraft Workshop',
      description:
        'Learn traditional crafts like wool spinning and wood carving from local artisans.',
      price: '₹600 per person',
      duration: '2 hours',
    },
    {
      title: 'Stargazing Experience',
      description:
        'Clear mountain skies offer perfect conditions for stargazing with local stories.',
      price: '₹300 per person',
      duration: '1-2 hours',
    },
  ];

  const reviews = [
   {
      name: 'Amit Kumar',
      location: 'Trekking',
      rating: 5,
      text: 'As I visit this place first time in my life I found it very एडवेंचर full ट्रेक for dyara bugyal which start from this village. We can reach this village वाया our personal vehicle. After reaching at Raithal We start our journey for Gui base camp a around 2 pm and We will at your डेस्टिनेशन at 18:00 Gui base camp where We see sunset View which is really very amazing I love it.',
      image: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90C9MYtdqsrhDT1QiRYISLHUL4tYulZtov7At4tomAbwo7GTmjbWG0O2OKew6GW9upRiR5f2c-icmmdxp1CrvKeYTydX2ahqqSZZB8KDUqQFVqtzVzINJJKe6ITZHRlBKxMMi_QA=s125-p-k-rw?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      trek: 'Dayara Bugyal Trek'
    },
    {
      name: 'Viktor Ivanov',
      location: 'Bulgeria',
      rating: 5,
      text: 'It is not only the place, the people are what make it exceptional. 👬Praveen, thank you for being not only a host but also a friend. 🤔 P.s. Your cooking is exceptional. After your meals, it is hard to find a good restaurant in India. Keep up the great work, and I hope to see you soon!',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjU7RA1W810UTuH5EBsrtti-b5FyrQGeoS9I-Knm3HfsjGs2RlOL=s40-c-rp-mo-br100?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      trek: 'Kedartal Trek'
    },
    {
      name: 'Vilas Pote',
      location: 'Mumbai',
      rating: 5,
      text: 'We stayed at this beautiful place. Has view of Himalayas peak. Trek arrangement by Praveen were excellent. Food, tent and the trek guide was par excellence. Raithal trek in meadows & snow is nice experience.',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjXG6aF1uvAkOQt0Y_BIOY-QNb-pLEbe2v5hj8udxrcm3u5sj-_pkw=s40-c-rp-mo-br100',
      trek: 'Surya Top Trek'
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img20240810074356.jpg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
          alt="Raithal Homestay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">
              Raithal Barbeque Homestay
            </h1>
            <p className="text-xl">
              Experience authentic Himalayan hospitality in the heart of Garhwal
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Home Away From Home in the{' '}
              <span className="text-emerald-600">Himalayas</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nestled at an altitude of 2,200 meters in the picturesque Raithal
              village, our family-run homestay offers an authentic glimpse into
              the traditional Garhwali way of life. Wake up to panoramic views
              of snow-capped peaks, breathe in the crisp mountain air, and
              experience the warmth of Himalayan hospitality.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our homestay serves as the perfect base for trekking adventures
              while providing a comfortable retreat where you can immerse
              yourself in local culture, savor traditional cuisine, and create
              memories that will last a lifetime.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <div className="flex">{renderStars(5)}</div>
                <span className="ml-2 text-sm text-gray-600">
                  (4.9/5 from 200+ guests)
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <Users className="h-4 w-4 inline mr-1" />
                Family-run since 2019
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMTzVBmXmTufVyDFIVJjFjxFg6j-YyXVmc67oyC=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Homestay room"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPp50DLWNGdHrps1AQMk3pw6JAG0NJE5LtYj3hp=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Traditional meal"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img20241230085449.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Mountain view"
              className="w-full h-48 object-cover rounded-lg shadow-md col-span-2"
            />
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Comfort Meets <span className="text-emerald-600">Tradition</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {amenity.name}
                  </h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Local Attractions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore <span className="text-emerald-600">Raithal Village</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localAttractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-center text-sm text-emerald-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{attraction.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Experiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Unique <span className="text-emerald-600">Local Experiences</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-lg p-6 border border-emerald-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    
                  </div>
                  <button
                    onClick={() => {
                      const phoneNumber = '918970308534';
                      const message = `Hi! I would like to book the ${experience.title} experience. Can you provide more details?`;
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our <span className="text-emerald-600">Guests Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
             <div className="text-center mt-12">

            <button 
              onClick={() => {
                const whatsappURL = `https://www.google.com/search?sca_esv=6b586cb292188507&rlz=1C1CHBF_enIN1046IN1046&sxsrf=AE3TifNKue5IEbqZOQ55n6UIabIrabQNkQ:1750239243995&q=Raithal+Adventures&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9UAnCXJ6qUt3M14oBTRBXNv0LLe8ET5hYYH3ItUJLG8ns8wZLCs_wK2g259WtBGtf3VteQq3ZBZ6E4DjG8hrJ0uYvgQMJAaZKTbpwlVAZYCEw6zlA%3D%3D&sa=X&ved=2ahUKEwiH7KOj1fqNAxXvTWwGHcW8MKoQrrQLegQIMhAA&biw=1920&bih=945&dpr=1`;
                window.open(whatsappURL, '_blank');
              }}
              className="w-full bg-green-500 text-white py-4 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Check reviews on Google
            </button>
        </div>
        </div>

        {/* Booking Section */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Mountain Getaway?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Book your stay at Raithal Homestay and experience authentic
            Himalayan hospitality
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">₹800</div>
              <div className="text-emerald-100">Per person per night</div>
              <div className="text-sm text-emerald-200">Includes all meals</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '918970308534';
                const message =
                  'Hi! I would like to book a stay at Raithal Homestay. Can you provide availability and details?';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book via WhatsApp
            </button>
            <button
              onClick={() => {
                const phoneNumber = '918970308534';
                const message =
                  'Hi! I need more information about Raithal Homestay rates and availability. Can you help?';
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappURL, '_blank');
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayPage;
