import React from 'react'

import classes from './InputElement.module.css'
const InputElement = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.name}>{props.title}</label>
      {props.type === 'textarea' ? (
        <textarea
          cols="10"
          rows="6"
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <input
          type={props.type || 'text'}
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          {...props.others}
        />
      )}
    </div>
  )
}

export default InputElement
