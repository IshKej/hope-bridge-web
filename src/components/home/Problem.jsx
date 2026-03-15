import React from 'react';
import { motion } from 'framer-motion';

const statistics = [
  { number: "1 in 5", label: "Asian American teens report symptoms of depression", color: "text-blue-300" },
  { number: "50%", label: "less likely to seek mental health support than peers", color: "text-blue-200" },
  { number: "71%", label: "feel pressure to succeed academically from family", color: "text-white" },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-400/20 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-800/40 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/30 text-blue-100 font-semibold text-xs tracking-widest uppercase mb-5 border border-blue-300/30">
              The Challenge
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              A silent struggle{' '}
              <span className="bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
                many face alone
              </span>
            </h2>
            <div className="space-y-4">
              <p className="text-blue-100 leading-relaxed text-lg">
                Cultural expectations around success and emotional restraint create environments where asking for help feels impossible.
              </p>
              <p className="text-blue-200 leading-relaxed">
                Hope Bridge is building new pathways — support that speaks your language, understands your family, and meets you where you are.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-900/20 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden border border-blue-400/20 bg-blue-800/40 backdrop-blur-sm p-8 lg:p-10">
              <h3 className="text-xl font-bold text-blue-100 mb-8 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-blue-400/50 to-transparent" />
                The reality we're addressing
                <span className="h-px flex-1 bg-gradient-to-l from-blue-400/50 to-transparent" />
              </h3>
              <div className="space-y-8">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.12 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="flex-shrink-0">
                      <span className={`text-4xl font-black ${stat.color} leading-none`}>
                        {stat.number}
                      </span>
                    </div>
                    <div className="pt-2">
                      <div className="h-px w-6 bg-blue-400/40 mb-2 group-hover:w-12 transition-all duration-300" />
                      <p className="text-blue-100 leading-relaxed text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-blue-500/30">
                <p className="text-xs text-blue-300/70 italic">
                  Sources: SAMHSA National Survey, AAPI Data, Mental Health America
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
