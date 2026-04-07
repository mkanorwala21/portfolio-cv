import React, { useState, useEffect } from 'react';
import { 
  Globe, Moon, Sun, Briefcase, Code, Rocket, 
  Linkedin, Mail, Terminal, BarChart, Settings, Bot,
  Layers, Database, FileText, ChevronRight, MessageSquare
} from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');

  const content = {
    en: {
      name: "Mustafa Kanorwala",
      title: "Product Development Manager & SaaS Architect",
      subtitle: "who builds AI-powered enterprise systems and global trade solutions.",
      experience: "Work Experience",
      projects: "What I Build",
      contact: "Let's Talk",
      summary: "A multi-faceted entrepreneur and business developer with extensive interests spanning international trade, technology product development, and startup operations. Managing complex cross-border business operations, investment strategies, and AI/SaaS product evaluation.",
      roles: ["Product Development Manager", "B2B Marketplace Architect", "International Trade Expert"],
      stats: [
        { label: "years", value: "3+", desc: "managing 20+ employees at Turkish GCC" },
        { label: "valuation", value: "$100M", desc: "at pre-revenue for NewMind AI" },
        { label: "projects", value: "10+", desc: "full-stack SaaS apps built" }
      ],
      work: [
        {
          company: "Taqafa Labs (NewMind AI)",
          title: "Executive Director & Shareholder",
          period: "2022 - Present",
          location: "Istanbul, Turkey / Pune, India",
          bullets: [
            "Managing Indian subsidiary of NewMind AI, a leading Turkish legal tech startup",
            "Overseeing development and GTM strategy for 'nmaistro', an agentic AI platform",
            "Directed Turkish GCC operations with 20+ employees across regions",
            "Leading AI and legal tech product initiatives for enterprise clients"
          ]
        },
        {
          company: "Import-Export Business",
          title: "Founder & Operator",
          period: "Ongoing",
          location: "India / Turkey / Kazakhstan / China",
          bullets: [
            "Executing cross-border trade of specialty medicines, agricultural commodities, and industrial goods",
            "Managing logistics routes through Red Sea and Central Asian corridors",
            "Consulting on international trade regulations and tax optimization (UAE/Turkey/India)"
          ]
        }
      ],
      saas: [
        {
          name: "VaultDMS",
          desc: "Full-stack enterprise SaaS secure document management system inspired by SharePoint and Notion.",
          tech: "React, Supabase, Tailwind"
        },
        {
          name: "IndustrialHub",
          desc: "B2B SaaS marketplace for industrial equipment and machinery.",
          tech: "TypeScript, PostgreSQL, Node.js"
        },
        {
          name: "ProspectAI",
          desc: "AI-powered sales intelligence and prospecting platform.",
          tech: "LLMs, React, Python"
        }
      ]
    },
    tr: {
      name: "Mustafa Kanorwala",
      title: "Ürün Geliştirme Müdürü ve SaaS Mimarı",
      subtitle: "Yapay zeka destekli kurumsal sistemler ve küresel ticaret çözümleri inşa ediyor.",
      experience: "İş Deneyimi",
      projects: "Neler İnşa Ediyorum",
      contact: "İletişime Geçelim",
      summary: "Uluslararası ticaret, teknoloji ürün geliştirme ve startup operasyonlarını kapsayan geniş bir alanda faaliyet gösteren çok yönlü bir girişimci. Karmaşık sınır ötesi operasyonları, yatırım stratejilerini ve AI/SaaS ürün değerlendirmelerini yönetiyor.",
      roles: ["Ürün Geliştirme Müdürü", "B2B Pazaryeri Mimarı", "Uluslararası Ticaret Uzmanı"],
      stats: [
        { label: "yıl", value: "3+", desc: "Turkish GCC'de 20+ çalışan yönetimi" },
        { label: "değerleme", value: "$100M", desc: "NewMind AI pre-revenue aşamasında" },
        { label: "proje", value: "10+", desc: "geliştirilen full-stack SaaS uygulaması" }
      ],
      work: [
        {
          company: "Taqafa Labs (NewMind AI)",
          title: "Yönetici Direktör ve Hissedar",
          period: "2022 - Günümüz",
          location: "İstanbul, Türkiye / Pune, Hindistan",
          bullets: [
            "Önde gelen Türk hukuk teknolojisi girişimi NewMind AI'ın Hindistan iştirakini yönetiyor",
            "Agentic AI platformu 'nmaistro'nun geliştirme ve GTM stratejisini denetliyor",
            "İstanbul ve Hindistan genelinde 20+ çalışandan oluşan Turkish GCC operasyonlarını yönetti",
            "Kurumsal müşteriler için AI ve hukuk teknolojisi ürün girişimlerine liderlik ediyor"
          ]
        },
        {
          company: "İthalat-İhracat İşletmesi",
          title: "Kurucu ve Operatör",
          period: "Devam Ediyor",
          location: "Hindistan / Türkiye / Kazakistan / Çin",
          bullets: [
            "Özel ilaçlar, tarım emtiaları ve endüstriyel ürünlerin sınır ötesi ticaretini yürütüyor",
            "Kızıldeniz ve Orta Asya koridorları üzerinden lojistik rotalarını yönetiyor",
            "Uluslararası ticaret düzenlemeleri ve vergi optimizasyonu (BAE/Türkiye/Hindistan) konusunda danışmanlık yapıyor"
          ]
        }
      ],
      saas: [
        {
          name: "VaultDMS",
          desc: "SharePoint ve Notion'dan esinlenen kurumsal SaaS güvenli belge yönetim sistemi.",
          tech: "React, Supabase, Tailwind"
        },
        {
          name: "IndustrialHub",
          desc: "Endüstriyel ekipman ve makineler için B2B SaaS pazaryeri.",
          tech: "TypeScript, PostgreSQL, Node.js"
        },
        {
          name: "ProspectAI",
          desc: "AI destekli satış istihbaratı ve prospektif platformu.",
          tech: "LLMs, React, Python"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0d1117] text-[#e6edf3]' : 'bg-gray-50 text-gray-900'} font-sans transition-colors duration-300`}>
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#30363d]/50 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter gradient-text">MK.</div>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-[#30363d] hover:border-[#00e5ff] transition-colors"
          >
            <Globe size={14} /> {lang === 'en' ? 'TR' : 'EN'}
          </button>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-[#30363d] hover:border-[#b388ff] transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full border-4 border-[#00e5ff] p-2 animate-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00e5ff] to-[#b388ff] flex items-center justify-center text-5xl font-bold text-white">
              MK
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-[#00e5ff] font-medium tracking-widest text-sm uppercase">Hi, I'm {lang === 'en' ? 'Mustafa' : 'Mustafa'}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {lang === 'en' ? 'Product Development Manager' : 'Ürün Geliştirme Müdürü'} <br />
              <span className="gradient-text">{t.subtitle}</span>
            </h1>
            <div className="flex flex-wrap gap-2">
              {t.roles.map((role, idx) => (
                <span key={idx} className="px-4 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-[#30363d]/50 bg-[#161b22]/30">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black gradient-text">{stat.value}</span>
                <span className="text-[#8b949e] font-medium uppercase text-xs tracking-widest">{stat.label}</span>
              </div>
              <p className="text-sm text-[#8b949e]">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-[#00e5ff]" />
          <h2 className="text-2xl font-bold uppercase tracking-widest">{t.experience}</h2>
        </div>
        <div className="space-y-16">
          {t.work.map((job, idx) => (
            <div key={idx} className="relative pl-8 border-l border-[#30363d] hover:border-[#00e5ff] transition-colors group">
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#30363d] group-hover:bg-[#00e5ff]" />
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-[#00e5ff] transition-colors">{job.company}</h3>
                  <p className="text-[#b388ff] font-medium">{job.title}</p>
                </div>
                <div className="text-right text-sm text-[#8b949e]">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-[#8b949e] text-sm flex gap-2">
                    <ChevronRight size={14} className="mt-1 flex-shrink-0 text-[#00e676]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SaaS Projects Grid */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Rocket className="text-[#b388ff]" />
          <h2 className="text-2xl font-bold uppercase tracking-widest">{t.projects}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.saas.map((project, idx) => (
            <div key={idx} className="card-hover bg-[#161b22] p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0d1117] flex items-center justify-center border border-[#30363d]">
                {idx === 0 ? <Database className="text-[#00e5ff]" /> : 
                 idx === 1 ? <Layers className="text-[#b388ff]" /> : 
                 <Bot className="text-[#00e676]" />}
              </div>
              <h4 className="text-lg font-bold">{project.name}</h4>
              <p className="text-sm text-[#8b949e]">{project.desc}</p>
              <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-[#b388ff] uppercase tracking-tighter">
                <Code size={12} /> {project.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#30363d]/50">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black">{t.contact}</h2>
          <p className="text-[#8b949e] max-w-xl">
            {lang === 'en' 
              ? "Looking for strategic partnerships or AI-driven SaaS development? Let's connect."
              : "Stratejik ortaklıklar veya AI odaklı SaaS geliştirme mi arıyorsunuz? İletişime geçelim."}
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/mkanorwala21" target="_blank" className="p-4 rounded-full border border-[#30363d] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mustafa@newmind.ai" className="p-4 rounded-full border border-[#30363d] hover:border-[#b388ff] hover:text-[#b388ff] transition-all">
              <Mail size={24} />
            </a>
          </div>
          <div className="pt-20 text-[#8b949e] text-xs">
            © 2026 Mustafa Kanorwala • Based in India • {lang === 'en' ? 'Built with React/Vite' : 'React/Vite ile inşa edildi'}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
