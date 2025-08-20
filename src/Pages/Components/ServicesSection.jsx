import React from 'react';
import { Brain, Zap, Shield, Target } from 'lucide-react';
import ServiceCard from './ServiceCard';
import '/src/index.css';

const services = [
    {
        icon: <Brain className="w-8 h-8" />,
        title: "AI Strategy & Implementation",
        description: "Transform your business with custom AI solutions tailored to your industry needs."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Machine Learning Development",
        description: "Build intelligent systems that learn and adapt to drive unprecedented growth."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "AI Ethics & Compliance",
        description: "Ensure responsible AI deployment with comprehensive governance frameworks."
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Process Optimization",
        description: "Automate workflows and optimize operations with intelligent automation."
    }
];

export default function ServicesSection({ isVisible }) {
    return (
        <section
            id="services"
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
            <span className="text-custom-gradient-primary">
              Our Expertise
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive AI solutions designed to revolutionize your business operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}