import React from 'react'

import classes from './ProductCard.module.css'
const ProductCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes['image-container']}>
        <img src={props.image} alt="product" />
      </div>
      <div className={classes.details}>
        <p>{props.name}</p>
        <h4>${props.price}</h4>
      </div>
    </div>
  )
}

export default ProductCard
