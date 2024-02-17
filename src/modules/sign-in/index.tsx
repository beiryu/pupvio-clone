'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import ConnectBasicEmailPhoneForm, {
  FormConnectBasicSubmit,
} from '@/components/forms/connect-email-phone-form';
import Link from 'next/link';
import { Icons } from '@/lib/icons/iconsSvg';
import styles from './sign-in.module.scss';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import authenticationService from '@/services/authentication.service';
import { toast } from 'react-toastify';
import { saveToStorage } from '@/lib/utils/storage.util';
import { useDispatch } from 'react-redux';
import { setUserState } from '@/lib/features/users/usersSlice';

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

const SignInPage: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goBack = () => {
    router.back();
  };

  const onFormSubmit = async (data: FormConnectBasicSubmit) => {
    const userWithCredential = await authenticationService.signIn({
      username: data.email ?? data.phoneNumber ?? '',
      password: data.password,
    });

    if (userWithCredential.accessToken) {
      toast.success('Login successfully !');
      saveToStorage('access_token', userWithCredential.accessToken);
      saveToStorage('user_info', JSON.stringify(userWithCredential.user));
      dispatch(setUserState(userWithCredential.user));

      const { user } = userWithCredential;
      if (!user.isEmailVerified && !user.isPhoneVerified) {
        router.push('/onboarding');
      } else {
        router.push('/home');
      }
    }
  };

  return (
    <div className="container relative flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 px-0">
      <div className="bg-[#0047ff] h-full h-screen">
        <div className="p-20 m-auto h-full flex flex-col items-center justify-center relative">
          <Button
            onClick={goBack}
            className="text-white font-semibold text-[17px] absolute top-10 left-10 lg:top-20 lg:left-20 border-none"
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
                  <li key={index}>
                    <Link
                      href={'/'}
                      className="py-4 flex flex-row items-center gap-4 h-42"
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
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black h-full max-w-screen-md mx-auto py-20">
        <div className="mx-auto w-full">
          <div className="flex flex-col space-y-2 w-2/3 lg:w-full mx-auto">
            <Icons.logo className="h-70 w-70 my-10" />
            <h1 className="text-white text-2xl font-bold tracking-tight pb-10">
              Sign In
            </h1>
          </div>

          <div className="space-y-4 w-2/3 lg:w-full mx-auto">
            <ConnectBasicEmailPhoneForm
              type={'SIGN_IN'}
              onFormSubmit={onFormSubmit}
            />
          </div>

          <div className="flex flex-col space-y-2 w-2/3 lg:w-full mx-auto">
            <Link
              className="text-center text-[#4700ff] text-[17px] font-normal m-auto"
              href={'/forgot-password'}
            >
              Forgot Password?
            </Link>
            <div className="text-white text-[17px] font-medium text-center py-5">
              OR
            </div>
            <ul className="flex flex-row justify-center gap-3 items-center pb-10">
              {socialMediaIcons.map((icon, index) => {
                return (
                  <li key={index}>
                    <Link href={'/'}>
                      <Image
                        unoptimized
                        width={40}
                        height={40}
                        src={icon.imageUrl}
                        alt={icon.imageUrl}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="text-white text-[17px] font-normal text-center">
              Do not have an account?{' '}
              <Link href={'/sign-up'} className="text-[#0047ff]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
