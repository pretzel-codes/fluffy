export const ROUTES = {
  ROOT_PATH: '/',
  HOME: '/',
  PORTFOLIO: '/portfolio',
  PORTFOLIO_DETAIL: (slug: string) => `/portfolio/${slug}`,
  PRICING: '/pricing',
  CONTACT: '/contact',
  BLOG: '/blog',
  BLOG_DETAIL: (slug: string) => `/blog/${slug}`,
} as const;
