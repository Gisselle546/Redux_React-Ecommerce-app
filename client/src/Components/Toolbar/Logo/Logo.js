import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './Logo.module.css'
import logo from '../../../assets/images/Logo.jpg'



const Logo = (props)=>(



  <div className ={styles.Logo}>
      <img src={logo} onClick={()=>props.history.push('/')}alt="logo"/>
  </div>
)

export default withRouter(Logo);
