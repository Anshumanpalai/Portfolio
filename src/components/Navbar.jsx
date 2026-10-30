import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Work', path: '/' },
  { name: 'Info', path: '/about' },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-5"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Left — Name & Role */}
      <div className="flex flex-col">
        <NavLink to="/" className="group inline-block">
          <span className="block font-display text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors leading-tight">
            Anshuman Palai
          </span>
          <span className="block text-sm sm:text-base text-zinc-400 font-normal tracking-normal leading-tight mt-0.5">
            Software Engineer
          </span>
        </NavLink>
      </div>

      {/* Center — Floating Pill Nav (Perry Wang 2023 Style) */}
      <nav className="glass-nav relative isolate rounded-full p-1 flex items-center shadow-2xl">
        {/* Specular highlight above pill */}
        <div 
          aria-hidden="true" 
          className="absolute -top-px left-1/2 -translate-x-1/2 w-7 h-[2px] rounded-full bg-white/75 pointer-events-none" 
        />

        {NAV_ITEMS.map((item) => {
          const isActive = 
            item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative block"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="nav-active-glass absolute inset-0 rounded-full"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 block rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Right — External Links */}
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="https://www.linkedin.com/in/anshuxdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/anshumanpalai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors hidden sm:inline-block"
        >
          GitHub ↗
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
