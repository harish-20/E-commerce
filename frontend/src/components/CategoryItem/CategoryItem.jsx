import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './CategoryItem.module.css'
const CategoryItem = (props) => {
  return (
    <NavLink
      to={'/category/' + props.link}
      className={({ isActive }) =>
        isActive ? classes.active : classes.category
      }
      onClick={() => props.onClose(false)}
    >
      <h3>{props.category}</h3>
      <img src={props.image} alt={props.category} />
    </NavLink>
  )
}

export default CategoryItem
