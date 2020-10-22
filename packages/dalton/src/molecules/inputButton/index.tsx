import React from 'react';
import { lorem } from 'faker';

import styles from './styles.module.css';
import { Input, Button } from '../../atoms';

export interface InputButton extends React.HTMLAttributes<HTMLElement> {
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

// FIX: Component viewer needs to only lowercase first word
export const inputButtonProps = {
  inputProps: { placeholder: lorem.word() },
  buttonProps: { children: lorem.word() },
};
