import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ProductCard.module.css'
const ProductCard = (props) => {
  return (
    <div className={classes.card}>
      <Link to={`/product/${props._id}`}>
        <div className={classes['image-container']}>
          <img src={props.image} alt="product" />
        </div>
        <div className={classes.details}>
          <p>{props.name}</p>
          <h4>&#8377;{props.price}</h4>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
