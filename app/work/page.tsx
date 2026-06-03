import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { socialBrands, workSections } from '@/content/work';
import { previousClients, currentClientIndustries } from '@/content/clients';
import { site } from '@/content/site';
import { Reveal } from '@/components/reveal';
import { Eyebrow, Section } from '@/components/section';
import { AnimatedText } from '@/components/animated-text';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work across branding, social media and influencer marketing for brands throughout the MENA region.',
};

export default function WorkPage() {
  return (
    <main>
      <Section className="!pb-10">
        <Reveal>
          <Eyebrow>Work</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h1"
          className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.02em] text-text-hi sm:text-7xl lg:text-8xl"
          lines={['Results', { text: 'across the region.', className: 'text-clip-paper' }]}
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-text-mid">
            From homegrown social brands to regional retail giants — branding, social media and
            influencer campaigns built to perform.
          </p>
        </Reveal>
      </Section>

      {/* What we deliver */}
      <Section className="!pt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {workSections.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-ink-soft p-8">
                <h2 className="font-display text-xl font-bold text-text-hi">{s.title}</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-text-mid">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Social brands */}
      <Section className="border-t border-line">
        <Eyebrow>Social media</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-hi sm:text-4xl">
          Brands we manage end-to-end.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialBrands.map((brand, i) => (
            <Reveal key={brand.name} delay={(i % 3) * 0.05}>
              <div className="flex aspect-[4/3] flex-col justify-between rounded-2xl border border-line bg-ink-soft p-6">
                <span className="font-display text-3xl font-extrabold tracking-tight text-text-hi">
                  {brand.name}
                </span>
                {brand.stats ? (
                  <div className="flex flex-wrap gap-x-5 gap-y-1">
                    {brand.stats.slice(0, 4).map((stat) => (
                      <span key={stat} className="font-display text-lg font-bold text-paper-dim">
                        {stat}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="font-sans text-xs uppercase tracking-widest text-text-low">
                    Account management
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Previous clients */}
      <Section className="border-t border-line">
        <Eyebrow>Previous clients</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-hi sm:text-4xl">
          Trusted across MENA &amp; GCC.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {previousClients.map((c, i) => (
            <Reveal key={c.brand} delay={(i % 2) * 0.04} className="bg-ink-soft">
              <div className="flex h-full flex-col gap-3 p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-text-hi">{c.brand}</h3>
                  <span className="shrink-0 font-sans text-xs text-text-low">{c.market}</span>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-paper-dim">
                  {c.industry}
                </span>
                <p className="font-sans text-sm leading-relaxed text-text-mid">{c.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Current client industries */}
      <Section className="border-t border-line">
        <Eyebrow>Currently partnering with</Eyebrow>
        <div className="mt-8 flex flex-wrap gap-3">
          {currentClientIndustries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-line px-5 py-2 font-display text-base font-semibold text-text-hi"
            >
              {ind}
            </span>
          ))}
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
            Work with us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
