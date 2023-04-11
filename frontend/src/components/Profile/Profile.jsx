import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '../Button/Button'

import { currentUserActions } from '../../redux/slices/currentUser'

import profile from '../../assets/profile.svg'

import classes from './Profile.module.css'
const Profile = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(currentUserActions.resetUser())
    navigate('/')
  }

  if (!props.user) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={classes['user-info']}>
      <div className={classes['img-container']}>
        <img src={profile} alt="profile" />
      </div>
      {props.user.isSeller && (
        <div>
          <p>(Seller)</p>
        </div>
      )}
      <div>
        <h3>Name</h3>
        <p>{props.user.name}</p>
      </div>
      <div>
        <h3>Email</h3>
        <p>{props.user.email}</p>
      </div>
      <div>
        <h3>Phone Number</h3>
        <p>{props.user.phoneNumber}</p>
      </div>
      <div>
        <Button onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  )
}

export default Profile
