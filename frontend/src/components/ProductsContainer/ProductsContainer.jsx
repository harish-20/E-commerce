import React from 'react'

import CategoryHeading from '../CategoryHeading/CategoryHeading'
import CardContainer from '../CardContainer/CardContainer'
import ProductCard from '../ProductCard/ProductCard'

const ProductsContainer = (props) => {
  return (
    <>
      <CategoryHeading heading={props.heading} link={props.link} />
      {props.products.length === 0 && props.loading && (
        <h2 className="centered">Loading...</h2>
      )}
      <CardContainer>
        {props.products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </CardContainer>
    </>
  )
}

export default ProductsContainer
