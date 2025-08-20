import React from 'react';
import { ArrowRight } from 'lucide-react';
import '/src/index.css';

export default function CTASection() {
    return (
        <section className="py-20 relative">
            {/* Background gradient for the CTA section */}
            <div className="absolute inset-0" style={{
                background: 'linear-gradient(to right, rgba(7, 23, 59, 0.2), rgba(70, 40, 119, 0.2))'
            }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to <span className="text-custom-gradient-primary">Transform</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Join hundreds of companies already leveraging AI to drive unprecedented growth and innovation.
                </p>

                <button className="group cta-button px-10 py-5 bg-custom-gradient-primary rounded-full font-semibold text-lg">
          <span className="relative z-10 flex items-center text-gray-900">
            Schedule Free Consultation
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
                    <div
                        className="cta-button-overlay"
                        style={{
                            background: 'linear-gradient(to right, #4395AD, #6AE6CF)'
                        }}
                    />
                </button>
            </div>
        </section>
    );
}