import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLenis } from './SmoothScroll';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { lenis } = useLenis();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    // Check if the preloader has already been displayed during this session
    const hasSeenPreloader = sessionStorage.getItem('portfolio_preloader_seen');
    if (hasSeenPreloader) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    // Lock page scroll while the preloader is active
    document.body.style.overflow = 'hidden';
    lenis?.stop();

    if (shouldReduceMotion) {
      // For reduced motion, complete almost immediately without movement
      const timer = setTimeout(() => {
        sessionStorage.setItem('portfolio_preloader_seen', 'true');
        document.body.style.overflow = '';
        lenis?.start();
        setIsDone(true);
        onComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }

    const startTime = performance.now();
    const minDuration = 1100; // Minimum time to appreciate the elegant entrance
    const maxDuration = 2200; // Hard safety cutoff for slow networks

    let isDocumentReady = document.readyState === 'complete';
    const handleLoad = () => {
      isDocumentReady = true;
    };

    if (!isDocumentReady) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Preload hero assets in background
    const criticalImages = ['/favicon.svg', '/careerpilot-landing.png'];
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let animationFrameId: number;

    const updateProgress = () => {
      if (!isMountedRef.current) return;

      const elapsed = performance.now() - startTime;
      const timeRatio = Math.min(elapsed / minDuration, 1);

      // Organic easeOut curve for the progress bar
      let targetProgress = Math.min(timeRatio * 90, 90);

      if (isDocumentReady && elapsed >= minDuration) {
        targetProgress = 100;
      } else if (elapsed >= maxDuration) {
        targetProgress = 100;
      }

      setProgress((prev) => {
        const next = prev + (targetProgress - prev) * 0.15;
        if (targetProgress === 100 && next >= 99.5) {
          return 100;
        }
        return next;
      });

      if (targetProgress === 100 && elapsed >= minDuration) {
        setProgress(100);
        setTimeout(() => {
          if (!isMountedRef.current) return;
          sessionStorage.setItem('portfolio_preloader_seen', 'true');
          document.body.style.overflow = '';
          lenis?.start();
          setIsDone(true);
          onComplete?.();
        }, 180);
      } else {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      isMountedRef.current = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('load', handleLoad);
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [shouldReduceMotion, lenis, onComplete]);

  // If already completed in session, render nothing
  if (isDone) return null;

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="portfolio-preloader"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : -20,
            transition: {
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Subtle central ambient lighting matching the portfolio bloom */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-white/[0.035] blur-3xl pointer-events-none" />

          {/* Centered Brand / Monogram Lockup */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Minimalist AP Monogram matching the favicon & browser window aesthetic */}
            <div className="relative w-12 h-12 rounded-xl bg-[#0e0e11] border border-white/15 p-2 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]">
              {/* Top specular reflection edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              <svg
                className="w-full h-full"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="loader-ap-grad" x1="14" y1="14" x2="52" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E4E4E7" />
                  </linearGradient>
                </defs>
                <g fill="url(#loader-ap-grad)" fillRule="evenodd" clipRule="evenodd">
                  <path d="M32 15L13.5 49H19.5L34.5 21L32 15Z" />
                  <rect x="21" y="34" width="12" height="5" rx="1" />
                  <rect x="30.5" y="15" width="5" height="34" rx="1.5" />
                  <path d="M33 15H44.5C50.5 15 54 18.5 54 24C54 29.5 50.5 33 44.5 33H33V15ZM35.5 20V28H44C47.2 28 48.8 26.5 48.8 24C48.8 21.5 47.2 20 44 20H35.5Z" />
                </g>
              </svg>
            </div>

            {/* Typography matching Navbar Left Header */}
            <div className="text-center mt-5">
              <span className="block font-display text-xl sm:text-2xl font-medium tracking-tight text-white leading-tight">
                Anshuman Palai
              </span>
              <span className="block font-sans text-xs sm:text-sm text-zinc-400 font-normal tracking-normal mt-1">
                Software Engineer
              </span>
            </div>

            {/* Razor-thin elegant loading progress track */}
            <div className="mt-8 sm:mt-10 w-44 sm:w-52 flex flex-col items-center gap-2">
              <div className="w-full h-[1.5px] bg-zinc-800/80 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-zinc-300 via-white to-zinc-200 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Minimalist mono indicator */}
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-zinc-500 tracking-wider">
                <span>LOADING</span>
                <span className="tabular-nums text-zinc-400">{Math.round(progress)}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
