/**
 * Portfolio / "Folio" from the G Adverts profile, grouped by the deck's parts:
 * Branding, Social Media, Influencer Marketing.
 *
 * Visual assets (logos, campaign stills, reels) are NOT yet in-repo — drop them
 * into /public/work/ and wire `media` paths when they arrive. Until then this is
 * the structured skeleton.
 */
export type WorkCategory = 'branding' | 'social' | 'influencer';

export type SocialBrand = {
  name: string;
  /** Headline metrics pulled from the deck. UNVERIFIED attribution — confirm
   *  which numbers belong to which brand before publishing. */
  stats?: string[];
  media?: string[];
};

/** Social-media management showcase brands (deck Part 3). */
export const socialBrands: SocialBrand[] = [
  { name: 'Wassata' },
  {
    name: 'Above',
    // Raw figures appeared near "Above" in the deck; treat as illustrative until confirmed.
    stats: ['22.7K', '115K', '5,199', '4,670', '4,075', '2,263', '2,170', '1,348', '91'],
  },
  { name: 'Motahheda' },
  { name: 'Actus' },
  { name: 'Prime Scene' },
];

/** High-level folio sections present in the deck (used to drive the Work page IA). */
export const workSections: { id: WorkCategory; title: string; note: string }[] = [
  { id: 'branding',   title: 'Branding',            note: 'Identity systems & visual direction (3 case studies in deck).' },
  { id: 'social',     title: 'Social Media',        note: 'Account management & content for Wassata, Above, Motahheda, Actus, Prime Scene.' },
  { id: 'influencer', title: 'Influencer Marketing', note: 'Influencer management & campaign collaborations.' },
];
