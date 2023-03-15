import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import './customtitle.scss';


const CustomTitleEditConfig = {
    emptyLabel: 'CustomTitle',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const CustomTitle = (props) => {
    console.log(props);
  return (
    <>
      <div className='customtitle_heading'>{props.textTitle}</div>
      <div className='customtitle'>
        <div className='customtitle_text'>{props.text}</div>
        <img src={props.fileReference} alt="IMage" />
      </div>
    </>
  )
}

MapTo('wknd-spa-react/components/custom-title')(CustomTitle, CustomTitleEditConfig);
