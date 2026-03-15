import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

const pathways = [
  { title: "Students", description: "Explore programs, attend a workshop, or reach out when you need someone who understands.", cta: "Find Support", page: "GetSupport", shade: "from-blue-300 to-blue-400", bg: "bg-blue-50" },
  { title: "Parents & Families", description: "Access resources designed to help you understand and support your teen's mental health journey.", cta: "Learn More", page: "GetSupport", shade: "from-blue-400 to-blue-500", bg: "bg-blue-100" },
  { title: "Schools & Organizations", description: "Partner with us to bring mental health awareness and support programs directly to your students.", cta: "Partner With Us", page: "Partnerships", shade: "from-blue-500 to-blue-600", bg: "bg-blue-100" },
  { title: "Supporters & Donors", description: "Your contribution keeps all programs free and accessible to every teen who needs them.", cta: "Support Our Work", page: "Donate", shade: "from-blue-600 to-blue-700", bg: "bg-blue-100" },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-600 to-blue-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-blue-900 leading-tight">
            There's a place{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">for you here</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-blue-200 rounded-2xl overflow-hidden">
          {pathways.map((pathway, index) => (
            <motion.div key={pathway.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-7 ${index < 3 ? 'border-r border-blue-200' : ''} bg-white hover:bg-blue-50 transition-colors duration-200 group flex flex-col`}>
              {/* Color accent bar */}
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${pathway.shade} mb-5 group-hover:w-16 transition-all duration-300`} />
              <span className={`text-xs font-black tracking-widest uppercase bg-gradient-to-r ${pathway.shade} bg-clip-text text-transparent block mb-3`}>
                0{index + 1}
              </span>
              <h3 className="text-lg font-bold text-blue-900 mb-3 leading-snug">{pathway.title}</h3>
              <p className="text-blue-600 text-sm leading-relaxed flex-1">{pathway.description}</p>
              <div className="mt-5">
                <Link to={createPageUrl(pathway.page)}>
                  <Button variant="ghost" className="text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-colors px-0 font-semibold text-sm">
                    {pathway.cta} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
