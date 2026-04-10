import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MouseParallaxBackground from '../components/MouseParallaxBackground';
import Footer from '../components/Footer';
import { ChevronRight, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen relative">
      <MouseParallaxBackground imageUrl="/bg/bg-1.jpeg" />
      <div className="relative z-10 w-full h-full flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-6">
            <Link to="/" className="hover:text-violet-300">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
            Get in <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Whether you have a question, need technical support, or are looking to partner with us — we're here to help.
          </p>
        </div>
      </div>

      <main className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6 reveal-left">
              {[
                { icon: Mail, title: 'Sales & General', value: 'sales@axiro.com', sub: 'For product inquiries and quotes' },
                { icon: Mail, title: 'Technical Support', value: 'support@axiro.com', sub: 'For documentation and product support' },
                { icon: Mail, title: 'HR & Careers', value: 'hr@axiro.com', sub: 'For career opportunities' },
                { icon: MapPin, title: 'Headquarters', value: 'San Diego, CA, USA', sub: 'Also: Bengaluru, India | Turkey | China' },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{info.title}</div>
                      <div className="font-semibold text-gray-900 text-sm">{info.value}</div>
                      <div className="text-xs text-gray-400">{info.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal-right">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm">Our team will get back to you within 1–2 business days.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                          <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all" placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                          <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all" placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                        <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all" placeholder="Your Company" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all">
                          <option>Product Inquiry</option>
                          <option>Technical Support</option>
                          <option>Sample Request</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                        <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all resize-none" placeholder="Tell us how we can help..." />
                      </div>
                      <button type="submit" className="w-full btn-primary justify-center py-3.5">
                        <Send className="w-4 h-4" /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
