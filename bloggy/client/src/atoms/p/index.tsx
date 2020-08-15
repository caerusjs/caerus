import React from 'react'

import styles from './p.module.css'

const P:React.FC = ({ children }) => {
  return (
    <p className={styles.root}>{children}</p>
  )
}

export default P