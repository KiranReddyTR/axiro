import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const technologies = [
  {
    id: 'glitch-free',
    name: 'Glitch-Free™',
    tagline: 'Digital Step Attenuators',
    description:
      "Axiro's digital step attenuators virtually eliminate transient overshoot during MSB attenuation state transitions of standard DSAs — protecting amplifiers and preserving ADC data integrity.",
    gradient: 'from-violet-500 to-violet-600',
    bgGlow: 'bg-violet-500/10',
    icon: '⚡',
    metrics: ['Zero Transient Overshoot', 'MSB Protected', 'Amplifier Safe'],
  },
  {
    id: 'flat-noise',
    name: 'FlatNoise™',
    tagline: 'Variable Gain Amplifiers',
    description:
      "Axiro's VGA noise figure is kept virtually flat in the critical region while gain is reduced, greatly easing design constraints for radio engineers by enhancing signal-to-noise ratio (SNR).",
    gradient: 'from-cyan-500 to-cyan-600',
    bgGlow: 'bg-cyan-500/10',
    icon: '📡',
    metrics: ['Near-Flat NF', 'Enhanced SNR', 'Design Simplified'],
  },
  {
    id: 'zero-distortion',
    name: 'Zero-Distortion™',
    tagline: 'RF Amplifiers & Mixers',
    description:
      'Axiro RF amplifiers and mixers improve SNR by reducing the noise floor and third-order intermodulation distortion — critical for crowded spectrum environments and maximizing QoS.',
    gradient: 'from-violet-500 to-violet-500',
    bgGlow: 'bg-violet-500/10',
    icon: '🔬',
    metrics: ['Reduced IM3', 'Improved QoS', 'Spectrum Efficient'],
  },
  {
    id: 'klin',
    name: 'KLIN™',
    tagline: 'Constant Linearity Technology',
    description:
      "Axiro's variable gain amplifiers maintain constant high linearity as gain is adjusted. As gain is reduced, the linearity (OIP3) remains constant — preventing intermodulation distortion.",
    gradient: 'from-emerald-500 to-cyan-500',
    bgGlow: 'bg-emerald-500/10',
    icon: '📊',
    metrics: ['Constant OIP3', 'Stable Linearity', 'Gain Independent'],
  },
  {
    id: 'kz',
    name: 'K|Z|™',
    tagline: 'Constant Impedance Technology',
    description:
      "Axiro's RF switches maintain nearly constant impedance when switching between RF ports. By controlling VSWR transients are minimized, improving reliability and reducing voltage stresses.",
    gradient: 'from-orange-400 to-pink-500',
    bgGlow: 'bg-orange-500/10',
    icon: '🔄',
    metrics: ['Constant VSWR', 'Minimal Transients', 'High Reliability'],
  },
  {
    id: 'kgain',
    name: 'KGAIN™',
    tagline: 'Constant Gain Compensation',
    description:
      'Axiro amplifiers maintain near-constant gain with KGAIN technology that automatically reduces S21 variation over temperature — ideal for large signal chains requiring process tolerance.',
    gradient: 'from-rose-500 to-orange-500',
    bgGlow: 'bg-rose-500/10',
    icon: '🌡️',
    metrics: ['Temp Invariant', 'Process Tolerant', 'Large Signal Chain'],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-5">
            Proprietary IP
          </div>
          <h2 className="section-title mb-4">
            Our Core{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Six breakthrough innovations that define Axiro's competitive edge — from 10KHz to 40GHz,
            built to solve real-world RF challenges.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={tech.id}
              className={`reveal delay-${Math.min(i + 1, 6)} group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 ${tech.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              {/* Content */}
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
                    {tech.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {tech.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {tech.metrics.map((m) => (
                    <span
                      key={m}
                      className={`text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${tech.gradient} text-white font-medium`}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <Link to="/about" className="btn-outline">
            Learn About Our Technologies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
