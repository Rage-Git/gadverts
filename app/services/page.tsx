import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { Reveal } from '@/components/reveal';
import { Eyebrow, Section } from '@/components/section';
import { iconMap } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Strategy, media buying, social, creative, AI production, branding and PR — full-service marketing under one roof.',
};

export default function ServicesPage() {
  return (
    <main>
      <Section className="!pb-10">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-text-hi sm:text-7xl">
            Everything your brand needs to grow.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-text-mid">
            Seven service lines, fully integrated — strategy, performance, creative and PR working
            together so nothing falls through the cracks.
          </p>
        </Reveal>
      </Section>

      <Section className="!pt-10">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <Reveal key={svc.id} delay={(i % 2) * 0.05} className="bg-ink-soft">
                <div className="flex h-full flex-col gap-5 p-8 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-paper">
                      {Icon && <Icon size={20} />}
                    </span>
                    <span className="font-sans text-xs font-semibold text-text-low">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-text-hi">{svc.title}</h2>
                  <ul className="mt-1 space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-sans text-sm text-text-mid">
                        <Check size={16} className="mt-0.5 shrink-0 text-paper-dim" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-line text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-5xl">
            {site.cta}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 font-sans text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
