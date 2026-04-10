import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, ArrowRight, Calendar, Tag } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    date: 'April 3, 2025',
    category: 'Company News',
    categoryColor: 'bg-violet-500',
    title: 'Axiro Semiconductor Completes Acquisition of RF Business from Renesas',
    excerpt: 'Effective 3rd April 2025, Axiro Semiconductor takes ownership of the RF product lines previously under Renesas Electronics, ensuring uninterrupted supply for customers across 5G, satellite, and defense sectors worldwide.',
    readTime: '5 min read',
    featured: true,
    gradient: 'from-violet-500 to-violet-700',
  },
  {
    id: 2,
    date: 'March 15, 2025',
    category: 'Technology',
    categoryColor: 'bg-violet-500',
    title: 'F5268: 8-Channel Dual-Polarization TRX Beamformer IC Launched for mmWave 5G',
    excerpt: 'The F5268 delivers 8-channel dual-polarization transmit/receive beamforming at 24.25–27.5GHz, enabling next-generation massive MIMO base stations with unprecedented signal density and efficiency.',
    readTime: '4 min read',
    featured: false,
    gradient: 'from-violet-500 to-violet-500',
  },
  {
    id: 3,
    date: 'March 2025',
    category: 'Partnership',
    categoryColor: 'bg-emerald-500',
    title: 'Murugappa Group Accelerates India Semiconductor Ambitions Through Axiro',
    excerpt: 'CG Power and Industrial Solutions\' Bengaluru design center expansion reinforces India\'s growing semiconductor self-reliance. Axiro hiring aggressively across RF design, product engineering, and strategy functions.',
    readTime: '3 min read',
    featured: false,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 4,
    date: 'February 2025',
    category: 'Product',
    categoryColor: 'bg-orange-500',
    title: 'Axiro Expands Ku-Band Satcom Portfolio with F6921 Dual-Channel LNA',
    excerpt: 'The F6921 sets a new standard in satellite receiver front-ends with ultra-low noise figure, dual-channel configuration, and seamless integration with phased-array beamformers for LEO and GEO satellite systems.',
    readTime: '4 min read',
    featured: false,
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    id: 5,
    date: 'January 2025',
    category: 'Events',
    categoryColor: 'bg-cyan-600',
    title: 'Axiro at IMS 2025: Showcasing Innovations in RF and mmWave Semiconductor',
    excerpt: 'Axiro will present its latest RF and mmWave innovations at the IEEE International Microwave Symposium 2025, highlighting advances in phased-array beamforming, low-noise amplification, and 5G infrastructure.',
    readTime: '2 min read',
    featured: false,
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    id: 6,
    date: 'December 2024',
    category: 'Technology',
    categoryColor: 'bg-indigo-500',
    title: 'KGAIN™ Technology: Solving Gain Drift Over Temperature for RF Signal Chains',
    excerpt: 'A deep-dive into Axiro\'s proprietary KGAIN technology — how automatic S21 variation reduction over temperature significantly simplifies design constraints for large-scale RF signal chains in 5G and defense applications.',
    readTime: '7 min read',
    featured: false,
    gradient: 'from-indigo-500 to-violet-500',
  },
];

export default function NewsPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const [featuredArticle, ...restArticles] = newsArticles;

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
            <span>News & Insights</span>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
            News &{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Stay up to date with the latest news, product launches, and technology insights from Axiro Semiconductor.
          </p>
        </div>
      </div>

      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Article */}
          <div className="mb-12 reveal">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className={`h-2 bg-gradient-to-r ${featuredArticle.gradient}`} />
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`${featuredArticle.categoryColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg`}>
                    {featuredArticle.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">{featuredArticle.readTime}</span>
                  <span className="text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-200 px-2 py-1 rounded-lg">⭐ Featured</span>
                </div>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-base mb-6 max-w-3xl">
                  {featuredArticle.excerpt}
                </p>
                <Link to={`/news/${featuredArticle.id}`} className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restArticles.map((article, i) => (
              <div
                key={article.id}
                className={`reveal delay-${Math.min(i+1,5)} group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${article.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <span className={`${article.categoryColor} text-white text-xs font-bold px-2.5 py-1 rounded-lg`}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                  </div>
                  <h3 className="font-bold font-poppins text-gray-900 text-base mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                    <Link to={`/news/${article.id}`} className="inline-flex items-center gap-1 text-primary-500 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
