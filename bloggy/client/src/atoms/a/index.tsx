import React from 'react'

import styles from './a.module.css'

const A:React.FC = ({ children }) => {
  return (
    <a className={styles.root}>{children}</a>
  )
}

export default A