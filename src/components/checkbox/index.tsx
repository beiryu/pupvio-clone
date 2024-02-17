import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd';
import classNames from 'classnames';
import React from 'react';

import styles from './checkbox.module.scss';

const Checkbox = (props: AntCheckboxProps) => {
  return (
    <AntCheckbox
      {...props}
      className={classNames(styles.checkbox, styles.customCheckbox, props.className)}
    >
      {props.children}
    </AntCheckbox>
  );
};

export default Checkbox;
