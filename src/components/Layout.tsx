import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SmoothScroll } from './SmoothScroll';
import { ScrollToTop } from './ScrollToTop';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="relative min-h-screen bg-black text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <main className="relative">
              <Outlet />
            </main>
          </PageTransition>
        </AnimatePresence>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Layout;
