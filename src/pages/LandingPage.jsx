import React from 'react';
import Hero from '../components/Hero';
import BrandSection from '../components/BrandSection';
import CourseSection from '../components/CourseSection';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <BrandSection />
            <CourseSection />
        </div>
    );
};

export default LandingPage;