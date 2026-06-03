/** Infinite horizontal marquee. Duplicates children so the loop is seamless. */
export function Marquee({
  items,
  speed = 'normal',
}: {
  items: readonly string[];
  speed?: 'normal' | 'slow';
}) {
  const anim = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';
  return (
    <div className="group relative flex overflow-hidden border-y border-line py-6">
      <div className={`flex shrink-0 items-center gap-12 pr-12 ${anim} group-hover:[animation-play-state:paused]`}>
        {items.map((it, i) => (
          <Item key={`a-${i}`} label={it} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-12 pr-12 ${anim} group-hover:[animation-play-state:paused]`}
      >
        {items.map((it, i) => (
          <Item key={`b-${i}`} label={it} />
        ))}
      </div>
    </div>
  );
}

function Item({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-12">
      <span className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-paper-dim sm:text-3xl">
        {label}
      </span>
      <span className="text-text-low">/</span>
    </span>
  );
}
