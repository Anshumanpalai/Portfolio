export const PROJECTS = [
  {
    title: 'ARC & FORM',
    eyebrow: 'Architectural luxury e-commerce',
    year: '2026',
    description:
      'A production-grade luxury apparel storefront inspired by architectural minimalism, engineered with server-side price authority, atomic inventory controls, and Stripe Checkout.',
    highlights: [
      'Server-side price authority & atomic conditional stock decrements preventing overselling',
      'Cryptographically verified Stripe webhooks with a permanent idempotency ledger',
      'Stateless JWT session cookies (HttpOnly, SameSite) guarded by strict rate limiting',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/anshumanpalai/arc-and-form',
    live: 'https://arc-and-form.vercel.app',
    mockup: 'arc-and-form',
  },
  {
    title: 'CareerPilot AI',
    eyebrow: 'Career intelligence platform',
    year: '2026',
    description:
      'A full-stack career copilot that helps job seekers tailor ATS-ready resumes, manage application pipelines, and prepare for role-specific interviews.',
    highlights: [
      'Resume versioning, job matching, and improvement suggestions',
      'A focused application tracker for every stage of the hiring process',
      'Secure, typed API backed by PostgreSQL migrations',
    ],
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Anshumanpalai/careerpilot-ai',
    live: 'https://careerpilot-ai-psi-eight.vercel.app',
    mockup: 'careerpilot',
  },
];
