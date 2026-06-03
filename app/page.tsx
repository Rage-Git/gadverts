import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { socialBrands } from '@/content/work';
import { Reveal } from '@/components/reveal';
import { Marquee } from '@/components/marquee';
import { Eyebrow, Section } from '@/components/section';
import { AnimatedText } from '@/components/animated-text';
import { Counter } from '@/components/counter';
import { Magnetic } from '@/components/magnetic';

const stats = [
  { value: 5, suffix: '', label: 'MENA markets' },
  { value: 7, suffix: '', label: 'Service lines' },
  { value: 20, suffix: '+', label: 'Brands scaled' },
];

export default function Home() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[70vh] w-[90vw] max-w-4xl -translate-x-1/2 animate-glow-pulse rounded-full bg-paper/[0.06] blur-[120px]"
        />
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-xs uppercase tracking-[0.25em] text-text-mid">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
                </span>
                Available for new projects
              </span>
              <span className="text-text-low">/</span>
              <span>Est. {site.founded} · Egypt → MENA</span>
            </div>
          </Reveal>

          <AnimatedText
            as="h1"
            className="mt-8 font-display text-[15vw] font-extrabold leading-[0.86] tracking-[-0.03em] text-text-hi sm:text-[12vw] lg:text-[10.5rem]"
            lines={[
              'we make',
              'brands grow',
              { text: 'everywhere.', className: 'text-clip-paper' },
            ]}
          />

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={0.2}>
              <p className="max-w-md font-sans text-base leading-relaxed text-text-mid">
                A performance-driven social &amp; digital advertising agency — combining creativity,
                media buying and real market insight into campaigns that convert.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 font-sans text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
                  >
                    Start a project <ArrowUpRight size={16} />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-sans text-sm font-semibold text-text-hi transition-colors hover:border-paper"
                  >
                    View work
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown size={20} className="animate-float text-text-low" />
        </div>
      </section>

      {/* ---------- Markets marquee ---------- */}
      <div className="border-y border-line py-6">
        <Marquee items={site.markets} />
      </div>

      {/* ---------- Manifesto + stats ---------- */}
      <Section className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <AnimatedText
            as="h2"
            className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl"
            lines={[
              'Campaigns that don’t',
              { text: 'just look good —', className: 'text-text-mid' },
              'they convert.',
            ]}
          />
        </div>
        <div className="grid grid-cols-3 gap-6 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="font-display text-5xl font-extrabold tracking-tight text-paper sm:text-6xl"
              />
              <div className="mt-2 font-sans text-xs uppercase tracking-widest text-text-mid">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Services as editorial index ---------- */}
      <Section className="border-t border-line !pb-8">
        <div className="flex items-end justify-between gap-6">
          <Eyebrow>Capabilities</Eyebrow>
          <Link
            href="/services"
            className="font-sans text-sm font-semibold text-text-mid transition-colors hover:text-paper"
          >
            All services
          </Link>
        </div>
      </Section>
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28">
        <div className="border-t border-line">
          {services.map((svc, i) => (
            <Link
              key={svc.id}
              href="/services"
              className="group flex items-center justify-between gap-6 border-b border-line py-6 transition-colors hover:bg-ink-soft sm:py-8"
            >
              <div className="flex items-baseline gap-5 sm:gap-10">
                <span className="font-sans text-sm tabular-nums text-text-low">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl font-extrabold tracking-tight text-text-hi transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-5xl lg:text-6xl">
                  {svc.title}
                </span>
              </div>
              <ArrowUpRight
                size={28}
                className="shrink-0 text-text-low transition-all duration-300 group-hover:rotate-45 group-hover:text-paper"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* ---------- Selected work ---------- */}
      <Section className="border-t border-line">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-5xl">
              Brands we&apos;ve built.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden font-sans text-sm font-semibold text-text-mid transition-colors hover:text-paper sm:block"
          >
            All work
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialBrands.map((brand, i) => (
            <Reveal key={brand.name} delay={(i % 3) * 0.06}>
              <Link
                href="/work"
                className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-ink-soft p-6 transition-colors hover:border-paper"
              >
                {/* oversized faint initial as backdrop */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-4 select-none font-display text-[12rem] font-extrabold leading-none text-paper/[0.04] transition-all duration-500 group-hover:text-paper/[0.08]"
                >
                  {brand.name.charAt(0)}
                </span>
                <span className="relative font-sans text-xs uppercase tracking-widest text-text-low">
                  Social media
                </span>
                <span className="relative flex items-end justify-between">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-text-hi">
                    {brand.name}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-text-low transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper"
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
                <span className="font-sans text-xs tabular-nums text-text-low">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-text-hi">{pillar.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-text-mid">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden border-t border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[50vh] w-[80vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full bg-paper/[0.05] blur-[120px]"
        />
        <div className="mx-auto max-w-7xl px-6 py-28 text-center sm:py-40">
          <AnimatedText
            as="h2"
            className="mx-auto font-display text-6xl font-extrabold tracking-[-0.03em] text-text-hi sm:text-8xl lg:text-9xl"
            lines={["let's grow", { text: 'your brand.', className: 'text-clip-paper' }]}
          />
          <Reveal delay={0.2}>
            <Magnetic>
              <Link
                href="/contact"
                className="mt-12 inline-flex items-center gap-2 rounded-full bg-paper px-9 py-4 font-sans text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Get in touch <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
