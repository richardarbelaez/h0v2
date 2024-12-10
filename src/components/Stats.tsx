import React from 'react';

const stats = [
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Monitoring" },
  { number: "500+", label: "Clients Protected" },
  { number: "0", label: "Security Breaches" }
];

export function Stats() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}