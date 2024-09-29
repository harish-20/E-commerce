import React, { useEffect, useState } from "react";

import CardContainer from "../../components/CardContainer/CardContainer";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import CategoryLinks from "../../components/CategoryLinks/CategoryLinks";
import DealsCard from "../../components/DealsCard/DealsCard";
import BrandCard from "../../components/BrandCard/BrandCard";
import CategoryHeading from "../../components/CategoryHeading/CategoryHeading";
import BottomBanner from "../../components/BottomBanner/BottomBanner";

import camcombo1 from "../../assets/camcombo1.png";
import camcombo2 from "../../assets/camcombo2.png";
import camcombo3 from "../../assets/camcombo3.png";
import camcombo4 from "../../assets/camcombo4.png";
import tvcombo1 from "../../assets/tvcombo1.png";
import tvcombo2 from "../../assets/tvcombo2.png";
import tvcombo3 from "../../assets/tvcombo3.png";
import tvcombo4 from "../../assets/tvcombo4.png";
import laptopcombo1 from "../../assets/laptopcombo1.png";
import laptopcombo2 from "../../assets/laptopcombo2.png";
import laptopcombo3 from "../../assets/laptopcombo3.png";
import laptopcombo4 from "../../assets/laptopcombo4.png";

import speakerbrand1 from "../../assets/speakerbrand1.png";
import speakerbrand2 from "../../assets/speakerbrand2.png";
import speakerbrand3 from "../../assets/speakerbrand3.png";
import speakerbrand4 from "../../assets/speakerbrand4.png";
import storagebrand1 from "../../assets/storagebrand1.png";
import storagebrand2 from "../../assets/storagebrand2.png";
import storagebrand3 from "../../assets/storagebrand3.png";
import storagebrand4 from "../../assets/storagebrand4.png";
import laptopbrand1 from "../../assets/laptopbrand1.png";
import laptopbrand2 from "../../assets/laptopbrand2.png";
import laptopbrand3 from "../../assets/laptopbrand3.png";
import laptopbrand4 from "../../assets/laptopbrand4.png";
import tvbrand1 from "../../assets/tvbrand1.png";
import tvbrand2 from "../../assets/tvbrand2.png";
import tvbrand3 from "../../assets/tvbrand3.png";
import tvbrand4 from "../../assets/tvbrand4.png";

import { getProductsByCategory } from "../../API";

const comboOfferItems = [
  {
    id: 1,
    images: [camcombo1, camcombo2, camcombo3, camcombo4],
    description:
      "Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens",
    oldPrice: 22000,
    offerPrice: 20000,
    link: "/category/camera",
  },
  {
    id: 2,
    images: [tvcombo1, tvcombo2, tvcombo3, tvcombo4],
    description:
      "OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1",
    oldPrice: 40000,
    offerPrice: 35000,
    link: "/category/tv",
  },
  {
    id: 3,
    images: [laptopcombo1, laptopcombo2, laptopcombo3, laptopcombo4],
    description:
      'Lenovo Legion 5 11th Gen Intel Core i7 15.6"(39.62cm) FHD IPS Gaming Laptop',
    oldPrice: 50000,
    offerPrice: 48000,
    link: "/category/laptop",
  },
  {
    id: 4,
    images: [tvcombo1, tvcombo2, tvcombo3, tvcombo4],
    description:
      "OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1",
    oldPrice: 40000,
    offerPrice: 38000,
    link: "/category/tv",
  },
];

const brand1 = [speakerbrand1, speakerbrand2, speakerbrand3, speakerbrand4];

const brand2 = [storagebrand1, storagebrand2, storagebrand3, storagebrand4];

const brand3 = [laptopbrand1, laptopbrand2, laptopbrand3, laptopbrand4];

const brand4 = [tvbrand1, tvbrand2, tvbrand3, tvbrand4];

const Home = () => {
  const [displayProducts, setDisplayProducts] = useState({
    cameraList: [],
    tvList: [],
    laptopList: [],
  });

  const getProducts = async () => {
    const getFirstFourItems = (response) => {
      const products = response.data.products;
      if (products.length <= 4) {
        return products;
      } else {
        return products.slice(0, 4);
      }
    };

    getProductsByCategory("camera").then((cameraList) =>
      setDisplayProducts((prev) => ({
        ...prev,
        cameraList: getFirstFourItems(cameraList),
      }))
    );

    getProductsByCategory("tv").then((tvList) =>
      setDisplayProducts((prev) => ({
        ...prev,
        tvList: getFirstFourItems(tvList),
      }))
    );
    getProductsByCategory("laptop").then((laptopList) =>
      setDisplayProducts((prev) => ({
        ...prev,
        laptopList: getFirstFourItems(laptopList),
      }))
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <CategoryLinks />
      <CategoryHeading heading="Combo Offer" noViewAll />
      <CardContainer>
        {comboOfferItems.map((item) => (
          <DealsCard key={item.id} {...item} />
        ))}
      </CardContainer>

      <ProductsContainer
        loading
        heading="Camera"
        link="/category/camera"
        products={displayProducts.cameraList}
      />

      <ProductsContainer
        loading
        heading="TV"
        link="/category/tv"
        products={displayProducts.tvList}
      />

      <CategoryHeading heading="Shop By Brand" noViewAll />
      <CardContainer>
        <BrandCard category="Speaker" images={brand1} />
        <BrandCard category="Camera" images={brand2} />
        <BrandCard category="Speaker" images={brand3} />
        <BrandCard category="Camera" images={brand4} />
      </CardContainer>

      <ProductsContainer
        loading
        heading="Laptop"
        link="/category/laptop"
        products={displayProducts.laptopList}
      />
      <BottomBanner />
    </div>
  );
};

export default Home;
