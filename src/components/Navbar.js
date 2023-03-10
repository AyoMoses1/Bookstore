/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"


const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navlogo}>
         Bookstore CMS
        </div>
        <ul className={styles.navlinks}>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <li>
                <NavLink to={link.path} className={styles.link}>{link.text}</NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
