'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ChatBubbleProps {
  content: ReactNode;
  variant?: 'me' | 'you' | 'system';
  delay?: number;
  withScroll?: boolean;
}

export function ChatBubble({
  content,
  variant = 'you',
  delay = 0,
  withScroll = false,
}: ChatBubbleProps) {
  const isSystem = variant === 'system';

  // If withScroll is true, we use whileInView to trigger animation when scrolled into view.
  // Otherwise, we use standard animate for immediate auto-play.
  const motionProps = withScroll
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 }, // Trigger as soon as 10% is visible
        transition: { duration: 0.5, delay, ease: 'easeOut' },
      }
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, delay, ease: 'easeOut' },
      };

  return (
    <motion.div {...motionProps} className={cn('flex w-full mb-3', 'justify-start')}>
      <div
        className={cn(
          'px-5 py-3 text-[17px] leading-relaxed relative',
          'font-normal tracking-wide',
          !isSystem && 'bg-[#1A1A1A] text-gray-100 rounded-[22px]',
          isSystem && 'bg-transparent text-gray-100 pl-0'
        )}
      >
        {content}
      </div>
    </motion.div>
  );
}
