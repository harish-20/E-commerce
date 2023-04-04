import React, { useState } from 'react'

import Button from '../../components/Button/Button'

import classes from './Auth.module.css'
const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    isSeller: null,
    password: '',
  })

  const currentState = isSignUp ? 'Sign Up' : 'Log In'

  const changeHandler = (event) => {
    if (event.target.name === 'isSeller') {
      setFormData((prev) => ({
        ...prev,
        isSeller: event.target.value === 'yes',
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }))
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.table(formData)
  }
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>{currentState} Form</h1>

        {isSignUp && (
          <input
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Enter your name"
          />
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
        />

        {isSignUp && (
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={changeHandler}
            placeholder="Enter your phone number"
          />
        )}

        {isSignUp && (
          <div className={classes.isseller}>
            <h4>Are you a seller?</h4>
            <input
              type="radio"
              name="isSeller"
              onChange={changeHandler}
              id="yes"
              value="yes"
            />
            <label htmlFor="yes">yes</label>
            <input
              type="radio"
              name="isSeller"
              onChange={changeHandler}
              id="no"
              value="no"
            />
            <label htmlFor="no">no</label>
          </div>
        )}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder={`Enter your ${isSignUp ? 'new' : ''} password`}
        />

        <Button style={{ width: '100%' }}>{currentState}</Button>
        <p>OR</p>
        <Button type="sec" onClick={() => setisSignUp((prev) => !prev)}>
          {isSignUp ? 'Log In ' : 'Sign up'}
        </Button>
      </form>
    </div>
  )
}

export default Auth
