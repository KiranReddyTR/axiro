import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Radio, Satellite, Shield, Zap, Globe } from 'lucide-react';

const industries = [
  {
    id: 'wireless-infra',
    icon: Wifi,
    title: 'Wireless Infrastructure',
    shortDesc: 'Massive MIMO AAU, Macro RRU, Small Cell & mmWave 5G base stations.',
    description:
      'As high-speed and high-capacity radio access demand increases, wireless infrastructure products are evolving into many types of base stations. Axiro provides RF solutions with high reliability and diverse functionality, covering small signal, power amplifier and PACC.',
    tags: ['Massive MIMO', 'Macro RRU', 'Small Cell', 'mmWave 5G'],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-100',
    textColor: 'text-blue-600',
    tagBg: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'fixed-wireless',
    icon: Radio,
    title: 'Fixed Wireless Access',
    shortDesc: 'High-speed broadband connectivity eliminating the need for physical cables.',
    description:
      "Axiro's Fixed Wireless Access solutions deliver reliable, high-speed connectivity, enabling seamless broadband access with enhanced performance, low latency, and optimized efficiency for residential and enterprise networks.",
    tags: ['Licensed Band', 'Unlicensed Band', 'Low Latency', 'Enterprise'],
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    bgLight: 'bg-cyan-50',
    borderLight: 'border-cyan-100',
    textColor: 'text-cyan-600',
    tagBg: 'bg-cyan-100 text-cyan-700',
  },
  {
    id: 'satcom',
    icon: Satellite,
    title: 'Satellite Communication',
    shortDesc: 'Global coverage for secure data, voice & video transmissions.',
    description:
      "Axiro's Satellite Communication solutions ensure reliable, high-performance connectivity, delivering advanced semiconductor technology for robust satellite networks, secure data transmission, and efficient global communication systems.",
    tags: ['Ku-Band', 'Ka-Band', 'Global Coverage', 'Beamforming'],
    color: 'violet',
    gradient: 'from-violet-500 to-blue-500',
    bgLight: 'bg-violet-50',
    borderLight: 'border-violet-100',
    textColor: 'text-violet-600',
    tagBg: 'bg-violet-100 text-violet-700',
  },
  {
    id: 'aerospace',
    icon: Shield,
    title: 'Aerospace & Defense',
    shortDesc: 'Mission-critical solutions for aviation, military and security operations.',
    description:
      "Axiro's Aerospace and Defence solutions provide mission-critical semiconductor technologies, enabling secure communications, precise radar systems, and robust performance in the most demanding operational environments.",
    tags: ['Radar Systems', 'Secure Comms', 'EW Systems', 'AESA'],
    color: 'emerald',
    gradient: 'from-emerald-500 to-cyan-500',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-100',
    textColor: 'text-emerald-600',
    tagBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'interconnect',
    icon: Zap,
    title: 'High-Speed Interconnect',
    shortDesc: 'Ultra-fast, reliable data transfers across network and electronic systems.',
    description:
      "Axiro's High-Speed Interconnect solutions deliver ultra-fast, reliable data transfers, enhancing connectivity and performance for aerospace and defence applications requiring rapid communication and robust signal integrity.",
    tags: ['RapidIO', 'PCIe', 'Signal Integrity', 'Low Latency'],
    color: 'orange',
    gradient: 'from-orange-400 to-rose-500',
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-100',
    textColor: 'text-orange-600',
    tagBg: 'bg-orange-100 text-orange-700',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-5">
            <Globe className="w-4 h-4" /> Real-World Applications
          </div>
          <h2 className="section-title mb-4">
            Industries We{' '}
            <span className="gradient-text">Power</span>
          </h2>
          <p className="section-subtitle">
            From 5G networks to aerospace systems, Axiro solutions empower cutting-edge RF
            technology across diverse global industries.
          </p>
        </div>

        {/* Industries */}
        <div className="space-y-5">
          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {industries.slice(0, 3).map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className={`reveal delay-${i + 1} group relative ${ind.bgLight} border ${ind.borderLight} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  {/* Gradient top accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${ind.gradient}`} />

                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${ind.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className={`text-lg font-bold font-poppins ${ind.textColor} mb-2`}>
                    {ind.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {ind.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${ind.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/products"
                    className={`inline-flex items-center gap-1.5 ${ind.textColor} text-sm font-semibold hover:gap-2.5 transition-all`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industries.slice(3).map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className={`reveal delay-${i + 1} group flex gap-6 ${ind.bgLight} border ${ind.borderLight} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${ind.gradient}`} />

                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${ind.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-bold font-poppins ${ind.textColor} mb-2`}>
                      {ind.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {ind.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${ind.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/products"
                      className={`inline-flex items-center gap-1.5 ${ind.textColor} text-sm font-semibold hover:gap-2.5 transition-all`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
