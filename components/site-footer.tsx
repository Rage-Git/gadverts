import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { site } from '@/content/site';
import { Wordmark } from './wordmark';

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Wordmark className="text-2xl" showEst href={null} />
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-text-mid">
              {site.cta} Performance-driven marketing, creative & PR across the MENA region.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-text-low">Explore</h3>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-sans text-sm text-text-mid transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-text-low">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.contact.emailHref}
                  className="inline-flex items-center gap-2 font-sans text-sm text-text-mid transition-colors hover:text-paper"
                >
                  <Mail size={15} /> {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 font-sans text-sm text-text-mid transition-colors hover:text-paper"
                >
                  <Phone size={15} /> {site.contact.phoneIntl}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-text-low">
            © {site.founded}–2026 {site.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-text-low">Everywhere. {site.markets.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
