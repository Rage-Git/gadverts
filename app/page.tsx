import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { socialBrands } from '@/content/work';
import { Reveal } from '@/components/reveal';
import { Marquee } from '@/components/marquee';
import { Eyebrow, Section } from '@/components/section';
import { iconMap } from '@/components/icons';

const stats = [
  { value: '2022', label: 'Established' },
  { value: '5', label: 'MENA markets' },
  { value: '7', label: 'Service lines' },
  { value: '20+', label: 'Brands scaled' },
];

export default function Home() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 animate-glow-pulse rounded-full bg-paper/5 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
          <Reveal>
            <Eyebrow>Social &amp; Digital Advertising · MENA</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-text-hi sm:text-7xl lg:text-8xl">
              We make brands
              <br />
              <span className="text-paper">grow everywhere.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-text-mid">
              {site.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-sans text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Start a project <ArrowRight size={16} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-sans text-sm font-semibold text-text-hi transition-colors hover:border-paper"
              >
                See our work <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Markets marquee ---------- */}
      <Marquee items={site.markets} />

      {/* ---------- Stats ---------- */}
      <Section className="!py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div>
                <div className="font-display text-4xl font-extrabold tracking-tight text-paper sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-sans text-sm text-text-mid">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Services teaser ---------- */}
      <Section className="border-t border-line">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-5xl">
              Full-service, under one roof.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-text-mid transition-colors hover:text-paper"
          >
            All services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <Reveal key={svc.id} delay={(i % 3) * 0.05} className="bg-ink-soft">
                <div className="flex h-full flex-col gap-4 p-8 transition-colors hover:bg-ink-mid">
                  {Icon && <Icon size={24} className="text-paper" />}
                  <h3 className="font-display text-xl font-bold text-text-hi">{svc.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-text-mid">
                    {svc.items.slice(0, 3).join(' · ')}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------- Selected work ---------- */}
      <Section className="border-t border-line">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-5xl">
          Brands we&apos;ve built &amp; scaled.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialBrands.map((brand, i) => (
            <Reveal key={brand.name} delay={(i % 3) * 0.05}>
              <Link
                href="/work"
                className="group flex aspect-[4/3] flex-col justify-between rounded-2xl border border-line bg-ink-soft p-6 transition-colors hover:border-paper"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-text-low">
                  Social media
                </span>
                <span className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-text-hi">
                    {brand.name}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-text-low transition-colors group-hover:text-paper"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Why ---------- */}
      <Section className="border-t border-line">
        <Eyebrow>Why G Adverts</Eyebrow>
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.why.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 0.05}>
              <div className="border-t border-line pt-6">
                <h3 className="font-display text-lg font-bold text-text-hi">{pillar.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-text-mid">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="border-t border-line">
        <div className="rounded-3xl border border-line bg-ink-soft px-8 py-16 text-center sm:px-16 sm:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-6xl">
              {site.cta}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-lg font-sans text-base text-text-mid">
              Tell us where you want to go. We&apos;ll build the strategy, the creative, and the
              campaigns to get you there.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 font-sans text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
