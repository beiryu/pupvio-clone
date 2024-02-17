'use client';

import Link from 'next/link';
import MaxWidthWrapper from '../max-width-wrapper';
import { Icons } from '@/lib/icons/iconsSvg';
import NavItems from './nav-items';
import MobileNav from './mobile-nav';
import { usePathname } from 'next/navigation';
import { isMinimize } from '@/lib/utils/path.util';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      {!isMinimize(pathname) && (
        <div className="bg-[#0047ff] sticky z-50 top-0 inset-x-0 h-16">
          <header className="relative bg-[#0047ff] ">
            <MaxWidthWrapper>
              <div className="bg-[#0047ff] flex h-20 items-center justify-between">
                <div className="ml-4 flex lg:ml=0">
                  <Link href="/">
                    <Icons.logo className="h-10 w-10" />
                  </Link>
                </div>
                <MobileNav />
                <div className="hidden z-50 md:mr-4 md:block md:self-stretch">
                  <NavItems />
                </div>
              </div>
            </MaxWidthWrapper>
          </header>
        </div>
      )}
    </>
  );
};

export default NavBar;
