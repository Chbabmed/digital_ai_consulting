import React from 'react';
import NeuralNetworkVisualization from './NeuralNetworkVisualization';
import '/src/index.css';

export default function AboutSection({ isVisible }) {
    const stats = [
        { value: '50+', label: 'Projects Delivered', color: 'text-custom-cyan' },
        { value: '300%', label: 'Avg Efficiency Gain', color: 'text-custom-blue' },
        { value: '24/7', label: 'AI Support', color: 'text-custom-cyan' }
    ];

    return (
        <section
            id="about"
            className="fade-in-section py-20 relative"
            style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out'
            }}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-custom-gradient-secondary">
                Pioneering AI Innovation
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            At Digital.AI Consulting, we believe artificial intelligence is not just the future—it's the present.
                            Our mission is to democratize AI technology and make it accessible to businesses of all sizes.
                        </p>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            With over 50 successful implementations and a team of world-class AI researchers and engineers,
                            we transform complex challenges into intelligent solutions that drive unprecedented growth.
                        </p>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <NeuralNetworkVisualization />
                    </div>
                </div>
            </div>
        </section>
    );
}