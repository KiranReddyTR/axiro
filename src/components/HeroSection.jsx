import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, ChevronDown, Play } from 'lucide-react';
import { useEffect, useRef, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ThreeDChip from './ThreeDChip';

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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 overflow-hidden flex flex-col">
      {/* Background Elements */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />
      <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 orb-violet pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 orb-cyan pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-slide-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-400/20 rounded-full text-violet-300 text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
              RF & mmWave Semiconductor Solutions
            </div>

            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              {t('hero.titlePart1')}{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                {t('hero.titlePart2')}
              </span>
              <span className="text-violet-400">.</span>
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
                  <Icon className="w-3.5 h-3.5 text-violet-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
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
          </div>          {/* Right — True 3D WebGL Element */}
          <div className="hidden lg:block relative animate-fade-in animate-delay-300">
            {/* Ambient Backlight to frame the chip */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            
            <Suspense fallback={
              <div className="w-full h-[500px] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-violet-500/30 border-t-cyan-400 rounded-full animate-spin" />
              </div>
            }>
              <ThreeDChip />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold font-poppins bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
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
