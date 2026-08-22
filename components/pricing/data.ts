interface Plan {
  name: string;
  badge?: string;
  price: string;
  description: string;
  includedIntro: string;
  included: string[];
  excluded: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Basic',
    price: '₩3,500,000',
    description: '필요한 기능만 담아 합리적으로 시작하는 홈페이지',
    includedIntro: '',
    included: [
      '시술 카테고리 관리',
      '시술 소개 페이지 관리',
      '이미지 게시판형 이벤트 관리',
    ],
    excluded: ['상품 관리', '예약 관리'],
  },
  {
    name: 'Signature',
    price: '₩6,000,000',
    description: '병원 운영에 필요한 기능을 모두 갖춘 가장 인기 있는 플랜',
    includedIntro: 'Basic의 모든 기능 +',
    included: ['상품 관리', '상품형 이벤트', '온라인 예약', '예약 시간 관리'],
    excluded: [],
    featured: true,
  },
  {
    name: 'Custom',
    price: '문의하기',
    description: '병원의 운영 방식에 맞춰 자유롭게 제작하는 맞춤형 플랜',
    includedIntro: 'Signature의 모든 기능 +',
    included: ['맞춤 기능 개발', '외부 API 연동', 'CRM 연동'],
    excluded: [],
  },
];
