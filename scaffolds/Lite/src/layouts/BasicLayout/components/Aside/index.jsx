import React from 'react';
import { Link } from 'react-router-dom';
import { asideMenuConfig } from 'config/menu.js';
import styles from './index.module.css';

function NavLink(props) {
  const linkProps = {};
  if (props.newWindow) {
    linkProps.href = props.path;
    linkProps.target = '_blank';
  } else if (props.external) {
    linkProps.href = props.path;
  } else {
    linkProps.to = props.path;
  }

  return linkProps.to
    ? <Link {...linkProps}>{props.name}</Link>
    : <a {...linkProps}>{props.name}</a>;
}

export default function Aside() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
         { asideMenuConfig && asideMenuConfig.length > 0 ? (
           asideMenuConfig.map((item, idx) => {
             return (
              <li key={idx} className={styles.navItem}>
                <NavLink key={idx} {...item} />
              </li>
             );
           })
         ): null }
      </ul>
    </nav>
  );
}
