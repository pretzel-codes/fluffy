'use client';

import { Logo } from '@/components/layout/Logo';
import { Nav } from '@/components/layout/Nav';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MAIN_MENUS } from '@/constants/menus';
import { useIsScrollTop } from '@/hooks/useIsScrollTop';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const isScrollTop = useIsScrollTop();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isScrollTop ? '' : 'backdrop-blur',
      )}
    >
      <div className="site-width relative flex h-14 items-center justify-end md:h-20 md:justify-between">
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Logo />
        </div>

        <Nav />

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="메뉴 열기"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-11/12 px-6 py-8">
            <SheetHeader className="p-0">
              <SheetTitle className="sr-only">주요 메뉴</SheetTitle>
            </SheetHeader>
            <nav aria-label="모바일 주요 메뉴" className="mt-8 flex flex-col">
              {MAIN_MENUS.map((menu) => (
                <SheetClose key={menu.href} asChild>
                  <Link
                    href={menu.href}
                    className="py-4 text-lg font-medium uppercase"
                  >
                    {menu.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
