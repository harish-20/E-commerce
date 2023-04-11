import React from 'react'

import classes from './DealsCard.module.css'

// Images
// description
// offerprice
// oldprice

function DealsCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes['image-container']}>
        <img src={props.images[0]} alt="product" />
      </div>
      <p>{props.description}</p>
      <div className={classes.price}>
        <h4>&#8377;{props.offerPrice}</h4>
        <h4>&#8377;{props.oldPrice}</h4>
      </div>
      <div className={classes['other-images']}>
        {props.images.slice(1, 4).map((image, index) => (
          <div key={index} className={classes['other-image-container']}>
            <img src={image} alt="other" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DealsCard
