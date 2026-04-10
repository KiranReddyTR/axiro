import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const productLinks = [
  { label: 'RF & mmWave Amplifiers', href: '/products/amplifiers' },
  { label: 'RF & mmWave Mixers', href: '/products/mixers' },
  { label: 'RF Switches', href: '/products/switches' },
  { label: 'Variable Gain Amplifiers', href: '/products/vga' },
  { label: 'Phased Array Beamformers', href: '/products/beamformers' },
  { label: 'Modulators & Demodulators', href: '/products/modulators' },
  { label: 'RF Attenuators', href: '/products/attenuators' },
  { label: 'Wi-Gig Modems', href: '/products/wigig' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 overflow-hidden rounded-xl shadow-md group-hover:shadow-primary-500/20 transition-all duration-300 bg-white p-0.5">
              <img src={logo} alt="Axiro Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold font-poppins">
              <span className={scrolled || isOpen ? "text-gray-900" : "text-white"}>
                Axiro
              </span>
              <span className="gradient-text ml-0.5 font-extrabold uppercase tracking-tight text-lg">Semi</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive(link.href)
                        ? 'text-primary-600 bg-primary-50'
                        : scrolled
                        ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-72 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 mb-1">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Product Categories
                        </span>
                      </div>
                      {productLinks.map((p) => (
                        <Link
                          key={p.label}
                          to={p.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 group"
                        >
                          <Zap className="w-3.5 h-3.5 text-primary-400 group-hover:text-primary-600" />
                          {p.label}
                        </Link>
                      ))}
                      <div className="mx-3 mt-2 pt-2 border-t border-gray-100">
                        <Link
                          to="/products"
                          className="flex items-center justify-center w-full py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-primary-600 bg-primary-50'
                      : scrolled
                      ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                scrolled
                  ? 'text-gray-600 hover:text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get a Sample
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {productLinks.map((p) => (
                      <Link
                        key={p.label}
                        to={p.href}
                        className="block px-4 py-2 text-xs text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        → {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link to="/contact" className="btn-outline text-sm justify-center">
                Contact Us
              </Link>
              <Link to="/contact" className="btn-primary text-sm justify-center">
                Get a Sample
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
