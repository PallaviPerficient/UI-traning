import React from 'react';
import PK from '../Images/Pallavi-1.jpg';
import './Personal.css'

const Personal = (props) => {
  return (
    <>
       <div className={props.personalValue ? 'pk' : 'display-none'}>
        <img  src={PK}/>
        <div className='contact'>Contact no: 7888278279</div>
        <div className='email'>Email : pallavikanfade30@gmail.com</div>
       </div>
    </>
  )
}

export default Personal;