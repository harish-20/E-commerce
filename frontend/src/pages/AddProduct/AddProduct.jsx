import React, { useState } from 'react'

import InputElement from '../../components/InputElement/InputElement'

import classes from './AddProduct.module.css'
import Button from '../../components/Button/Button'
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    discount: '',
    brand: '',
  })

  const handleChange = (event) => {
    console.log(event.target)
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleImage = (event) => {
    console.log(event.target.files)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className={classes['form-container']}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2>Add Product</h2>
        <InputElement
          name="name"
          title="Name:"
          value={formData.name}
          onChange={handleChange}
        />
        <InputElement
          type="textarea"
          name="description"
          title="Description:"
          value={formData.description}
          onChange={handleChange}
        />
        <InputElement
          type="file"
          name="image"
          title="Product Image:"
          onChange={handleImage}
        />

        <InputElement
          name="price"
          title="Price:"
          value={formData.price}
          onChange={handleChange}
        />

        <InputElement
          name="discount"
          title="Discount:"
          value={formData.discount}
          onChange={handleChange}
        />

        <InputElement
          name="brand"
          title="Brand:"
          value={formData.brand}
          onChange={handleChange}
        />
        <Button style={{ width: '100%', margin: '2rem 0' }}>Submit</Button>
      </form>
    </div>
  )
}

export default AddProduct
