import React, { useState } from 'react';
import styles from './index.module.scss';

import Header from './components/Header';
import Aside from './components/Aside';

export default function BasicLayout ({ children }) {
  const [displayAside, toggleAside] = useState(false);

  const handleToggleClick = () => toggleAside(!displayAside);

  return (
    <div className={styles.container}>
      <div>
        <Header handleToggleClick={handleToggleClick}/>
      </div>
      <div>
        { displayAside && <Aside /> }
        <div>
          { children }
        </div>
      </div>
    </div>
  );
}
