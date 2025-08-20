import React from 'react';
import TestimonialCard from './TestimonialCard';
import '/src/index.css';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO, TechCorp",
        content: "Their AI implementation increased our efficiency by 300%. Truly transformative.",
        rating: 5
    },
    {
        name: "Marcus Johnson",
        role: "CEO, DataFlow",
        content: "The strategic approach to AI adoption exceeded all our expectations.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Director, Innovation Labs",
        content: "Professional, innovative, and results-driven. The perfect AI partner.",
        rating: 5
    }
];

export default function TestimonialsSection({ isVisible }) {
    return (
        <section
            id="testimonials"
            className="fade-in-section py-20 relative"
            style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out'
            }}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-custom-gradient-secondary">
              Client Success Stories
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Hear from industry leaders who've transformed their businesses with our AI solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}