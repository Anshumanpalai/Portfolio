import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SmoothScroll } from './SmoothScroll';
import { ScrollToTop } from './ScrollToTop';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';
import { Preloader } from './Preloader';

export const Layout: React.FC = () => {
  const location = useLocation();
  const [isPreloaded, setIsPreloaded] = useState(() => {
    if (typeof window !== 'undefined') {
      return Boolean(sessionStorage.getItem('portfolio_preloader_seen'));
    }
    return false;
  });

  return (
    <SmoothScroll>
      <ScrollToTop />
      <Preloader onComplete={() => setIsPreloaded(true)} />
      <motion.div
        className="relative min-h-screen bg-black text-white"
        initial={!isPreloaded ? { opacity: 0, y: 16 } : false}
        animate={isPreloaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <main className="relative">
              <Outlet />
            </main>
          </PageTransition>
        </AnimatePresence>
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
};

export default Layout;
