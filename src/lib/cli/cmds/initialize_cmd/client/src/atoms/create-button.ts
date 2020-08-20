export const createButton = () => {
  return (`import React from 'react'

import styles from './button.module.css'

const Button:React.FC = ({ children }) => {
  return (
    <button className={styles.root}>{children}</button>
  )
}

export default Button`)
}