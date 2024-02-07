import React from 'react'
import styles from '../page.module.css'
import Menu from '../components/Menu'
export default function () {
  return (
    <div>
      <h2  className={styles.myText}>this is about page</h2>
            <img src="/images/a6.webp" alt="image"/>
    <Menu/>
    </div>
  )
}
