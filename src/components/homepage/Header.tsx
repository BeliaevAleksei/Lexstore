import React from 'react'
import classNames from 'classnames'
import styles from './Header.module.scss'

interface IProps {
  className: string
}

const Header = ({ className }: IProps) => {
  return (
    <header className={classNames(styles.root, className || '')}>
      <div className={styles.panel}>
        <span className={styles.panel__logo}>Great pc games</span>
        <ul className={styles.panel__menu}>
          <li className={styles.panel__menu__item}>About as</li>
          <li className={styles.panel__menu__item}>Contacts</li>
          <li className={styles.panel__menu__item}>Profile</li>
        </ul>
      </div>
      <div className={styles.presentation}></div>
    </header>
  )
}

export default Header
