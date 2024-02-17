import type { FC } from 'react';

import AboutMe from '@/components/about-me';
import CallToAction from '@/components/call-to-action';
import DownloadSection from '@/components/download-section';
import HomeHero from '@/components/home-hero';
import Subscribe from '@/components/subscribe';
import Supporters from '@/components/supporters';

import MediaObject from '../../components/media-object/index';
import {
  BLOCKCHAIN_SUPPORTED,
  BLOCKCHAIN_WALLET_SUPPORTED,
} from '@/constants/app';
import MediaObjectWhale from '@/components/media-object/media-object-whale';
import { Join } from '@/lib/icons/joinSvg';
import { Whale } from '@/lib/icons/whaleSvg';
import { Learning } from '@/lib/icons/learningSvg';
import { DataCenter } from '@/lib/icons/dataCenter';
import MaxWidthWrapper from '@/components/max-width-wrapper';

const LadingHomePage: FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#0047ff] to-black">
        <MaxWidthWrapper>
          <HomeHero />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <MediaObject
          isImageRight={false}
          title="Join millions of people in web3"
          listText={[
            'Managing their portfolios',
            'Staying up to date on news',
            'Staying updated on trends',
            'Critical data',
          ]}
          imageSvg={<Join.svg />}
        />
      </MaxWidthWrapper>
      <div className="bg-[#27D988]">
        <MaxWidthWrapper>
          <CallToAction />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <MediaObjectWhale
          title="Track your portfolio across many markets"
          listText={[
            'Cryptocurrencies, NFTs',
            'Stocks, Bonds',
            'Commodities, Gold, Silver',
          ]}
          imageSvg={<Whale.svg />}
        />
      </MaxWidthWrapper>
      <div className="bg-gradient-to-b from-[#0047ff] to-black">
        <MaxWidthWrapper>
          <AboutMe />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <MediaObject
          isImageRight={false}
          title="Learn and Grow"
          listText={[
            'Data is more valuable than oil or gold',
            'Get tips and tricks from researchers',
            'Access to cutting edge research',
            'Expand your knowledge',
          ]}
          imageSvg={<Learning.svg />}
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <MediaObject
          isImageRight
          title="We never sell your data"
          listText={[
            'Your privacy and security is our top priority',
            'Know that your data is properly secured',
            'No sale of your data to third parties',
          ]}
          imageSvg={<DataCenter.svg />}
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <Supporters
          blockchainSupported={BLOCKCHAIN_SUPPORTED}
          blockchainWalletSupported={BLOCKCHAIN_WALLET_SUPPORTED}
        />
      </MaxWidthWrapper>
      <div className="bg-[#0047ff]">
        <MaxWidthWrapper>
          <Subscribe />
        </MaxWidthWrapper>
      </div>
      <div className=" bg-gradient-to-b from-neutral-700 to-black">
        <MaxWidthWrapper>
          <DownloadSection />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default LadingHomePage;
