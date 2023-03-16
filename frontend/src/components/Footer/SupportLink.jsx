import React from 'react'

import classes from './SupportLink.module.css'
const SupportLink = (props) => {
  return (
    <div className={classes.link}>
      <h4>{props.topic}</h4>
      <ul>
        {props.links &&
          props.links.map((link) => (
            <li key={link.title}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
      </ul>
      {props.para && <p style={{ width: '200px' }}>{props.para}</p>}
    </div>
  )
}

export default SupportLink
