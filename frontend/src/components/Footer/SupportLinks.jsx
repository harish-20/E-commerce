import React from 'react'
import SupportLink from './SupportLink'

const Links = (props) => {
  const links = {
    'Know us': [
      {
        link: '',
        title: 'About Us',
      },
      {
        link: '',
        title: 'Contact Us',
      },
      {
        link: '',
        title: 'Press',
      },
      {
        link: '',
        title: 'Careers',
      },
      {
        link: '',
        title: 'Elexo Earn',
      },
    ],
    Policy: [
      {
        link: '',
        title: 'Security',
      },
      {
        link: '',
        title: 'Privacy',
      },
      {
        link: '',
        title: 'Terms of use',
      },
      {
        link: '',
        title: 'Return Policy',
      },
      {
        link: '',
        title: 'Complience',
      },
    ],
    'Help you': [
      {
        link: '',
        title: 'Return & Cancelation',
      },
      {
        link: '',
        title: 'Membership',
      },
      {
        link: '',
        title: 'Payments',
      },
      {
        link: '',
        title: 'Account',
      },
      {
        link: '',
        title: 'Shipping',
      },
    ],
    Social: [
      {
        link: '',
        title: 'Facebook',
      },
      {
        link: '',
        title: 'Instagram',
      },
      {
        link: '',
        title: 'Twitter',
      },
      {
        link: '',
        title: 'Youtube',
      },
    ],
  }

  let allLinks = []

  for (let link in links) {
    allLinks.push(<SupportLink key={link} topic={link} links={links[link]} />)
  }

  return <div className={props.className}>{allLinks}</div>
}

export default Links
