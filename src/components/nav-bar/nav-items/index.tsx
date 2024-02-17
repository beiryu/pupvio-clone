'use client';

import { APP_CATEGORIES } from '@/constants/app';
import Link from 'next/link';

const NavItems = () => {
  return (
    <ul className="flex h-full gap-10 items-center">
      {APP_CATEGORIES.map((category, index) => {
        return (
          <li key={index} className="text-white text-base font-bold">
            <Link href={category.href}>{category.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
