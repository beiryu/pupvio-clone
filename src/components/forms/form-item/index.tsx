import { Form, FormItemProps } from 'antd';
import classNames from 'classnames';

import styles from './form-item.module.scss';

const FormItem = (props: FormItemProps) => {
  return (
    <Form.Item
      {...props}
      className={classNames(props.className, styles.formItem, styles.customFormItem)}
    >
      {props.children}
    </Form.Item>
  );
};

export default FormItem;
