import React from 'react';
import styles from './card.module.css';

const card = (props)=>(


<div className={styles.card}>
    <div className={styles.bi }style={{ background:`linear-gradient(to right bottom,#6a7574,#0000),url(${props.image})no-repeat center center / cover` }}></div>
    <h3 className={styles.title}>{props.title}</h3>
    <h6> ${props.price}</h6>
</div>


)

export default card;
