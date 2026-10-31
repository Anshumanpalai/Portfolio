import React from 'react';
import { motion } from 'framer-motion';

/**
 * Visual Mockup Previews for Project Cards to provide authentic, tactile depth
 * inspired by high-end design & engineering portfolios like Perry Wang's.
 */
export const ProjectMockup = ({ type }) => {
  if (type === 'arc-and-form') {
    return (
      <div className="w-full overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,.35)] transition-all duration-500 ease-out group-hover:border-white/50 group-hover:shadow-[0_28px_65px_-12px_rgba(0,0,0,0.55)] group-hover:-translate-y-1.5">
        <img
          src="/arc-and-form.jpg"
          alt="ARC & FORM Minimalist Architectural Luxury E-Commerce Storefront"
          className="block w-full aspect-video object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  if (type === 'careerpilot') {
    return (
      <div className="w-full overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,.35)] transition-all duration-500 ease-out group-hover:border-white/50 group-hover:shadow-[0_28px_65px_-12px_rgba(0,0,0,0.55)] group-hover:-translate-y-1.5">
        <img
          src="/careerpilot-landing.png"
          alt="CareerPilot AI landing page showing an AI-powered career copilot"
          className="block w-full aspect-video object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="w-full h-44 sm:h-52 rounded-lg bg-[#0e0e11] border border-zinc-800/80 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative group-hover:border-zinc-700 transition-colors">
        {/* Subtle top glare */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Mock header */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-400 font-sans text-xs">telemetry.stream.live</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
            ping: 4.2ms
          </span>
        </div>

        {/* Mock telemetry graph / bars */}
        <div className="my-auto py-2">
          <div className="flex items-end gap-1.5 h-16 w-full px-1">
            {[35, 60, 45, 80, 55, 90, 70, 65, 85, 40, 75, 95, 60, 80, 50, 70, 85, 92, 78, 65].map((val, i) => (
              <div
                key={i}
                style={{ height: `${val}%` }}
                className={`flex-1 rounded-t-sm transition-all duration-300 ${
                  i === 17 || i === 11
                    ? 'bg-zinc-200'
                    : 'bg-zinc-800 group-hover:bg-zinc-700'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-zinc-600 mt-2 px-1">
            <span>00:00:00</span>
            <span className="text-zinc-400">Throughput: 98.4k req/s</span>
            <span>Live</span>
          </div>
        </div>

        {/* Mock footer telemetry nodes */}
        <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-900">
          <span>Worker: node-us-east-01</span>
          <span className="text-emerald-400">Healthy (0 drops)</span>
        </div>
      </div>
    );
  }

  if (type === 'document') {
    return (
      <div className="w-full h-44 sm:h-52 rounded-lg bg-[#0e0e11] border border-zinc-800/80 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative group-hover:border-zinc-700 transition-colors">
        {/* Mock search query bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-400 text-xs font-sans">
          <span className="text-zinc-500">🔍</span>
          <span className="text-zinc-300">"liability waiver clause 14.b"</span>
          <span className="ml-auto text-[10px] text-zinc-600 font-mono">24ms</span>
        </div>

        {/* Mock parsed document clauses */}
        <div className="space-y-2 my-auto py-1">
          <div className="p-2.5 rounded bg-zinc-900/50 border border-zinc-800/40 text-[11px] font-sans">
            <div className="flex items-center justify-between text-zinc-500 text-[10px] mb-1">
              <span>Section 14.2 • Indemnity Clause</span>
              <span className="text-emerald-400">98% match</span>
            </div>
            <p className="text-zinc-300 line-clamp-2 leading-relaxed">
              ...neither party shall be liable for indirect, incidental, or consequential damages resulting from...
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400">
              Vector Cosine: 0.941
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400">
              Cross-Ref: Stat. § 12
            </span>
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>Parser: FastText + pgvector</span>
          <span>Indexed: 14,200 clauses</span>
        </div>
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className="w-full h-44 sm:h-52 rounded-lg bg-[#0e0e11] border border-zinc-800/80 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative group-hover:border-zinc-700 transition-colors">
        {/* Mock synthesizer interface */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
          <span className="text-zinc-400 font-sans text-xs">OSC 1 • SAWTOOTH</span>
          <span className="text-zinc-500 text-[10px]">440.00 Hz (A4)</span>
        </div>

        {/* Animated oscilloscope waveform SVG */}
        <div className="my-auto py-2 flex items-center justify-center">
          <svg className="w-full h-14 stroke-zinc-300" fill="none" viewBox="0 0 300 60">
            <path
              d="M0,30 Q30,5 60,30 T120,30 T180,30 T240,30 T300,30"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="opacity-90"
            />
            <path
              d="M0,30 Q30,55 60,30 T120,30 T180,30 T240,30 T300,30"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              className="opacity-30 stroke-zinc-500"
            />
          </svg>
        </div>

        {/* Synthesizer knobs / ADSR */}
        <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-zinc-500 pt-2 border-t border-zinc-900 font-sans">
          <div>
            <div className="text-zinc-300 font-mono">12ms</div>
            <div>Attack</div>
          </div>
          <div>
            <div className="text-zinc-300 font-mono">80ms</div>
            <div>Decay</div>
          </div>
          <div>
            <div className="text-zinc-300 font-mono">0.75</div>
            <div>Sustain</div>
          </div>
          <div>
            <div className="text-zinc-300 font-mono">240ms</div>
            <div>Release</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ui') {
    return (
      <div className="w-full h-44 sm:h-52 rounded-lg bg-[#0e0e11] border border-zinc-800/80 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative group-hover:border-zinc-700 transition-colors">
        {/* Mock Component Playground */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
          <span className="text-zinc-400 font-sans text-xs">Component Primitives</span>
          <span className="text-[10px] text-zinc-500">v1.2.0 • Zero CSS</span>
        </div>

        <div className="space-y-2.5 my-auto py-1 font-sans">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-md bg-zinc-200 text-black text-xs font-medium">
              Primary Action
            </div>
            <div className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs">
              Outline
            </div>
            <div className="px-3 py-1 rounded-md bg-zinc-900/50 text-zinc-500 text-xs">
              Ghost
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-zinc-900/70 border border-zinc-800 text-xs">
            <span className="text-zinc-300">Dark Mode Contrast</span>
            <div className="w-8 h-4 rounded-full bg-zinc-200 p-0.5 flex justify-end">
              <div className="w-3 h-3 rounded-full bg-black" />
            </div>
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>Radix UI + Tailwind</span>
          <span>100% WAI-ARIA</span>
        </div>
      </div>
    );
  }

  // Default clean code preview
  return (
    <div className="w-full h-44 sm:h-52 rounded-lg bg-[#0e0e11] border border-zinc-800/80 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative group-hover:border-zinc-700 transition-colors">
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
        <span className="text-zinc-400 font-sans text-xs">system_architecture.ts</span>
        <span className="text-zinc-600 text-[10px]">TypeScript</span>
      </div>
      <div className="my-auto text-[11px] space-y-1 text-zinc-400">
        <p><span className="text-zinc-600">const</span> pipeline = <span className="text-zinc-200">createStream</span>();</p>
        <p>pipeline.<span className="text-zinc-300">pipe</span>(compress).<span className="text-zinc-300">broadcast</span>();</p>
        <p className="text-zinc-600">// zero memory leak buffer</p>
      </div>
      <div className="flex justify-between text-[10px] text-zinc-600">
        <span>Status: Production Ready</span>
        <span>Node.js</span>
      </div>
    </div>
  );
};

