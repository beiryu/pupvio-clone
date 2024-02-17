import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Icons } from '@/lib/icons/iconsSvg';

const HomeHero = () => {
  return (
    <div className="bg-gradient-to-b from-[#0047ff] to-black">
      <div className="text-center text-white">
        <p className="text-[35px] font-bold w-3/5 py-10 mx-auto">
          World’s{' '}
          <span className="text-[#27D988]">number one cryptocurrency</span> and{' '}
          <span>stock tracker</span> platform.
        </p>
        <p className="text-[22px] text-medium">
          Track Cryptocurrencies, NFTs, Stocks, Bonds, Commodities, Gold, Silver
          etc.
        </p>
      </div>
      <div className="flex items-center gap-4 justify-center py-10">
        <Link href={'/sign-in'}>
          <Button className="bg-[#0047ff] px-10">Sign In</Button>
        </Link>
        <Link href={'/sign-up'}>
          <Button className="bg-[#27d988] px-10">Sign Up</Button>
        </Link>
      </div>
      <div className="w-full h-auto p-2">
        <Image
          unoptimized
          src="/assets/images/hero.png"
          alt="Hero Banner"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority={false}
        />
      </div>
      <div className="py-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-20">
        <div>
          <p className="text-lg font-bold text-white">
            Download the app today!
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://apps.apple.com/us/app/web3app-portfolio-tracker/id6471078359"
            aria-label="apple-store"
          >
            <Icons.appleStore />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.eternalenginecorp.web3app"
            aria-label="google-play"
          >
            <Icons.googlePlay />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
