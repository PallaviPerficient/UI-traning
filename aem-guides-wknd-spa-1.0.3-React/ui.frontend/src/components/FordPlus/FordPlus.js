import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import  "./fordplus.scss"

const FordPlusEditConfig = {
    emptyLabel: 'Ford Plus',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const FordPlus = (props) => {
  return (
    <>
      <div className='fordplus'>
        <img  className="fordplus_backgroundimage" src={props.bgimagePath} alt="background Image"/>
        <img className="fordplus_topimage" src={props.imagePath} alt="ImagePath" />
        <div className="fordplus_text">{props.text}</div>
      </div>
    </>
  )
}

MapTo('wknd-spa-react/components/fordplus')(FordPlus, FordPlusEditConfig);
