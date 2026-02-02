'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Language } from '@/types';

type AppContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  openTrial: () => void;
  closeTrial: () => void;
  isModalOpen: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('zh-TW');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openTrial = useCallback(() => setIsModalOpen(true), []);
  const closeTrial = useCallback(() => setIsModalOpen(false), []);

  return (
    <AppContext.Provider
      value={{ lang, setLang, openTrial, closeTrial, isModalOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
