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
    <footer className="border-t border-[#f2f2f21a] px-6 sm:px-12 md:px-16 py-20 bg-black text-[#f2f2f2]">
      <div className="max-w-[1240px] w-full mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Left — CTA */}
          <div className="max-w-md">
            <h2 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-[#f2f2f2]">
              Let's build something together.
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={`mailto:${email}`}
                onClick={handleEmailClick}
                className={`text-sm inline-flex items-center gap-1.5 font-mono transition-all duration-200 cursor-pointer ${
                  copied
                    ? 'text-emerald-400'
                    : 'text-[#f2f2f280] hover:text-[#f2f2f2]'
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

          {/* Right — Columns matching Perry Wang 2023 */}
          <div className="flex items-start gap-12 sm:gap-16">
            {/* Column 1: Main */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#f2f2f280] mb-3">
                Main
              </div>
              <div className="flex flex-col space-y-2 text-sm font-sans">
                <a href="/" className="text-[#f2f2f280] hover:text-[#f2f2f2] transition-colors">
                  Work
                </a>
                <a href="/about" className="text-[#f2f2f280] hover:text-[#f2f2f2] transition-colors">
                  Info
                </a>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#f2f2f280] mb-3">
                Contact
              </div>
              <div className="flex flex-col space-y-2 text-sm font-sans">
                <a
                  href="https://www.linkedin.com/in/anshuxdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f2f2f280] hover:text-[#f2f2f2] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://github.com/anshumanpalai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f2f2f280] hover:text-[#f2f2f2] transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  onClick={handleEmailClick}
                  className="text-[#f2f2f280] hover:text-[#f2f2f2] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Email {copied ? '✓' : ''}</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-[#f2f2f21a] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-[#f2f2f280] font-sans">
          <div>
            <span>© {new Date().getFullYear()} Anshuman Palai. All Rights Reserved.</span>
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">
            Designed with care
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
