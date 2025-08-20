import { useState, useEffect } from 'react';

export default function useScrollHandler() {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const isSectionVisible = rect.top < window.innerHeight * 0.75;
                setIsVisible(prev => ({
                    ...prev,
                    [section.id]: isSectionVisible
                }));
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return { isVisible, scrollToSection };
}