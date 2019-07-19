import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { headerMenuConfig } from 'config/menu.js';

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
      <nav>
        <ul className={styles.navItems}>
          { headerMenuConfig && headerMenuConfig.length > 0 ? (
              headerMenuConfig.map((item, idx) => {
                return (
                  <li key={idx} className={styles.navItem}>
                    <NavLink key={idx} {...item} />
                  </li>
                );
              })
            ) : null }
        </ul>
      </nav>
    </header>
  );
}
