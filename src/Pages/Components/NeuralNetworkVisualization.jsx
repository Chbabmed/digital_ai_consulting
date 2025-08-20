import React from 'react';
import '/src/index.css';

export default function NeuralNetworkVisualization() {
    return (
        <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border" style={{ borderColor: '#6AE6CF33' }}>
            <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom right, rgba(106, 230, 207, 0.1), rgba(67, 149, 173, 0.1))'
            }} />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Input Layer */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={`input-${i}`}
                            className="neural-node neural-node-input animate-pulse"
                            style={{
                                left: '10%',
                                top: `${20 + i * 15}%`,
                                animationDelay: `${i * 0.3}s`
                            }}
                        />
                    ))}

                    {/* Hidden Layer 1 */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`hidden1-${i}`}
                            className="neural-node neural-node-hidden1 animate-pulse"
                            style={{
                                left: '35%',
                                top: `${10 + i * 13}%`,
                                animationDelay: `${i * 0.2}s`
                            }}
                        />
                    ))}

                    {/* Hidden Layer 2 */}
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={`hidden2-${i}`}
                            className="neural-node neural-node-hidden2 animate-pulse"
                            style={{
                                left: '60%',
                                top: `${15 + i * 14}%`,
                                animationDelay: `${i * 0.25}s`
                            }}
                        />
                    ))}

                    {/* Output Layer */}
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={`output-${i}`}
                            className="neural-node neural-node-output animate-pulse"
                            style={{
                                left: '85%',
                                top: `${25 + i * 20}%`,
                                animationDelay: `${i * 0.4}s`
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
                            className="absolute w-1 h-1 rounded-full opacity-80 data-flow-animation"
                            style={{
                                backgroundColor: '#6AE6CF',
                                left: '8%',
                                top: `${25 + i * 20}%`,
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
                                    className="w-1 h-2 bg-custom-cyan opacity-30 bar-pulse-animation"
                                    style={{
                                        animationDelay: `${i * 0.1}s`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}