import React from 'react';
import AnimatedBackground from '/src/Pages/Components/AnimatedBackground.jsx';
import Navigation from '/src/Pages/Components/Navigation';
import HeroSection from '/src/Pages/Components/HeroSection';
import ServicesSection from '/src/Pages/Components/ServicesSection';
import AboutSection from '/src/Pages/Components/AboutSection';
import TestimonialsSection from '/src/Pages/Components/TestimonialsSection';
import CTASection from '/src/Pages/Components/CTASection';
import Footer from '/src/Pages/Components/Footer';
import useScrollHandler from '/src/Pages/Components/useScrollHandler';
import useMouseTracker from '/src/Pages/Components/useMouseTracker';
import '../index.css';

export default function MainLayout() {
    const { isVisible, scrollToSection } = useScrollHandler();
    const mousePosition = useMouseTracker();

    return (
        <div className="bg-gray-900 text-white overflow-hidden font-monda antialiased">
            <AnimatedBackground />
            <Navigation scrollToSection={scrollToSection} />
            <HeroSection mousePosition={mousePosition} />
            <ServicesSection isVisible={isVisible.services} />
            <AboutSection isVisible={isVisible.about} />
            <TestimonialsSection isVisible={isVisible.testimonials} />
            <CTASection />
            <Footer />
        </div>
    );
}