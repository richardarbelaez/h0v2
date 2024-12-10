import React from 'react';
import { Shield } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-cyan-500" />
              <h2 className="text-4xl font-bold text-white ml-4">About Us</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Founded in 2015, CyberGuard has been at the forefront of cybersecurity innovation, 
              protecting businesses worldwide from evolving digital threats.
            </p>
            <p className="text-gray-300 mb-6">
              Our team of expert security professionals combines decades of experience with 
              cutting-edge technology to deliver unparalleled protection for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-cyan-500">150+</div>
                <div className="text-gray-400">Security Experts</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-cyan-500">15+</div>
                <div className="text-gray-400">Global Offices</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
              alt="Security Operations Center" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}