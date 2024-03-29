import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'

import { currentUserActions } from '../../redux/slices/currentUser'

import { userSignin, userSignup } from '../../API'

import classes from './Auth.module.css'
const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const submitHandler = async (event) => {
    event.preventDefault()

    const { name, email, phoneNumber, isSeller, password } = formData

    if (isSignUp) {
      if (
        name !== '' &&
        email !== '' &&
        phoneNumber !== '' &&
        isSeller !== null &&
        password !== ''
      ) {
        const result = await userSignup(formData)
        if (result.data.hasError) {
          toast.error('Signup failed')
        } else {
          toast.success('Signup successfull.Now you can login.')
          navigate('/')
        }
      } else {
        toast.info('Input fields should not be empty')
      }
    } else {
      if (email !== '' && password !== '') {
        try {
          const result = await userSignin({ email, password })

          if (result.data.hasError) {
            toast.error(result.data.message || 'Login in unsuccessfull')
          } else {
            const { user, token } = result.data
            dispatch(currentUserActions.setUser({ user, token }))
            toast.success('Login successfull.')
            navigate('/')
          }
        } catch (err) {
          toast.error('Invalid email and password.')
        }
      } else {
        toast.info('Input fields should not be empty')
      }
    }
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

        <div className={classes['actions-container']}>
          <Button style={{ width: '100%' }} inputType="submit">
            {currentState}
          </Button>
          <p>OR</p>
          <Button
            style={{ width: '100%' }}
            type="sec"
            onClick={() => setisSignUp((prev) => !prev)}
            inputType="button"
          >
            {isSignUp ? 'Log In ' : 'Sign up'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Auth
