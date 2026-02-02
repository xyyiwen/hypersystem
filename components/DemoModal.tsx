'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/translations';
import { BRAND_GREEN } from '@/lib/brand';

export function DemoModal() {
  const { lang, isModalOpen, closeTrial } = useApp();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setTimeout(() => setIsSubmitted(false), 500);
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const t = translations[lang].modal;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeTrial}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-3xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col h-full overflow-hidden"
            >
              <div className="bg-slate-50 p-6 md:p-10 border-b border-slate-100 flex justify-between items-start shrink-0">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-base leading-relaxed">{t.desc}</p>
                </div>
                <button
                  onClick={closeTrial}
                  className="p-3 hover:bg-slate-200 transition-colors rounded-2xl text-slate-400 shrink-0 ml-4"
                >
                  <X />
                </button>
              </div>
              <form
                className="p-6 md:p-10 space-y-8 overflow-y-auto"
                onSubmit={handleSubmit}
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      {t.labelBrand}
                    </label>
                    <input
                      type="text"
                      placeholder={t.placeholderBrand}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      {t.labelContact}
                    </label>
                    <input
                      type="text"
                      placeholder={t.placeholderContact}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      {t.labelEmail}
                    </label>
                    <input
                      type="email"
                      placeholder={t.placeholderEmail}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      {t.labelPhone}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.placeholderPhone}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-3 sm:col-span-2">
                    <label className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      {t.labelAddress}
                    </label>
                    <input
                      type="text"
                      placeholder={t.placeholderAddress}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black text-xl shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all"
                >
                  {t.btnSubmit}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center p-12 md:p-16 text-center space-y-8"
            >
              <div
                style={{ backgroundColor: BRAND_GREEN }}
                className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-slate-950 shadow-2xl shadow-emerald-500/20 animate-bounce"
              >
                <PartyPopper size={48} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter">
                  Thank You!
                </h3>
                <p className="text-slate-500 font-bold text-2xl leading-relaxed max-w-md mx-auto">
                  {lang === 'zh-TW'
                    ? '謝謝您提交申請，HyperSystem 團隊將會聯絡您並協助您啟用服務'
                    : lang === 'zh-CN'
                      ? '谢谢您提交申请，HyperSystem 团队将会联络您并協助您启用服务'
                      : lang === 'ja'
                        ? 'お申し込みありがとうございます。HyperSystemチームよりご連絡し、サービスの有効化をサポートいたします。'
                        : 'Thank you for submitting your application. The HyperSystem team will contact you soon to help activate your service.'}
                </p>
              </div>
              <button
                onClick={closeTrial}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black tracking-tight hover:bg-emerald-400 transition-all shadow-xl text-lg"
              >
                {lang.startsWith('zh') ? '返回首頁' : lang === 'ja' ? 'ホームに戻る' : 'Back to Home'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
