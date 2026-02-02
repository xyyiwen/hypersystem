'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Clock,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { getModules, getPainPoints, CARD_SUITS } from '@/constants';
import { CalculationResults, Language } from '@/types';
import { translations } from '@/translations';
import { LOGO_URL, HERO_SHOWCASE_URL, BRAND_GREEN } from '@/lib/brand';

// --- Shared Components (used by LandingView) ---

export const CardSuitWatermark: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute pointer-events-none opacity-[0.04] select-none ${className}`}>
    <div className="flex gap-12 text-6xl">
      {CARD_SUITS.map(suit => <span key={suit}>{suit}</span>)}
    </div>
  </div>
);

export const SectionTitle: React.FC<{ tag?: string; title: string; subtitle?: string }> = ({ tag, title, subtitle }) => (
  <div className="mb-16 text-center">
    {tag && <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">{tag}</span>}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-4xl mx-auto font-medium text-xl leading-relaxed whitespace-pre-line">{subtitle}</p>}
  </div>
);

// --- Hero Section ---

export const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative pt-40 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden min-h-[70vh] flex items-center bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80" 
          alt="Poker Venue Background" 
          className="w-full h-full object-cover opacity-[0.06] grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/40 via-white/40 to-white/10" />
        <CardSuitWatermark className="top-20 left-20" />
        <CardSuitWatermark className="bottom-20 right-20 rotate-180" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-20">
        {/* Adjusted grid columns to 1fr : 1.4fr to give more horizontal weight to the image side */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-black tracking-[0.4em] mb-8 border border-blue-600/20 uppercase shadow-lg shadow-blue-600/20"
            >
              {t.tag}
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter">
              {t.title1}<br />
              <span className="text-blue-600 drop-shadow-[0_2px_10px_rgba(79,144,19,0.3)]">{t.title2}</span>
            </h1>
            
            <p className="text-slate-500 text-2xl font-medium mb-12 max-w-lg leading-relaxed">
              {t.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-16">
              <Link href="/club">
                <motion.div 
                  whileHover={{ y: -8 }} 
                  className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] transition-all cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-slate-900/30 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ backgroundColor: BRAND_GREEN }} className="w-10 h-10 text-slate-950 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all shadow-sm"><LayoutDashboard size={20} /></div>
                    <h3 className="text-white font-black text-xl tracking-tight">{t.card1Title}</h3>
                  </div>
                  <p className="text-base text-slate-400 font-bold leading-relaxed">{t.card1Desc}</p>
                </motion.div>
              </Link>
              <Link href="/player">
                <motion.div 
                  whileHover={{ y: -8 }} 
                  className="bg-white border border-slate-100 p-8 rounded-[2rem] transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-slate-200 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-slate-950 group-hover:scale-110 transition-all shadow-sm"><Smartphone size={20} /></div>
                    <h3 className="text-slate-900 font-black text-xl tracking-tight">{t.card2Title}</h3>
                  </div>
                  <p className="text-base text-slate-500 font-bold leading-relaxed">{t.card2Desc}</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }} 
            animate={{ opacity: 1, scale: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }} 
            className="relative hidden lg:block"
          >
            <div className="relative flex items-center justify-center">
               <img 
                 src={HERO_SHOWCASE_URL} 
                 alt="HyperSystem Brand Experience" 
                 style={{ imageRendering: 'auto' }}
                 /* Removed max-w-full to let it expand more freely in the larger column */
                 className="w-full h-auto drop-shadow-[0_25px_70px_rgba(0,0,0,0.15)] object-contain transition-opacity duration-700"
               />
            </div>
            <div style={{ backgroundColor: BRAND_GREEN }} className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400 rounded-full blur-[100px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ProductPreview: React.FC<{ activeTab: number; setActiveTab: (id: number) => void; lang: Language }> = ({ activeTab, setActiveTab, lang }) => {
  const t = translations[lang].product;
  const modules = getModules(lang);
  const demoAreaRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    if (demoAreaRef.current) {
      const rect = demoAreaRef.current.getBoundingClientRect();
      const headerOffset = 110;
      const bottomMargin = 40;
      const isPartiallyAbove = rect.top < headerOffset;
      const isPartiallyBelow = rect.bottom > window.innerHeight - bottomMargin;
      if (isPartiallyAbove || isPartiallyBelow) {
        const targetY = window.scrollY + rect.top - headerOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="product" className="py-32 px-8 md:px-16 lg:px-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle tag={t.tag} title={t.title} subtitle={t.subtitle} />
        <div className="flex flex-col lg:flex-row gap-12 mt-20 items-center">
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {modules.map((mod, idx) => (
              <button 
                key={mod.id} 
                onClick={() => handleTabClick(idx)} 
                className={`w-full p-8 rounded-[2.5rem] transition-all text-left border relative overflow-hidden group ${
                  activeTab === idx 
                    ? 'bg-slate-900 border-slate-900 shadow-2xl shadow-slate-900/30' 
                    : 'bg-slate-50 border-slate-100 text-slate-900 hover:border-slate-200'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div 
                    style={{ backgroundColor: activeTab === idx ? BRAND_GREEN : 'white' }}
                    className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                      activeTab === idx ? 'text-slate-950' : 'text-blue-600 shadow-sm'
                    }`}
                  >
                    {mod.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className={`font-black text-xl transition-colors ${activeTab === idx ? 'text-white' : 'text-slate-900'}`}>{mod.name}</h3>
                    <p className={`text-base font-bold leading-relaxed transition-colors ${activeTab === idx ? 'text-white/80' : 'text-slate-500'}`}>{mod.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {mod.highlights.map((tag, tIdx) => (
                        <span key={tIdx} className={`text-sm px-3 py-1.5 rounded-lg font-black uppercase tracking-wider transition-all ${activeTab === idx ? 'bg-slate-800 text-white border border-slate-700' : 'bg-blue-100 text-blue-700'}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div 
            ref={demoAreaRef}
            id="feature-preview"
            className="w-full lg:w-[65%] bg-slate-50 border border-slate-100 rounded-[3rem] lg:rounded-[4rem] p-4 lg:p-8 relative overflow-hidden flex flex-col justify-center shadow-inner scroll-mt-24"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -30 }} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
                className="relative z-10 w-full"
              >
                <div className="bg-black rounded-[2rem] lg:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden relative flex items-center justify-center min-h-[300px]">
                  {modules[activeTab].demo}
                </div>
              </motion.div>
            </AnimatePresence>
            <div style={{ backgroundColor: BRAND_GREEN }} className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Calculator: React.FC<{ lang: Language; onOpenTrial: () => void }> = ({ lang, onOpenTrial }) => {
  const [step, setStep] = useState<'input' | 'calculating' | 'result'>('input');
  const t = translations[lang].calculator;
  const hc = translations[lang].healthCheck;
  const currentPoints = getPainPoints(lang);
  const [painPoints, setPainPoints] = useState<boolean[]>(new Array(currentPoints.length).fill(false));
  const [inputs, setInputs] = useState({ tournaments: 4, players: 80, hourlyWage: 180 });
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateResults = () => {
    setStep('calculating');
    setTimeout(() => {
      let dailyMins = 0; let monthlyMins = 0; let riskSum = 0; let growthSum = 0;
      painPoints.forEach((checked, idx) => {
        if (!checked) return;
        const p = currentPoints[idx];
        if (p.t) dailyMins += (p.t * inputs.tournaments);
        if (p.p) dailyMins += (p.p * inputs.players);
        if (p.m) monthlyMins += p.m;
        if (p.r) riskSum += p.r;
        if (p.g) growthSum += p.g;
      });
      const hrs = Math.round(((dailyMins * 30) + monthlyMins) / 60);
      setResults({ hours: hrs, risk: (15 + riskSum * 5).toFixed(1), growth: (5 + growthSum).toFixed(1), money: hrs * inputs.hourlyWage });
      setStep('result');
    }, 1500);
  };

  const groupedPoints = {
    'Ops': currentPoints.filter(p => p.group === 'Ops'),
    'Control': currentPoints.filter(p => p.group === 'Control'),
    'Growth': currentPoints.filter(p => p.group === 'Growth')
  };

  const splitPillarTitle = (title: string) => {
    const parts = title.split(/[|｜]/).map(s => s.trim());
    return { primary: parts[0], secondary: parts[1] };
  };

  const p1 = splitPillarTitle(hc.pillar1);
  const p2 = splitPillarTitle(hc.pillar2);
  const p3 = splitPillarTitle(hc.pillar3);

  return (
    <section id="calculator" className="py-32 pb-48 px-8 md:px-16 lg:px-24 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.08] grayscale contrast-125 brightness-110">
        <img 
          src="https://images.unsplash.com/photo-1513531915082-c66242a569a0?auto=format&fit=crop&q=80" 
          alt="Poker Chips Watermark" 
          className="w-full h-full object-cover scale-110 blur-[0.3px]"
        />
      </div>
      
      <CardSuitWatermark className="top-10 left-10" />
      <CardSuitWatermark className="bottom-10 right-10 rotate-180" />
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-blue-600 font-black text-base tracking-[0.4em] uppercase mb-4 block">Business Health Check</span>
          <SectionTitle title={hc.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/90 border-l-4 border-blue-600 p-8 rounded-r-3xl shadow-sm transition-all hover:shadow-md backdrop-blur-sm">
            <div className="mb-3 space-y-1">
              <h3 className="text-xl font-black text-blue-700 tracking-tight uppercase leading-none">{p1.primary}</h3>
              <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-none">{p1.secondary}</h3>
            </div>
            <p className="text-slate-600 text-base font-semibold leading-relaxed mt-4">{hc.pillar1Desc}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/90 border-l-4 border-amber-600 p-8 rounded-r-3xl shadow-sm transition-all hover:shadow-md backdrop-blur-sm">
            <div className="mb-3 space-y-1">
              <h3 className="text-xl font-black text-amber-600 tracking-tight uppercase leading-none">{p2.primary}</h3>
              <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-none">{p2.secondary}</h3>
            </div>
            <p className="text-slate-600 text-base font-semibold leading-relaxed mt-4">{hc.pillar2Desc}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/90 border-l-4 border-emerald-600 p-8 rounded-r-3xl shadow-sm transition-all hover:shadow-md backdrop-blur-sm">
            <div className="mb-3 space-y-1">
              <h3 className="text-xl font-black text-emerald-600 tracking-tight uppercase leading-none">{p3.primary}</h3>
              <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-none">{p3.secondary}</h3>
            </div>
            <p className="text-slate-600 text-base font-semibold leading-relaxed mt-4">{hc.pillar3Desc}</p>
          </motion.div>
        </div>

        <div className="text-center mb-6">
          <p className="text-slate-500 font-bold text-xl max-w-3xl mx-auto leading-relaxed">{hc.footer}</p>
        </div>

        <div className="bg-[#050817] border border-slate-800 rounded-[4rem] p-6 md:p-20 shadow-3xl relative overflow-hidden">
          {step === 'input' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col lg:flex-row gap-16 text-left">
                <div className="flex-[3] space-y-16">
                  <h4 className="text-2xl font-black text-white flex items-center gap-4 uppercase"><ShieldAlert size={28} className="text-red-500" /> {t.title1}</h4>
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h5 style={{ color: BRAND_GREEN }} className="font-black text-base uppercase tracking-widest">{t.groupOps}</h5>
                      <div className="grid gap-3">
                        {groupedPoints['Ops'].map((p) => {
                          const idx = currentPoints.findIndex(orig => orig.label === p.label);
                          return (
                            <label key={idx} className={`flex items-center gap-5 p-5 rounded-2xl cursor-pointer border transition-all ${painPoints[idx] ? 'bg-emerald-400/20 border-emerald-500/50' : 'bg-slate-900/40 border-slate-700 hover:border-slate-600'}`}>
                              <div 
                                style={{ backgroundColor: painPoints[idx] ? BRAND_GREEN : 'transparent', borderColor: painPoints[idx] ? BRAND_GREEN : '#334155' }}
                                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${painPoints[idx] ? 'shadow-xl shadow-emerald-500/30' : ''}`}
                              >
                                {painPoints[idx] && <CheckCircle2 size={14} className="text-slate-950" />}
                                <input type="checkbox" className="hidden" checked={painPoints[idx]} onChange={() => { const n = [...painPoints]; n[idx] = !n[idx]; setPainPoints(n); }} />
                              </div>
                              <div className={`font-bold text-base leading-relaxed ${painPoints[idx] ? 'text-white' : 'text-slate-400'}`}>{p.label}</div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h5 className="text-amber-400 font-black text-base uppercase tracking-widest">{t.groupControl}</h5>
                      <div className="grid gap-3">
                        {groupedPoints['Control'].map((p) => {
                          const idx = currentPoints.findIndex(orig => orig.label === p.label);
                          return (
                            <label key={idx} className={`flex items-center gap-5 p-5 rounded-2xl cursor-pointer border transition-all ${painPoints[idx] ? 'bg-amber-600/20 border-amber-500/50' : 'bg-slate-900/40 border-slate-700 hover:border-slate-600'}`}>
                              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${painPoints[idx] ? 'bg-amber-500 border-amber-500 shadow-xl shadow-amber-500/30' : 'bg-transparent border-slate-600'}`}>
                                {painPoints[idx] && <CheckCircle2 size={14} className="text-white" />}
                                <input type="checkbox" className="hidden" checked={painPoints[idx]} onChange={() => { const n = [...painPoints]; n[idx] = !n[idx]; setPainPoints(n); }} />
                              </div>
                              <div className={`font-bold text-base leading-relaxed ${painPoints[idx] ? 'text-white' : 'text-slate-400'}`}>{p.label}</div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h5 className="text-blue-600 font-black text-base uppercase tracking-widest">{t.groupGrowth}</h5>
                      <div className="grid gap-3">
                        {groupedPoints['Growth'].map((p) => {
                          const idx = currentPoints.findIndex(orig => orig.label === p.label);
                          return (
                            <label key={idx} className={`flex items-center gap-5 p-5 rounded-2xl cursor-pointer border transition-all ${painPoints[idx] ? 'bg-blue-600/20 border-blue-500/50' : 'bg-slate-900/40 border-slate-700 hover:border-slate-600'}`}>
                              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${painPoints[idx] ? 'bg-blue-500 border-blue-500 shadow-xl shadow-blue-500/30' : 'bg-transparent border-slate-600'}`}>
                                {painPoints[idx] && <CheckCircle2 size={14} className="text-white" />}
                                <input type="checkbox" className="hidden" checked={painPoints[idx]} onChange={() => { const n = [...painPoints]; n[idx] = !n[idx]; setPainPoints(n); }} />
                              </div>
                              <div className={`font-bold text-base leading-relaxed ${painPoints[idx] ? 'text-white' : 'text-slate-400'}`}>{p.label}</div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-[2] space-y-8">
                  <div className="sticky top-10 space-y-8">
                    <h4 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight text-left"><BarChart3 size={28} className="text-blue-500"/> {t.title2}</h4>
                    <div className="bg-slate-900/60 p-10 rounded-[3rem] border border-slate-700/50 space-y-8">
                      {[{ label: t.label1, k: 'tournaments' as const }, { label: t.label2, k: 'players' as const }, { label: t.label3, k: 'hourlyWage' as const }].map(item => (
                        <div key={item.k} className="text-left">
                          <label className="text-sm font-black text-slate-500 uppercase tracking-widest block mb-4">{item.label}</label>
                          <input type="number" value={inputs[item.k]} onChange={(e) => setInputs({...inputs, [item.k]: parseInt(e.target.value) || 0})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-6 py-4 text-white font-black text-3xl focus:border-blue-500 outline-none transition-all" />
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={calculateResults} 
                      style={{ backgroundColor: BRAND_GREEN }}
                      className="w-full h-16 hover:bg-slate-900 text-slate-950 hover:text-white rounded-xl font-black text-xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 px-4"
                    >
                      {t.btnRun} <ChevronRight size={20}/>
                    </button>
                  </div>
                </div>
            </motion.div>
          )}

          {step === 'calculating' && (
            <div className="py-40 text-center">
              <div className="w-20 h-20 border-4 border-slate-700 border-t-blue-600 rounded-full animate-spin mx-auto mb-10"/>
              <h4 className="text-3xl font-black text-white tracking-tighter">{t.calculating}</h4>
            </div>
          )}

          {step === 'result' && results && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-900/60 border border-slate-700/50 p-12 rounded-[3.5rem] text-center shadow-xl">
                  <Clock className="mx-auto mb-4 text-blue-500" size={32} />
                  <div className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">{t.resultHours}</div>
                  <div className="text-9xl font-black text-blue-500 tracking-tighter font-mono">{results.hours}<span className="text-4xl ml-1 text-slate-600">H</span></div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 p-12 rounded-[3.5rem] text-center shadow-xl">
                  <ShieldCheck className="mx-auto mb-4 text-amber-500" size={32} />
                  <div className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">{t.resultRisk}</div>
                  <div className="text-9xl font-black text-amber-500 tracking-tighter font-mono">{results.risk}<span className="text-4xl ml-1 text-slate-600">%</span></div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 p-12 rounded-[3.5rem] text-center shadow-xl">
                  <TrendingUp className="mx-auto mb-4 text-emerald-500" size={32} />
                  <div className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">{t.resultGrowth}</div>
                  <div className="text-9xl font-black text-emerald-500 tracking-tighter font-mono">{results.growth}<span className="text-4xl ml-1 text-slate-600">%</span></div>
                </div>
              </div>
              <div style={{ backgroundColor: BRAND_GREEN }} className="rounded-[3rem] p-10 md:px-14 md:py-10 shadow-3xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left flex-1">
                    <h4 className="text-2xl md:text-3xl font-black text-slate-950 leading-tight uppercase tracking-tighter mb-2">{t.resultValue}</h4>
                    <div className="text-slate-950 tracking-tighter text-6xl md:text-8xl font-mono">${ (results.money * 12).toLocaleString() }<span className="text-2xl font-sans ml-3 opacity-60">TWD / {lang.startsWith('zh') ? '年' : 'YR'}</span></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                    <button 
                      onClick={() => setStep('input')} 
                      className="flex-1 md:w-48 h-16 bg-white text-slate-950 rounded-xl font-black text-xl transition-all active:scale-95 flex items-center justify-center hover:bg-slate-100 whitespace-nowrap px-4"
                    >
                      {t.btnRetry}
                    </button>
                    <button 
                      onClick={onOpenTrial} 
                      className="flex-1 md:w-48 h-16 bg-slate-950 text-white rounded-xl font-black text-xl transition-all active:scale-95 flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white whitespace-nowrap px-4"
                    >
                      {t.btnApply} <ArrowRight size={20}/>
                    </button>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-950/20">
                  <p className="text-slate-950 font-bold text-xl text-center lg:text-left">
                    {t.resultFooter}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC<{ onOpenModal: () => void; lang: Language }> = ({ onOpenModal, lang }) => {
  const t = translations[lang].contact;
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 relative bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                {t.title1}<br />
                <span style={{ color: BRAND_GREEN }}>{t.title2}</span>
              </h2>
              <p className="text-slate-400 text-2xl font-medium leading-relaxed max-w-xl">
                {t.desc}
              </p>
              <button 
                onClick={onOpenModal}
                style={{ backgroundColor: BRAND_GREEN }}
                className="text-slate-950 px-12 py-6 rounded-2xl text-xl font-black tracking-tight hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-emerald-500/20 group flex items-center gap-4"
              >
                {t.btnTrial} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block relative"
            >
               <img 
                 src={HERO_SHOWCASE_URL} 
                 alt="HyperSystem Product Ecosystem" 
                 className="w-full h-auto drop-shadow-[0_20px_50px_rgba(152,255,63,0.15)] rounded-3xl"
               />
               <div style={{ backgroundColor: BRAND_GREEN }} className="absolute inset-0 opacity-10 blur-3xl -z-10" />
            </motion.div>
          </div>
          <CardSuitWatermark className="top-10 right-10 rotate-45" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

