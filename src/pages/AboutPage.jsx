import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MouseParallaxBackground from '../components/MouseParallaxBackground';
import Footer from '../components/Footer';
import { ChevronRight, ChevronDown } from 'lucide-react';

const team = [
  { name: 'Naveen Yanduru', role: 'Chief Executive Officer', initials: 'NY', gradient: 'from-violet-500 to-violet-700', bio: 'Distinguished semiconductor leader with 25+ years in RF, analog, and mixed-signal technologies. PhD from UT Dallas. 25 IEEE publications.' },
  { name: 'Dr. Tumay Kanar', role: 'CTO & BU Head, Super-8 GHz', initials: 'TK', gradient: 'from-violet-500 to-violet-500', bio: '15+ years advancing mmWave, RF, and 5G front-end solutions. 25+ patents, 35+ publications. Cornell (BS), UC San Diego (MS/PhD).' },
  { name: 'Dr. Tushar Sharma', role: 'Head, Strategy & New Initiatives', initials: 'TS', gradient: 'from-emerald-500 to-cyan-500', bio: 'PhD from University of Calgary, postdoc at Princeton. 70+ publications, 5 US patents. IEEE Young Professionals Hall of Fame Award.' },
  { name: 'Dr. Himanshu Khatri', role: 'Vice President, Engineering', initials: 'HK', gradient: 'from-orange-400 to-rose-500', bio: 'IIT Kanpur (BTech), UC San Diego (MS/PhD). Led 4G/5G RF chips at Qualcomm, then mmWave at Renesas India. 9 IEEE papers, multiple patents.' },
  { name: 'Srinidhi Embar R.', role: 'Head, Power Amplifier Development', initials: 'SE', gradient: 'from-cyan-500 to-violet-500', bio: 'MS/PhD from University of Kassel, Germany. 30+ publications, 35 US patents. 19+ years in RF and microwave engineering.' },
  { name: 'William Qi', role: 'BU Head, Sub-8 GHz', initials: 'WQ', gradient: 'from-indigo-500 to-violet-500', bio: '12+ years in Product Marketing at Renesas. Deep expertise in RF applications, architecture, and business strategy.' },
  { name: 'Edan Collymore', role: 'Head, Operations', initials: 'EC', gradient: 'from-teal-500 to-cyan-500', bio: 'Nearly two decades of RF product engineering at Hittite Microwave, IDT, and Renesas. BS in Electronic Engineering from Wentworth.' },
  { name: 'Lavanya V.', role: 'Head, Human Resources', initials: 'LV', gradient: 'from-pink-500 to-rose-500', bio: '18+ years driving transformative people strategies across Oracle, CDK Global, Micron, and Satyam Computer.' },
];

