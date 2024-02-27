import React from 'react'
import './footer.css'

import {default as Facebook} from '../../assets/facebook.webp'
import {default as Whatsapp} from '../../assets/whats.png'
import {default as Steam} from '../../assets/steam.png'

const ContactItem = ({Icon, alt, width, to}) => (
  <>
    <a href={to}>
      <img src={Icon} alt={alt} width={width}/>
    </a>
  </>
)

const Footer = () => {
  return (
    <div className="footer__container" id="footer">
      <div className="footer__container-contact">Contact Me</div>
      <div className="footer__container-contact-logos">
        <ContactItem Icon={Facebook} alt="Facebook" width="25" to="https://www.facebook.com/ruan.guilherme.1614"/>
        <ContactItem Icon={Whatsapp} alt="Whatsapp" width="25" to="https://wa.me/+5511978579980"/>
        <ContactItem Icon={Steam} alt="Steam" width="25" to="https://steamcommunity.com/id/ruan_effex/"/>
      </div>
    </div>
  )
}

export default Footer