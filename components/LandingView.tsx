'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Hero, ProductPreview, Calculator, Contact } from '@/App';

export function LandingView() {
  const { lang, openTrial } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero lang={lang} />
      <ProductPreview activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} />
      <Calculator lang={lang} onOpenTrial={openTrial} />
      <Contact onOpenModal={openTrial} lang={lang} />
    </motion.div>
  );
}
