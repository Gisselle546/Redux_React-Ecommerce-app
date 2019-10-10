import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './NavigationItems.module.css'

const navigationItems = () => (
    <ul className={styles.navitems}>
        <li className={styles.navitem}> <NavLink to="/games" exact>Games</NavLink></li>
        <li className={styles.navitem}> <NavLink to="/orders">Orders</NavLink></li>
    </ul>
);

export default navigationItems;
