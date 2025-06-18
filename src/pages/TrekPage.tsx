import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  TrendingUp, 
  Users, 
  Mountain, 
  Calendar, 
  CheckCircle, 
  X, 
  Thermometer, 
  Cloud, 
  Sun, 
  Snowflake,
  Phone,
  MessageCircle,
  Camera,
  Utensils,
  Bed,
  Car,
  Shield,
  Heart,
  Star
} from 'lucide-react';

const TrekPage: React.FC = () => {
  const { trekId } = useParams<{ trekId: string }>();

  const treksData = {
    'dayara-bugyal': {
      name: 'Dayara Bugyal Trek',
      image: 'https://himalayanwarrior.com/wp-content/uploads/2022/06/uttarkashiwodkow-3.jpg',
      difficulty: 'Easy-Moderate',
      duration: '4 Days',
      altitude: '3,408m',
      season: 'Apr-Jun, Sep-Nov',
      price: '₹4,999',
      overview: 'Dayara Bugyal is one of the most beautiful high-altitude meadows in India, offering spectacular 360-degree views of the Himalayan peaks. This trek is perfect for beginners and experienced trekkers alike, featuring vast alpine meadows, dense oak forests, and stunning sunrise views.',
      highlights: [
        '360° Himalayan Views including Bandarpoonch, Kala Nag, and Srikanth peaks',
        'Vast Alpine Meadows stretching as far as the eye can see',
        'Snow Trekking opportunities in winter months',
        'Beautiful Rhododendron forests in spring',
        'Traditional Garhwali villages and culture'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Dehradun to Raithal Village',
          description: 'Drive from Dehradun to Raithal village (200 km, 7-8 hours). Check into homestay, evening briefing about the trek.',
          meals: 'Lunch, Dinner',
          accommodation: 'Homestay',
          activities: ['Scenic drive through Uttarkashi', 'Village orientation', 'Equipment check']
        },
        {
          day: 2,
          title: 'Raithal to Gui Campsite',
          description: 'Trek from Raithal (2,200m) to Gui campsite (2,900m). 4-5 hours trek through dense oak and rhododendron forests.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: 'Camping',
          activities: ['Forest trekking', 'Bird watching', 'Photography']
        },
        {
          day: 3,
          title: 'Gui to Dayara Bugyal and back to Gui',
          description: 'Trek to Dayara Bugyal (3,408m). Experience the vast meadows and 360-degree mountain views. Sunrise and sunset photography.',
          meals: 'Breakfast, Lunch, Dinner',
          accommodation: 'Camping',
          activities: ['Meadow exploration', 'Peak viewing', 'Sunrise/sunset photography']
        },
        {
          day: 4,
          title: 'Gui to Raithal to Dehradun',
          description: 'Early morning sunrise, trek back to Raithal, and drive to Dehradun. Trip concludes by evening.',
          meals: 'Breakfast, Lunch',
          accommodation: 'N/A',
          activities: ['Sunrise viewing', 'Descent trek', 'Return journey']
        }
      ],
      included: [
        'Accommodation (homestay and camping)',
        'All meals from Day 1 lunch to Day 4 lunch',
        'Professional trek guide',
        'Camping equipment (tents, sleeping bags, mats)',
        'First aid kit and safety equipment',
      ],
      excluded: [
        'Transportation from Dehradun to Dehradun',
        'Personal trekking gear (shoes, backpack, clothes)',
        'Travel insurance',
        'Personal expenses',
        'Tips for guide and support staff',
        'Any meals not mentioned in inclusions',
      ],
      packingList: [
        'Trekking shoes with good grip',
        'Warm clothes (jacket, thermals)',
        'Rain gear (poncho/raincoat)',
        'Sunglasses and sunscreen',
        'Personal water bottle',
        'Headlamp/flashlight',
        'Personal medications',
        'Camera and extra batteries'
      ],
      weather: {
        spring: { temp: '10-20°C', conditions: 'Pleasant, blooming rhododendrons' },
        summer: { temp: '15-25°C', conditions: 'Warm days, cool nights' },
        monsoon: { temp: '12-18°C', conditions: 'Heavy rainfall, not recommended' },
        winter: { temp: '-5 to 10°C', conditions: 'Snow covered, requires winter gear' }
      },
      fitness: 'Moderate fitness required. Ability to walk 5-6 hours daily on mountain terrain.',
      faqs: [
        {
          question: 'Is this trek suitable for beginners?',
          answer: 'Yes, Dayara Bugyal is considered one of the best beginner treks in the Himalayas due to its moderate difficulty and well-marked trails.'
        },
        {
          question: 'What is the best time to visit?',
          answer: 'April to June and September to November are ideal. Winter treks (December to March) offer snow experience but require additional preparation.'
        },
        {
          question: 'Are there any age restrictions?',
          answer: 'Minimum age is 10 years. Participants above 60 years need medical clearance.'
        }
      ],
      gallery: [
        'https://himalayanwarrior.com/wp-content/uploads/2022/06/uttarkashiwodkow-3.jpg',
        'https://bluemountainscottages.com/wp-content/uploads/2021/03/Dayara-Bugyal-Trek-in-Uttarakhand.jpg',
        'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg',
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'
      ]
    },
    'surya-top': {
      name: 'Surya Top Trek',
      image: 'https://bluemountainscottages.com/wp-content/uploads/2021/03/Dayara-Bugyal-Trek-in-Uttarakhand.jpg',
      difficulty: 'Easy-Moderate',
      duration: '6 Days',
      altitude: '3,900m',
      season: 'Mar-Jun, Sep-Dec',
      price: '₹9,499',
      overview: 'Surya Top trek offers spectacular sunrise views over the Himalayan peaks. This relatively easy trek is perfect for those seeking a quick mountain getaway with stunning views and cultural experiences.',
      highlights: [
        'Spectacular sunrise views over Himalayan peaks',
        'Dense rhododendron forests',
        'Traditional Garhwali villages',
        'Easy accessibility from Raithal',
        'Perfect for weekend getaways'
      ],
      itinerary: [
  {
    day: 1,
    title: 'Dehradun to Raithal',
    description: 'Drive to Raithal village, check into homestay, evening village walk and briefing.',
    meals: 'Lunch, Dinner',
    accommodation: 'Homestay',
    activities: ['Village exploration', 'Cultural interaction', 'Trek briefing']
  },
  {
    day: 2,
    title: 'Raithal to Chilapada',
    description: 'Begin trek through oak and rhododendron forests to reach the peaceful Chilapada campsite.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Forest trail', 'Birdwatching', 'Photography']
  },
  {
    day: 3,
    title: 'Chilapada to Devkund',
    description: 'Continue trekking through alpine terrain, gradually gaining altitude to Devkund.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Alpine trekking', 'Scenic views', 'Acclimatization']
  },
  {
    day: 4,
    title: 'Devkund to Surya Top and back to Devkund',
    description: 'Early morning summit push to Surya Top for panoramic Himalayan views. Return to Devkund by evening.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Summit hike', 'Himalayan views', 'Photography']
  },
  {
    day: 5,
    title: 'Devkund to Gui',
    description: 'Descend to the beautiful forest-side campsite of Gui for a relaxed day.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Leisure trek', 'Forest camping', 'Relaxation']
  },
  {
    day: 6,
    title: 'Gui to Raithal and drive back to Dehradun',
    description: 'Final descent to Raithal followed by a scenic drive back to Dehradun.',
    meals: 'Breakfast, Lunch',
    accommodation: 'N/A',
    activities: ['Trek descent', 'Village farewell', 'Return journey']
  }
],

      included: [
        'Accommodation (homestay and camping)',
        'All meals as per itinerary',
        'Professional guide',
        'Camping equipment',
        'Transportation',
        'First aid kit'
      ],
      excluded: [
        'Personal trekking gear',
        'Travel insurance',
        'Personal expenses',
        'Tips for staff'
      ],
      packingList: [
        'Comfortable trekking shoes',
        'Warm clothing',
        'Rain protection',
        'Sunglasses and sunscreen',
        'Water bottle',
        'Camera',
        'Personal medications'
      ],
      weather: {
        spring: { temp: '12-22°C', conditions: 'Pleasant with blooming flowers' },
        summer: { temp: '18-28°C', conditions: 'Warm and clear' },
        monsoon: { temp: '15-20°C', conditions: 'Rainy, not recommended' },
        winter: { temp: '0-15°C', conditions: 'Cold with possible snow' }
      },
      fitness: 'Basic fitness required. Suitable for beginners.',
      faqs: [
        {
          question: 'How difficult is this trek?',
          answer: 'Surya Top is rated as Easy, making it perfect for beginners and families.'
        },
        {
          question: 'Can children participate?',
          answer: 'Yes, children above 8 years can easily participate with adult supervision.'
        }
      ],
      gallery: [
        'https://bluemountainscottages.com/wp-content/uploads/2021/03/Dayara-Bugyal-Trek-in-Uttarakhand.jpg',
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
        'https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg'
      ]
    },
    'gidara': {
      name: 'Gidara Trek',
      image: 'https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/bb70eee3-6da7-4362-b5e9-28e2847601a4_Gidara+Bugyal+Trek+-+Indiahikes+-+Akshay+Aralikatti+3-6.jpg',
      difficulty: 'Easy-Moderate',
      duration: '7 Days',
      altitude: '4,250m',
      season: 'Apr-Jun, Sep-Nov',
      price: '₹19,999',
      overview: 'Gidara is a hidden gem offering a peaceful trekking experience away from crowded trails. This short trek provides beautiful meadows, forest walks, and cultural immersion.',
      highlights: [
        'Hidden gem with fewer crowds',
        'Peaceful meadows and forests',
        'Cultural village experience',
        'Perfect for weekend trips',
        'Beautiful wildflowers in season'
      ],
      itinerary: [
  {
    day: 1,
    title: 'Dehradun to Raithal',
    description: 'Drive from Dehradun to Raithal village. Settle into your homestay and explore the surroundings.',
    meals: 'Lunch, Dinner',
    accommodation: 'Homestay',
    activities: ['Village exploration', 'Cultural interaction', 'Trek briefing']
  },
  {
    day: 2,
    title: 'Raithal to Chilapada',
    description: 'Begin trekking through oak and rhododendron forests to reach the serene campsite of Chilapada.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Forest trail', 'Birdwatching', 'Photography']
  },
  {
    day: 3,
    title: 'Chilapada to Surya Top',
    description: 'Trek to Surya Top, gaining altitude and experiencing stunning ridge-line views along the way.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Alpine trekking', 'Himalayan views', 'Acclimatization']
  },
  {
    day: 4,
    title: 'Surya Top to Gidara Bugyal',
    description: 'Traverse across breathtaking meadows and ridge trails to reach the expansive Gidara Bugyal.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Bugyal crossing', '360° mountain views', 'Photography']
  },
  {
    day: 5,
    title: 'Gidara Bugyal to Dokharyani',
    description: 'Descend through rolling meadows and forests to reach the calm and remote Dokharyani campsite.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Meadow descent', 'Peaceful landscapes', 'Wildlife spotting']
  },
  {
    day: 6,
    title: 'Dokharyani to Bhangeli',
    description: 'Continue your descent through forest trails to the village of Bhangeli and settle into a homestay.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Homestay',
    activities: ['Forest trek', 'Cultural interaction', 'Evening relaxation']
  },
  {
    day: 7,
    title: 'Bhangeli to Dehradun',
    description: 'Continue your descent through forest trails to the village of Bhangeli and settle into a homestay.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Homestay',
    activities: ['Forest trek', 'Cultural interaction', 'Evening relaxation']
  }
],

      included: [
        'Transportation',
        'Camping equipment',
        'All meals as per itinerary',
        'Professional guide',
        'First aid kit'
      ],
      excluded: [
        'Personal gear',
        'Insurance',
        'Personal expenses'
      ],
      packingList: [
        'Trekking shoes',
        'Warm clothes',
        'Rain gear',
        'Water bottle',
        'Camera',
        'Personal items'
      ],
      weather: {
        spring: { temp: '10-20°C', conditions: 'Pleasant with flowers' },
        summer: { temp: '15-25°C', conditions: 'Warm and comfortable' },
        monsoon: { temp: '12-18°C', conditions: 'Wet, avoid trekking' },
        winter: { temp: '0-12°C', conditions: 'Cold, limited access' }
      },
      fitness: 'Basic to moderate fitness required.',
      faqs: [
        {
          question: 'Is this trek crowded?',
          answer: 'No, Gidara is a lesser-known trek, offering a peaceful experience.'
        },
        {
          question: 'Can it be done in one day?',
          answer: 'While possible, we recommend 2 days to fully enjoy the experience.'
        }
      ],
      gallery: [
        'https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/bb70eee3-6da7-4362-b5e9-28e2847601a4_Gidara+Bugyal+Trek+-+Indiahikes+-+Akshay+Aralikatti+3-6.jpg',
        'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg'
      ]
    },
    'dodital': {
      name: 'Dodital Trek',
      image: 'https://t.eucdn.in/tourism/lg/dodital-in-summers-5646747.webp',
      difficulty: 'Moderate',
      duration: '6 Days',
      altitude: '4,110m',
      season: 'May-Jun, Sep-Oct',
      price: '₹7,999',
      overview: 'Dodital, the sacred lake dedicated to Lord Ganesha, offers a perfect blend of spirituality and adventure. The trek features dense forests, pristine lake, and excellent trout fishing opportunities.',
      highlights: [
        'Sacred lake dedicated to Lord Ganesha',
        'Excellent trout fishing opportunities',
        'Dense deodar and rhododendron forests',
        'Rich wildlife including Himalayan birds',
        'Spiritual and cultural significance'
      ],
      itinerary: [
  {
    day: 1,
    title: 'Dehradun to Agoda',
    description: 'Drive to Sangamchatti and begin a short trek to the village of Agoda. Settle into your homestay and explore the area.',
    meals: 'Lunch, Dinner',
    accommodation: 'Homestay',
    activities: ['Village walk', 'Acclimatization', 'Local interaction']
  },
  {
    day: 2,
    title: 'Agoda to Manjhi',
    description: 'Trek through pine and oak forests to the high-altitude meadow of Manjhi, known for its peaceful ambiance and scenic surroundings.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Forest trekking', 'Scenic views', 'Photography']
  },
  {
    day: 3,
    title: 'Manjhi to Dodital',
    description: 'Continue trekking to Dodital, a pristine high-altitude lake believed to be the birthplace of Lord Ganesha.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Lakeside trekking', 'Nature immersion', 'Camping by the lake']
  },
  {
    day: 4,
    title: 'Dodital to Darwa Top and back',
    description: 'Early morning ascent to Darwa Top for panoramic Himalayan views. Spend time at the summit before returning to Dodital by afternoon.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Summit climb', 'Himalayan views', 'Adventure photography']
  },
  {
    day: 5,
    title: 'Dodital to Agoda',
    description: 'Retrace your steps through forests and meadows back to the village of Agoda.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Homestay',
    activities: ['Forest descent', 'Birdwatching', 'Village stay']
  },
  {
    day: 6,
    title: 'Agoda to Dehradun',
    description: 'Trek down to Sangamchatti and drive back to Dehradun with beautiful memories.',
    meals: 'Breakfast',
    accommodation: 'N/A',
    activities: ['Trek end', 'Drive return', 'Farewell moments']
  }
],
      included: [
        'All transportation',
        'Accommodation and camping',
        'All meals as per itinerary',
        'Professional guide and support staff',
        'Camping equipment',
        'First aid and safety equipment',
        'Forest permits'
      ],
      excluded: [
        'Personal trekking equipment',
        'Travel insurance',
        'Fishing equipment (can be arranged)',
        'Personal expenses',
        'Tips for staff'
      ],
      packingList: [
        'Good trekking boots',
        'Warm clothing and thermals',
        'Rain gear',
        'Sleeping bag (if personal)',
        'Headlamp and batteries',
        'Water bottles',
        'Personal medications',
        'Camera and extra batteries'
      ],
      weather: {
        spring: { temp: '8-18°C', conditions: 'Pleasant with blooming rhododendrons' },
        summer: { temp: '12-22°C', conditions: 'Ideal trekking weather' },
        monsoon: { temp: '10-16°C', conditions: 'Heavy rainfall, trek closed' },
        winter: { temp: '-5 to 8°C', conditions: 'Snow covered, very cold' }
      },
      fitness: 'Good fitness required. Ability to trek 6-7 hours daily.',
      faqs: [
        {
          question: 'Can we fish in Dodital?',
          answer: 'Yes, trout fishing is allowed with proper permits. Equipment can be arranged.'
        },
        {
          question: 'What is the religious significance?',
          answer: 'Dodital is believed to be the birthplace of Lord Ganesha and holds great spiritual significance.'
        },
        {
          question: 'Is the trek suitable for beginners?',
          answer: 'This is a moderate trek requiring some prior trekking experience and good fitness.'
        }
      ],
      gallery: [
        'https://t.eucdn.in/tourism/lg/dodital-in-summers-5646747.webp',
        'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg'
      ]
    },
    'kedartal': {
      name: 'Kedartal Trek',
      image: 'https://images.prismic.io/indiahike/ede9728a-50dd-45f0-a370-f79f4e3e4c56_Kedartal_Indiahikes_Kumar+Kale_2021_+%281%29.jpg',
      difficulty: 'Difficult',
      duration: '6 Days',
      altitude: '4,750m',
      season: 'May-Jun, Sep-Oct',
      price: '₹15,999',
      overview: 'Kedartal is one of the most challenging and rewarding treks in the Garhwal region. The glacial lake sits at the base of Thalay Sagar peak, offering breathtaking views and a true high-altitude adventure.',
      highlights: [
        'Spectacular glacial lake at 4,750m',
        'Close views of Thalay Sagar peak',
        'Challenging high-altitude trekking',
        'Pristine wilderness experience',
        'Advanced mountaineering preparation'
      ],
      itinerary: [
  {
    day: 1,
    title: 'Dehradun to Gangotri',
    description: 'Drive from Dehradun to Gangotri (3,100m), a sacred town and the starting point of the trek. Acclimatize and explore the temple town.',
    meals: 'Lunch, Dinner',
    accommodation: 'Guesthouse',
    activities: ['Scenic drive', 'Temple visit', 'Acclimatization walk']
  },
  {
    day: 2,
    title: 'Gangotri to Bhoj Kharak',
    description: 'Begin the trek along the Kedar Ganga River. Steep and rocky trail through pine forests leads to Bhoj Kharak (3,780m).',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['River trail', 'Forest trekking', 'Mountain views']
  },
  {
    day: 3,
    title: 'Bhoj Kharak to Kedar Kharak',
    description: 'Trek through rugged landscapes and alpine meadows to reach the scenic campsite of Kedar Kharak (4,270m).',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Alpine trek', 'Glacial views', 'Photography']
  },
  {
    day: 4,
    title: 'Kedar Kharak to Kedartal and back',
    description: 'Early morning summit push to Kedartal (4,750m), a glacial lake with crystal-clear reflections of Thalay Sagar. Return to Kedar Kharak.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Glacial lake visit', 'Thalay Sagar views', 'Summit photography']
  },
  {
    day: 5,
    title: 'Kedar Kharak to Bhoj Kharak',
    description: 'Descend through the alpine trail back to Bhoj Kharak, retracing your journey with new perspectives.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Leisure descent', 'Forest views', 'Relaxation']
  },
  {
    day: 6,
    title: 'Bhoj Kharak to Gangotri and drive to Dehradun',
    description: 'Final descent to Gangotri, followed by the return drive to Dehradun.',
    meals: 'Breakfast, Lunch',
    accommodation: 'N/A',
    activities: ['Trek descent', 'Scenic return drive']
  }
],
      included: [
        'All transportation',
        'Accommodation (guesthouse and camping)',
        'All meals as per itinerary',
        'Professional high-altitude guide',
        'Technical climbing support',
        'High-altitude camping equipment',
        'Safety equipment and first aid',
        'Permits and fees'
      ],
      excluded: [
        'Personal mountaineering equipment',
        'High-altitude insurance (mandatory)',
        'Personal expenses',
        'Tips for guide and support team',
        'Emergency evacuation costs'
      ],
      packingList: [
        'High-altitude mountaineering boots',
        'Down jacket and sleeping bag',
        'Technical climbing gear',
        'High-altitude clothing system',
        'Mountaineering accessories',
        'Personal safety equipment',
        'High-energy food supplements',
        'Altitude sickness medication'
      ],
      weather: {
        spring: { temp: '5-15°C at base, -10°C at summit', conditions: 'Variable, possible snow' },
        summer: { temp: '10-20°C at base, -5°C at summit', conditions: 'Best trekking season' },
        monsoon: { temp: '8-16°C', conditions: 'Dangerous, trek closed' },
        winter: { temp: '-15 to 5°C', conditions: 'Extreme cold, not recommended' }
      },
      fitness: 'Excellent fitness and prior high-altitude experience required.',
      faqs: [
        {
          question: 'Do I need mountaineering experience?',
          answer: 'Yes, prior high-altitude trekking experience and basic mountaineering skills are essential.'
        },
        {
          question: 'What about altitude sickness?',
          answer: 'Proper acclimatization is crucial. We include rest days and monitor all participants closely.'
        },
        {
          question: 'Is special insurance required?',
          answer: 'Yes, high-altitude insurance covering up to 6000m is mandatory for this trek.'
        }
      ],
      gallery: [
        'https://images.prismic.io/indiahike/ede9728a-50dd-45f0-a370-f79f4e3e4c56_Kedartal_Indiahikes_Kumar+Kale_2021_+%281%29.jpg',
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
        'https://images.pexels.com/photos/1761280/pexels-photo-1761280.jpeg'
      ]
    },
    'gomukh-tapovan': {
      name: 'Gomukh Tapovan Trek',
      image: 'https://images.prismic.io/indiahike/d50921e6-039a-4251-9190-221239a46d8a_Gaumukh+Tapovan_Sooraj+Kumar_View+of+Mount+Shivling+at+Tapovan.jpg',
      difficulty: 'Difficult',
      duration: '6 Days',
      altitude: '4,463m',
      season: 'May-Jun, Sep-Oct',
      price: '₹17,499',
      overview: 'The ultimate spiritual and adventure journey to the source of the Ganges. This challenging trek combines the sacred Gomukh glacier with the high-altitude meadows of Tapovan, offering close views of Shivling peak.',
      highlights: [
        'Source of the sacred Ganges river',
        'Spectacular views of Shivling peak',
        'High-altitude meadows of Tapovan',
        'Spiritual significance and pilgrimage',
        'Advanced mountaineering experience'
      ],
      itinerary: [
  {
    day: 1,
    title: 'Dehradun to Gangotri',
    description: 'Drive from Dehradun to the sacred town of Gangotri (3,100m). Explore the temple and acclimatize for the trek ahead.',
    meals: 'Lunch, Dinner',
    accommodation: 'Guesthouse',
    activities: ['Scenic drive', 'Temple visit', 'Evening walk']
  },
  {
    day: 2,
    title: 'Gangotri to Chirbasa',
    description: 'Begin trekking along the Bhagirathi River through pine forests and valleys to reach Chirbasa (3,600m).',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['River walk', 'Forest trail', 'Photography']
  },
  {
    day: 3,
    title: 'Chirbasa to Bhojbasa',
    description: 'Trek to Bhojbasa (3,800m), a windy plain with views of Bhagirathi peaks. Enjoy an open valley and early sunset.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Alpine trekking', 'Himalayan views', 'Acclimatization']
  },
  {
    day: 4,
    title: 'Bhojbasa to Tapovan via Gaumukh',
    description: 'Early morning trek to Gaumukh (source of the Ganges), then ascend a steep trail to Tapovan (4,400m) with stunning views of Shivling and Meru.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Glacier visit', 'High-altitude climb', 'Base camp photography']
  },
  {
    day: 5,
    title: 'Tapovan to Bhojbasa',
    description: 'After a relaxed morning and photography session at Tapovan, descend carefully back to Bhojbasa.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Camping',
    activities: ['Sunrise views', 'Glacier descent', 'Photography']
  },
  {
    day: 6,
    title: 'Bhojbasa to Gangotri and drive to Dehradun',
    description: 'Trek back to Gangotri and continue your return drive to Dehradun by evening.',
    meals: 'Breakfast, Lunch',
    accommodation: 'N/A',
    activities: ['Trek end', 'Return drive', 'Farewell moments']
  }
],
      included: [
        'All transportation',
        'Accommodation (guesthouse and camping)',
        'All meals as per itinerary',
        'Professional high-altitude guide',
        'Technical support staff',
        'High-altitude camping equipment',
        'Safety and rescue equipment',
        'All permits and fees',
        'Oxygen cylinder for emergency'
      ],
      excluded: [
        'Personal mountaineering equipment',
        'High-altitude insurance (mandatory)',
        'Personal expenses',
        'Tips for guide and support team',
        'Emergency evacuation costs',
        'Satellite phone rental'
      ],
      packingList: [
        'High-altitude mountaineering boots',
        'Down jacket and pants',
        'High-altitude sleeping bag',
        'Technical climbing gear',
        'Glacier travel equipment',
        'High-altitude clothing system',
        'Personal safety equipment',
        'High-energy food and supplements'
      ],
      weather: {
        spring: { temp: '0-12°C at base, -15°C at Tapovan', conditions: 'Cold with possible snow' },
        summer: { temp: '5-18°C at base, -8°C at Tapovan', conditions: 'Best season for trekking' },
        monsoon: { temp: '3-15°C', conditions: 'Dangerous, trek closed' },
        winter: { temp: '-20 to 0°C', conditions: 'Extreme conditions, not accessible' }
      },
      fitness: 'Excellent fitness and extensive high-altitude experience required.',
      faqs: [
        {
          question: 'What makes this trek so challenging?',
          answer: 'High altitude, glacier crossings, technical terrain, and extreme weather conditions make this one of the most challenging treks in India.'
        },
        {
          question: 'Do I need technical climbing skills?',
          answer: 'Basic mountaineering skills and prior high-altitude experience are essential. We provide technical support.'
        },
        {
          question: 'What about the spiritual significance?',
          answer: 'Gomukh is considered the source of Ganges, and Tapovan is where many sages have meditated. It\'s a deeply spiritual journey.'
        },
        {
          question: 'Is rescue possible at high altitude?',
          answer: 'Limited rescue options exist. Comprehensive insurance and emergency preparedness are mandatory.'
        }
      ],
      gallery: [
        'https://images.prismic.io/indiahike/d50921e6-039a-4251-9190-221239a46d8a_Gaumukh+Tapovan_Sooraj+Kumar_View+of+Mount+Shivling+at+Tapovan.jpg',
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
        'https://images.pexels.com/photos/1761280/pexels-photo-1761280.jpeg'
      ]
    }
  };

  const trek = treksData[trekId as keyof typeof treksData];

  if (!trek) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trek Not Found</h1>
          <p className="text-gray-600 mb-8">The trek you're looking for doesn't exist.</p>
          <Link to="/" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Easy-Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Moderate': return 'bg-orange-100 text-orange-800';
      case 'Difficult': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getWeatherIcon = (season: string) => {
    switch (season) {
      case 'spring': return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'summer': return <Sun className="h-5 w-5 text-orange-500" />;
      case 'monsoon': return <Cloud className="h-5 w-5 text-blue-500" />;
      case 'winter': return <Snowflake className="h-5 w-5 text-blue-300" />;
      default: return <Thermometer className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={trek.image} 
          alt={trek.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">{trek.name}</h1>
            <p className="text-xl">{trek.overview}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trek Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Difficulty</div>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getDifficultyColor(trek.difficulty)}`}>
                    {trek.difficulty}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-900">{trek.duration}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Mountain className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Max Altitude</div>
                  <div className="font-semibold text-gray-900">{trek.altitude}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Best Season</div>
                  <div className="font-semibold text-gray-900">{trek.season}</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trek Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trek.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary<p>(Itinerary can be cutomised on Request)</p></h2>
              <div className="space-y-6">
                {trek.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-6 pb-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{day.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <Utensils className="h-4 w-4 text-emerald-600 mr-2" />
                        <span className="text-gray-600">Meals: {day.meals}</span>
                      </div>
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 text-emerald-600 mr-2" />
                        <span className="text-gray-600">Stay: {day.accommodation}</span>
                      </div>
                      <div className="flex items-center">
                        <Camera className="h-4 w-4 text-emerald-600 mr-2" />
                        <span className="text-gray-600">Activities: {day.activities.length}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, actIndex) => (
                          <span key={actIndex} className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(trek.weather).map(([season, info]) => (
                  <div key={season} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      {getWeatherIcon(season)}
                      <h3 className="font-semibold text-gray-900 ml-2 capitalize">{season}</h3>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <Thermometer className="h-4 w-4 inline mr-1" />
                      {info.temp}
                    </div>
                    <p className="text-xs text-gray-600">{info.conditions}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included/Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {trek.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <X className="h-5 w-5 text-red-600 mr-2" />
                  What's Excluded
                </h3>
                <ul className="space-y-2">
                  {trek.excluded.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Packing List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Packing List</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trek.packingList.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {trek.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trek.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${trek.name} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{trek.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{trek.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(trek.difficulty)}`}>
                      {trek.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Max Altitude:</span>
                    <span className="font-semibold">{trek.altitude}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Season:</span>
                    <span className="font-semibold">{trek.season}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      const phoneNumber = '918970308534';
                      const message = `Hi! I would like to book the ${trek.name}. Can you provide availability and details?`;
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Book via WhatsApp</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      const phoneNumber = '918970308534';
                      const message = `Hi! I need more information about the ${trek.name}. Can you help?`;
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    className="w-full border-2 border-emerald-600 text-emerald-600 py-3 px-6 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Get More Info</span>
                  </button>
                </div>
              </div>

              {/* Fitness Requirements */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  Fitness Requirements
                </h3>
                <p className="text-gray-700 text-sm">{trek.fitness}</p>
              </div>

              {/* Safety Information */}
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-emerald-600 mr-2" />
                  Safety First
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    Professional certified guides
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    First aid trained staff
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    Emergency communication
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    Weather monitoring
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-gray-700">+91 8970308534</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-gray-700">WhatsApp Available 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-gray-700">Raithal Village, Uttarakhand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekPage;