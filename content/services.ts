/**
 * The 7 service pillars from the G Adverts profile. `icon` names map to
 * lucide-react icons (wired when the Services UI is built).
 */
export type Service = {
  id: string;
  title: string;
  icon: string; // lucide-react icon name
  items: string[];
};

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy & Planning',
    icon: 'Compass',
    items: ['Marketing Strategy & Planning', 'Brand Positioning', 'Go-to-Market Strategy', 'Campaign Planning'],
  },
  {
    id: 'media-buying',
    title: 'Digital Marketing & Media Buying',
    icon: 'TrendingUp',
    items: [
      'Performance Marketing (Meta, Google, TikTok)',
      'Lead Generation Campaigns',
      'Conversion Optimization',
      'Retargeting & Scaling',
    ],
  },
  {
    id: 'social',
    title: 'Social Media',
    icon: 'Share2',
    items: ['Social Media Strategy', 'Content Planning', 'Account Management'],
  },
  {
    id: 'creative',
    title: 'Creative & Content Production',
    icon: 'Clapperboard',
    items: ['Creative Direction', 'Content Creation', 'Graphic Design', 'Photography & Videography'],
  },
  {
    id: 'ai',
    title: 'AI Media Production',
    icon: 'Sparkles',
    items: ['AI-Generated Content', 'AI Video Production', 'Creative Automation'],
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: 'Palette',
    items: ['Brand Identity Development', 'Visual Identity Systems', 'Brand Guidelines'],
  },
  {
    id: 'pr',
    title: 'PR & Influencer Marketing',
    icon: 'Megaphone',
    items: ['Influencer Management', 'Campaign Collaborations', 'Event Planning & Organization'],
  },
];
