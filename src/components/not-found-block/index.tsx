import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🙁</span>
        <br />
        Nothing Found
      </h1>
      <p className={styles.description}>
        Unfortunatly but this page is missing in our shop
      </p>
    </div>
  )
}

export default NotFoundBlock
