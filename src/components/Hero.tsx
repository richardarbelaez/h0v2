import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Secure Your Digital Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Advanced cybersecurity solutions protecting your business 24/7 with cutting-edge technology and expert monitoring.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-md font-medium hover:bg-cyan-600 transition-colors">
              Get Started
            </button>
            <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-md font-medium hover:bg-cyan-500/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}