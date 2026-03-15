import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../CountUp';

const goals = [
  { target: "5000+", label: "Teens supported by 2027", shade: "from-blue-300 to-blue-400" },
  { target: "25", label: "School partnerships", shade: "from-blue-200 to-blue-300" },
  { target: "100%", label: "Free programs, always", shade: "from-white to-blue-100" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
      {/* Geometric accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Real goals,{' '}
            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">real change</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-0 border border-blue-600/40 rounded-2xl overflow-hidden">
          {goals.map((goal, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-10 text-center ${index < 2 ? 'border-r border-blue-600/40' : ''} bg-blue-700/20 hover:bg-blue-600/30 transition-colors duration-300`}>
              <div className={`h-1 w-12 mx-auto mb-6 rounded-full bg-gradient-to-r ${goal.shade}`} />
              <CountUp value={goal.target} className={`text-5xl lg:text-6xl font-black bg-gradient-to-r ${goal.shade} bg-clip-text text-transparent block mb-3`} />
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest">{goal.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
