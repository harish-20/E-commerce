import React from 'react'

import classes from './Icon.module.css'
const Icon = (props) => {
  return (
    <div className={classes.icon}>
      {props.badge !== undefined && (
        <span className={`${classes.badge} ${props.badgeClass || ''}`}>
          {props.badge}
        </span>
      )}
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Icon
