import React, { useState } from 'react';
import { Input } from 'antd';

export interface InputOTPProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<any[]>>;
}

const InputOTP = (props: InputOTPProps) => {
  const { otp, setOtp } = props;

  const handleChange = (value: any, index: number) => {
    if (isNaN(value)) {
      return;
    } else {
      setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);
      if (value !== '' && index !== otp.length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleOnEscapeKeyUp = (
    element: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (element.key === 'Backspace' && index !== 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="flex flex-row justify-between gap-2">
      {otp.map((data, index) => {
        return (
          <Input
            key={index}
            id={`otp-${index}`}
            value={data}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, index)
            }
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleOnEscapeKeyUp(e, index)
            }
            maxLength={1}
            type={'password'}
            className="bg-[#292929] text-white text-2xl font-semibold border-none text-center h-[78px] w-[60px] rounded-[10px]"
          />
        );
      })}
    </div>
  );
};

export default InputOTP;
