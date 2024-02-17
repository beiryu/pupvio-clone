import { FormItemProps } from 'antd';
import React from 'react';

import FormItem from '@/components/forms/form-item';
import Input from '@/components/input';
import { Icons } from '@/lib/icons/iconsSvg';

const FormItemReferralCode = (props: FormItemProps) => {
  return (
    <FormItem {...props} name="referralCode">
      <Input
        placeholder="Code"
        prefix={<Icons.friends />}
      />
    </FormItem>
  );
};

export default FormItemReferralCode;
