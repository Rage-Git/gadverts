import Image from 'next/image';
import { site } from '@/content/site';

/**
 * HOLDING PAGE — scaffold only. Confirms fonts + brand tokens + Tailwind +
 * logo assets are wired end-to-end, in the real warm-monochrome palette.
 * Real homepage design is built after Amr's structure review.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-text-low">
        Scaffold · Next 14 · Tailwind · TS
      </p>

      <Image
        src="/brand/wordmark-black.png"
        alt={site.name}
        width={420}
        height={160}
        priority
        // logo art is black-on-transparent; invert to cream for the dark surface
        className="h-auto w-[min(70vw,420px)] opacity-95 [filter:invert(92%)_sepia(8%)]"
      />

      <p className="font-display text-lg tracking-tight text-paper sm:text-xl">{site.tagline}</p>

      <p className="max-w-xl font-sans text-sm leading-relaxed text-text-mid">
        {site.description}
      </p>

      <p className="mt-4 font-sans text-xs text-text-low">
        Holding page — real design pending structure review.
      </p>
    </main>
  );
}
