/**
 * Oversized kinetic marquee. Alternates solid and outlined display type with a
 * brand "•" between items. Pauses on hover. Optional reverse direction.
 */
export function Marquee({
  items,
  speed = 'normal',
  reverse = false,
}: {
  items: readonly string[];
  speed?: 'normal' | 'slow';
  reverse?: boolean;
}) {
  const anim = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';
  const dir = reverse ? '[animation-direction:reverse]' : '';
  return (
    <div className="group relative flex overflow-hidden py-3">
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          className={`flex shrink-0 items-center ${anim} ${dir} group-hover:[animation-play-state:paused]`}
        >
          {items.map((it, i) => (
            <span key={`${dup}-${i}`} className="flex items-center">
              <span
                className={
                  i % 2 === 0
                    ? 'whitespace-nowrap px-8 font-display text-5xl font-extrabold uppercase tracking-tight text-text-hi sm:text-7xl'
                    : 'whitespace-nowrap px-8 font-display text-5xl font-extrabold uppercase tracking-tight text-transparent sm:text-7xl [-webkit-text-stroke:1px_rgb(var(--ga-text-mid))]'
                }
              >
                {it}
              </span>
              <span className="text-2xl text-paper sm:text-4xl">•</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
