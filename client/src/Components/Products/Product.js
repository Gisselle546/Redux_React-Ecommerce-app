import React from 'react';
import styles from './Product.module.css'

const product = (props)=>(
<div className={styles.cards}>
    <h4>{props.game.title}</h4>
  <div className ={styles.card}>
      <img src={props.game.image} alt="game"/>

  </div>
      <p> Digital: <strong>${props.game.price}</strong></p>
      <button>Buy Now </button>
</div>


)

export default product;
