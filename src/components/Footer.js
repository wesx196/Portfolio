import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram onClick={event => window.location.href = 'https://www.instagram.com/wesx_erie/'} />
        <GitHub onClick={event =>  window.location.href='https://github.com/wesx196/'}/>
        <Facebook onClick={event =>  window.location.href='https://www.facebook.com/wei.lu.165'}/>
        <LinkedIn onClick={event =>  window.location.href='https://www.linkedin.com/in/wei-lu-26549b3a/'} />
      </div>
      <p>&copy; 2022 wesxerie.com</p>
    </div>
  )
}

export default Footer