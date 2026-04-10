import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, MapPin, Clock, ArrowRight, Users, Rocket, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const departments = [
  { id: 'all', label: 'All Roles' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'design', label: 'Design' },
  { id: 'finance', label: 'Finance' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'operations', label: 'Operations' },
];

const jobs = [
  { id: 1, title: 'SoC / Software / Architecture / IP Manager', location: 'Bangalore, KA, IN', type: 'Full-time', dept: 'architecture', gradient: 'from-violet-500 to-violet-500' },
  { id: 2, title: 'SoC Design Manager', location: 'Bangalore, KA, IN', type: 'Full-time', dept: 'design', gradient: 'from-violet-500 to-violet-600' },
  { id: 3, title: 'Product & Test Engineering Manager', location: 'Bangalore, KA, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-orange-400 to-rose-500' },
  { id: 4, title: 'Ecosystem Manager', location: 'Bangalore, KA, IN', type: 'Full-time', dept: 'operations', gradient: 'from-emerald-500 to-cyan-500' },
  { id: 5, title: 'Application Engineer', location: 'Bengaluru, KA, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-cyan-500 to-violet-500' },
  { id: 6, title: 'Business Development Executive', location: 'San Diego, USA', type: 'Full-time', dept: 'marketing', gradient: 'from-indigo-500 to-violet-500' },
  { id: 7, title: 'EDA Administration', location: 'Bengaluru, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-teal-500 to-cyan-500' },
  { id: 8, title: 'Product Marketing Engineer', location: 'Bengaluru, IN', type: 'Full-time', dept: 'marketing', gradient: 'from-pink-500 to-rose-500' },
  { id: 9, title: 'Test Engineer', location: 'Bengaluru, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-orange-400 to-amber-500' },
  { id: 10, title: 'Analog Validation Engineer', location: 'Bengaluru, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-violet-500 to-cyan-500' },
  { id: 11, title: 'Analog Design Engineer', location: 'Bengaluru, IN', type: 'Full-time', dept: 'design', gradient: 'from-violet-500 to-purple-600' },
  { id: 12, title: 'SAP FICO Functional', location: 'Bengaluru, IN', type: 'Full-time', dept: 'finance', gradient: 'from-emerald-500 to-green-600' },
  { id: 13, title: 'SAP ABAP Developer', location: 'Bengaluru, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-violet-600 to-indigo-600' },
  { id: 14, title: 'RF Design Engineer', location: 'Bengaluru, IN', type: 'Full-time', dept: 'engineering', gradient: 'from-rose-500 to-pink-600' },
  { id: 15, title: 'Product Engineer', location: 'San Diego, USA', type: 'Full-time', dept: 'engineering', gradient: 'from-cyan-500 to-violet-600' },
];

const perks = [
  { icon: Rocket, title: 'Innovate and Lead', desc: 'Pioneer groundbreaking semiconductor technologies and set new industry standards worldwide.' },
  { icon: Users, title: 'Growth & Collaboration', desc: 'Work alongside industry experts in an environment that nurtures continuous learning and professional growth.' },
  { icon: Star, title: 'Impactful Opportunities', desc: 'Your work directly influences global technology advancements that transform industries and improve lives.' },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('all');

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = activeDept === 'all' ? jobs : jobs.filter((j) => j.dept === activeDept);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 orb-violet opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-6">
            <Link to="/" className="hover:text-violet-300 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Careers</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-400/20 rounded-full text-violet-300 text-sm font-medium mb-6">
              15 Open Positions
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Join Axiro.<br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Shape the Future.
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              We're shaping the future of technology by creating groundbreaking semiconductor solutions. Explore exciting opportunities, collaborate with experts, and grow your career in an environment driven by excellence and innovation.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Perks */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <Tilt
                    key={perk.title}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1500}
                    className={`reveal delay-${i+1} rounded-2xl overflow-hidden`}
                  >
                    <div className="flex gap-4 bg-gradient-to-br from-violet-50 to-cyan-50 border border-violet-100 p-6 h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold font-poppins text-gray-900 mb-1">{perk.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                      </div>
                    </div>
                  </Tilt>
                );
              })}
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <div className="bg-gradient-to-br from-slate-900 to-violet-950 rounded-3xl p-8 relative overflow-hidden">
              <div className="hero-grid absolute inset-0 opacity-20" />
              <div className="relative">
                <div className="text-5xl text-violet-400 font-serif mb-4">"</div>
                <p className="text-slate-200 text-lg leading-relaxed mb-6 font-medium italic">
                  At Axiro, we believe that talent, curiosity, and integrity are the driving forces behind meaningful innovation. We are committed to creating a workplace where diverse perspectives are respected, bold ideas are encouraged, and individuals are empowered to make a lasting impact.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">NY</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">Naveen Yanduru</div>
                    <div className="text-violet-400 text-sm">Chief Executive Officer, Axiro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section id="job-listings" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 reveal">
              <h2 className="section-title mb-2">Open <span className="gradient-text">Positions</span></h2>
              <p className="section-subtitle">{jobs.length} opportunities across engineering, design, and business functions.</p>
            </div>

            {/* Dept filter */}
            <div className="flex flex-wrap gap-2 mb-8 reveal">
              {departments.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDept(d.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeDept === d.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Job cards */}
            <div className="space-y-3">
              {filtered.map((job, i) => (
                <Tilt
                  key={job.id}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={2000}
                  scale={1.01}
                  transitionSpeed={1000}
                  className={`reveal delay-${Math.min(i+1, 5)} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200`}
                >
                  <div className="group flex items-center justify-between gap-4 bg-white border border-gray-100 p-5 h-full hover:border-primary-100 hover:bg-primary-50/30">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`flex-shrink-0 w-11 h-11 bg-gradient-to-br ${job.gradient} rounded-xl flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200`}>
                        <div className="w-5 h-5 border border-white/50 rounded grid place-items-center">
                          <div className="w-2.5 h-2.5 bg-white/80 rounded-sm" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold font-poppins text-gray-900 text-sm mb-1 group-hover:text-primary-700 transition-colors truncate">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <MapPin className="w-3 h-3" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock className="w-3 h-3" /> {job.type}
                          </span>
                          <span className="text-xs px-2 py-0.5 bg-primary-50 text-primary-600 font-semibold rounded-full capitalize">
                            {job.dept}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="mailto:hr@axiro.com"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-primary-500 text-white text-xs font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 transition-all duration-200 shadow"
                    >
                      Apply <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
