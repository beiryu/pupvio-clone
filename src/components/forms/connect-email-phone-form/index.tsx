import { Button, Checkbox, Form } from 'antd';
import { useState } from 'react';

import FormItem from '@/components/forms/form-item';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorPassword,
  validatorPhone,
} from '@/lib/validators/connect-basic.util';

import styles from './connect-email-phone-form.module.scss';
import Input from '../../input';
import InputPhoneNumber from '@/components/input/input-phone-number';
import InputPassword from '../../input/input-password';
import EmailPhoneRadio from '@/components/radio/email-phone-radio';
import { Icons } from '@/lib/icons/iconsSvg';
import { cn } from '@/lib/utils';

export type FormConnectBasicSubmit = {
  email?: string;
  phoneNumber?: string;
  username?: string;
  password: string;
  confirmPassword?: string;
  hasAcceptedTerms: boolean;
  referralCode?: string;
  countryCode?: string;
  language?: string;
};

type FormType = 'SIGN_IN' | 'SIGN_UP' | 'FORGOT_PASSWORD' | 'NEW_PASSWORD';

type LoginBy = 'EMAIL' | 'PHONE_NUMBER';

type FormConnectBasicEmailPhoneProps = {
  type: FormType;
  onFormSubmit: (data: FormConnectBasicSubmit) => void;
};

const PASSWORD_CHECK = [
  'Password must have a minimum of 8 characters',
  'Password must have a minimum or 1 alphabetic character',
  'Password must have a minimum of 1 numeric character',
  'Password must have a minimum of 1 capital letter',
  'Both password does not match',
];

const ConnectBasicEmailPhoneForm = (props: FormConnectBasicEmailPhoneProps) => {
  const [loginBy, setLoginBy] = useState<LoginBy>('EMAIL');
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const [form] = Form.useForm();
  const hasAcceptedTermsValue = Form.useWatch('hasAcceptedTerms', form);

  const onFinish = async (values: FormConnectBasicSubmit) => {
    setIsConnecting(true);
    try {
      await props.onFormSubmit(values);
    } catch (error) {
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  const renderForm = (formType: FormType) => {
    switch (formType) {
      case 'SIGN_IN':
        return (
          <FormItem name="password" rules={[{ validator: validatorPassword }]}>
            <InputPassword placeholder="Password" prefix={<Icons.lock />} />
          </FormItem>
        );
      case 'SIGN_UP':
        return (
          <>
            <FormItem
              name="password"
              rules={[{ validator: validatorPassword }]}
            >
              <InputPassword placeholder="Password" prefix={<Icons.lock />} />
            </FormItem>
            <p className="text-white text-[17px] font-medium">
              Referral Code (Optional)
            </p>
            <FormItem name="referralCode" className="pt-5">
              <Input placeholder="Referral Code" prefix={<Icons.friends />} />
            </FormItem>
            <Form.Item name="hasAcceptedTerms" valuePropName="checked">
              <div className="flex flex-row items-start gap-2">
                <Checkbox />
                <p className="text-white text-[13px] font-medium px-2">
                  I have read and agree to Web3’s Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </Form.Item>
          </>
        );
      case 'NEW_PASSWORD':
        return (
          <>
            <FormItem
              name="password"
              rules={[{ validator: validatorPassword }]}
              validateTrigger="onChange"
              className={styles.hideErrorMessage}
            >
              <InputPassword
                placeholder="New password"
                prefix={<Icons.lock />}
              />
            </FormItem>
            <FormItem
              name="confirmPassword"
              rules={[
                {
                  validator: (_, value) =>
                    validatorConfirmPassword(_, value, form, 'password'),
                },
              ]}
              validateTrigger="onChange"
              className={styles.hideErrorMessage}
            >
              <InputPassword
                placeholder="Confirm password"
                prefix={<Icons.lock />}
              />
            </FormItem>

            {PASSWORD_CHECK.map((conditionText, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  {form.getFieldError('password').includes(conditionText) ? (
                    <></>
                  ) : (
                    <Icons.greenTick />
                  )}
                  <p
                    className={cn(
                      'text-[10px]',
                      form.getFieldError('password').includes(conditionText)
                        ? 'text-white'
                        : 'text-emerald-400',
                    )}
                  >
                    {conditionText}
                  </p>
                </div>
              );
            })}
          </>
        );
      case 'FORGOT_PASSWORD':
      default:
        return <></>;
    }
  };

  const renderTextInsideButton = (formType: FormType) => {
    switch (formType) {
      case 'SIGN_IN':
        return 'Sign in';
      case 'SIGN_UP':
        return 'Sign up';
      case 'FORGOT_PASSWORD':
        return 'Continue';
      case 'NEW_PASSWORD':
        return 'continue';
      default:
        return '';
    }
  };

  return (
    <div>
      {props.type !== 'NEW_PASSWORD' && (
        <EmailPhoneRadio onChange={setLoginBy} />
      )}
      <Form form={form} onFinish={onFinish}>
        {props.type !== 'NEW_PASSWORD' ? (
          loginBy === 'EMAIL' ? (
            <FormItem name="email" rules={[{ validator: validatorEmail }]}>
              <Input placeholder="Email" prefix={<Icons.email />} />
            </FormItem>
          ) : (
            <FormItem
              name="phoneNumber"
              rules={[{ validator: validatorPhone }]}
            >
              <InputPhoneNumber placeholder="Mobile Number" />
            </FormItem>
          )
        ) : (
          <></>
        )}
        {renderForm(props.type)}
        <Button
          loading={isConnecting}
          className={styles.btnConnect}
          htmlType="submit"
          disabled={!hasAcceptedTermsValue && props.type === 'SIGN_UP'}
        >
          {renderTextInsideButton(props.type)}
        </Button>
      </Form>
    </div>
  );
};

export default ConnectBasicEmailPhoneForm;
