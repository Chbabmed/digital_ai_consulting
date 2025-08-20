import React from 'react';
import '/src/index.css';

export default function ServiceCard({ service, index }) {
    return (
        <div
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 service-card hover:border-custom-cyan"
            style={{
                animationDelay: `${index * 0.1}s`
            }}
        >
            <div className="text-custom-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-custom-cyan transition-colors">
                {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
                {service.description}
            </p>

            {/* Hover glow effect */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(to right, rgba(106, 230, 207, 0.1), rgba(67, 149, 173, 0.1))'
                }}
            />
        </div>
    );
}