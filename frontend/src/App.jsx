import Layout from './components/Layout/Layout'
import CategoryHeading from './components/CategoryHeading/CategoryHeading'

import camcombo1 from './assets/camcombo1.png'
import camcombo2 from './assets/camcombo2.png'
import camcombo3 from './assets/camcombo3.png'
import camcombo4 from './assets/camcombo4.png'
import brand from './assets/brand.png'

import './App.css'

import DealsCard from './components/DealsCard/DealsCard'
import CardContainer from './components/CardContainer/CardContainer'
import ProductCard from './components/ProductCard/ProductCard'
import BrandCard from './components/BrandCard/BrandCard'
import BottomBanner from './components/BottomBanner/BottomBanner'

function App() {
  const dummy = {
    images: [camcombo1, camcombo2, camcombo3, camcombo4],
    description:
      'Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens',
    oldPrice: 85.3,
    offerPrice: 70,
  }

  const dummybrand = [brand, brand, brand, brand]

  const dummybrand2 = [camcombo1, camcombo2, camcombo3, camcombo4]

  return (
    <div>
      <Layout>
        <CategoryHeading heading="Combo Offer" link="/" />
        <CardContainer>
          <DealsCard {...dummy} />
          <DealsCard {...dummy} />
          <DealsCard {...dummy} />
          <DealsCard {...dummy} />
        </CardContainer>

        <CategoryHeading heading="Camera" link="/" />
        <CardContainer>
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
          <ProductCard
            image={dummy.images[0]}
            name={dummy.description}
            price={dummy.oldPrice}
          />
        </CardContainer>

        <CategoryHeading heading="Shop By Brand" link="/" />
        <CardContainer>
          <BrandCard category="Speaker" images={dummybrand} />
          <BrandCard category="Camera" images={dummybrand2} />
          <BrandCard category="Speaker" images={dummybrand} />
          <BrandCard category="Camera" images={dummybrand2} />
        </CardContainer>

        <BottomBanner />
      </Layout>
    </div>
  )
}

export default App
