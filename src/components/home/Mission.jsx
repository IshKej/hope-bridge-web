import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  { title: "Embracing Cultural Identity", description: "Helping Asian teens navigate their bicultural identity and celebrate both worlds without shame.", num: "01", accent: "border-blue-300", numColor: "text-blue-400" },
  { title: "Navigating Academic Pressures", description: "Supporting teens facing intense academic expectations while maintaining mental wellness.", num: "02", accent: "border-blue-500", numColor: "text-blue-500" },
  { title: "Healing Family Disconnect", description: "Building bridges between generations to foster understanding and open communication.", num: "03", accent: "border-blue-600", numColor: "text-blue-600" },
  { title: "Breaking Stigma", description: "Normalizing mental health conversations in communities where they've long been silenced.", num: "04", accent: "border-blue-800", numColor: "text-blue-800" },
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #bfdbfe 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 leading-tight">
            Support that{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              understands your world
            </span>
          </h2>
          <p className="mt-6 text-lg text-blue-700 leading-relaxed">
            Hope Bridge exists because too many Asian teens carry impossible pressure alone. We build support rooted in cultural understanding — because generic help isn't enough.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pl-5 border-l-4 ${pillar.accent}`}>
              <span className={`text-xs font-black tracking-widest uppercase ${pillar.numColor}`}>{pillar.num}</span>
              <h3 className="mt-3 text-lg font-bold text-blue-900 leading-snug">{pillar.title}</h3>
              <p className="mt-2 text-blue-600 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
