import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';
import { Input, Button } from '../../atoms';

export interface InputButton {
  inputProps: Input;
  buttonProps: Button;
}

export const InputButton = ({ inputProps, buttonProps }: InputButton) => {
  return (
    <div className={styles.root}>
      <Input {...inputProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export const inputButtonProps = {
  inputProps: { placeholder: lorem.word() },
  buttonProps: { children: lorem.word() },
};
