import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CountUp from '../CountUp';

const stats = [
  { value: "200+", label: "Stories shared" },
  { value: "100+", label: "Teens connected" },
  { value: "100%", label: "Safe & anonymous" },
];

export default function StorySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-300/20 translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-300/30 text-blue-100 font-bold text-xs tracking-widest uppercase mb-5 border border-blue-300/30">
              The Story Project
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Your story{' '}
              <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">matters here</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Read real stories, find community, connect with others who understand the unique pressures you face. You are not alone.
            </p>
            <Link to={createPageUrl('StoryProject')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl shadow-blue-700/20">
              Explore Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="rounded-2xl p-5 text-center border border-white/20"
                style={{ background: `rgba(255,255,255,${0.10 + i * 0.06})` }}>
                <CountUp value={stat.value} className="text-3xl font-black text-white block mb-1" />
                <p className="text-xs text-blue-100 uppercase tracking-widest font-medium leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
