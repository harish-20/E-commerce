import React from 'react'

import classes from './BrandCard.module.css'
const BrandCard = (props) => {
  const imageList =
    props.images.length <= 4 ? props.images : props.images.slice(0, 4)

  return (
    <div className={classes.card}>
      <h3>{props.category}</h3>

      <div className={classes['image-container']}>
        {imageList.map((image, index) => (
          <div key={index} className={classes['brand-image']}>
            <img src={image} alt="Brand" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandCard
