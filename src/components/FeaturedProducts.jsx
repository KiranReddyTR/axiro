import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'f2914',
    code: 'F2914',
    name: 'High Reliability SP4T RF Switch',
    category: 'RF Switches',
    href: '/product/f2914',
    badge: 'Featured',
    badgeColor: 'bg-blue-500',
    specs: ['High Reliability', 'SP4T Configuration', 'Broadband'],
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 'f2932',
    code: 'F2932',
    name: 'High Reliability SP2T RF Switch',
    category: 'RF Switches',
    href: '/product/f2932',
    badge: 'New',
    badgeColor: 'bg-emerald-500',
    specs: ['SP2T Architecture', '< 1dB Insertion Loss', 'High Isolation'],
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'f6521',
    code: 'F6521',
    name: '8-Channel Transmit Active Beamforming IC for Ku-Band Satcom',
    category: 'Phased Array Beamformers',
    href: '/product/f6521',
    badge: 'Satcom',
    badgeColor: 'bg-violet-500',
    specs: ['8-Channel TX', 'Ku-Band', 'Active Beamforming'],
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 'f6921',
    code: 'F6921',
    name: 'Dual-Channel Low Noise Amplifier for Ku-Band Satcom',
    category: 'RF & mmWave Amplifiers',
    href: '/product/f6921',
    badge: 'LNA',
    badgeColor: 'bg-cyan-600',
    specs: ['Dual Channel', 'Ultra-Low NF', 'Ku-Band'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'f1485',
    code: 'F1485',
    name: 'High Gain RF Amplifier 2300MHz to 5000MHz',
    category: 'RF & mmWave Amplifiers',
    href: '/product/f1485',
    badge: 'Wideband',
    badgeColor: 'bg-orange-500',
    specs: ['2.3-5.0 GHz', 'High Gain', 'FlatNoise™'],
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    id: 'f5268',
    code: 'F5268',
    name: '8-Channel Dual-Polarization TRX Beamformer IC at 24.25–27.5GHz',
    category: 'Phased Array Beamformers',
    href: '/product/f5268',
    badge: '5G mmWave',
    badgeColor: 'bg-pink-500',
    specs: ['8-Channel TRX', 'Dual-Pol', 'mmWave 5G'],
    gradient: 'from-pink-500 to-violet-500',
  },
  {
    id: 'f5701',
    code: 'F5701',
    name: 'mmWave Up/Down-Converter 24.25GHz to 29.5GHz',
    category: 'RF & mmWave Mixers',
    href: '/product/f5701',
    badge: 'mmWave',
    badgeColor: 'bg-indigo-500',
    specs: ['Up/Down Converter', '24.25–29.5GHz', 'Zero-Distortion™'],
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-5">
              Product Portfolio
            </div>
            <h2 className="section-title mb-3">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="section-subtitle">
              Discover high-performance solutions from Axiro engineered for exceptional speed,
              efficiency, and reliable connectivity.
            </p>
          </div>
          <Link to="/products" className="btn-primary flex-shrink-0">
            Explore All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <Link
              key={product.id}
              to={product.href}
              className={`reveal delay-${Math.min(i + 1, 6)} group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${product.gradient} w-full`} />

              <div className="p-5">
                {/* Badge + Code */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`${product.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-lg`}
                  >
                    {product.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {product.code}
                  </span>
                </div>

                {/* Icon placeholder */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <div className="w-6 h-6 border-2 border-white/60 rounded grid place-items-center">
                    <div className="w-3 h-3 bg-white/80 rounded-sm" />
                  </div>
                </div>

                {/* Product name */}
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 font-poppins">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4">{product.category}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.specs.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 border border-gray-100 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* View CTA */}
                <div className="flex items-center gap-1 text-primary-500 text-xs font-semibold group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
