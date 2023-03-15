import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import './textimage.scss';


const TextImageEditConfig = {
    emptyLabel: 'TextImage',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const TextImage = (props) => {
  return (
    <>
      <div className='textImage_heading'>{props.textTitle}</div>
      <div className='textImage'>
        <div className='textImage_text'>{props.text}</div>
        <img src={props.fileReference} alt="IMage" />
      </div>
    </>
  )
}

MapTo('wknd-spa-react/components/textImage')(TextImage, TextImageEditConfig);
