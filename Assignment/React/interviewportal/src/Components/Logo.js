import React from 'react';
import Perfilogo from '../Images/images.png'
import './logo.scss'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={Perfilogo} alt="Logo"/>
    </div>
  )
}

export default Logo