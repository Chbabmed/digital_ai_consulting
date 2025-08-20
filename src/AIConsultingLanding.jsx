import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, Zap, Shield, Target, Star, ArrowRight, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const AIConsultingLanding = () => {
    // State to manage visibility of sections for scroll-reveal animations
    const [isVisible, setIsVisible] = useState({});
    // State to track mouse position for interactive background effects
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Function to handle scroll events for section reveal animations
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Check if the section is 75% visible in the viewport
                const isSectionVisible = rect.top < window.innerHeight * 0.75;
                setIsVisible(prev => ({
                    ...prev,
                    [section.id]: isSectionVisible // Update visibility state for the current section
                }));
            });
        };

        // Function to handle mouse movement for interactive background
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY }); // Update mouse position state
        };

        // Add event listeners for scroll and mouse move
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        handleScroll(); // Call once on mount to check initial section visibility

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Function to handle smooth scrolling to a section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Component for creating a single floating particle
    const FloatingParticle = ({ delay = 0 }) => (
        <div
            className="absolute w-2 h-2 rounded-full opacity-30 animate-pulse"
            style={{
                backgroundColor: '#6AE6CF', // Your cyan color
                animation: `float ${3 + delay}s ease-in-out infinite`,
                animationDelay: `${delay}s`
            }}
        />
    );

    // Data for services section
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

    // Data for testimonials section
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO, TechCorp",
            content: "Their AI implementation increased our efficiency by 300%. Truly transformative.",
            rating: 5
        },
        {
            name: "Marcus Johnson",
            role: "CEO, DataFlow",
            content: "The strategic approach to AI adoption exceeded all our expectations.",
            rating: 5
        },
        {
            name: "Elena Rodriguez",
            role: "Director, Innovation Labs",
            content: "Professional, innovative, and results-driven. The perfect AI partner.",
            rating: 5
        }
    ];

    return (
        <div className="bg-gray-900 text-white overflow-hidden font-monda antialiased">
            {/* Inline CSS for custom animations and Monda font definition */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes dataFlow {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(300px); opacity: 0; }
        }

        @keyframes barPulse {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        /* Custom font definition for Monda */
        .font-monda {
          font-family: 'Monda', sans-serif;
        }

        /* Custom gradient classes using your color palette */
        .bg-custom-gradient-primary {
          background: linear-gradient(to right, #6AE6CF, #4395AD);
        }
        
        .bg-custom-gradient-secondary {
          background: linear-gradient(to right, #07173B, #462877);
        }
        
        .bg-custom-gradient-tertiary {
          background: linear-gradient(to right, #462877, #6AE6CF);
        }
        
        .bg-custom-gradient-quaternary {
          background: linear-gradient(to right, #4395AD, #07173B);
        }
        
        .text-custom-gradient-primary {
          background: linear-gradient(to right, #6AE6CF, #4395AD);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .text-custom-gradient-secondary {
          background: linear-gradient(to right, #6AE6CF, #6AE6CF);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .text-custom-gradient-tertiary {
          background: linear-gradient(to right, #6AE6CF, #462877, #4395AD);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .border-custom-cyan {
          border-color: #6AE6CF;
        }
        
        .text-custom-cyan {
          color: #6AE6CF;
        }
        
        .text-custom-blue {
          color: #4395AD;
        }
        
        .text-custom-purple {
          color: #462877;
        }
        
        .hover\\:text-custom-cyan:hover {
          color: #6AE6CF;
        }
        
        .hover\\:bg-custom-cyan:hover {
          background-color: #6AE6CF;
        }
        
        .hover\\:border-custom-cyan:hover {
          border-color: #6AE6CF;
        }
        
        .hover\\:border-custom-purple:hover {
          border-color: #462877;
        }
      `}</style>

            {/* Animated Background Grid - AI-inspired micro-interaction */}
            <div className="fixed inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    // Grid lines using your dark blue color
                    backgroundImage: `
            linear-gradient(#07173B 1px, transparent 1px),
            linear-gradient(90deg, #07173B 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 20s linear infinite' // Custom grid movement animation
                }} />
            </div>

            {/* Floating Particles - Interactive background element */}
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

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b" style={{ borderColor: '#6AE6CF33' }}>
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-22">
                        <div className="flex items-center space-x-2">
                            <img src="src/assets/Digital.AI Consulting - logo complet - white.png" alt="logo" width="150"/>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-custom-cyan transition-colors">Services</a>
                            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-custom-cyan transition-colors">About</a>
                            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="hover:text-custom-cyan transition-colors">Testimonials</a>
                            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-custom-cyan transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-16">
                {/* Dynamic radial gradient based on mouse position, using palette colors */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(70, 40, 119, 0.1) 0%, rgba(106, 230, 207, 0.1) 25%, transparent 50%)`
                    }}
                />

                <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="space-y-8 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            {/* Headline with vibrant gradient text using your colors */}
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
                            {/* Primary CTA button with gradient and hover effect */}
                            <button className="group relative px-8 py-4 bg-custom-gradient-primary rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center text-gray-900">
                  Start Your AI Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                                    background: 'linear-gradient(to right, #4395AD, #6AE6CF)'
                                }} />
                            </button>
                            {/* Secondary button with accent border */}
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

            {/* Services Section */}
            <section id="services" className="fade-in-section py-20 relative" style={{
                transform: isVisible.services ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible.services ? 1 : 0,
                transition: 'all 0.8s ease-out'
            }}>
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {/* Heading with gradient text */}
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
                            <div
                                key={index}
                                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-custom-cyan transition-all duration-300 transform hover:-translate-y-2"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    boxShadow: 'hover:0 25px 50px -12px rgba(106, 230, 207, 0.2)'
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

                                {/* Hover glow effect using palette colors */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                                    background: 'linear-gradient(to right, rgba(106, 230, 207, 0.1), rgba(67, 149, 173, 0.1))'
                                }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="fade-in-section py-20 relative" style={{
                transform: isVisible.about ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible.about ? 1 : 0,
                transition: 'all 0.8s ease-out'
            }}>
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                {/* Heading with gradient text */}
                                <span className="text-custom-gradient-secondary">
                  Pioneering AI Innovation
                </span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                At NeuraFlow AI, we believe artificial intelligence is not just the future—it's the present.
                                Our mission is to democratize AI technology and make it accessible to businesses of all sizes.
                            </p>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                With over 50 successful implementations and a team of world-class AI researchers and engineers,
                                we transform complex challenges into intelligent solutions that drive unprecedented growth.
                            </p>

                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-custom mb-2">50+</div>
                                    <div className="text-gray-400">Projects Delivered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-custom-blue mb-2">300%</div>
                                    <div className="text-gray-400">Avg Efficiency Gain</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-custom mb-2">24/7</div>
                                    <div className="text-gray-400">AI Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* AI Visualization */}
                            <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border" style={{ borderColor: '#6AE6CF33' }}>
                                <div className="absolute inset-0" style={{
                                    background: 'linear-gradient(to bottom right, rgba(106, 230, 207, 0.1), rgba(67, 149, 173, 0.1))'
                                }} />

                                {/* Enhanced Neural Network Visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        {/* Input Layer */}
                                        {[...Array(4)].map((_, i) => (
                                            <div
                                                key={`input-${i}`}
                                                className="absolute w-3 h-3 rounded-full animate-pulse"
                                                style={{
                                                    backgroundColor: '#6AE6CF',
                                                    left: '10%',
                                                    top: `${20 + i * 15}%`,
                                                    animationDelay: `${i * 0.3}s`,
                                                    boxShadow: '0 0 10px rgba(106, 230, 207, 0.5)'
                                                }}
                                            />
                                        ))}

                                        {/* Hidden Layer 1 */}
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={`hidden1-${i}`}
                                                className="absolute w-4 h-4 rounded-full animate-pulse"
                                                style={{
                                                    backgroundColor: '#4395AD',
                                                    left: '35%',
                                                    top: `${10 + i * 13}%`,
                                                    animationDelay: `${i * 0.2}s`,
                                                    boxShadow: '0 0 8px rgba(67, 149, 173, 0.5)'
                                                }}
                                            />
                                        ))}

                                        {/* Hidden Layer 2 */}
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={`hidden2-${i}`}
                                                className="absolute w-4 h-4 rounded-full animate-pulse"
                                                style={{
                                                    backgroundColor: '#462877',
                                                    left: '60%',
                                                    top: `${15 + i * 14}%`,
                                                    animationDelay: `${i * 0.25}s`,
                                                    boxShadow: '0 0 8px rgba(70, 40, 119, 0.5)'
                                                }}
                                            />
                                        ))}

                                        {/* Output Layer */}
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={`output-${i}`}
                                                className="absolute w-5 h-5 rounded-full animate-pulse"
                                                style={{
                                                    backgroundColor: '#6AE6CF',
                                                    left: '85%',
                                                    top: `${25 + i * 20}%`,
                                                    animationDelay: `${i * 0.4}s`,
                                                    boxShadow: '0 0 12px rgba(106, 230, 207, 0.7)'
                                                }}
                                            />
                                        ))}

                                        {/* Connection Lines */}
                                        <svg className="absolute inset-0 w-full h-full">
                                            {/* Input to Hidden Layer 1 connections */}
                                            {[...Array(4)].map((_, i) =>
                                                [...Array(6)].map((_, j) => (
                                                    <line
                                                        key={`input-hidden1-${i}-${j}`}
                                                        x1="12%"
                                                        y1={`${22 + i * 15}%`}
                                                        x2="37%"
                                                        y2={`${12 + j * 13}%`}
                                                        stroke={`rgba(106, 230, 207, ${0.1 + Math.random() * 0.3})`}
                                                        strokeWidth="1"
                                                        className="animate-pulse"
                                                        style={{ animationDelay: `${(i + j) * 0.1}s` }}
                                                    />
                                                ))
                                            )}

                                            {/* Hidden Layer 1 to Hidden Layer 2 connections */}
                                            {[...Array(6)].map((_, i) =>
                                                [...Array(5)].map((_, j) => (
                                                    <line
                                                        key={`hidden1-hidden2-${i}-${j}`}
                                                        x1="39%"
                                                        y1={`${12 + i * 13}%`}
                                                        x2="62%"
                                                        y2={`${17 + j * 14}%`}
                                                        stroke={`rgba(67, 149, 173, ${0.1 + Math.random() * 0.3})`}
                                                        strokeWidth="1"
                                                        className="animate-pulse"
                                                        style={{ animationDelay: `${(i + j) * 0.15}s` }}
                                                    />
                                                ))
                                            )}

                                            {/* Hidden Layer 2 to Output connections */}
                                            {[...Array(5)].map((_, i) =>
                                                [...Array(3)].map((_, j) => (
                                                    <line
                                                        key={`hidden2-output-${i}-${j}`}
                                                        x1="64%"
                                                        y1={`${17 + i * 14}%`}
                                                        x2="87%"
                                                        y2={`${27 + j * 20}%`}
                                                        stroke={`rgba(70, 40, 119, ${0.2 + Math.random() * 0.3})`}
                                                        strokeWidth="1.5"
                                                        className="animate-pulse"
                                                        style={{ animationDelay: `${(i + j) * 0.2}s` }}
                                                    />
                                                ))
                                            )}
                                        </svg>

                                        {/* Data Flow Animation */}
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={`flow-${i}`}
                                                className="absolute w-1 h-1 rounded-full opacity-80"
                                                style={{
                                                    backgroundColor: '#6AE6CF',
                                                    left: '8%',
                                                    top: `${25 + i * 20}%`,
                                                    animation: `dataFlow 3s ease-in-out infinite`,
                                                    animationDelay: `${i * 1}s`
                                                }}
                                            />
                                        ))}

                                        {/* AI Processing Indicator */}
                                        <div className="absolute top-4 left-4 text-xs font-mono opacity-60">
                                            <div className="text-custom-cyan mb-1">AI Processing...</div>
                                            <div className="flex space-x-1">
                                                {[...Array(8)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 h-2 bg-custom-cyan opacity-30"
                                                        style={{
                                                            animation: `barPulse 1.5s ease-in-out infinite`,
                                                            animationDelay: `${i * 0.1}s`
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="fade-in-section py-20 relative" style={{
                transform: isVisible.testimonials ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible.testimonials ? 1 : 0,
                transition: 'all 0.8s ease-out'
            }}>
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {/* Heading with gradient text */}
                            <span className="text-custom-gradient-secondary">
                Client Success Stories
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Hear from industry leaders who've transformed their businesses with our AI solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-custom-purple transition-all duration-300 transform hover:-translate-y-1"
                            >
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
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                    {/* CTA button with gradient and hover effect */}
                    <button className="group relative px-10 py-5 bg-custom-gradient-primary rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10 flex items-center text-gray-900">
              Schedule Free Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                            background: 'linear-gradient(to right, #4395AD, #6AE6CF)'
                        }} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-800/50 border-t border-gray-700 py-12">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-7xl mx-auto">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="src/assets/Digital.AI Consulting - logo complet - white.png" alt="logo"
                                     width="200"/>
                            </div>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Pioneering the future of artificial intelligence consulting.
                                Transform your business with cutting-edge AI solutions.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-custom-cyan transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-custom-cyan transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-custom-cyan transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-custom-cyan">Services</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">AI Strategy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">ML Development</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">AI Ethics</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Process Optimization</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-custom-cyan">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    hello@Digitalaicons.ai
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    +1 (555) 123-4567
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    San Francisco, CA
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Digital.AI Consulting. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AIConsultingLanding;