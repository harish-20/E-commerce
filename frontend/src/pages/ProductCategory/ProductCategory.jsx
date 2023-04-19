import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CategoryLinks from '../../components/CategoryLinks/CategoryLinks'
import ProductCard from '../../components/ProductCard/ProductCard'
import CardContainer from '../../components/CardContainer/CardContainer'

import { getProductsByCategory } from '../../API'

import classes from './ProductCategory.module.css'

const categories = [
  {
    category: 'Laptop',
    link: 'laptop',
  },
  {
    category: 'Accessories',
    link: 'accessories',
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
    const { data } = await getProductsByCategory(category)

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
    <div className={classes['product-category']}>
      <CategoryLinks />

      <h1 style={{ padding: '1rem' }}>{categoryTitle.category}</h1>

      {products.length === 0 && (
        <h2 className="centered">
          Currently no products available in this category.
        </h2>
      )}

      <CardContainer>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </CardContainer>
    </div>
  )
}

export default ProductCategory
