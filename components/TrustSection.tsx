import React from 'react';
import { BrainCircuit, Cpu, Link as LinkIcon, Radio } from 'lucide-react';

const technologies = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Brain",
    desc: "Predictive crop intelligence models"
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: "Drone Analytics",
    desc: "Aerial field monitoring & analysis"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "IoT Sensor Nodes",
    desc: "Real-time soil & water data stream"
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    title: "Verified Ledger",
    desc: "Tamper-proof blockchain records"
  }
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-agri-border relative z-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-agri-text mb-6 tracking-tight">System Architecture</h2>
            <p className="text-agri-textLight text-lg font-normal leading-relaxed max-w-lg">
              We leverage cutting-edge technology to ensure every grain is accounted for, every price is fair, and every claim is verified.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gray-100 ml-12 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {technologies.map((tech, idx) => (
            <div key={idx} className="group flex flex-col items-start hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-agri-text mb-6 group-hover:border-agri-green/30 group-hover:text-agri-green group-hover:bg-white group-hover:shadow-[0_10px_30px_-10px_rgba(20,90,50,0.2)] transition-all duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-agri-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {tech.icon}
              </div>
              <h3 className="font-bold text-lg text-agri-text mb-3 group-hover:text-agri-green transition-colors">{tech.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};