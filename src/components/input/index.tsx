import { Input as AntInput, InputProps } from 'antd';

import styles from './input.module.scss';

const Input = (props: InputProps) => {
  return (
    <AntInput
      {...props}
      className={`${props.className} ${styles.customInput} ${styles.input}`}
    ></AntInput>
  );
};

export default Input;
