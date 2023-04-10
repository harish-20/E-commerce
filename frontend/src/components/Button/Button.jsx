import React from 'react'

import classes from './Button.module.css'
const Button = (props) => {
  return (
    <button
      className={props.type === 'sec' ? classes.secondary : classes.btn}
      style={props.style}
      onClick={props.onClick}
      type={props.inputType}
    >
      {props.children}
    </button>
  )
}

export default Button
