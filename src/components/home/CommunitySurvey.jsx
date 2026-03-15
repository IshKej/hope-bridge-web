import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../CountUp';

const stats = [
  { value: "200+", label: "Responses collected" },
  { value: "5 min", label: "Avg. time to complete" },
  { value: "100%", label: "Anonymous & private" },
];

export default function CommunitySurvey() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-700/15 translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Help shape{' '}
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">our programs</span>
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Your experience matters. Share your voice to help us build mental health support that truly serves the Asian American teen community.
            </p>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=P2fUH5bfIUaGOKHYjEyF1z0k6dCGAoZDs6jElXg1mJlUM0YxQVlLUUlNUURZUlQ0VjlJV0NSNldCTi4u"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-900/40">
              Take Our Community Survey
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6 p-5 rounded-2xl border border-blue-600/30"
                style={{ background: `rgba(37,99,235,${0.15 + i * 0.05})` }}>
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-blue-400 to-blue-600" />
                <div>
                  <CountUp value={stat.value} className="text-2xl font-black text-white block" />
                  <p className="text-blue-300 text-xs uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
