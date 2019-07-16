import React from 'react';
import styles from './index.module.scss';

export default function Header(props) {
  const { handleToggleClick } = props;

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => handleToggleClick()}>
        <span className={styles.toggleButtonBar}/>
        <span className={styles.toggleButtonBar}/>
        <span className={styles.toggleButtonBar}/>
      </button>
    </header>
  );
}
