'use client';

import { useEffect, useState } from 'react';

export function useIsScrollTop() {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const updateScrollTop = () => {
      setIsScrollTop(window.scrollY <= 0);
    };

    updateScrollTop();
    window.addEventListener('scroll', updateScrollTop, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollTop);
    };
  }, []);

  return isScrollTop;
}
