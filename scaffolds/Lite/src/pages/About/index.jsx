import React from 'react';
import logo from '../../../public/favicon.png';
import styles from './index.module.scss';

export default function About() {
  return (
    <div className={styles.app}>
      <div className={styles.appBody}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <a
          href="https://ice.work/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ICE
        </a>
      </div>
    </div>
  );
}
