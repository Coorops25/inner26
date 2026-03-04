
import React from 'react';
import HeroSection from '../components/HeroSection';
import StudioSection from '../components/StudioSection';
import AboutSection from '../components/AboutSection';
import FindYourPracticeSection from '../components/FindYourPracticeSection';
import EventsSection from '../components/EventsSection';
import ConsultorioSection from '../components/ConsultorioSection';
import ShopSection from '../components/ShopSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';

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
