import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';

export function Logo() {
  return (
    <Link href={ROUTES.ROOT_PATH}>
      <Image
        src="/images/logo.png"
        alt="Fluffy"
        width={280}
        height={150}
        priority
        className="h-7 w-auto md:h-9"
      />
    </Link>
  );
}
