import Link from 'next/link';
import { MAIN_MENUS } from '@/constants/menus';

export function Nav() {
  return (
    <nav aria-label="주요 메뉴" className="hidden items-center gap-8 md:flex">
      {MAIN_MENUS.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          className="text-base font-medium uppercase"
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}
