import React, { ChangeEventHandler, FC, HTMLInputTypeAttribute, useId } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  name:  string;
  onChange: ({name, value}:{name:string, value:string}) => void;
  type?: HTMLInputTypeAttribute,
  label?: string;
  placeholder?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({className, label, onChange, name, ...rest}) => {
  const htmlFor = useId();
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange({name, value: e.target.value})
  }
  return (
    <div className={cn(styles.root, className)}>
      {label &&
        <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      }
      <input onChange={changeHandler} id={htmlFor} className={styles.input} {...rest} />
    </div>
  );
};
