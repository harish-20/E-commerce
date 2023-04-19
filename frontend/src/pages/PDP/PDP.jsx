import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '../../components/Button/Button'

import { cartActions } from '../../redux/slices/cart'
import { getProductsById } from '../../API'

import classes from './PDP.module.css'
const PDP = () => {
  const currentUser = useSelector((state) => state.currentUser)

  const { productId } = useParams()

  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity === 1) {
      toast.info('You must have at least one product quantity to add cart')
      return
    }
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
  }

  const increaseQuantity = () => {
    if (quantity >= 10) {
      toast.info('Maximum quantity of product reached.')
      return
    }
    setQuantity((prev) => prev + 1)
  }

  const getProduct = async () => {
    const result = await getProductsById(productId)

    if (!result.data.hasError) {
      setProduct(result.data.product)
    } else {
      toast.error('something went wrong')
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  const addToCart = () => {
    if (!currentUser.user) {
      toast.info('Login to add this product to your cart.')
      return
    }
    dispatch(cartActions.addItem({ ...product, quantity: quantity }))
  }

  if (!product) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={classes.pdp}>
      <div className={classes['pdp__title']}>
        <div className={classes['pdp__title-price']}>
          <h1>
            {product.name}({product.brand})
          </h1>
          <div className={classes['pdp__price']}>
            <h2>&#8377;{product.price}</h2>
          </div>
        </div>

        <div className={classes['pdp__cart']}>
          <div className={classes['pdp__cart-actions']}>
            <Button type="sec" onClick={decreaseQuantity}>
              -
            </Button>
            <div className={classes['pdp__cart-total']}>{quantity}</div>
            <Button type="sec" onClick={increaseQuantity}>
              +
            </Button>
          </div>

          <div className={classes['pdp__addcart']}>
            <Button style={{ width: '100%' }} onClick={addToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      <div className={classes['pdp__image']}>
        <img src={product.image} alt="product" />
      </div>

      <div className={classes['pdp__description']}>
        <h3>Description:</h3>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default PDP
