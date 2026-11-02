import React, { useState } from 'react';

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/anshumanpalai' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anshuxdev/' },
];

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = 'mrgameryt9050@gmail.com';

  const handleEmailClick = (e) => {
    e.preventDefault();
    // 1. Copy to clipboard with fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    // 2. Open Gmail compose directly in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank', 'noopener,noreferrer');
  };

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
            <div className="mt-2 flex items-center gap-2">
              <a
                href={`mailto:${email}`}
                onClick={handleEmailClick}
                className={`text-sm inline-flex items-center gap-1.5 font-mono transition-all duration-200 cursor-pointer ${
                  copied
                    ? 'text-emerald-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Click to copy and open Gmail"
              >
                <span>{email}</span>
                <span className="text-xs transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5">
                  {copied ? '✓' : '↗'}
                </span>
                {copied && (
                  <span className="text-[11px] font-sans text-emerald-400/90 ml-1">
                    (Copied!)
                  </span>
                )}
              </a>
            </div>
          </div>

          {/* Right — Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors text-sm font-sans"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              onClick={handleEmailClick}
              className="text-zinc-500 hover:text-white transition-colors text-sm font-sans cursor-pointer"
            >
              Email {copied ? '✓' : ''}
            </a>
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
