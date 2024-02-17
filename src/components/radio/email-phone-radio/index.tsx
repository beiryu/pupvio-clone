import { Radio } from 'antd';
import React from 'react';

import styles from './email-phone-radio.module.scss';

type RadioSelectEmailPhoneProps = {
  onChange: (value: 'EMAIL' | 'PHONE_NUMBER') => void;
};

const EmailPhoneRadio = ({ onChange }: RadioSelectEmailPhoneProps) => {
  return (
    <Radio.Group
      onChange={(e) => onChange(e.target.value)}
      defaultValue="EMAIL"
      className={styles.optionBasicLogin}
    >
      <Radio.Button className={styles.optionBasicLoginItem} value="EMAIL">
        Email
      </Radio.Button>
      <Radio.Button className={styles.optionBasicLoginItem} value="PHONE_NUMBER">
        Mobile Number
      </Radio.Button>
    </Radio.Group>
  );
};

export default EmailPhoneRadio;
