'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MaxWidthWrapper from '../max-width-wrapper';
import { Icons } from '@/lib/icons/iconsSvg';
import styles from './footer.module.scss';
import SocialFooterItem from './social-items';
import { APP_CATEGORIES, APP_SOCIALS } from '@/constants/app';
import { isMinimize } from '@/lib/utils/path.util';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#000] flex-grow-0">
      {!isMinimize(pathname) ? (
        <MaxWidthWrapper>
          <div className="">
            <div>
              <div className="relative flex items-top flex-col justify-between gap-5 px-6 py-6 sm:py-8 lg:mt-0 md:flex-row">
                <div className="flex justify-center">
                  <Icons.logo className="h-12 w-auto" />
                </div>
                <div className="text-center md:text-left mx-auto">
                  <p className="mb-4 text-white font-bold text-lg">General</p>
                  <ul>
                    {APP_CATEGORIES.map((category) => (
                      <li
                        key={category.label}
                        className="text-muted-foreground my-4"
                      >
                        <Link href={category.href}>{category.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mx-auto md:text-left">
                  <p className="mb-8 font-bold text-white text-lg">
                    Follow us on
                  </p>
                  <div className="flex gap-2">
                    {APP_SOCIALS.map((item) => (
                      <SocialFooterItem key={item.name} {...item} />
                    ))}
                  </div>
                </div>
                <div
                  id="google_translate_element"
                  className={styles.btnTranslate}
                >
                  <p className={styles.langCodeIcon}>
                    <Icons.down />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; Copy right {new Date().getFullYear()} Web3App
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      ) : (
        <></>
      )}
    </footer>
  );
};

export default Footer;
