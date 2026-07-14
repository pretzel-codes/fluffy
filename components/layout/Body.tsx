import type { ReactNode } from 'react';

type BodyProps = {
  children: ReactNode;
};

export function Body({ children }: BodyProps) {
  return <main className="flex flex-1 flex-col">{children}</main>;
}
