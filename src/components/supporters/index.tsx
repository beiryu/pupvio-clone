import React from 'react';

import SupporterItem from './blockchain-supporter-item';
import Link from 'next/link';

type SupportersProps = {
  blockchainSupported: {
    name: string;
    imageUrl: string;
  }[];
  blockchainWalletSupported: {
    name: string;
    imageUrl: string;
  }[];
};

const Supporters = ({
  blockchainSupported,
  blockchainWalletSupported,
}: SupportersProps) => {
  return (
    <div className="">
      <div className="my-20 space-y-16">
        <p className="text-center text-white text-[35px] font-bold leading-[49.22px]">
          Blockchains Supported
        </p>
        <div className="flex flex-wrap justify-center items-center gap-[35px] md:gap-[68px]">
          {(blockchainSupported || []).map((item) => (
            <SupporterItem
              key={item.name}
              {...item}
              ratio="auto"
              maxHeight={120}
              maxWidth={215}
            />
          ))}
        </div>
        <Link
          href={''}
          className="text-[#27D988] mx-auto w-fit block text-lg font-medium"
        >
          Plus many more
        </Link>
      </div>
      <div className="my-20 space-y-16">
        <p className="text-center text-white text-[35px] font-bold leading-[49.22px]">
          Blockchain Wallets Supported
        </p>
        <div className="flex flex-wrap w-4/5 m-auto justify-center items-center gap-[35px] md:gap-[68px]">
          {(blockchainWalletSupported || []).map((item) => (
            <SupporterItem
              key={item.name}
              {...item}
              ratio={1}
              maxHeight={142}
              maxWidth={109}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporters;
