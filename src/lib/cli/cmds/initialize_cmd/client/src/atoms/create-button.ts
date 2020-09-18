export const createButton = () => {
  return `import React from 'react';

import styles from './button.module.css';

const Button:React.FC<{ onClick: () => void }> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.root}>{children}</button>
  );
};

export default Button;`;
};
