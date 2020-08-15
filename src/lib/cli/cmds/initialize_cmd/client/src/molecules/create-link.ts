export const createLink = () => {
  return (`import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styles from './link.module.css'

const Link: React.FC<> = (props, { children }) => {
  return (
    <RouterLink className={styles.root} { ...props } >
      { children }
    </RouterLink>
  )
}

export default Link
`)
}
