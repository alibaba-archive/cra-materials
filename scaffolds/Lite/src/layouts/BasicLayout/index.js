import React, { useState } from 'react';
import './index.css';

import Header from './components/Header';
import Aside from './components/Aside';

export default function BasicLayout ({ children }) {
  const [displayAside, toggleAside] = useState(false);

  const handleToggleClick = () => toggleAside(!displayAside);

  return (
    <div className="container">
      <Header handleToggleClick={handleToggleClick}/>
      <div className="main">
        { displayAside && <Aside /> }
        { children }
      </div>
    </div>
  );
}
