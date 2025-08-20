import React from 'react';
import '/src/index.css';

export default function Navigation({ scrollToSection }) {
    const navItems = [
        { name: 'Services', id: 'services' },
        { name: 'About', id: 'about' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b" style={{ borderColor: '#6AE6CF33' }}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-22">
                    <div className="flex items-center space-x-2">
                        <img
                            src="src/assets/Digital.AI Consulting - logo complet - white.png"
                            alt="Digital.AI Consulting Logo"
                            width="150"
                        />
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className="hover:text-custom-cyan transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}