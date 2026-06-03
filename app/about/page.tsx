import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { site } from '@/content/site';
import { Reveal } from '@/components/reveal';
import { Eyebrow, Section } from '@/components/section';
import { AnimatedText } from '@/components/animated-text';

export const metadata: Metadata = {
  title: 'About',
  description: 'G Adverts — a performance-driven social media and digital advertising agency, established 2022, scaling brands across the MENA region.',
};

export default function AboutPage() {
  return (
    <main>
      <Section className="!pb-10">
        <Reveal>
          <Eyebrow>About</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h1"
          className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.02em] text-text-hi sm:text-7xl lg:text-8xl"
          lines={['Creativity meets', { text: 'performance.', className: 'text-clip-paper' }]}
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-text-mid">
            {site.description} We combine creativity, performance marketing and real market
            insights to deliver campaigns that don&apos;t just look good — they convert.
          </p>
        </Reveal>
      </Section>

      {/* Vision & Mission */}
      <Section className="!pt-10">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <div className="bg-ink-soft p-8 sm:p-10">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-5 font-display text-2xl font-semibold leading-snug text-text-hi">
              {site.vision}
            </p>
          </div>
          <div className="bg-ink-soft p-8 sm:p-10">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-5 font-display text-2xl font-semibold leading-snug text-text-hi">
              {site.mission}
            </p>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section className="border-t border-line">
        <Eyebrow>Our approach</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-5xl">
          How we drive growth.
        </h2>
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {site.approach.map((step, i) => (
            <Reveal key={step.step} delay={(i % 5) * 0.05}>
              <div className="border-t border-line pt-5">
                <span className="font-sans text-xs font-semibold text-text-low">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-paper">{step.step}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-text-mid">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why */}
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

      {/* Future goals */}
      <Section className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Where we&apos;re headed</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-text-hi sm:text-5xl">
              Future goals.
            </h2>
          </div>
          <ul className="space-y-5">
            {site.futureGoals.map((goal, i) => (
              <Reveal key={goal} delay={i * 0.05}>
                <li className="flex items-start gap-4 border-t border-line pt-5">
                  <span className="font-display text-xl font-extrabold text-paper-dim">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl font-semibold text-text-hi">{goal}</span>
                </li>
              </Reveal>
            ))}
          </ul>
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
            Let&apos;s talk <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
