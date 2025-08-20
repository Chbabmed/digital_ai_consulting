import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import '/src/index.css';

export default function Footer() {
    const serviceLinks = [
        { name: 'AI Strategy', href: '#' },
        { name: 'ML Development', href: '#' },
        { name: 'AI Ethics', href: '#' },
        { name: 'Process Optimization', href: '#' }
    ];

    const contactInfo = [
        { icon: <Mail className="w-4 h-4 mr-2" />, text: 'hello@Digitalaicons.ai' },
        { icon: <Phone className="w-4 h-4 mr-2" />, text: '+1 (555) 123-4567' },
        { icon: <MapPin className="w-4 h-4 mr-2" />, text: 'San Francisco, CA' }
    ];

    const socialLinks = [
        { icon: <Twitter className="w-5 h-5" />, href: '#' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#' },
        { icon: <Github className="w-5 h-5" />, href: '#' }
    ];

    return (
        <footer id="contact" className="bg-gray-800/50 border-t border-gray-700 py-12">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-7xl mx-auto">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="src/assets/Digital.AI Consulting - logo complet - white.png"
                                alt="Digital.AI Consulting Logo"
                                width="200"
                            />
                        </div>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Pioneering the future of artificial intelligence consulting.
                            Transform your business with cutting-edge AI solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-custom-cyan transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-custom-cyan">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            {serviceLinks.map((service, index) => (
                                <li key={index}>
                                    <a href={service.href} className="hover:text-white transition-colors">
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-custom-cyan">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            {contactInfo.map((contact, index) => (
                                <li key={index} className="flex items-center">
                                    {contact.icon}
                                    {contact.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Digital.AI Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}