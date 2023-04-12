import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import classes from './PDP.module.css'
import Button from '../../components/Button/Button'
import { cartActions } from '../../redux/slices/cart'
const PDP = () => {
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const { productId } = useParams()

  const dispatch = useDispatch()

  const getProduct = async () => {
    console.log(productId)
    const result = await axios.get(`http://localhost:8080/product/${productId}`)
    if (!result.data.hasError) {
      setProduct(result.data.product)
      console.log(product)
    } else {
      alert('something went wrong')
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  const addToCart = () => {
    dispatch(cartActions.addItem({ ...product, quantity: quantity }))
  }

  if (!product) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={classes.pdp}>
      <div className={classes['pdp__title']}>
        <div>
          <h1>
            {product.name}({product.brand})
          </h1>
          <div className={classes['pdp__price']}>
            <h2>&#8377;{product.price}</h2>
          </div>
        </div>
        <div className={classes['pdp__cart']}>
          <div className={classes['pdp__cart-actions']}>
            <Button
              type="sec"
              onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
            >
              -
            </Button>
            <div className={classes['pdp__cart-total']}>{quantity}</div>
            <Button type="sec" onClick={() => setQuantity((prev) => prev + 1)}>
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
