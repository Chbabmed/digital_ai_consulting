import React from 'react';
import { ChevronRight } from 'lucide-react';
import '/src/index.css';

export default function HeroSection({ mousePosition }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16">
            {/* Dynamic radial gradient based on mouse position */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(70, 40, 119, 0.1) 0%, rgba(106, 230, 207, 0.1) 25%, transparent 50%)`
                }}
            />

            <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="space-y-8 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-custom-gradient-tertiary animate-pulse">
              AI-Powered
            </span>
                        <span className="block mt-2">Future Awaits</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Transform your business with cutting-edge artificial intelligence solutions.
                        We architect the future of intelligent automation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group cta-button px-8 py-4 bg-custom-gradient-primary rounded-full font-semibold text-lg">
              <span className="relative z-10 flex items-center text-gray-900">
                Start Your AI Journey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
                            <div
                                className="cta-button-overlay"
                                style={{
                                    background: 'linear-gradient(to right, #4395AD, #6AE6CF)'
                                }}
                            />
                        </button>

                        <button className="px-8 py-4 border-2 border-custom-cyan rounded-full font-semibold text-lg hover:bg-custom-cyan hover:text-gray-900 transition-all duration-300">
                            View Our Work
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronRight className="w-6 h-6 rotate-90 text-custom-cyan" />
            </div>
        </section>
    );
}