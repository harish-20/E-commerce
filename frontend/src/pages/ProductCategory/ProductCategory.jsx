import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Category from '../../components/Category/Category'
import ProductCard from '../../components/ProductCard/ProductCard'
import CardContainer from '../../components/CardContainer/CardContainer'

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
  const [products, setProducts] = useState([])
  const { category } = useParams()

  const getProducts = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/product/category/${category}`,
    )

    if (data.hasError) {
      alert('No products found.')
    } else {
      setProducts(data.products)
    }
  }
  useEffect(() => {
    getProducts()
  }, [category])

  const categoryTitle = categories.find((element) => element.link === category)
  return (
    <div>
      <Category />
      <h1 style={{ padding: '1rem' }}>{categoryTitle.category}</h1>
      <CardContainer>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </CardContainer>
    </div>
  )
}

export default ProductCategory
