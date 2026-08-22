'use client';

import {
  type HTMLMotionProps,
  motion,
  type Transition,
  type Variants,
} from 'framer-motion';
import { cn } from '@/lib/utils';

type FadeUpProps = Omit<HTMLMotionProps<'div'>, 'transition'> & {
  transition?: Transition;
};

/**
 * 아래에서 위로 페이드 인 되는 애니메이션 공통 컴포넌트
 */
export function FadeUp({
  children,
  className,
  initial = 'hidden',
  transition,
  whileInView = 'visible',
  viewport = { once: true, amount: 0.7 },
  ...props
}: FadeUpProps) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', ...(transition ?? {}) },
    },
  };

  return (
    <motion.div
      variants={fadeUp}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
