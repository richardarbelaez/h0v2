import React from 'react';
import { ShieldCheck, Users, Building2, Globe } from 'lucide-react';

const solutions = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Comprehensive security solutions for large-scale enterprises with complex infrastructure needs."
  },
  {
    icon: Users,
    title: "SMB Protection",
    description: "Tailored cybersecurity packages designed specifically for small and medium-sized businesses."
  },
  {
    icon: Building2,
    title: "Government Solutions",
    description: "Specialized security measures meeting strict government compliance and regulatory requirements."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Worldwide security operations centers providing 24/7 monitoring and instant response."
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored cybersecurity solutions for organizations of all sizes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors">
              <solution.icon className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}