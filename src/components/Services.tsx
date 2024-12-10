import React from 'react';
import { Shield, Lock, Server, Cloud, Database, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Network Security",
    description: "Comprehensive protection for your network infrastructure with advanced firewall systems."
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Military-grade encryption to keep your sensitive data secure and confidential."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Robust security architecture designed to protect your entire IT ecosystem."
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Advanced cloud protection services ensuring your data remains safe across platforms."
  },
  {
    icon: Database,
    title: "Database Security",
    description: "Protecting your valuable data with advanced monitoring and access controls."
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "24/7 monitoring and rapid response to potential security threats."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <service.icon className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}