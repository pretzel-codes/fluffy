import { ROUTES } from '@/constants/routes';

export type MenuItem = {
  label: string;
  href: string;
};

export const MAIN_MENUS: MenuItem[] = [
  {
    label: 'Portfolio',
    href: ROUTES.PORTFOLIO,
  },
  {
    label: 'Pricing',
    href: ROUTES.PRICING,
  },
  {
    label: 'Blog',
    href: ROUTES.BLOG,
  },
  {
    label: 'Contact',
    href: ROUTES.CONTACT,
  },
];
