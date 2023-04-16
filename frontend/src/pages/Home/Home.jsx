import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Category from '../../components/Category/Category'
import CategoryHeading from '../../components/CategoryHeading/CategoryHeading'
import CardContainer from '../../components/CardContainer/CardContainer'
import DealsCard from '../../components/DealsCard/DealsCard'
import BrandCard from '../../components/BrandCard/BrandCard'
import BottomBanner from '../../components/BottomBanner/BottomBanner'

import camcombo1 from '../../assets/camcombo1.png'
import camcombo2 from '../../assets/camcombo2.png'
import camcombo3 from '../../assets/camcombo3.png'
import camcombo4 from '../../assets/camcombo4.png'
import tvcombo1 from '../../assets/tvcombo1.png'
import tvcombo2 from '../../assets/tvcombo2.png'
import tvcombo3 from '../../assets/tvcombo3.png'
import tvcombo4 from '../../assets/tvcombo4.png'
import laptopcombo1 from '../../assets/laptopcombo1.png'
import laptopcombo2 from '../../assets/laptopcombo2.png'
import laptopcombo3 from '../../assets/laptopcombo3.png'
import laptopcombo4 from '../../assets/laptopcombo4.png'

import brand from '../../assets/brand.png'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

const comboOfferItems = [
  {
    id: 1,
    images: [camcombo1, camcombo2, camcombo3, camcombo4],
    description:
      'Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens',
    oldPrice: 22000,
    offerPrice: 20000,
    link: '/category/camera',
  },
  {
    id: 2,
    images: [tvcombo1, tvcombo2, tvcombo3, tvcombo4],
    description:
      'OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1',
    oldPrice: 40000,
    offerPrice: 35000,
    link: '/category/tv',
  },
  {
    id: 3,
    images: [laptopcombo1, laptopcombo2, laptopcombo3, laptopcombo4],
    description:
      'Lenovo Legion 5 11th Gen Intel Core i7 15.6"(39.62cm) FHD IPS Gaming Laptop',
    oldPrice: 50000,
    offerPrice: 48000,
    link: '/category/laptop',
  },
  {
    id: 4,
    images: [tvcombo1, tvcombo2, tvcombo3, tvcombo4],
    description:
      'OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1',
    oldPrice: 40000,
    offerPrice: 38000,
    link: '/category/tv',
  },
]

const Home = () => {
  const [displayProducts, setDisplayProducts] = useState({
    cameraList: [],
    tvList: [],
    laptopList: [],
  })

  const getProducts = async () => {
    const cameraList = await axios.get(
      'http://localhost:8080/product/category/camera',
    )
    const tvList = await axios.get('http://localhost:8080/product/category/tv')
    const laptopList = await axios.get(
      'http://localhost:8080/product/category/laptop',
    )

    const getFirstFourItems = (response) => {
      const products = response.data.products
      if (products.length <= 4) {
        return products
      } else {
        return products.slice(0, 4)
      }
    }

    setDisplayProducts({
      cameraList: getFirstFourItems(cameraList),
      tvList: getFirstFourItems(tvList),
      laptopList: getFirstFourItems(laptopList),
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const dummybrand = [brand, brand, brand, brand]

  const dummybrand2 = [camcombo1, camcombo2, camcombo3, camcombo4]

  return (
    <div>
      <Category />
      <CategoryHeading heading="Combo Offer" noViewAll />
      <CardContainer>
        {comboOfferItems.map((item) => (
          <DealsCard key={item.id} {...item} />
        ))}
      </CardContainer>

      <ProductsContainer
        heading="Camera"
        link="/category/camera"
        products={displayProducts.cameraList}
      />

      <ProductsContainer
        heading="TV"
        link="/category/tv"
        products={displayProducts.tvList}
      />

      <CategoryHeading heading="Shop By Brand" noViewAll />
      <CardContainer>
        <BrandCard category="Speaker" images={dummybrand} />
        <BrandCard category="Camera" images={dummybrand2} />
        <BrandCard category="Speaker" images={dummybrand} />
        <BrandCard category="Camera" images={dummybrand2} />
      </CardContainer>

      <ProductsContainer
        heading="Laptop"
        link="/category/laptop"
        products={displayProducts.laptopList}
      />
      <BottomBanner />
    </div>
  )
}

export default Home
