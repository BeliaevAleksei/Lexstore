import classNames from 'classnames'
import React from 'react'
import styles from './Footer.module.scss'

interface IProps {
  className: string
}

const Footer = ({ className }: IProps) => {
  return (
    <footer className={classNames(styles.root, className || '')}>All rights reserved &copy;</footer>
  )
}

export default Footer
