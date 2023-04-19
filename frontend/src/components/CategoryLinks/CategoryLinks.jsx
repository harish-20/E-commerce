import React, { useState } from 'react'

import CategoryLink from '../CategoryLink/CategoryLink'

import laptop from '../../assets/laptop.png'
import accesories from '../../assets/accesories.png'
import camera from '../../assets/camera.png'
import tv from '../../assets/TV.png'
import storage from '../../assets/storage.png'
import headphone from '../../assets/headphones.png'
import hometheatre from '../../assets/hometheatre.png'

import classes from './CategoryLinks.module.css'

const categories = [
  {
    category: 'Laptop',
    image: laptop,
    link: 'laptop',
  },
  {
    category: 'Accesories',
    image: accesories,
    link: 'accessories',
  },
  {
    category: 'Camera',
    image: camera,
    link: 'camera',
  },
  {
    category: 'TV',
    image: tv,
    link: 'tv',
  },
  {
    category: 'Home Theatre',
    image: hometheatre,
    link: 'hometheatre',
  },
  {
    category: 'Headphone',
    image: headphone,
    link: 'headphone',
  },
  {
    category: 'Storage',
    image: storage,
    link: 'storage',
  },
]

const CategoryLinks = () => {
  const [isOpen, setIsOpen] = useState(false)

  const categoryLinks = categories.map((category) => (
    <CategoryLink
      onClose={setIsOpen}
      key={category.category}
      category={category.category}
      link={category.link}
      image={category.image}
    />
  ))

  return (
    <>
      <div className={classes.category}>{categoryLinks}</div>
      <div className={classes['sm-category']}>
        <div className={classes.actions}>
          <div
            onClick={() => setIsOpen(true)}
            className={classes['ham-burger']}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          className={classes['sm-category__items']}
          style={{ transform: `translateX(${isOpen ? '0' : '-100%'})` }}
        >
          {categoryLinks}
        </div>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className={classes.backdrop}
          ></div>
        )}
      </div>
    </>
  )
}

export default CategoryLinks
