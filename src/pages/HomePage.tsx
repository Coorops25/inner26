
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StudioSection from '../components/sections/StudioSection';
import AboutSection from '../components/sections/AboutSection';
import FindYourPracticeSection from '../components/sections/FindYourPracticeSection';
import EventsSection from '../components/sections/EventsSection';
import ConsultorioSection from '../components/sections/ConsultorioSection';
import ShopSection from '../modules/shop/components/ShopSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogSection from '../modules/blog/components/BlogSection';
import NewsletterSection from '../components/sections/NewsletterSection';



const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StudioSection />
      <AboutSection />
      <FindYourPracticeSection />
      <EventsSection />
      <ConsultorioSection />
      <TestimonialsSection />
      <ShopSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
