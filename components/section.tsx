import type { ReactNode } from 'react';

/** Small uppercase eyebrow label used above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-text-low">
      <span className="h-px w-6 bg-line" aria-hidden />
      {children}
    </span>
  );
}

/** Standard page-section wrapper with consistent rhythm + max width. */
export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
