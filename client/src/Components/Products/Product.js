import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Product.module.css'

const product = (props)=>(



<div className={styles.cards}>

    <div className ={styles.card}>
        <img src={props.game.image} alt="game"/>

    </div>

    <Link to={`/games/${props.game._id}`}><p>{props.game.title}</p></Link>
      <p> Digital: <strong>${props.game.price}</strong></p>

</div>


)

export default product;
