'use client';

import React from 'react';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DemoModal } from '@/components/DemoModal';

function SiteLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-brand-green selection:text-brand-dark">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <DemoModal />
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <SiteLayoutInner>{children}</SiteLayoutInner>
    </AppProvider>
  );
}
