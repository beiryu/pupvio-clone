import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { Icons } from '@/lib/icons/iconsSvg';

const DownloadSection = () => {
  return (
    <div className="px-10 flex justify-between lg:flex-row gap-10 flex-col items-center py-5 bg-gradient-to-b from-neutral-700 to-black">
      <div className="flex justify-between gap-10 items-center flex-col lg:flex-row">
        <p className="text-white font-bold text-lg">Download the app today!</p>
        <div className="flex justify-between gap-4">
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
      <div>
        <Image
          unoptimized
          alt="download"
          height={215}
          width={350}
          src="/assets/images/download.png"
        />
      </div>
    </div>
  );
};

export default DownloadSection;
