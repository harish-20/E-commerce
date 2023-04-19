import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Profile from '../../components/Profile/Profile'
import CardContainer from '../../components/CardContainer/CardContainer'
import ProductCard from '../../components/ProductCard/ProductCard'
import Button from '../../components/Button/Button'

import { currentUserActions } from '../../redux/slices/currentUser'

import classes from './User.module.css'
import { getUserById } from '../../API'

const User = () => {
  const currentUser = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const user = currentUser.user

    const getUser = async () => {
      const result = await getUserById(user._id)

      const updatedUser = { ...currentUser, user: result.data.user }
      dispatch(currentUserActions.setUser(updatedUser))
    }
    if (user) {
      getUser()
    }
  }, [])

  if (!currentUser.user) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={classes.user}>
      <Profile user={currentUser.user} />

      {currentUser.user.isSeller && (
        <div className={classes['products-container']}>
          <div className={classes['heading']}>
            <h2>Product onSale</h2>
            <Link to="/addProduct">
              <Button>Add Product</Button>
            </Link>
          </div>
          {currentUser.user.onSaleProducts.length === 0 && (
            <h3 className="centered">No Product is on sale. Add some</h3>
          )}
          <CardContainer>
            {currentUser.user.onSaleProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </CardContainer>
        </div>
      )}
      {currentUser.user.purchasedProduct.length !== 0 && (
        <div className={classes['products-container']}>
          <div className={classes['heading']}>
            <h2>Purchased Products</h2>

            <CardContainer>
              {currentUser.user.purchasedProduct.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </CardContainer>
          </div>
        </div>
      )}
    </div>
  )
}

export default User
