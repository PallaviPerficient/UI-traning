import React from 'react';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import './_button.scss';
const Button = () => {
  return (
    <div className='button'>
        <Login />
        <Register />
        <Cart />
    </div>
  )
}

export default Button
