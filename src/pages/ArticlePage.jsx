import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, Calendar, User, Share2 } from 'lucide-react';

const articleDatabase = {
  '1': {
    title: 'Axiro Semiconductor Completes Acquisition of RF Business from Renesas',
    date: 'April 3, 2025',
    category: 'Company News',
    author: 'Axiro Corporate Communications',
    content: `
      <p><strong>San Diego, CA — April 3, 2025</strong> — Axiro Semiconductor today announced the successful and complete acquisition of the Radio Frequency (RF) semiconductor business from Renesas Electronics Corporation. This milestone establishes Axiro as a premier pure-play independent provider of high-performance RF, microwave, and millimeter-wave (mmWave) solutions globally.</p>
      
      <h3>Strategic Expansion into High-Growth Markets</h3>
      <p>The acquisition strategically enhances Axiro's presence in high-growth connectivity sectors, particularly 5G/6G wireless infrastructure, satellite communications (Satcom), and aerospace & defense. By carving out this highly specialized portfolio, Axiro inherits decades of proven circuit-level innovations including Glitch-Free™ attenuators and Zero-Distortion™ mixers.</p>
      
      <p>"This is a transformative day for the RF semiconductor industry," said Naveen Yanduru, Chief Executive Officer of Axiro. "By bringing together an exceptional team of engineers, a robust portfolio of proven IP, and the backing of the Murugappa Group, we are uniquely positioned to accelerate innovation for our customers without the systemic overhead of a massive conglomerate. We are agile, focused, and ready to lead."</p>

      <h3>Seamless Customer Transition</h3>
      <p>To ensure zero disruption for the global customer base, Renesas will continue to support Axiro in manufacturing supply chain processes for up to 12 months. Additionally, for the next six months, Renesas will act as an agent on Axiro's behalf to smoothly process existing purchase orders.</p>
      
      <p>All active RF components — including the popular F29xx series switches and F65xx beamformers — will remain in continuous production with no planned end-of-life (EOL) resulting from this transaction. Part numbers, fabrication locations, and quality specifications remain identical.</p>

      <h3>Looking Ahead</h3>
      <p>With an expanded design center presence in San Diego (USA), Bengaluru (India), Turkey, and China, Axiro is heavily investing in Next-Gen R&D. The company plans to rapidly expand its portfolio of Active Electronically Scanned Array (AESA) solutions for low earth orbit (LEO) satellites and wideband tactical radios.</p>
    `,
    imageGradient: 'from-blue-600 to-indigo-900'
  }
};

export default function ArticlePage() {
  const { id } = useParams();
  const article = articleDatabase[id] || {
    title: 'Advancements in Next-Generation Carrier-Grade RF Components',
    date: 'Recently Published',
    category: 'Technology',
    author: 'Axiro Engineering',
    content: '<p>Lorum ipsum dolor sit amet, consectetur adipiscing elit. Full details of this technology breakthrough are currently being compiled. Please check back later or subscribe to our newsletter for the full technical whitepaper publication.</p>',
    imageGradient: 'from-slate-700 to-slate-900'
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-primary-500 text-sm font-medium mb-8">
            <Link to="/" className="text-gray-400 hover:text-primary-500">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <Link to="/news" className="text-gray-400 hover:text-primary-500">News</Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="truncate max-w-[200px]">{article.title}</span>
          </div>

          <div className="mb-10 reveal">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-lg mb-4 uppercase tracking-wider">
              {article.category}
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-y border-gray-100 py-4">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {article.author}</span>
              <button className="flex items-center gap-2 ml-auto hover:text-primary-500 transition-colors">
                <Share2 className="w-4 h-4" /> Share Article
              </button>
            </div>
          </div>

          <div className={`w-full aspect-[21/9] rounded-3xl bg-gradient-to-r ${article.imageGradient} mb-12 shadow-xl reveal delay-1 flex items-center justify-center relative overflow-hidden`}>
            {/* Abstract visual background for the article header image */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blend-overlay" />
            <div className="text-white/20 font-bold text-8xl tracking-tighter select-none font-poppins">AXIRO</div>
          </div>

          <article 
            className="prose prose-lg prose-blue max-w-none text-gray-600 reveal delay-2 
              prose-headings:font-poppins prose-headings:font-bold prose-headings:text-gray-900 
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:mb-6 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-100 reveal">
            <Link to="/news" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to all news
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
