import 'react-phone-number-input/style.css';

import { InputProps, Select } from 'antd';
import { useState } from 'react';
import PhoneInput, {
  Country,
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input';

import styles from './input-phone-number.module.scss';
import { Icons } from '@/lib/icons/iconsSvg';

const InputPhoneNumber = (props: InputProps) => {
  const { ...rest } = props;
  const [countrySelected, setCountrySelected] = useState<Country>('US');
  const countries = getCountries().map((country) => {
    const code = getCountryCallingCode(country);
    return { country, code };
  });

  const options = countries.map((c: any) => {
    return {
      key: c.country,
      label: (
        <span key={c.country}>
          <span>+{c.code}</span>
          <span className="ant-select-selection-item-country">
            {' '}
            {c.country}
          </span>
        </span>
      ),
      code: c.code,
      value: c.country,
    };
  });

  return (
    <>
      <div className={styles.inputPhoneNumber}>
        <Select
          className={styles.selectCountry}
          popupClassName={styles.customPopup}
          showSearch
          filterOption={(input, option) => {
            return !!option?.code.includes(input);
          }}
          options={options}
          suffixIcon={<Icons.down />}
          onChange={setCountrySelected}
          defaultValue={countrySelected}
        />
        <PhoneInput
          value={rest.value as string}
          placeholder={rest.placeholder}
          maxLength={15}
          country={countrySelected}
          onChange={(value) => {
            rest.onChange && rest.onChange(value as any);
          }}
          className={styles.input}
        />
      </div>
    </>
  );
};

export default InputPhoneNumber;
