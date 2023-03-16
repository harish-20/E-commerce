import React from 'react'

import banner1 from '../../assets/bottombanner.png'
import banner2 from '../../assets/bottombanner2.png'

import classes from './BottomBanner.module.css'
const BottomBanner = () => {
  return (
    <div className={classes['banner-container']}>
      <img src={banner1} alt="banner" />
      <img src={banner2} alt="banner" />
    </div>
  )
}

export default BottomBanner
