import React from 'react';
import Hero from '../components/Hero';
import BrandSection from '../components/BrandSection';
import CourseSection from '../components/CourseSection';
import GrowthSection from '../components/GrowthSection';
import CreatorSection from '../components/CreatorSection';
import CommunityTestimonials from '../components/CommunityTestimonials';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';
import CreatorCTA from '../components/CreatorCTA';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <BrandSection />
            <CourseSection />
            <CategoriesSection /> 
            <GrowthSection />
            <CreatorSection />
            <CreatorCTA />
            <CommunityTestimonials />
            <Footer />
        </div>
    );
};

export default LandingPage;