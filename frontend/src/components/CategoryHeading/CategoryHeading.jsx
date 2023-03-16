import React from 'react'
import { Link } from 'react-router-dom'

import classes from './CategoryHeading.module.css'
const CategoryHeading = (props) => {
  return (
    <div className={classes.category}>
      <h2>{props.heading}</h2>
      {props.noViewAll !== true && (
        <Link className={classes.viewall} to={'/'}>
          View All
        </Link>
      )}
    </div>
  )
}

export default CategoryHeading
