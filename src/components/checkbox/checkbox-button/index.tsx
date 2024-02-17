import { CheckboxProps } from 'antd';
import classNames from 'classnames';
import React from 'react';

import Checkbox from '..';
import styles from './checkbox-button.module.scss';

const CheckboxButton = (props: CheckboxProps) => {
  return (
    <Checkbox {...props} className={classNames(styles.checkboxButton, styles.customCheckboxButton)}>
      {props.children}
    </Checkbox>
  );
};

export default CheckboxButton;
