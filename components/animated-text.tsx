'use client';

import { motion } from 'framer-motion';
import type { ElementType } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const lineV = {
  hidden: { y: '115%' },
  show: { y: '0%', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Editorial line-by-line mask reveal. Each line slides up from behind a clipped
 * edge, staggered. The signature "masterpiece" headline treatment.
 */
export function AnimatedText({
  lines,
  className = '',
  as: Tag = 'h1',
  once = true,
}: {
  lines: (string | { text: string; className?: string })[];
  className?: string;
  as?: ElementType;
  once?: boolean;
}) {
  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once }}
        className="block"
      >
        {lines.map((line, i) => {
          const text = typeof line === 'string' ? line : line.text;
          const cls = typeof line === 'string' ? '' : line.className ?? '';
          return (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={lineV} className={`block ${cls}`}>
                {text}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
