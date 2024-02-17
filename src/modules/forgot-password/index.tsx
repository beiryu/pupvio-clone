'use client';

import React, { FC, useState } from 'react';
import ConnectBasicEmailPhoneForm, {
  FormConnectBasicSubmit,
} from '@/components/forms/connect-email-phone-form';
import { Icons } from '@/lib/icons/iconsSvg';
import { useRouter } from 'next/navigation';
import authenticationService from '@/services/authentication.service';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import OtpForm, { FormOtp } from '@/components/forms/opt-form';
import styles from './forgot-password.module.scss';

const STEP_RESET_PASSWORD = {
  REQUEST: 'REQUEST',
  VERIFICATION: 'VERIFICATION',
  NEW_PASSWORD: 'NEW_PASSWORD',
  COMPLETED: 'COMPLETED',
} as const;

const ForgotPasswordPage: FC = () => {
  const router = useRouter();

  const [step, setStep] = useState<string>(STEP_RESET_PASSWORD.REQUEST);
  const [username, setUsername] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const renderStep = () => {
    switch (step) {
      case STEP_RESET_PASSWORD.REQUEST:
        return (
          <ConnectBasicEmailPhoneForm
            type={'FORGOT_PASSWORD'}
            onFormSubmit={onRequestChangePassword}
          />
        );
      case STEP_RESET_PASSWORD.VERIFICATION:
        return (
          <>
            <p className="text-white text-[17px]">
              We have sent an verification code
            </p>
            <p className="text-white text-[17px] pt-10 pb-5">Enter code</p>
            <OtpForm
              type={'VERIFY_RESET_PASSWORD_CODE'}
              onResendOtp={onResendOtp}
              onFormSubmit={onVerifyResetPasswordCode}
            />
          </>
        );
      case STEP_RESET_PASSWORD.NEW_PASSWORD:
        return (
          <ConnectBasicEmailPhoneForm
            type={'NEW_PASSWORD'}
            onFormSubmit={onChangePassword}
          />
        );
      case STEP_RESET_PASSWORD.COMPLETED:
        return (
          <>
            <p className="text-white text-[17px] pb-10">
              Please sign in to Web3 again with your new password
            </p>
            <Button
              className={styles.btnConnect}
              onClick={() => router.push('/sign-in')}
            >
              {'Sign in now'}
            </Button>
          </>
        );
    }
  };

  const onRequestChangePassword = async (data: FormConnectBasicSubmit) => {
    const username = data.email ?? data.phoneNumber ?? '';
    setUsername(username);

    const success = await authenticationService.requestChangePassword({
      username: username,
    });

    if (success) {
      toast.success('Request change password successfully!');
      setStep(STEP_RESET_PASSWORD.VERIFICATION);
    }
  };

  const onVerifyResetPasswordCode = async (data: FormOtp) => {
    setCode(data.code);
    const success = await authenticationService.verifyResetPasswordCode({
      username: username,
      code: data.code,
    });

    if (success) {
      toast.success('Verify reset password code successfully!');
      setStep(STEP_RESET_PASSWORD.NEW_PASSWORD);
    }
  };

  const onChangePassword = async (data: FormConnectBasicSubmit) => {
    const success = await authenticationService.changePassword({
      username: username,
      password: data.password,
      code: code,
    });

    if (success) {
      toast.success('Change password successfully!');
      setStep(STEP_RESET_PASSWORD.COMPLETED);
    }
  };

  const onResendOtp = async () => {
    const success = await authenticationService.requestChangePassword({
      username,
    });
    if (success) {
      toast.success('Send OTP successfully!');
    }
  };

  const goBack = () => {
    if (step === STEP_RESET_PASSWORD.REQUEST) {
      router.back();
    } else {
      const stepOrder: { [key: string]: string } = {
        [STEP_RESET_PASSWORD.COMPLETED]: STEP_RESET_PASSWORD.NEW_PASSWORD,
        [STEP_RESET_PASSWORD.NEW_PASSWORD]: STEP_RESET_PASSWORD.VERIFICATION,
        [STEP_RESET_PASSWORD.VERIFICATION]: STEP_RESET_PASSWORD.REQUEST,
      };
      setStep(stepOrder[step]);
    }
  };

  const goToSignInPage = () => {
    router.push('/sign-in');
  };

  const renderResetPasswordHeader = () => {
    switch (step) {
      case STEP_RESET_PASSWORD.REQUEST:
      case STEP_RESET_PASSWORD.VERIFICATION:
        return (
          <>
            <Icons.logo className="h-70 w-70 my-10" />
            <h1 className="text-white text-2xl font-bold tracking-tight pt-10">
              Forgot Password
            </h1>
          </>
        );
      case STEP_RESET_PASSWORD.NEW_PASSWORD:
        return (
          <>
            <Icons.logo className="h-70 w-70 my-10" />
            <h1 className="text-white text-2xl font-bold tracking-tight pt-10">
              Set new password
            </h1>
          </>
        );
      case STEP_RESET_PASSWORD.COMPLETED:
        return (
          <>
            <div className="mx-auto relative">
              <Icons.bigBlueLock />
              <Icons.circleCheckIcon className="absolute top-10 -left-5" />
              <Icons.blinkStar
                width={17}
                height={17}
                className="absolute top-6 -left-5"
              />
              <Icons.blinkStar
                width={17}
                height={17}
                className="absolute -top-6 left-14"
              />
              <Icons.blinkStar
                width={17}
                height={17}
                className="absolute top-40 right-4"
              />
              <Icons.blinkStar
                width={25}
                height={25}
                className="absolute -top-5 right-1/2"
              />
              <Icons.blinkStar
                width={30}
                height={30}
                className="absolute top-24 -right-5"
              />
              <Icons.blinkStar
                width={60}
                height={60}
                className="absolute -top-10 -right-10"
              />
            </div>
            <h1 className="text-white text-2xl font-bold tracking-tight pt-10">
              You have successfully reset your password.
            </h1>
          </>
        );
    }
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
      <div className="max-w-screen-md my-10 mx-auto ">
        <div className="flex flex-col space-y-2 w-2/3 lg:w-2/5 m-auto pt-20">
          {renderResetPasswordHeader()}
        </div>

        <div className="w-2/3 lg:w-2/5 m-auto space-y-4 pt-10">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
