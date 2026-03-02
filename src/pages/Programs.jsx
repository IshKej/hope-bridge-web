import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  BookOpen, MessageCircle, Sparkles, ArrowRight, Check,
  Calendar, MapPin, Clock, ChevronDown, ChevronUp, Image as ImageIcon,
  Trophy, Heart, Users, School
} from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const programs = [
  {
    icon: BookOpen,
    title: 'Workshops & Discussions',
    description: 'Interactive sessions on stress management, identity exploration, family communication, and building resilience — all through a culturally informed lens.',
    gradient: 'from-indigo-600 to-blue-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    tag: 'Monthly',
    tagColor: 'bg-indigo-100 text-indigo-700',
    highlights: ['Identity exploration', 'Stress management', 'Family communication'],
  },
  {
    icon: MessageCircle,
    title: 'Resource Hub',
    description: 'Access culturally relevant mental health resources, self-care tools, and connections to professional support whenever you need it.',
    gradient: 'from-sky-600 to-blue-500',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    tag: 'Always Open',
    tagColor: 'bg-sky-100 text-sky-700',
    highlights: ['24/7 resource access', 'Professional referrals', 'Self-care toolkit'],
    link: 'Resources',
  },
];

const futureEvents = [
  {
    icon: School,
    category: 'Key Club Presentation',
    title: 'Eastlake High School',
    date: 'Date TBD',
    location: 'Sammamish, WA',
    description: 'Bringing our mental health awareness presentation to Eastlake High School Key Club members.',
    gradient: 'from-blue-600 to-indigo-500',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: School,
    category: 'Key Club Presentation',
    title: 'High School TBD',
    date: 'Date TBD',
    location: 'King County, WA',
    description: 'Partnering with Key Club to spread culturally informed mental health awareness to Asian American teens.',
    gradient: 'from-indigo-600 to-blue-500',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    icon: School,
    category: 'Key Club Presentation',
    title: 'High School TBD',
    date: 'Date TBD',
    location: 'King County, WA',
    description: 'Partnering with Key Club to spread culturally informed mental health awareness to Asian American teens.',
    gradient: 'from-sky-600 to-blue-500',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    icon: School,
    category: 'Key Club Presentation',
    title: 'High School TBD',
    date: 'Date TBD',
    location: 'King County, WA',
    description: 'Partnering with Key Club to spread culturally informed mental health awareness to Asian American teens.',
    gradient: 'from-blue-500 to-cyan-500',
    tagColor: 'bg-cyan-100 text-cyan-700',
  },
  {
    icon: School,
    category: 'Key Club Presentation',
    title: 'High School TBD',
    date: 'Date TBD',
    location: 'King County, WA',
    description: 'Partnering with Key Club to spread culturally informed mental health awareness to Asian American teens.',
    gradient: 'from-indigo-500 to-blue-600',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Heart,
    category: 'Fundraiser',
    title: 'Community Fundraiser',
    date: 'Date & Location TBD',
    location: 'TBD',
    description: 'Join us for an upcoming fundraiser to support free mental health programming for Asian American youth across King County.',
    gradient: 'from-pink-500 to-rose-500',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Heart,
    category: 'Fundraiser',
    title: 'Community Fundraiser',
    date: 'Date & Location TBD',
    location: 'TBD',
    description: 'Support HopeBridge at our second community fundraiser. All proceeds go directly to free teen programming.',
    gradient: 'from-rose-500 to-pink-600',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Trophy,
    category: '5K Run',
    title: 'HopeBridge 5K',
    date: 'Date & Location TBD',
    location: 'TBD',
    description: 'Run or walk with us in our community 5K to raise funds and awareness for Asian American teen mental health. Open to all ages.',
    gradient: 'from-emerald-500 to-teal-500',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
];

// Previous events data — add real photos/details as available
const pastEvents = [
  {
    title: 'Hope Bridge Launch Event',
    date: 'Coming soon',
    location: 'Sammamish, WA',
    description: 'The founding launch of HopeBridge Community Services — bringing together teens, families, and community members to kick off our mission.',
    placeholder: true,
  },
  {
    title: 'Community Awareness Workshop',
    date: 'Coming soon',
    location: 'Sammamish, WA',
    description: 'An interactive workshop exploring identity, family expectations, and mental wellness through a culturally informed lens.',
    placeholder: true,
  },
  {
    title: 'Story Sharing Night',
    date: 'Coming soon',
    location: 'Sammamish, WA',
    description: 'Teens gathered to share experiences around family pressures, cultural identity, and academic stress in a safe, supportive environment.',
    placeholder: true,
  },
];

export default function Programs() {
  const [showAllFuture, setShowAllFuture] = useState(false);
  const visibleFuture = showAllFuture ? futureEvents : futureEvents.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 relative overflow-hidden">
      <PageBackground />
      {/* Static bg accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-2xl" />
        <div className="absolute top-1/3 -right-10 w-64 h-64 bg-indigo-100/30 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      {/* ── HERO ── */}
      <section className="pt-16 pb-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              All Programs Are Free
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Programs designed with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                cultural understanding
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Created specifically for Asian American teens navigating the unique challenges
              of identity, family expectations, and mental wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS GRID ── */}
      <section className="py-16 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${program.bg} rounded-2xl p-8 border ${program.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient}`} />
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.tagColor}`}>
                    {program.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <ul className="space-y-2 mb-4">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                {program.link && (
                  <Link to={createPageUrl(program.link)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-2">
                    View Resources <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE EVENTS ── */}
      <section className="py-20 px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Coming Up
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Future <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Stay tuned — we have a lot coming up. Dates and locations will be announced soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {visibleFuture.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top accent */}
                  <div className={`h-1 w-full bg-gradient-to-r ${event.gradient}`} />

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-1.5 ${event.tagColor}`}>
                          {event.category}
                        </span>
                        <h3 className="text-lg font-black text-gray-900 leading-snug">{event.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{event.description}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {event.date}
                      </span>
                      {event.location !== 'TBD' && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          {event.location}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {futureEvents.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllFuture((v) => !v)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-colors"
              >
                {showAllFuture ? (
                  <><ChevronUp className="w-4 h-4" /> Show Less</>
                ) : (
                  <><ChevronDown className="w-4 h-4" /> Show All {futureEvents.length} Events</>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── PREVIOUS EVENTS ── */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-600 text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              Look Back
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Previous <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              A look back at the community moments we've shared together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Photo placeholder */}
                <div className="relative w-full h-52 bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center gap-2">
                  <ImageIcon className="w-10 h-10 text-blue-300" />
                  <p className="text-xs text-blue-400 font-medium">Event Photo</p>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-black text-gray-900 mb-1">{event.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-400 mt-10"
          >
            Follow us on{' '}
            <a
              href="https://www.instagram.com/hopebridgecommunityservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              Instagram
            </a>
            {' '}and{' '}
            <a
              href="https://www.tiktok.com/@hopebridgecommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              TikTok
            </a>
            {' '}to see all our event highlights.
          </motion.p>
        </div>
      </section>

      {/* ── BANNER STAT ROW ── */}
      <section className="py-14 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center text-white">
            {[
              { stat: '2', label: 'Programs' },
              { stat: '100%', label: 'Free' },
              { stat: 'K-12', label: 'All Ages' },
              { stat: 'King Co.', label: 'Serving' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="text-3xl sm:text-4xl font-black mb-1">{stat}</div>
                <div className="text-white/70 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Ready to Get <span className="text-shimmer">Involved?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Join one of our programs or reach out to learn more about how we can support you.
            </p>
            <Link to={createPageUrl('GetSupport')}>
              <Button className="glow-hover bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Get Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
