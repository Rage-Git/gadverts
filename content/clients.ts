/**
 * Client roster from the G Adverts profile.
 *
 * NOTE: many "previous" brands were delivered "X Assembly" (white-labelled
 * through the Assembly agency). `viaAssembly` flags those — confirm with the
 * client which logos they're contractually allowed to display before publishing.
 *
 * `logo` paths are TODO until brand assets land in /public/clients/.
 */
export type PreviousClient = {
  brand: string;
  industry: string;
  market: string;
  blurb: string;
  viaAssembly: boolean;
  logo?: string;
};

export const previousClients: PreviousClient[] = [
  {
    brand: 'Nice (KSA) — Al Fozan Holding',
    industry: 'Retail Homewear',
    market: 'KSA',
    blurb: 'Full-funnel Google Search Ads alongside Facebook, Instagram, Snapchat and TikTok campaigns to maximize conversions.',
    viaAssembly: true,
  },
  {
    brand: 'Landmark Group',
    industry: 'Children Retail',
    market: 'GCC (KSA, UAE, BAH, OM, Qatar)',
    blurb: 'Offline performance marketing across YouTube, Facebook, Instagram, Snapchat and TikTok to drive awareness and store sales.',
    viaAssembly: true,
  },
  {
    brand: 'Gardener Iraq — Grow Green Group',
    industry: 'Agriculture',
    market: 'Iraq',
    blurb: 'Built and managed social media presence, brand identity and all creative designs from the ground up.',
    viaAssembly: false,
  },
  {
    brand: 'Pan Home (former Pan Emirates)',
    industry: 'Home Furniture',
    market: 'GCC (UAE, Iraq, Qatar)',
    blurb: 'Restructured Google campaigns, managed Search & Shopping Ads and ran performance campaigns across Instagram, Snapchat and TikTok.',
    viaAssembly: true,
  },
  {
    brand: "Carter's UAE — LALS Group",
    industry: 'Children Retail',
    market: 'UAE',
    blurb: 'Drove growth through Google Search & Shopping Ads supported by Facebook and Instagram advertising.',
    viaAssembly: true,
  },
  {
    brand: 'MOMSTORE UAE — LALS Group',
    industry: 'Children Retail',
    market: 'UAE',
    blurb: 'Google Search & Shopping, Facebook & Instagram Ads, Apple Search Ads, with extensive app-traffic growth work.',
    viaAssembly: true,
  },
  {
    brand: 'Dental Avenue Clinics',
    industry: 'Dental Medicine',
    market: 'Egypt',
    blurb: 'End-to-end media production, social media management, plus scripts and content development.',
    viaAssembly: false,
  },
  {
    brand: 'Sharaf DG — Sharaf Group',
    industry: 'Consumer Electronics',
    market: 'UAE',
    blurb: 'High-impact Facebook and TikTok advertising campaigns focused on performance and reach.',
    viaAssembly: true,
  },
  {
    brand: 'Cottonil',
    industry: 'Textile & Clothing',
    market: 'Palestine',
    blurb: 'Social media designs and management, plus social advertising and content development.',
    viaAssembly: false,
  },
  {
    brand: 'MAX Fashion — Landmark Group',
    industry: 'Retail',
    market: 'UAE',
    blurb: 'Results-driven Facebook and Instagram advertising campaigns tailored for scale.',
    viaAssembly: true,
  },
];

/** Current clients — listed by industry only in the profile (no names given). */
export const currentClientIndustries: string[] = [
  'Logistics',
  'Steel Industry',
  'Auto Finance & Tech',
  'Fitness',
  'Automotive',
];
