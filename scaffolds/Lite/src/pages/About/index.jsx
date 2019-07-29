import React from 'react';
import logo from './ice.png';
import styles from './index.module.css';

export default function About() {
  return (
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
  );
}
