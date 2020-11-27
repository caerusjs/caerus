import React from 'react';

import styles from './styles.module.css';
import { Input, Button } from '../../atoms';

export interface InputButton {
  inputProps: Input;
  buttonProps: Button;
}

export const InputButton: React.FC<InputButton> = ({
  inputProps,
  buttonProps,
}) => {
  return (
    <div className={styles.root}>
      <Input {...inputProps} />
      <Button {...buttonProps} />
    </div>
  );
};
