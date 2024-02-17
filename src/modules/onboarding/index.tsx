'use client';

import { selectUser } from '@/lib/features/users/usersSlice';
import { BaseLogo } from '@/lib/icons/baseLogoSvg';
import { Icons } from '@/lib/icons/iconsSvg';
import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './onboarding.module.scss';
import { cn } from '@/lib/utils';
import NicknameForm from '@/components/forms/nickname-form';
import { WhiteIcons } from '@/lib/icons/whiteIconsSvg';

const STEP_ONBOARDING = {
  ASSETS_SELECTION: 'ASSETS_SELECTION',
  NICKNAME: 'NICKNAME',
  AVATAR: 'AVATAR',
  GENDER: 'GENDER',
  PORTFOLIO_ASSETS: 'PORTFOLIO_ASSETS',
  BIRTHDAY: 'BIRTHDAY',
  PORTFOLIO_PHOTO: 'PORTFOLIO_PHOTO',
  DESCRIBE_YOURSELF: 'DESCRIBE_YOURSELF',
} as const;

const ASSETS = [
  'Crypto',
  'NFTS',
  'Stocks',
  'Virtual Land',
  'Virtual Assets',
  'Commodities',
  'Tokenized Assets',
  'Real Estate',
  'Bonds',
  'Luxury Assets',
  'Real Assets',
  'Precious Metals',
  'Business Assets',
];

const DESCRIBE = [
  'Trader',
  'Investor',
  'Holder',
  'BTC Maximalist',
  'XRP Maximalist',
];

const COINS = ['Bitcoin', 'Ethereum', 'XRP', 'XLM', 'Gen Z'];

const EXCHANGE_COINS = [
  'Ordinals - ORDI',
  'Ren - REN',
  'ChainX - PCX',
  'Circuits of Value - COVAL',
  'Stacks - STX',
  'Bitcoin SV - BSV',
  'Bitcoin CH - BCH',
  'Wrapped Bitcoin - WBTC',
];

const PORTFOLIO_PHOTO = [
  {
    name: 'Photo library',
    icon: <WhiteIcons.image />,
  },
  {
    name: 'Facebook',
    icon: <WhiteIcons.facebook />,
  },
  {
    name: 'Instagram',
    icon: <WhiteIcons.instagram />,
  },
  {
    name: 'Snapchat',
    icon: <WhiteIcons.snapchat />,
  },
  {
    name: 'Tiktok',
    icon: <WhiteIcons.tiktok />,
  },
];

const ASSISTANT_CATEGORY = [
  'Asia Pacific',
  'Africa',
  'Europe',
  'Latin America',
  'Gen Z',
];

const ASSISTANTS = [
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
  { name: 'Shintoro', image: '' },
];

