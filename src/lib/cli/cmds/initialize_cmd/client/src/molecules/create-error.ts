export const createError = () => {
  return (`import React from 'react'

import P from 'atoms/p'

import styles from './error.module.css'

const Error: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className={styles.root}>
      <P>{ message ?? 'There has been a problem trying to load the related resource.  Please try again later.' }</P>
    </div>
  )
}

export default Error
`)
}
