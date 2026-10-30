import React from 'react';

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/anshumanpalai' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anshuxdev/' },
  { name: 'Email', url: 'mailto:mrgameryt9050@gmail.com' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
          {/* Left — CTA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-white">
              Let's build something together.
            </h2>
            <a
              href="mailto:mrgameryt9050@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors text-sm mt-2 inline-block font-mono"
            >
              mrgameryt9050@gmail.com ↗
            </a>
          </div>

          {/* Right — Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors text-sm font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-zinc-900/80 flex justify-between items-center text-xs text-zinc-600 font-mono">
          <span>© {new Date().getFullYear()} Anshuman Palai</span>
          <span>Designed with care</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
