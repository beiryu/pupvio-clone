'use client';

import { APP_CATEGORIES } from '@/constants/app';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // when we click the path we are currently on, we still want the mobile menu to close,
  // however we cant rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 md:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>
      <div className="md:hidden fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex justify-end">
        <div className="w-full max-w-sm">
          <div className="relative flex w-full text-end max-w-sm flex-col overflow-y-auto bg-black pb-5 shadow-xl">
            <div className="flex px-4 pb-2 pt-5 justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2">
              <ul>
                {APP_CATEGORIES.map((category) => (
                  <li key={category.label} className="space-y-10 px-4 py-4">
                    <Link href={category.href}>
                      <div className="-mb-px flex">
                        <p className="border-transparent text-slate-200 flex-1 whitespace-nowrap border-b-2 text-base font-small font-bold">
                          {category.label}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
