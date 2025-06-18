import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
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
    {
      name: 'Ashribad Pattanayak',
      location: 'India',
      rating: 5,
      text: 'Thank you praveen bhaii for the homely feel and awesome lunch n dinner. Behaviour is very sweet. Rooms are nice',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjVINcbOTnYEqY_VGAZ-a65ZJ5mPPT88BqtKAt3KnOjLinCCYEbxLw=s40-c-rp-mo-ba4-br100?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      trek: 'Gomukh Tapovan Trek'
    },
    {
      name: 'Amit & Neha Gupta',
      location: 'Delhi, India',
      rating: 5,
      text: 'Was one the best homestay in Raithal village. Well maintained rooms, Clean beds, good food, amazing view and super accommodative host(Praveen). I would love to go back sometime and chill. A big fat thank you to Praveen and his family.',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUuCdvaVvn2pcG_caeXbhQLLMqWrlRO93hoeuvXnvGhO2PFXJl-AQ=s40-c-rp-mo-ba3-br100?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      trek: 'Dodital Trek'
    },
    {
      name: 'Udit Bhattacharya',
      location: 'Holiday with Friends',
      rating: 5,
      text: 'My experience was very good. I enjoyed staying in this homestay. The owner is really very kind and helpful. The food was really tasty and they took care of everything throughout our trip.',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUr0acBkFNXuKjwQYthzJlDBoe6XRgOFgrd6A0qLqK0mSzl8r_G=s40-c-rp-mo-br100?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      trek: 'Gidara Trek'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stories from Our <span className="text-emerald-600">Adventurers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our trekkers and homestay guests have to say 
            about their experiences with Raithal Adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-emerald-600 mr-3" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-emerald-600 font-medium">{testimonial.trek}</p>
                  </div>
                </div>
              </div>
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
    </section>
  );
};

export default TestimonialsSection;