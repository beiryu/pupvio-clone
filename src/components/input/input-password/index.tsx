import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { PasswordProps } from 'antd/lib/input';

import styles from './input-password.module.scss';

const InputPassword = (props: PasswordProps) => {
  return (
    <Input.Password
      {...props}
      placeholder={props.placeholder}
      iconRender={(visible: boolean) =>
        visible ? <EyeTwoTone rev={undefined} /> : <EyeInvisibleOutlined rev={undefined} />
      }
      className={`${props.className} ${styles.customInput} ${styles.inputPassword}`}
    />
  );
};

export default InputPassword;
