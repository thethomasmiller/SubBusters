import React from 'react'
import './Header.css'
import ghostLogo from '../../../assets/images/ghostLogo.png'

const Header = () => {
  return (
    <header>
      <div className='header'>
      <img src={`${ghostLogo}`}/><h1>SubBusters</h1>
      </div>
    </header>
  )
}

export default Header