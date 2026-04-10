import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, Award } from 'lucide-react';

const values = [
  { icon: '🔐', title: 'Integrity & Responsibility', desc: 'We hold ourselves to the highest standards of ethics, accountability, and ownership across all decisions.' },
  { icon: '⚙️', title: 'Engineering Excellence', desc: 'We engineer with obsessive focus on precision, performance, and efficiency — refining and validating at every stage.' },
  { icon: '💡', title: 'Customers at the Core', desc: 'Our customers\' success is our success. We listen, anticipate challenges, and design solutions that are practical and scalable.' },
  { icon: '🚀', title: 'Passion for Possibilities', desc: 'We take on ambitious goals, solve industry-defining problems, and shape the next era of wireless innovation.' },
  { icon: '🌱', title: 'Growing Together', desc: 'We foster a culture of learning, mentorship, and shared success where individuals are empowered to innovate and excel.' },
];

const achievements = [
  { icon: Award, number: '400M+', label: 'Devices Shipped', sublabel: 'Satisfying demanding customers for 10+ years' },
  { icon: TrendingUp, number: '2G → 6G', label: 'Technology Evolution', sublabel: "World's 1st and unique innovations at every generation" },
  { icon: Target, number: '10KHz–40GHz', label: 'Frequency Coverage', sublabel: 'Broadband and narrowband solutions' },
  { icon: Users, number: '200+', label: 'Expert Engineers', sublabel: 'Global team across USA, India, Turkey & China' },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden relative">
      {/* Background elements */}
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 orb-blue opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 orb-cyan opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-semibold uppercase tracking-wider mb-6">
            Why Choose Axiro
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Axiro is a premier innovator in RF and semiconductor technology, delivering groundbreaking
            solutions that redefine the future of global connectivity — spun out from Renesas, backed
            by the Murugappa Group.
          </p>
        </div>

        {/* Achievement numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.label}
                className={`reveal delay-${i + 1} group glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1">
                  {a.number}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{a.label}</div>
                <div className="text-slate-400 text-xs leading-tight">{a.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`reveal delay-${Math.min(i + 1, 5)} glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300`}
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="text-white font-semibold font-poppins text-base mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="reveal delay-6 relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
            <div>
              <h3 className="text-white font-bold font-poppins text-lg mb-2">
                Join the Fastest Growing Team
              </h3>
              <p className="text-white/80 text-sm">
                Build your career, innovate boldly, and grow alongside industry leaders.
              </p>
            </div>
            <Link
              to="/careers"
              className="mt-4 inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors w-fit"
            >
              View Careers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center reveal">
          <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
            Learn More About Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
