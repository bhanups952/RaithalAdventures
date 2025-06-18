import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import TrekHighlights from '../components/Home/TrekHighlights';
import HomestaySection from '../components/Home/HomestaySection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import NewsletterSection from '../components/Home/NewsletterSection';
import GoogleMapEmbed from '../components/Home/Googlemaps';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrekHighlights />
      <HomestaySection />
      <TestimonialsSection />
      <NewsletterSection />
      <GoogleMapEmbed />
    </div>
  );
};

export default HomePage;