interface PortfolioData {
  title: string;
  description?: string;
  thumbnail?: string;
  link?: string;
}

export const portfolioItems: PortfolioData[] = [
  {
    title: 'Cellence Clinic',
    link: 'https://cellenceclinic.com/',
  },
  {
    title: 'Newstar Clinic',

    link: 'https://newstarclinic.co.kr/',
  },
  {
    title: 'Centumstar Clinic',
    link: 'https://centumstarclinic.com/',
  },
] as const;
