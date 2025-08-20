import React from 'react';
import FloatingParticle from './FloatingParticle';
import '/src/index.css';

export default function AnimatedBackground() {
    return (
        <>
            {/* Animated Background Grid */}
            <div className="fixed inset-0 opacity-10">
                <div
                    className="absolute inset-0 grid-move-animation"
                    style={{
                        backgroundImage: `
              linear-gradient(#07173B 1px, transparent 1px),
              linear-gradient(90deg, #07173B 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    >
                        <FloatingParticle delay={i * 0.5} />
                    </div>
                ))}
            </div>
        </>
    );
}