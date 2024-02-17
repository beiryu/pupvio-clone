import { Button, Form } from 'antd';
import { useState } from 'react';
import useCountdown from '@/lib/hooks/useCountdown';
import styles from './otp-form.module.scss';
import InputOTP from '@/components/input/input-otp';
import authenticationService from '@/services/authentication.service';
import { toast } from 'react-toastify';

export type FormOtp = {
  code: string;
};

type FormType = 'VERIFY_USER' | 'VERIFY_RESET_PASSWORD_CODE';

type FormOtpProps = {
  type: FormType;
  onResendOtp: () => void
  onFormSubmit: (data: FormOtp) => void;
};

const OtpForm = (props: FormOtpProps) => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [isRequestNewCodeExpired, setIsRequestNewCodeExpired] = useState(false);

  const { minutes, seconds, reset, isInactive } = useCountdown({
    minutes: 2.5,
    autoStart: true,
    onCompleted: () => {
      setIsRequestNewCodeExpired(true);
    },
  });

  const onFinish = async () => {
    setIsConnecting(true);
    try {
      await props.onFormSubmit({ code: otp.join('') });
    } catch (error) {
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  const onResendCode = async () => {
    await props.onResendOtp()
    reset({ minutes: 2, seconds: 30 });
    setIsRequestNewCodeExpired(false);
  };

  const renderTextInsideButton = (formType: FormType) => {
    switch (formType) {
      case 'VERIFY_USER':
        return 'Sign in';
      case 'VERIFY_RESET_PASSWORD_CODE':
        return 'Continue';
      default:
        return '';
    }
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <InputOTP otp={otp} setOtp={setOtp} />
        {!isInactive ? (
          <div className="text-white text-[17px] font-medium text-center mx-auto p-10 pb-0">
            {minutes !== 0 ? `${minutes}:` : ''}
            {seconds}
          </div>
        ) : (
          <div className="text-center pt-10">
            <Button
              onClick={onResendCode}
              type="link"
              className="text-[#0047ff] text-[17px] text-center"
            >
              Resend code
            </Button>
          </div>
        )}
        <Button
          loading={isConnecting}
          className={styles.btnConnect}
          htmlType="submit"
          disabled={isRequestNewCodeExpired}
        >
          {renderTextInsideButton(props.type)}
        </Button>
      </Form>
    </div>
  );
};

export default OtpForm;
