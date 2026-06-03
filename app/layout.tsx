import type { Metadata } from 'next';
import { Poppins, Archivo } from 'next/font/google';
import { site } from '@/content/site';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

// Display / headers — Poppins: heavy, geometric-ROUNDED, the closest Google-hosted
// match to the G Adverts logo wordmark. (For pixel-exact, swap to next/font/local
// once the real logo font file is in brand/fonts/.)
const display = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

// Body — Archivo: the same superfamily as the company profile's "Archivo Black"
// headings; a clean neo-grotesque echoing the deck's Aileron body type.
const sans = Archivo({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // lang/dir centralized here — flip to 'ar'/'rtl' later without touching pages.
  return (
    <html lang="en" dir="ltr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