const faqs = [
  {
    q: 'What role will Renesas play in Axiro\'s business on or after 3rd April, 2025?',
    a: 'Renesas will support Axiro in manufacturing supply chain processes for up to 12 months after 3rd April, 2025. Additionally, for six months, Renesas will act as an agent on Axiro\'s behalf to service existing and new Purchase Orders.',
  },
  {
    q: 'Will there be any change to the fabrication location, process, or COO?',
    a: 'As a fabless semiconductor company, Axiro will continue using the same outsourced fabrication, assembly and testing locations. The COO, which is based on assembly location, is expected to remain unchanged.',
  },
  {
    q: 'Will product part numbers or markings change?',
    a: 'Part numbers will remain the same. Renesas logo markings (if applicable) will be phased out within the first year for parts manufactured after 2nd April, 2025. Notification will be provided in accordance with QA policies.',
  },
  {
    q: 'Will Axiro discontinue any products?',
    a: 'Axiro has no plans to discontinue any products. Product offerings will be adjusted periodically based on market demand and customer needs.',
  },
  {
    q: 'Why did Axiro Semiconductor acquire the RF business from Renesas?',
    a: 'Axiro acquired the RF business to strategically enhance its presence in the high-growth semiconductor sector. In March 2024, CG Power (parent of Axiro) announced a JV with Renesas and Stars Microelectronics to set up an OSAT facility in India, creating a comprehensive presence across the semiconductor value chain.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        className="w-full flex items-start justify-between p-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-sm leading-snug pr-4 group-hover:text-primary-600 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 mt-0.5 ${open ? 'rotate-180 text-primary-500' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <MouseParallaxBackground imageUrl="/bg/bg-3.jpeg" />
      <div className="relative z-10 w-full h-full flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 orb-violet opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-6">
            <Link to="/" className="hover:text-violet-300 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>About Us</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Redefining Innovation<br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">for a New Era</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              With over a decade of global excellence, we deliver cutting-edge electrical engineering solutions, transforming industries and enhancing lives through innovation, quality, and trusted partnerships across diverse sectors.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Mission & Vision */}
        <section id="first" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-6">
                  Our Purpose
                </div>
                <h2 className="section-title mb-6">
                  Mission &<span className="gradient-text"> Vision</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-violet-50 to-cyan-50 border border-violet-100 rounded-2xl p-6">
                    <h3 className="font-bold font-poppins text-violet-700 text-lg mb-2">Mission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Axiro is committed to bridging possibilities and performance through semiconductor innovation, transforming industries, and driving next-generation technology.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-violet-50 to-violet-50 border border-violet-100 rounded-2xl p-6">
                    <h3 className="font-bold font-poppins text-violet-700 text-lg mb-2">Vision</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      At Axiro, our vision is to be a global leader in high-performance semiconductor solutions that drive innovation and transform how the world connects, computes, and creates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="reveal-right">
                <div className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 rounded-3xl p-8 relative overflow-hidden">
                  <div className="hero-grid absolute inset-0 opacity-20" />
                  <div className="relative space-y-5">
                    {[
                      { icon: '🔐', title: 'Integrity & Responsibility', color: 'text-violet-300' },
                      { icon: '⚙️', title: 'Engineering Excellence', color: 'text-cyan-300' },
                      { icon: '💡', title: 'Customers at the Core', color: 'text-violet-300' },
                      { icon: '🚀', title: 'Passion for Possibilities', color: 'text-emerald-300' },
                      { icon: '🌱', title: 'Growing Together', color: 'text-orange-300' },
                    ].map((v) => (
                      <div key={v.title} className="flex items-center gap-4 glass rounded-xl p-4">
                        <span className="text-2xl">{v.icon}</span>
                        <span className={`font-semibold text-sm ${v.color}`}>{v.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 reveal">
              <h2 className="section-title mb-3">Core <span className="gradient-text">Technologies</span></h2>
              <p className="section-subtitle">Six proprietary innovations spanning the full RF signal chain.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: 'Glitch-Free™', sub: 'Digital Step Attenuators', desc: 'Virtually eliminates transient overshoot during MSB attenuation state transitions.', gradient: 'from-violet-500 to-violet-600' },
                { name: 'FlatNoise™', sub: 'Variable Gain Amplifiers', desc: 'VGA noise figure kept virtually flat in the critical region while gain is reduced, enhancing SNR.', gradient: 'from-cyan-500 to-violet-500' },
                { name: 'Zero-Distortion™', sub: 'RF Amplifiers & Mixers', desc: 'Improves SNR by reducing noise floor and third-order intermodulation distortion.', gradient: 'from-violet-500 to-violet-500' },
                { name: 'KLIN™', sub: 'Constant Linearity Technology', desc: 'Maintains constant high linearity (OIP3) as gain is adjusted in VGAs.', gradient: 'from-emerald-500 to-cyan-500' },
                { name: 'K|Z|™', sub: 'Constant Impedance Technology', desc: 'RF switches maintain nearly constant impedance during switching, minimizing VSWR transients.', gradient: 'from-orange-400 to-rose-500' },
                { name: 'KGAIN™', sub: 'Gain Compensation Technology', desc: 'Automatically reduces S21 variation over temperature for large signal chains.', gradient: 'from-rose-500 to-orange-500' },
              ].map((t, i) => (
                <div key={t.name} className={`reveal delay-${Math.min(i+1,5)} group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${t.gradient} text-white text-sm font-bold rounded-lg mb-3`}>{t.name}</div>
                  <div className="text-xs text-gray-400 font-medium mb-2">{t.sub}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="second" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14 reveal">
              <h2 className="section-title mb-3">Meet the <span className="gradient-text">Team</span></h2>
              <p className="section-subtitle">Guiding Axiro's strategic direction with industry insight and a commitment to innovation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member, i) => (
                <div key={member.name} className={`reveal delay-${Math.min(i+1,5)} group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="font-bold font-poppins text-gray-900 text-sm mb-1">{member.name}</h3>
                  <p className="text-primary-500 text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <h2 className="section-title mb-3">Frequently Asked <span className="gradient-text">Questions</span></h2>
              <p className="section-subtitle">Everything you need to know about Axiro and the Renesas transition.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => <FaqItem key={faq.q} {...faq} />)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </div>
  );
}
