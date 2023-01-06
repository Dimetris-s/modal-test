import React, { FC, useId } from 'react';
import ReactSelect, { SingleValue } from 'react-select';
import cn from 'classnames';
import styles from './Select.module.scss';

export interface Option {
  label?: string;
  value: string;
}

interface SelectProps {
  value: string;
  name: string;
  onChange: ({ name, value }: { name: string, value: string }) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  options: Option[];
}

export const Select: FC<SelectProps> = (
  {
    className,
    name,
    label,
    value,
    placeholder,
    onChange,
    options = [],
  }) => {
  const htmlFor = useId();
  const getValueForSelect = () => {
    const option = options.find((option) => option.value === value);
    return option ? [option] : [];
  };
  const changeHandler = (option: SingleValue<Option>) => {
    if(!option) return;
    onChange({
      name,
      value: option?.value,
    });
  };
  return (
    <div className={cn(styles.root, className)}>
      {label &&
        <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      }
      <ReactSelect
        id={htmlFor}
        placeholder={placeholder}
        name={name}
        value={getValueForSelect()}
        onChange={changeHandler}
        options={options}
        closeMenuOnSelect
        hideSelectedOptions={false}
        isSearchable
        blurInputOnSelect
      />
    </div>
  );
};
