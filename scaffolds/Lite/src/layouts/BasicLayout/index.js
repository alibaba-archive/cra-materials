import React, { useState } from 'react';
import styles from './index.module.scss';

import Header from './components/Header';
import SideNav from './components/SideNav';

export default function BasicLayout ({ children }) {
  const [displaySideNav, toggleSideNav] = useState(false);

  const handleToggleClick = () => toggleSideNav(!displaySideNav);

  return (
    <div className={styles.container}>
      <div>
        <Header handleToggleClick={handleToggleClick}/>
      </div>
      <div>
        { displaySideNav && <SideNav /> }
        <div>
          { children }
        </div>
      </div>
    </div>
  );
}
