import React from 'react';
import { Star } from 'lucide-react';
import '/src/index.css';

export default function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 testimonial-card hover:border-custom-purple">
            <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
            </p>
            <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
        </div>
    );
}