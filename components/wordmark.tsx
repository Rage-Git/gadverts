import Link from 'next/link';

/**
 * Brand wordmark rendered as text in the display font (Poppins) — matches the
 * logo composition: leading dash, lowercase "g adverts", trailing period, with
 * an optional EST22 lozenge. Crisp at any size; no raster dependency.
 */
export function Wordmark({
  className = '',
  showEst = false,
  href = '/',
}: {
  className?: string;
  showEst?: boolean;
  href?: string | null;
}) {
  const mark = (
    <span className={`inline-flex items-center gap-2 font-display font-extrabold lowercase tracking-tight ${className}`}>
      <span className="text-paper">-g&nbsp;adverts.</span>
      {showEst && (
        <span className="ml-1 rounded-full border border-line px-2 py-0.5 font-sans text-[0.5em] font-semibold uppercase tracking-widest text-text-mid">
          Est 22
        </span>
      )}
    </span>
  );

  if (href === null) return mark;
  return (
    <Link href={href} aria-label="G Adverts — home" className="transition-opacity hover:opacity-80">
      {mark}
    </Link>
  );
}
