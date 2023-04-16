import React, { useState } from 'react'
import axios from 'axios'

import InputElement from '../../components/InputElement/InputElement'
import Button from '../../components/Button/Button'

import classes from './AddProduct.module.css'
import { useSelector } from 'react-redux'

const initialFormData = {
  name: '',
  description: '',
  image: '',
  category: '',
  price: '',
  discount: '',
  brand: '',
}

const AddProduct = () => {
  const currentUser = useSelector((state) => state.currentUser.user)
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleImage = (event) => {
    const file = event.target.files[0]

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      setFormData((prev) => ({ ...prev, image: fileReader.result }))
    }
    fileReader.onerror = () => {
      alert('File uplode error...')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formatedFormData = { ...formData, sellerId: currentUser._id }
    for (let key in formatedFormData) {
      if (formData[key] === '') {
        alert('Fill all the input in the form')
        return
      }
    }

    const result = await axios.post(
      'http://localhost:8080/product/addProduct',
      formatedFormData,
    )
    if (result.data.hasError) {
      alert('Something went wrong')
    } else {
      setFormData(initialFormData)
    }
  }
  return (
    <div className={classes['form-container']}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h1>Add Product</h1>

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

        {formData.image && (
          <img
            style={{ maxWidth: '100%' }}
            src={formData.image}
            alt="product"
          />
        )}

        <div className={classes.dropdown}>
          <label>Product Category:</label>
          <select
            defaultValue="--none--"
            name="category"
            onChange={handleChange}
          >
            <option defaultValue value="">
              --none--
            </option>
            <option value="laptop">Laptop</option>
            <option value="accessories">Accesories</option>
            <option value="camera">Camera</option>
            <option value="tv">TV</option>
            <option value="hometheatre">Home Theatre</option>
            <option value="headphone">Headphone</option>
            <option value="storage">Storage</option>
          </select>
        </div>

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
