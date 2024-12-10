import React from 'react';
import { Shield } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-cyan-500" />
            <span className="ml-2 text-white font-bold text-xl">CyberGuard</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#solutions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}