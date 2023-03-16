import React from 'react'

import SupportLink from './SupportLink'
import Links from './SupportLinks'

import logo from '../../assets/logo.svg'

import classes from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <Links className={classes.links} />
      </div>

      <hr />
      <div className={classes.contact}>
        <SupportLink
          topic="Mail Us "
          para="
          elexo@info.com 
          elexoindia@info.in      
          "
        />
        <img src={logo} alt="logo" />
        <SupportLink
          topic="Contact us"
          para="
          B-11 D.S.I.D.C Complex,F.I.E
          patparganj Industrial Area,
          New Delhi
          , Delhi
           110092 , 011 4242 0976
          "
        />
      </div>
    </footer>
  )
}

export default Footer
