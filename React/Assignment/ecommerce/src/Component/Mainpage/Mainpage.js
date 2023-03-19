import React from 'react'
import Home from '../Home/Home';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import Button from '../Button/Button';
import './_mainpage.scss';

const Mainpage = () => {
  return (
    <div className='mainpage'>
       <div className='mainpage_nav'>
       {/* <a href="/">Home</a>  | | |
        <a href="/about">About</a> */}
       <Home />
        <About />
        <Contact />
        <Product />
       </div>
        <label className='mainpage_heading'>
            Apple Store
        </label>
        <Button />
    </div>
  )
}

export default Mainpage
