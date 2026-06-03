/**
 * Site-wide constants for G Adverts. Sourced from "G Adverts Company Profile -
 * May 26.pdf". Single place to edit global copy / contact / nav.
 */
export const site = {
  name: 'G Adverts',
  tagline: 'G Adverts Everywhere',
  cta: "Let's grow your brand.",
  description:
    'G Adverts is a social media and digital advertising agency established in 2022, ' +
    'helping brands scale across the MENA region through smart media buying, strategic ' +
    'planning, and data-driven growth.',
  founded: 2022,
  url: 'https://gadverts.com',

  // Contact — confirmed correct by Amr (from company profile). Egypt / +20.
  contact: {
    email: 'info@gadverts.com',
    emailHref: 'mailto:info@gadverts.com',
    phone: '01207336631',          // local display (Egypt)
    phoneIntl: '+20 120 733 6631', // international display
    phoneHref: 'tel:+201207336631',// dial link
    confirmed: true,
  },

  markets: ['Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Iraq', 'Palestine'],

  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  vision:
    'To become a leading performance-driven marketing and advertising agency in the ' +
    'MENA region, known for transforming brands into market leaders through innovation, ' +
    'creativity, and measurable results.',
  mission:
    'To empower brands with smart marketing strategies, impactful content, and ' +
    'data-backed decisions that drive real business growth and maximize return on investment.',

  // "Why G Adverts?" pillars
  why: [
    { title: 'Data-Driven', body: 'Decisions backed by insights, not assumptions.' },
    { title: 'Industry Expertise', body: 'Strong multi-industry, automotive and performance marketing experience.' },
    { title: 'Integrated Solutions', body: 'Social media, creative, advertising, and influencer execution under one roof.' },
    { title: 'Performance Focused', body: 'Strategies built to generate measurable growth.' },
    { title: 'Agile Execution', body: 'Fast-moving workflows with scalable delivery.' },
  ],

  // Engagement approach (deck: Understand → Analyze → Build → Execute → Optimize → Scale)
  approach: [
    { step: 'Understand', body: 'Analyze the business, market and audience.' },
    { step: 'Build', body: 'Build a tailored growth roadmap.' },
    { step: 'Execute', body: 'Launch campaigns, content, and activations.' },
    { step: 'Optimize', body: 'Refine performance through data insights.' },
    { step: 'Scale', body: 'Expand what works to drive sustainable growth.' },
  ],

  futureGoals: [
    'Expand across GCC markets',
    'Become a leading automotive marketing agency in MENA',
    'Integrate AI into all marketing processes',
    'Build long-term partnerships with regional brands',
  ],
} as const;