const OnboardingPage: FC = () => {
  const [step, setStep] = useState<string>(STEP_ONBOARDING.ASSETS_SELECTION);

  const userSelector: any = useSelector(selectUser);
  const router = useRouter();

  const renderStep = () => {
    switch (step) {
      case STEP_ONBOARDING.ASSETS_SELECTION:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              What assets will your portfolio manage?
            </h1>
            <ul className="flex flex-wrap text-white gap-2 py-8">
              {ASSETS.map((asset, index) => (
                <li
                  key={index}
                  className={cn(
                    'rounded-full px-[26px] py-[13px]',
                    index % 2 ? 'bg-[#0047ff]' : 'bg-[#1F1F1F]',
                  )}
                >
                  {asset}
                </li>
              ))}
            </ul>
          </>
        );
      case STEP_ONBOARDING.NICKNAME:
        return (
          <>
            <NicknameForm />
          </>
        );
      case STEP_ONBOARDING.AVATAR:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Select your avatar and personal assistant
            </h1>
            <ul className="flex flex-wrap text-white gap-3 py-8">
              {ASSISTANT_CATEGORY.map((asset, index) => (
                <li
                  key={index}
                  className={cn(
                    'rounded-full px-[26px] py-[13px]',
                    index === 0 ? 'bg-[#0047ff]' : 'bg-[#1F1F1F]',
                  )}
                >
                  {asset}
                </li>
              ))}
            </ul>
            <ul className="flex flex-row flex-wrap gap-10 max-h-[400px] overflow-y-scroll">
              {ASSISTANTS.map((assitant, index) => {
                return (
                  <li
                    key={index}
                    className="!text-white flex flex-col gap-2 justify-center items-center"
                  >
                    <div className="bg-[#1F1F1F] w-[100px] h-[100px] rounded-full"></div>
                    {assitant.name}
                  </li>
                );
              })}
            </ul>
          </>
        );
      case STEP_ONBOARDING.GENDER:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Select your gender
            </h1>
            <ul className="flex flex-wrap text-white gap-2 py-8">
              {ASSETS.map((asset, index) => (
                <li
                  key={index}
                  className="bg-[#0047ff] rounded-full px-[26px] py-[13px]"
                >
                  {asset}
                </li>
              ))}
            </ul>
          </>
        );
      case STEP_ONBOARDING.PORTFOLIO_ASSETS:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Quickly add some assets to your portfolio
            </h1>
            <ul className="flex flex-wrap text-white gap-2 my-8">
              {COINS.map((asset, index) => (
                <li
                  key={index}
                  className={cn(
                    'rounded-full px-[26px] py-[13px]',
                    index % 2 ? 'bg-[#0047ff]' : 'bg-[#1F1F1F]',
                  )}
                >
                  {asset}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap text-white gap-2 my-8">
              {EXCHANGE_COINS.map((asset, index) => (
                <li
                  key={index}
                  className={cn(
                    'rounded-full px-[26px] py-[13px]',
                    index % 2 ? 'bg-[#0047ff]' : 'bg-[#1F1F1F]',
                  )}
                >
                  {asset}
                </li>
              ))}
            </ul>
          </>
        );
      case STEP_ONBOARDING.BIRTHDAY:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              What is your birthday?
            </h1>
          </>
        );
      case STEP_ONBOARDING.PORTFOLIO_PHOTO:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Upload your portfolio photo
            </h1>
            <ul className="flex flex-wrap text-white gap-4 py-8">
              {PORTFOLIO_PHOTO.map((provider, index) => (
                <li
                  key={index}
                  className={cn(
                    'flex flex-col items-center justify-center gap-4 rounded-full px-[26px] py-[13px] w-[160px] h-[160px] bg-[#0047ff]',
                  )}
                >
                  {provider.icon}
                  {provider.name}
                </li>
              ))}
            </ul>
          </>
        );
      case STEP_ONBOARDING.DESCRIBE_YOURSELF:
        return (
          <>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Descibe yourself
            </h1>
            <p className="text-white text-[17px] py-2">Choose minimum 1 tag</p>
            <ul className="flex flex-wrap text-white gap-2 py-8">
              {DESCRIBE.map((describe, index) => (
                <li
                  key={index}
                  className={cn(
                    'rounded-full px-[26px] py-[13px]',
                    index % 2 ? 'bg-[#0047ff]' : 'bg-[#1F1F1F]',
                  )}
                >
                  {describe}
                </li>
              ))}
            </ul>
          </>
        );
    }
  };

  const renderTextInsideButton = () => {
    switch (step) {
      case 'ASSETS_SELECTION':
      case 'NICKNAME':
      case 'AVATAR':
      case 'GENDER':
      case 'PORTFOLIO_ASSETS':
      case 'BIRTHDAY':
      case 'PORTFOLIO_PHOTO':
        return <Icons.greaterThan />;
      case 'DESCRIBE_YOURSELF':
        return 'Done';
      default:
        return '';
    }
  };

  const goForward = () => {
    if (step === STEP_ONBOARDING.DESCRIBE_YOURSELF) {
      router.push('/home');
      return;
    }

    const stepOrder: { [key: string]: string } = {
      [STEP_ONBOARDING.ASSETS_SELECTION]: STEP_ONBOARDING.NICKNAME,
      [STEP_ONBOARDING.NICKNAME]: STEP_ONBOARDING.AVATAR,
      [STEP_ONBOARDING.AVATAR]: STEP_ONBOARDING.GENDER,
      [STEP_ONBOARDING.GENDER]: STEP_ONBOARDING.PORTFOLIO_ASSETS,
      [STEP_ONBOARDING.PORTFOLIO_ASSETS]: STEP_ONBOARDING.BIRTHDAY,
      [STEP_ONBOARDING.BIRTHDAY]: STEP_ONBOARDING.PORTFOLIO_PHOTO,
      [STEP_ONBOARDING.PORTFOLIO_PHOTO]: STEP_ONBOARDING.DESCRIBE_YOURSELF,
    };
    setStep(stepOrder[step]);
  };

  return (
    <div className="container relative flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 px-0">
      <div className="bg-[#0047ff] h-full h-screen">
        <div className="p-20 m-auto h-full flex flex-col items-center justify-center relative">
          <Image
            unoptimized
            src="/logo.png"
            width={150}
            height={150}
            alt="logo"
            className="absolute top-1/4"
          />
          <BaseLogo.svg />
        </div>
      </div>

      <div className="bg-black h-full w-full mx-auto py-20">
        <div className="mx-auto w-full lg:w-1/2 flex flex-col justify-between h-full py-20">
          <div className="flex flex-col space-y-2 w-3/4 mx-auto">
            <div>{renderStep()}</div>
          </div>

          <div className="w-3/4 mx-auto space-y-4 text-white">
            <Button
              className={styles.btnConnect}
              htmlType="submit"
              disabled={false}
              onClick={goForward}
            >
              {renderTextInsideButton()}
            </Button>
            <ul className="flex items-center justify-center space-x-2 py-2">
              {Object.values(STEP_ONBOARDING).map((stepProgress, index) => {
                return (
                  <li
                    key={index}
                    className={cn(
                      'w-[7px] h-[7px] rounded-full',
                      stepProgress === step ? 'bg-[#fff]' : 'bg-[#9D9D9D]',
                    )}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
