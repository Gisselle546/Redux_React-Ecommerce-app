import React from 'react';
import styles from './CartItems.module.css';



const cartItem =(props)=>(
<div className={styles.cartitem}>
  <div className={styles.item}>
    <img src={props.cart.items.image}/>
  </div>
        <div className={styles.itemdetails}>
          <p className={styles.shoppingcarttitle}>{props.cart.items.title}</p>
          <p>Price: ${props.cart.items.price}</p>
          <button onClick={props.clicked}>Delete From Cart</button>
  </div>
</div>


);
export default cartItem;
