import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TechnologiesSection from '../components/TechnologiesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import IndustriesSection from '../components/IndustriesSection';
import WhyUsSection from '../components/WhyUsSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const newsItems = [
  {
    date: 'April 2025',
    category: 'Company News',
    title: 'Axiro Semiconductor Completes Acquisition of RF Business from Renesas',
    excerpt: 'Effective 3rd April 2025, Axiro Semiconductor takes ownership of the RF product lines previously under Renesas Electronics, continuing uninterrupted supply for customers worldwide.',
    color: 'bg-blue-500',
  },
  {
    date: 'March 2025',
    category: 'Technology',
    title: '5G mmWave Beamformer IC for Ka-Band Satellite Communications',
    excerpt: 'Axiro launches its next-generation 8-channel dual-polarization TRX beamformer IC, setting new benchmarks in satellite communication efficiency and gain performance.',
    color: 'bg-violet-500',
  },
  {
    date: 'January 2025',
    category: 'Partnership',
    title: 'Murugappa Group Bolsters Semiconductor in India Through Axiro',
    excerpt: 'CG Power and Industrial Solutions, the parent company of Axiro, announces expanded operations at Bengaluru design center to accelerate India\'s semiconductor self-reliance.',
    color: 'bg-emerald-500',
  },
];

export default function HomePage() {
  // Initialize scroll reveals
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologiesSection />
        <FeaturedProducts />
        <IndustriesSection />
        <WhyUsSection />

        {/* News Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-5">
                  News & Insights
                </div>
                <h2 className="section-title">
                  Latest <span className="gradient-text">Updates</span>
                </h2>
              </div>
              <Link to="/news" className="btn-outline flex-shrink-0">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal delay-${i + 1} group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`h-1.5 ${item.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`${item.color} text-white text-xs font-semibold px-2.5 py-1 rounded-lg`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-bold font-poppins text-gray-900 text-base mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      to="/news"
                      className="inline-flex items-center gap-1.5 text-primary-500 text-sm font-semibold group-hover:gap-2.5 transition-all"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-500/30">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="section-title mb-4">
              Reach Out to <span className="gradient-text">Us</span>
            </h2>
            <p className="section-subtitle mb-8">
              Whether you have a question, need technical support, or are looking to partner with us,
              we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
