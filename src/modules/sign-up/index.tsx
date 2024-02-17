'use client';

import React, { FC } from 'react';
import ConnectBasicEmailPhoneForm, {
  FormConnectBasicSubmit,
} from '@/components/forms/connect-email-phone-form';
import { Icons } from '@/lib/icons/iconsSvg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import authenticationService from '@/services/authentication.service';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { saveToStorage } from '@/lib/utils/storage.util';
import { useDispatch } from 'react-redux';
import { setUserState } from '@/lib/features/users/usersSlice';

const SignUpPage: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onFormSubmit = async (data: FormConnectBasicSubmit) => {
    const userWithCredential = await authenticationService.signUp({
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      hasAcceptedTerms: true,
      referralCode: data.referralCode,
      language: 'en',
    });

    if (userWithCredential.accessToken) {
      saveToStorage('access_token', userWithCredential.accessToken);
      dispatch(setUserState(userWithCredential.user));
      toast.success('Sign up successfully !');
      router.push('/verification');
    }
  };

  const goBack = () => {
    router.back();
  };

  const goToSignInPage = () => {
    router.push('/sign-in');
  };

  return (
    <div className="mx-auto relative">
      <Button
        onClick={goBack}
        type={'link'}
        className="text-white font-semibold text-[17px] absolute top-0 left-5 lg:left-20"
      >
        Back
      </Button>
      <Button
        onClick={goToSignInPage}
        type={'link'}
        className="text-[#0047ff] font-semibold text-[17px] absolute top-0 right-5 lg:right-20"
      >
        Sign in
      </Button>
      <div className="max-w-screen-md my-10 mx-auto">
        <div className="flex flex-col space-y-2 w-2/3 lg:w-1/2 m-auto">
          <Icons.logo className="h-70 w-70 my-10 mt-20" />
          <h1 className="text-white text-2xl font-bold tracking-tight pt-10">
            Sign Up
          </h1>
        </div>

        <div className="w-2/3 lg:w-1/2 m-auto space-y-4 pt-10">
          <ConnectBasicEmailPhoneForm
            type={'SIGN_UP'}
            onFormSubmit={onFormSubmit}
          />
        </div>

        <div className="flex flex-col space-y-2 w-2/3 lg:w-2/5 m-auto">
          <p className="text-white text-[17px] font-normal text-center">
            By creating an account, you agree to our{' '}
            <Link href={'/terms'} className="text-[#0047ff]">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href={'/privacy'} className="text-[#0047ff]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
