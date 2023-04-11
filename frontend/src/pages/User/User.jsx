import React from 'react'
import { useSelector } from 'react-redux'

import classes from './User.module.css'
import Profile from '../../components/Profile/Profile'
const User = () => {
  const currentUser = useSelector((state) => state.currentUser)

  return (
    <div className={classes.user}>
      <Profile user={currentUser.user} />

      <div className={classes['product-onsale']}></div>
    </div>
  )
}

export default User
