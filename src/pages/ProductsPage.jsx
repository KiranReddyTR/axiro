import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Search, Filter, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'amplifiers',
    name: 'RF & mmWave Amplifiers',
    description: 'High performance signal amplification solutions from LNA to Power Amplifiers with KGAIN technology maintaining near-constant gain across temperature ranges.',
    productCount: 24,
    gradient: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    features: ['FlatNoise™', 'KGAIN™', 'Wideband', 'Low NF'],
    href: '/products/amplifiers',
  },
  {
    id: 'mixers',
    name: 'RF & mmWave Mixers',
    description: 'Precision frequency conversion with Zero-Distortion™ technology improving SNR by reducing noise floor and third-order intermodulation distortion.',
    productCount: 12,
    gradient: 'from-cyan-500 to-blue-500',
    bgLight: 'bg-cyan-50',
    features: ['Zero-Distortion™', 'Up/Down Converter', 'mmWave', 'Low IM3'],
    href: '/products/mixers',
  },
  {
    id: 'switches',
    name: 'RF Switches',
    description: "Proprietary K|Z| constant impedance technology maintains nearly constant impedance when switching between RF ports, minimizing VSWR transients.",
    productCount: 18,
    gradient: 'from-violet-500 to-blue-500',
    bgLight: 'bg-violet-50',
    features: ['K|Z|™', 'SP2T/SP4T', 'Glitch-Free™', 'High Isolation'],
    href: '/products/switches',
  },
  {
    id: 'vga',
    name: 'Variable Gain Amplifiers',
    description: 'KLIN Constant Linearity Technology maintains constant high linearity as gain is adjusted — preventing intermodulation distortion from degrading performance.',
    productCount: 9,
    gradient: 'from-emerald-500 to-cyan-500',
    bgLight: 'bg-emerald-50',
    features: ['KLIN™', 'FlatNoise™', 'Constant OIP3', 'Wideband'],
    href: '/products/vga',
  },
  {
    id: 'beamformers',
    name: 'Phased Array Beamformers',
    description: 'Advanced beam steering ICs for 5G mmWave, satellite communication, and defense systems — supporting massive MIMO and AESA radar architectures.',
    productCount: 7,
    gradient: 'from-orange-400 to-rose-500',
    bgLight: 'bg-orange-50',
    features: ['8/16-Channel', 'Dual-Polarization', 'Ku/Ka Band', 'Active Beamforming'],
    href: '/products/beamformers',
  },
  {
    id: 'modulators',
    name: 'Modulators & Demodulators',
    description: 'High-fidelity signal modulation and demodulation solutions for telecommunications, satellite, and defense applications requiring precise signal fidelity.',
    productCount: 6,
    gradient: 'from-pink-500 to-violet-500',
    bgLight: 'bg-pink-50',
    features: ['I/Q Modulator', 'Wideband', 'High EVM', 'Low Phase Noise'],
    href: '/products/modulators',
  },
  {
    id: 'rapid-io',
    name: 'Rapid IO Switches & Bridges',
    description: 'High-speed data interconnect solutions enabling fast and reliable data transfer across embedded processor networks and electronic systems.',
    productCount: 8,
    gradient: 'from-indigo-500 to-blue-500',
    bgLight: 'bg-indigo-50',
    features: ['RapidIO Gen3', 'PCIe Bridge', 'Low Latency', 'Cut-Through'],
    href: '/products/rapid-io',
  },
  {
    id: 'attenuators',
    name: 'RF Attenuators',
    description: 'Digital step attenuators with Glitch-Free™ technology eliminating transient overshoot during attenuation state transitions for reliable signal control.',
    productCount: 11,
    gradient: 'from-rose-500 to-orange-500',
    bgLight: 'bg-rose-50',
    features: ['Glitch-Free™', 'DSA', '6-Bit Steps', 'Broadband'],
    href: '/products/attenuators',
  },
  {
    id: 'wigig',
    name: 'Wi-Gig Modems',
    description: 'Next-generation 60GHz Wi-Gig modem solutions enabling ultra-high-speed short-range wireless data transport for fixed wireless access and enterprise applications.',
    productCount: 4,
    gradient: 'from-teal-500 to-cyan-500',
    bgLight: 'bg-teal-50',
    features: ['60GHz', 'Multi-Gbps', 'Low Latency', 'FWA'],
    href: '/products/wigig',
  },
];

const featuredItems = [
  { code: 'F2914', name: 'High Reliability SP4T RF Switch', category: 'RF Switches', gradient: 'from-blue-500 to-blue-600' },
  { code: 'F6521', name: '8-Channel Transmit Active Beamforming IC (Ku-Band)', category: 'Phased Array Beamformers', gradient: 'from-violet-500 to-blue-500' },
  { code: 'F6921', name: 'Dual-Channel Low Noise Amplifier (Ku-Band Satcom)', category: 'RF & mmWave Amplifiers', gradient: 'from-cyan-500 to-blue-500' },
  { code: 'F5268', name: '8-Channel Dual-Pol TRX Beamformer IC at 24.25–27.5GHz', category: 'Phased Array Beamformers', gradient: 'from-pink-500 to-violet-500' },
  { code: 'F5701', name: 'mmWave Up/Down-Converter 24.25–29.5GHz', category: 'RF & mmWave Mixers', gradient: 'from-indigo-500 to-blue-500' },
  { code: 'F1485', name: 'High Gain RF Amplifier 2300MHz–5000MHz', category: 'RF & mmWave Amplifiers', gradient: 'from-orange-400 to-rose-500' },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 orb-blue opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-4">
              <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Products</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              Circuit-Level Innovations
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              RF Products<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Discover Axiro's comprehensive range of high-performance RF and mmWave semiconductor solutions — engineered for world-class reliability from 10KHz to 40GHz.
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gray-50">
        {/* Search */}
        <div className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-3 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search product categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter className="w-4 h-4" />
                <span>{filtered.length} categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cat, i) => (
                <Link
                  key={cat.id}
                  to={cat.href}
                  className={`reveal delay-${Math.min(i + 1, 6)} group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${cat.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cat.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-6 h-6 border-2 border-white/60 rounded grid place-items-center">
                          <div className="w-3 h-3 bg-white/80 rounded-sm" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg">
                        {cat.productCount} products
                      </span>
                    </div>
                    <h3 className="font-bold font-poppins text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.features.map((f) => (
                        <span key={f} className="text-xs px-2.5 py-1 bg-gray-50 text-gray-500 border border-gray-100 rounded-full font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-primary-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Explore Category <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 reveal">
              <h2 className="section-title mb-2">Featured <span className="gradient-text">Products</span></h2>
              <p className="section-subtitle">Our most popular and recently released products.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredItems.map((p, i) => (
                <Link to={`/product/${p.code.toLowerCase()}`} key={p.code} className={`reveal delay-${Math.min(i+1,5)} group flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:bg-primary-50 hover:shadow-md transition-all duration-200`}>
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${p.gradient} rounded-lg grid place-items-center shadow group-hover:scale-110 transition-transform duration-200`}>
                    <div className="w-5 h-5 border border-white/50 rounded grid place-items-center">
                      <div className="w-2.5 h-2.5 bg-white/80 rounded-sm" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono font-bold text-gray-400 mb-0.5">{p.code}</div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 line-clamp-1">{p.name}</div>
                    <div className="text-xs text-gray-400">{p.category}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
