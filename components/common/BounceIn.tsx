'use client';

import {
  type HTMLMotionProps,
  motion,
  type Transition,
  type Variants,
} from 'framer-motion';
import { cn } from '@/lib/utils';

type BounceInProps = Omit<HTMLMotionProps<'div'>, 'transition'> & {
  transition?: Transition;
};

/**
 * 바운스 애니메이션 공통 컴포넌트
 */
export function BounceIn({
  children,
  className,
  initial = 'hidden',
  transition,
  whileInView = 'visible',
  viewport = { once: true, amount: 0.7 },
  ...props
}: BounceInProps) {
  const bounce: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: [0.8, 1.12, 0.95, 1],
      transition: { duration: 0.6, ease: 'easeOut', ...(transition ?? {}) },
    },
  };

  return (
    <motion.div
      variants={bounce}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={cn('inline-block', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
