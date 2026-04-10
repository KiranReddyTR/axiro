import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, ChevronDown, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const stats = [
  { value: '400M+', label: 'Devices Shipped' },
  { value: '10+', label: 'Years Excellence' },
  { value: '40GHz', label: 'Max Frequency' },
  { value: '5G→6G', label: 'Technology Coverage' },
];

const badges = [
  { icon: Zap, label: 'Glitch-Free™ Technology' },
  { icon: Shield, label: 'Defense-Grade Reliability' },
  { icon: Globe, label: 'Global Connectivity' },
];

export default function HeroSection() {
  const { t } = useTranslation();
  const particlesRef = useRef(null);

  useEffect(() => {
    // Animate particles
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex flex-col">
      {/* Background Elements */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />
      <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 orb-blue pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 orb-cyan pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-slide-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              RF & mmWave Semiconductor Solutions
            </div>

            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              {t('hero.titlePart1')}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {t('hero.titlePart2')}
              </span>
              <span className="text-blue-400">.</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              {t('hero.subtitle')}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-xs font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                {t('hero.ctaProducts')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <Play className="w-4 h-4" /> {t('hero.ctaSample')}
              </Link>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hidden lg:block relative animate-fade-in animate-delay-300">
            {/* Circuit board visual */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl border border-blue-400/20 backdrop-blur-sm" />

              {/* Animated ring */}
              <div className="absolute inset-4 border border-blue-400/30 rounded-2xl animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-8 border border-cyan-400/20 rounded-2xl animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-1 relative">
                      <div className="absolute inset-0 border-2 border-white/40 rounded-xl" />
                      <div className="absolute inset-2 border border-white/20 rounded-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-0.5">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-1.5 h-1.5 bg-white/80 rounded-sm"
                              style={{ opacity: [0, 2, 4, 6, 8].includes(i) ? 0.9 : 0.3 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-white text-xs font-bold">RF CHIP</span>
                  </div>
                </div>
              </div>

              {/* Orbiting chips */}
              {['5G', 'mmW', 'SAT', 'DEF'].map((label, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const radius = 140;
                const x = 50 + Math.cos(angle) * 35;
                const y = 50 + Math.sin(angle) * 35;
                return (
                  <div
                    key={label}
                    className="absolute w-14 h-14 bg-slate-800/80 border border-blue-400/30 rounded-xl flex items-center justify-center text-blue-300 text-xs font-bold backdrop-blur-sm shadow-lg"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-slate-400 text-sm mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
