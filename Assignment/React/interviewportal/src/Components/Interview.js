import React from 'react';
import Fields from './Fields';
import './Interview.scss'
import Logo from './Logo';
import SelectField from './SelectField';
import Table from './Table';
import download from '../Images/download.png'

const Interview = () => {
  return (
    <>
    <div className='Interview'>
        <Logo />
        <div>
        <div className='Interview_heading'>Interview Feedback Portal</div>
        <img className='Interview_downloadImage' src={download} alt="download icon"/>
        </div>
        <div className='Interview_field'>
            <Fields />
            <SelectField />
        </div>
        <Table />
    </div>
    </>
  )
}

export default Interview;