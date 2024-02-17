'use client';

import * as z from 'zod';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/lib/icons/iconsSvg';
import { configParams } from '../../../../config';
import { FormConnectBasicSubmit } from '../connect-email-phone-form';
import { useState } from 'react';
import FormItem from '@/components/forms/form-item';
import { Form } from 'antd';
import Input from '@/components/input';

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

const NicknameForm = () => {
  const [form] = Form.useForm();
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

  const onFormSubmit = async (data: FormConnectBasicSubmit) => {};

  return (
    <div className="max-w-screen-md my-10 mx-auto">
      <Form form={form} onFinish={onFormSubmit}>
        <div className="flex flex-col space-y-2 m-auto">
          <h1 className="text-white text-2xl font-bold tracking-tight">
            Enter your name
          </h1>
          <p className="text-white text-[17px] py-2">
            We value your privacy. Your name will always be private.
          </p>
        </div>

        <div className="m-auto py-4">
          <FormItem name="firstName">
            <Input placeholder="First name" />
          </FormItem>
          <FormItem name="lastName">
            <Input placeholder="Last name" />
          </FormItem>
        </div>

        <div className="flex flex-col space-y-2 m-auto">
          <h1 className="text-white text-2xl font-bold tracking-tight">
            Choose your username
          </h1>
          <p className="text-white text-[17px] py-2">
            Your username will always be public for other users.
          </p>
          <FormItem name="nickname">
            <Input placeholder="Nick name" prefix={<Icons.at />} />
            <div className="flex justify-between">
              <p className="text-[#9D9D9D]">suggestion: @asan920, @asan432</p>
              <p className="text-[#27D988] flex items-center gap-1">
                <Icons.greenTick />
                available
              </p>
            </div>
          </FormItem>
        </div>
      </Form>
    </div>
  );
};

export default NicknameForm;
