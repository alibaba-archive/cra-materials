import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { sideNavConfig } from '@/config/menu.js';

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

  return <Link {...linkProps}>{props.name}</Link>;
}

export default function SideNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
         { sideNavConfig && sideNavConfig.length > 0 ? (
           sideNavConfig.map((item, idx) => {
             return (
              <li key={idx} className={styles.navItem}>
                <NavLink key={idx} {...item} />
              </li>
             );
           })
         ): null}
      </ul>
    </nav>
  );
}