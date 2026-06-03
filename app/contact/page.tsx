import type { Metadata } from 'next';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { site } from '@/content/site';
import { Reveal } from '@/components/reveal';
import { Eyebrow, Section } from '@/components/section';
import { AnimatedText } from '@/components/animated-text';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name}. Email ${site.contact.email} or call ${site.contact.phoneIntl}.`,
};

export default function ContactPage() {
  return (
    <main>
      <Section>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h1"
          className="mt-6 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.03em] text-text-hi sm:text-8xl lg:text-9xl"
          lines={["let's grow", { text: 'your brand.', className: 'text-clip-paper' }]}
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-text-mid">
            Tell us about your brand and where you want to take it. We&apos;ll get back to you fast.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <a
            href={site.contact.emailHref}
            className="group flex flex-col gap-4 bg-ink-soft p-8 transition-colors hover:bg-ink-mid sm:p-10"
          >
            <Mail size={24} className="text-paper" />
            <span className="font-sans text-xs uppercase tracking-widest text-text-low">Email us</span>
            <span className="flex items-center gap-2 font-display text-2xl font-bold text-text-hi sm:text-3xl">
              {site.contact.email}
              <ArrowUpRight size={20} className="text-text-low transition-colors group-hover:text-paper" />
            </span>
          </a>
          <a
            href={site.contact.phoneHref}
            className="group flex flex-col gap-4 bg-ink-soft p-8 transition-colors hover:bg-ink-mid sm:p-10"
          >
            <Phone size={24} className="text-paper" />
            <span className="font-sans text-xs uppercase tracking-widest text-text-low">Call us</span>
            <span className="flex items-center gap-2 font-display text-2xl font-bold text-text-hi sm:text-3xl">
              {site.contact.phoneIntl}
              <ArrowUpRight size={20} className="text-text-low transition-colors group-hover:text-paper" />
            </span>
          </a>
        </div>

        <div className="mt-10">
          <Eyebrow>Everywhere across</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.markets.map((m) => (
              <span
                key={m}
                className="rounded-full border border-line px-5 py-2 font-display text-base font-semibold text-text-hi"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
