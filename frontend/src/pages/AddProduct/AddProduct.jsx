import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import InputElement from '../../components/InputElement/InputElement'
import Button from '../../components/Button/Button'

import { addProduct } from '../../API'

import classes from './AddProduct.module.css'

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
      toast.error('File uplode error...')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!currentUser) {
      toast.error('Login as seller to add product.')
      return
    }

    const formatedFormData = { ...formData, sellerId: currentUser._id }
    for (let key in formatedFormData) {
      if (formData[key] === '') {
        toast.info('Fill all the input in the form')
        return
      }
    }
    try {
      const result = await addProduct(formatedFormData)
      if (result.data.hasError) {
        toast.error('Something went wrong')
      } else {
        toast.success('Product added successfully.')
        setFormData(initialFormData)
      }
    } catch (err) {
      toast.error(err.message || 'File Upload Failed.')
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
            <option value="accessories">Accessories</option>
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
