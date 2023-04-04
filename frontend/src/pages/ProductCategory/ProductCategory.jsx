import React from 'react'
import { useParams } from 'react-router-dom'
import Category from '../../components/Category/Category'

const categories = [
  {
    category: 'Laptop',
    link: 'laptop',
  },
  {
    category: 'Accesories',
    link: 'accesories',
  },
  {
    category: 'Camera',
    link: 'camera',
  },
  {
    category: 'TV',
    link: 'tv',
  },
  {
    category: 'Home Theatre',
    link: 'hometheatre',
  },
  {
    category: 'Headphone',
    link: 'headphone',
  },
  {
    category: 'Storage',
    link: 'storage',
  },
]
const ProductCategory = () => {
  const { category } = useParams()

  const categoryTitle = categories.find((element) => element.link === category)
  return (
    <div>
      <Category />
      <h1 style={{ padding: '1rem' }}>{categoryTitle.category}</h1>
    </div>
  )
}

export default ProductCategory
