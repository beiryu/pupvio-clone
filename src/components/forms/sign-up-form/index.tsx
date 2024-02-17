'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/lib/icons/iconsSvg';
import { configParams } from '../../../../config';
import Link from 'next/link';
import ConnectBasicEmailPhoneForm, { FormConnectBasicSubmit } from '../connect-email-phone-form';
import { useState } from 'react';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Email must be a valid email address.',
  }),
  phoneNumber: z.string(),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
    .max(30, {
      message: 'Password must not be longer than 30 characters.',
    }),
  referral: z.string().max(6, {
    message: 'Referral must not be longer than 6 characters.',
  }),
});

type FormType = 'SIGN_IN' | 'SIGN_UP' | 'FORGOT_PASSWORD';

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      phoneNumber: '',
      password: '',
      referral: '',
    },
  });

  const [formType, setFormType] = useState<FormType>('SIGN_IN');

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    fetch(`${configParams.API_NESTJS_HOST}/api/inbox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: 'You have successfully sent a message !',
          });
        } else {
          toast({
            variant: 'destructive',
            title: 'You have successfully sent a message !',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onFormSubmit = async (data: FormConnectBasicSubmit) => {
    if (formType === 'SIGN_IN') {
      // try {
      //   const allowSignIn = data.email
      //     ? await loginWithEmail({
      //         email: data.email || '',
      //         password: data.password,
      //       })
      //     : await loginWithPhone({
      //         phoneNumber: data.phoneNumber || '',
      //         password: data.password,
      //       });
      // } catch (error: any) {
      //   if (error?.response?.data?.verified === false) {
      //     setIsSignUpSuccessfullyData(
      //       data.email
      //         ? { successful: true, email: data.email }
      //         : { successful: true, phoneNumber: data.phoneNumber },
      //     );
      //   }
      // }
    }
  };

  return (
    <div className="max-w-screen-md my-10 mx-auto">
      <div className="flex flex-col space-y-2 w-2/3 m-auto">
        <Icons.logo className="h-70 w-70 my-10" />
        <h1 className="text-white text-2xl font-bold tracking-tight">
          Sign Up
        </h1>
      </div>

      <div className="w-2/3 m-auto space-y-4 pt-10">
        <ConnectBasicEmailPhoneForm
          type={'SIGN_UP'}
          onFormSubmit={onFormSubmit}
        />
      </div>

      <div className="flex flex-col space-y-2 w-full md:w-3/5 m-auto">
        <p className="text-white text-[17px] font-normal text-center">
          Do not have an account? By creating an account, you agree to our{' '}
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
  );
};

export default SignUpForm;
