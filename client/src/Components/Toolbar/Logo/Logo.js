import React from 'react';

import styles from './Logo.module.css'
import logo from '../../../assets/images/Icon.svg.png'

const Logo = (props)=>(
  <div className ={styles.Logo}>
      <img src={logo} alt="logo"/>
  </div>

)
export default Logo;
