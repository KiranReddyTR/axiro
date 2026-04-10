import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, Download, CheckCircle2, Package, Layers, Activity } from 'lucide-react';

const productDatabase = {
  'f2914': {
    name: 'F2914',
    title: 'High Reliability SP4T RF Switch',
    category: 'RF Switches',
    description: 'The F2914 is a high reliability, low insertion loss, 50Ω SP4T absorptive RF switch designed for a multitude of wireless and other RF applications. This device covers a broad frequency range from 50MHz to 8000MHz. In addition to providing low insertion loss, the F2914 also delivers excellent linearity and isolation performance while providing a 50Ω termination to the unused RF ports. The F2914 also includes a patent-pending constant impedance (Kz) feature.',
    features: [
      'Four symmetric broadband, absorptive RF ports',
      'Constant Impedance, Kz, feature',
      'High-performance RF: Isolation of 54dB at 2700MHz, Insertion Loss of 1.15dB',
      'High continuous RF CW Power Handling: Selected RF path 33dBm',
      'High linearity: IIP2 of 114dBm, IIP3 of 59.5dBm',
      'Single 2.7V to 5.50V supply voltage',
      '3.3V and 1.8V compatible control logic',
      'Operating temperature -40 °C to +105 °C',
      '4mm x 4mm 24-pin QFN package'
    ],
    documents: [
      { name: 'F2914 Datasheet', size: '800.76 KB', type: 'Datasheet', date: '2024-08-25' },
      { name: 'F2914 Product Brief REVA', size: '252.85 KB', type: 'Product Brief', date: '2024-08-25' },
      { name: 'F2914 S-Parameters', size: '1.71 MB', type: 'Model - S-parameter', date: '2024-08-25' },
      { name: 'F2914 IBIS Model', size: '4.23 KB', type: 'Model - IBIS', date: '2024-08-25' }
    ],
    gradient: 'from-violet-500 to-cyan-500'
  }
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = productDatabase[id] || {
    name: id.toUpperCase(),
    title: 'High-Performance RF Solution',
    category: 'Detailed Component',
    description: 'Detailed specifications and ordering information for this high-performance semiconductor device. Please contact sales for full datasheet access.',
    features: ['High Reliability', 'Broadband operation', 'Excellent Linearity', 'Industrial Temperature Range'],
    documents: [{ name: 'Preliminary Datasheet', size: '1.2 MB', type: 'Datasheet', date: '2025-01-10' }],
    gradient: 'from-slate-500 to-slate-700'
  };

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-8">
            <Link to="/" className="hover:text-violet-300">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-violet-300">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-lg mb-4 backdrop-blur-md border border-white/20">
                {product.category}
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
                {product.name} <span className="font-light text-slate-400">|</span> {product.title}
              </h1>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="btn-primary">Request Sample</button>
                <Link to="/contact" className="btn-outline border-white/30 text-white hover:bg-white hover:text-violet-900">Contact Sales</Link>
              </div>
            </div>
            
            <div className={`aspect-square max-w-sm mx-auto w-full bg-gradient-to-br ${product.gradient} rounded-3xl p-1 shadow-2xl reveal`}>
              <div className="w-full h-full bg-slate-900/90 rounded-[22px] flex items-center justify-center p-8 backdrop-blur-xl">
                <div className="w-32 h-32 border-4 border-slate-700/50 rounded-xl relative grid place-items-center bg-slate-800 shadow-inner">
                  <div className="w-8 h-8 rounded-full bg-slate-600 absolute top-2 left-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]" />
                  <span className="font-mono font-bold text-slate-400 tracking-wider rotate-[-45deg] select-none text-xl">{product.name}</span>
                  <div className="absolute inset-0 flex items-center justify-between px-1">
                    <div className="flex flex-col gap-1.5"><div className="w-1.5 h-3 bg-yellow-600/50 rounded-r-sm"/><div className="w-1.5 h-3 bg-yellow-600/50 rounded-r-sm"/><div className="w-1.5 h-3 bg-yellow-600/50 rounded-r-sm"/></div>
                    <div className="flex flex-col gap-1.5"><div className="w-1.5 h-3 bg-yellow-600/50 rounded-l-sm"/><div className="w-1.5 h-3 bg-yellow-600/50 rounded-l-sm"/><div className="w-1.5 h-3 bg-yellow-600/50 rounded-l-sm"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-12">
          <section className="reveal">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary-500" /> Description
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {product.description}
            </p>
          </section>
          
          <section className="reveal delay-1">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500" /> Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Sidebar (Docs & Specs) */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm reveal delay-2">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary-500" /> Product Documents
            </h3>
            <div className="space-y-3">
              {product.documents.map((doc, i) => (
                <a key={i} href="#" className="group flex flex-col p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-sm text-primary-600 group-hover:text-primary-700">{doc.name}</span>
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">{doc.type}</span>
                    <span>{doc.size}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-50 to-cyan-50 border border-violet-100 rounded-2xl p-6 reveal delay-3">
            <h3 className="font-bold text-violet-900 mb-4 flex items-center gap-2">
              <Package className="w-4 h-4 text-violet-500" /> Ordering Options
            </h3>
            <div className="bg-white rounded-xl p-4 border border-violet-100/50 shadow-sm text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-2 mb-2">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-emerald-600">Active</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2 mb-2">
                <span className="text-gray-500">Package</span>
                <span className="font-medium text-gray-900">VFQFPN-24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pb (Lead) Free</span>
                <span className="font-medium text-gray-900">Yes</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-colors shadow shadow-violet-500/20">
              Buy / Check Inventory
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
