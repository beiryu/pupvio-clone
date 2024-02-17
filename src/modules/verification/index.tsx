'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { Icons } from '@/lib/icons/iconsSvg';
import styles from './verification.module.scss';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import authenticationService from '@/services/authentication.service';
import { toast } from 'react-toastify';
import OtpForm, { FormOtp } from '@/components/forms/opt-form';
import { useSelector } from 'react-redux';
import { selectUser } from '@/lib/features/users/usersSlice';

const walletInfo: { name: string; imageUrl: string }[] = [
  { name: 'Xumm', imageUrl: '/assets/images/login-wallet/xumm.png' },
  { name: 'Rainbow', imageUrl: '/assets/images/login-wallet/rainbow.png' },
  {
    name: 'Coinbase Wallet',
    imageUrl: '/assets/images/login-wallet/coinbasewallet.png',
  },
  { name: 'MetaMask', imageUrl: '/assets/images/login-wallet/metamask.png' },
  {
    name: 'WalletConnect',
    imageUrl: '/assets/images/login-wallet/walletconnect.png',
  },
];

const socialMediaIcons = [
  { imageUrl: '/assets/images/social-icons/google.png' },
  { imageUrl: '/assets/images/social-icons/facebook.png' },
  { imageUrl: '/assets/images/social-icons/instagram.png' },
  { imageUrl: '/assets/images/social-icons/twitter.png' },
  { imageUrl: '/assets/images/social-icons/apple.png' },
  { imageUrl: '/assets/images/social-icons/snapchat.png' },
  { imageUrl: '/assets/images/social-icons/tiktok.png' },
];

const VerificationPage: FC = () => {
  const router = useRouter();
  const userSelector: any = useSelector(selectUser);

  const goBack = () => {
    router.back();
  };

  const onFormSubmit = async (data: FormOtp) => {
    const userWithCredential = await authenticationService.verifyOtp({
      code: data.code,
      username: userSelector.username ?? "",
    });

    if (userWithCredential) {
      toast.success('Verify successfully !');
      router.push('/home');
    }
  };

  const onResendOtp = () => {
    console.log('Resend OTP');
  };

  return (
    <div className="container relative flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 px-0">
      <div className="bg-[#0047ff] h-full h-screen">
        <div className="p-20 m-auto h-full flex flex-col items-center justify-center relative">
          <Button
            onClick={goBack}
            className="text-white font-semibold text-[17px] absolute top-5 left-5 lg:top-20 lg:left-20 border-none"
          >
            Back
          </Button>
          <div className="text-white text-2xl font-bold leading-tight">
            Connect a Wallet
          </div>
          <div className="py-5">
            <p className="text-white text-base font-normal">Popular</p>
            <ul className="">
              {walletInfo.map((wallet, index) => {
                return (
                  <li
                    className="py-4 flex flex-row items-center gap-4 h-42"
                    key={index}
                  >
                    <div className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                      <Image
                        unoptimized
                        width={42}
                        height={42}
                        src={wallet.imageUrl}
                        alt={wallet.name}
                        className={styles.image}
                      />
                    </div>
                    <span className="inline-block text-white text-lg font-bold">
                      {wallet.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black h-full w-full mx-auto py-20">
        <div className="mx-auto w-full lg:w-1/2">
          <div className="flex flex-col space-y-2 w-2/3 mx-auto">
            <Icons.logo className="h-70 w-70 mt-10 mb-20" />
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Verification
            </h1>
            <p className="text-white text-[17px] font-medium py-5">
              We have sent an verification code.
            </p>
          </div>

          <div className="w-2/3 mx-auto space-y-4">
            <p className="text-white text-[17px] font-medium py-5">
              Enter code
            </p>
            <OtpForm
              type="VERIFY_USER"
              onResendOtp={onResendOtp}
              onFormSubmit={onFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
