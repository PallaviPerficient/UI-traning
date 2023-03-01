import React from 'react';
import facebook from '../icons/facebook.jpg'
import Lik from '../icons/LinkedIn.png'
import instagram from '../icons/instagram.svg';
import twt from '../icons/twitter.png';
import git from '../icons/git.png';
import './Main.css'

const Main = (props) => {
  return (
    <>
      <div className={props.displayValue ? 'conatiner' : 'display-none'}>
        <div className='container_topname'>HELLO WORLD</div>
        <div className='container_name'>I'm Pallavi Kanfade</div>
        <div className='container_bio'>| React | JavaScript | JQuery</div>
        <div className='logo'>
            <ul>
              <li> <img className='logo_facebook' src={facebook} alt="FaceBook"/></li>
              <li>  <img className='logo_lik' src={Lik} alt="Linkdln"/></li>
              <li> <img className='logo_twt' src={twt} alt="Twitter"/></li>
              <li> <img className='logo_git' src={git} alt="github"/></li>
              <li > <img className='logo_insta' src={instagram} alt="Instagram"/></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Main