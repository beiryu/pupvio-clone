import { FormInstance } from 'antd';
import { RuleObject } from 'antd/lib/form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import validator from 'validator';

export const isValidEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !email || re.test(String(email).toLowerCase());
};
export const validatorPassword = (_: RuleObject, value: string) => {
  if (!value || value.trim() === '') {
    return Promise.reject(new Error('Please enter password'));
  }

  if (value.length < 8) {
    return Promise.reject(
      new Error('Password must have a minimum of 8 characters'),
    );
  }

  const isLeastOneUppercase = value.match('(?=.*[A-Z])');
  if (!isLeastOneUppercase) {
    return Promise.reject(
      new Error('Password must have a minimun of 1 capital letter'),
    );
  }

  const isLeastOneNumber = value.match('(?=.*[0-9])');
  if (!isLeastOneNumber) {
    return Promise.reject(
      new Error('Password must have a minimum of 1 numeric character'),
    );
  }

  const isAtLeastOneAlphabetic = value.match('(?=.*[A-Za-z])');
  if (!isAtLeastOneAlphabetic) {
    return Promise.reject(
      new Error('Password must have a minimum of 1 alphabetic character'),
    );
  }

  return Promise.resolve();
};
export const validatorConfirmPassword = (
  _: RuleObject,
  value: string,
  form: FormInstance,
  fieldPasswordName: string,
) => {
  if (form.getFieldValue(fieldPasswordName) === value) {
    return Promise.resolve();
  }
  if (!value || value.trim() === '') {
    return Promise.reject(new Error('Please enter confirm password'));
  }
  return Promise.reject(
    new Error('Both password does not match'),
  );
};

export const validatorPhone = async (_: RuleObject, value: string) => {
  if (!value || value.trim() === '') {
    return Promise.reject(new Error('Please enter phone number'));
  }
  if (isValidPhoneNumber(value)) {
    return Promise.resolve();
  }
  return Promise.reject('Please enter valid mobile phone number');
};
export const validatorEmail = async (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject('Please enter email');
  }
  if (validator.isEmail(value)) {
    return Promise.resolve();
  }
  return Promise.reject('Please enter valid email');
};

export const codeInputValidator = (rule: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject('Please enter code');
  }
  if (value.length === 6) {
    return Promise.resolve();
  } else {
    return Promise.reject('Please enter 6 digits');
  }
};
