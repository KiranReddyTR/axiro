import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const footerLinks = {
  Products: [
    { label: 'RF & mmWave Amplifiers', href: '/products/amplifiers' },
    { label: 'RF Switches', href: '/products/switches' },
    { label: 'Phased Array Beamformers', href: '/products/beamformers' },
    { label: 'Variable Gain Amplifiers', href: '/products/vga' },
    { label: 'Wi-Gig Modems', href: '/products/wigig' },
    { label: 'RF Attenuators', href: '/products/attenuators' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Meet the Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Insights', href: '/news' },
    { label: 'FAQs', href: '/about#faqs' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Sales & Support', href: '/contact' },
    { label: 'Sample Request', href: '/contact' },
    { label: 'Our Distributors', href: '/contact#distributors' },
    { label: 'Technical Docs', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-primary-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white">
                Ready to power your next project?
              </h3>
              <p className="mt-2 text-white/80 text-sm">
                Reach out to our team for technical support, samples, or partnership opportunities.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Talk to Sales <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 overflow-hidden rounded-xl shadow-lg group-hover:shadow-primary-500/20 transition-all duration-300 bg-white p-0.5">
                <img src={logo} alt="Axiro Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold font-poppins text-white">
                Axiro<span className="text-primary-400"> Semiconductor</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A premier innovator in RF and semiconductor technology, delivering groundbreaking solutions that redefine the future of global connectivity — from 5G to satellite communication.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>sales@axiro.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>support@axiro.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>San Diego, USA | Bengaluru, India | Turkey | China</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/axiro-semiconductor/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Follow on LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Axiro Semiconductor Private Limited. All rights reserved.
              <span className="ml-2 text-gray-600">Proud Owners — Murugappa Group</span>
            </p>
            <div className="flex items-center gap-4">
              {['Terms & Conditions', 'Privacy Policy', 'Cookies Policy', 'Compliance'].map((t) => (
                <Link
                  key={t}
                  to="/contact"
                  className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
