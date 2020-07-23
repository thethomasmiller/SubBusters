import React from 'react'
import './Header.css'
import ghostLogo from '../../../assets/images/ghostLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <img src={`${ghostLogo}`} className='header-ghost' /><Link style={{ textDecoration: 'none' }} to={`/subscriptions`}><h1 className= 'header-subbusters'>SubBusters</h1></Link>
      </div>
    </header>
  )
}

export default Header