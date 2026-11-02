import React from 'react';

/**
 * Realistic macOS / Chrome browser interface matching high-end portfolio aesthetics.
 */
export const BrowserMockup = ({
  domain = 'localhost:3000',
  title = 'Application',
  image = '',
  alt = 'Project preview',
  children = null,
} = {}) => {
  return (
    <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-700/60 bg-[#1e1f23] shadow-[0_25px_65px_-12px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out">
      {/* Row 1: Chrome Tab Bar & Window Controls */}
      <div className="relative h-9 sm:h-10 px-3 sm:px-4 bg-[#202124] flex items-center justify-between border-b border-black/40 select-none">
        {/* Left: Window Traffic Lights */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-sm" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-sm" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-sm" />
        </div>

        {/* Center-Left: Active Chrome Tab */}
        <div className="flex items-center gap-2 max-w-[180px] sm:max-w-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-t-lg bg-[#2d2e33] border-t border-x border-zinc-700/50 shadow-sm -mb-px">
          {/* Favicon dot */}
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-indigo-400 shrink-0" />
          <span className="text-[11px] sm:text-xs font-sans text-zinc-200 truncate font-medium">
            {title}
          </span>
          <span className="text-zinc-500 hover:text-zinc-300 text-[11px] ml-auto shrink-0 leading-none cursor-default">
            ×
          </span>
        </div>

        {/* Right: New Tab Button */}
        <div className="flex items-center gap-2 text-zinc-500 text-xs">
          <span className="hover:text-zinc-300 cursor-default px-1 font-mono text-sm">+</span>
        </div>
      </div>

      {/* Row 2: Navigation Toolbar & Omnibox Address Bar */}
      <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#28292c] flex items-center justify-between gap-3 border-b border-black/30 select-none">
        {/* Navigation buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-400">
          <svg className="w-3.5 h-3.5 cursor-default hover:text-zinc-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg className="w-3.5 h-3.5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <svg className="w-3.5 h-3.5 cursor-default hover:text-zinc-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </div>

        {/* Omnibox (Address Bar) */}
        <div className="flex-1 max-w-sm sm:max-w-md mx-auto flex items-center justify-between px-3 py-1 sm:py-1.5 rounded-full bg-[#1b1c1f] border border-zinc-700/50 text-zinc-300 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            {/* Padlock Icon */}
            <svg className="w-3 h-3 text-zinc-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            <span className="font-mono text-zinc-300 truncate">
              {domain}
            </span>
          </div>
          {/* Bookmark Star */}
          <svg className="w-3 h-3 text-zinc-500 hover:text-zinc-300 shrink-0 cursor-default" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>

        {/* Right side controls: Profile Avatar & Settings Menu */}
        <div className="flex items-center gap-2 sm:gap-3 text-zinc-400">
          <div className="w-5 h-5 rounded-full bg-zinc-700/90 border border-zinc-600/50 flex items-center justify-center text-[10px] text-zinc-300 font-semibold font-sans">
            A
          </div>
          <svg className="w-3.5 h-3.5 text-zinc-500 cursor-default hover:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </div>
      </div>

      {/* Browser Viewport with Screenshot */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] bg-black overflow-hidden group/screen">
        {image ? (
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

/**
 * Visual Mockup Previews for Project Cards.
 */
export const ProjectMockup = ({
  type = '',
  domain = '',
  title = '',
  image = '',
  alt = '',
} = {}) => {
  if (type === 'arc-and-form') {
    return (
      <BrowserMockup
        domain="arc-and-form-eight.vercel.app"
        title="ARC & FORM • Luxury Storefront"
        image="/arc-and-form.jpg"
        alt="ARC & FORM Minimalist Architectural Luxury E-Commerce Storefront"
      />
    );
  }

  if (type === 'careerpilot') {
    return (
      <BrowserMockup
        domain="careerpilot-ai-psi-eight.vercel.app"
        title="CareerPilot AI • Career Copilot"
        image="/careerpilot-landing.png"
        alt="CareerPilot AI Career Intelligence Platform"
      />
    );
  }

  if (image) {
    return (
      <BrowserMockup
        domain={domain || 'preview.app'}
        title={title || 'Project Preview'}
        image={image}
        alt={alt || 'Project screenshot'}
      />
    );
  }

  if (type === 'dashboard') {
    return (
      <BrowserMockup domain="telemetry.stream.live" title="Telemetry Dashboard">
        <div className="w-full h-full bg-[#0e0e11] p-6 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-400 font-sans text-xs">telemetry.stream.live</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
              ping: 4.2ms
            </span>
          </div>
          <div className="my-auto py-2">
            <div className="flex items-end gap-1.5 h-20 w-full px-1">
              {[35, 60, 45, 80, 55, 90, 70, 65, 85, 40, 75, 95, 60, 80, 50, 70, 85, 92, 78, 65].map((val, i) => (
                <div
                  key={i}
                  style={{ height: `${val}%` }}
                  className={`flex-1 rounded-t-sm ${i === 17 || i === 11 ? 'bg-zinc-200' : 'bg-zinc-800'}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500 mt-2 px-1">
              <span>00:00:00</span>
              <span className="text-zinc-400">Throughput: 98.4k req/s</span>
              <span>Live</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-900">
            <span>Worker: node-us-east-01</span>
            <span className="text-emerald-400">Healthy (0 drops)</span>
          </div>
        </div>
      </BrowserMockup>
    );
  }

  // Default clean code preview inside browser
  return (
    <BrowserMockup domain="source.app" title="System Architecture">
      <div className="w-full h-full bg-[#0e0e11] p-6 font-mono text-xs flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
          <span className="text-zinc-400 font-sans text-xs">system_architecture.ts</span>
          <span className="text-zinc-600 text-[10px]">TypeScript</span>
        </div>
        <div className="my-auto text-[12px] space-y-1.5 text-zinc-400">
          <p><span className="text-indigo-400">const</span> pipeline = <span className="text-zinc-200">createStream</span>();</p>
          <p>pipeline.<span className="text-emerald-400">pipe</span>(compress).<span className="text-emerald-400">broadcast</span>();</p>
          <p className="text-zinc-600">// zero memory leak buffer</p>
        </div>
        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>Status: Production Ready</span>
          <span>Node.js</span>
        </div>
      </div>
    </BrowserMockup>
  );
};

export default ProjectMockup;
