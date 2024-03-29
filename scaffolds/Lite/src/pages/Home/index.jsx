import React from 'react';
import logo from './logo.svg';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.appBody}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
