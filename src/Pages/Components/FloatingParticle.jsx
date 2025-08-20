import React from 'react';
import '/src/index.css';

export default function FloatingParticle({ delay = 0 }) {
    return (
        <div
            className="floating-particle animate-pulse"
            style={{
                animation: `float ${3 + delay}s ease-in-out infinite`,
                animationDelay: `${delay}s`
            }}
        />
    );
}