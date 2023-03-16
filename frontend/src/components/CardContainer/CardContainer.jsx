import React from 'react'

import classes from './CardContainer.module.css'
const CardContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>
}

export default CardContainer
