import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require ('../images/gatsby-icon.png')} width="30" /></Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
