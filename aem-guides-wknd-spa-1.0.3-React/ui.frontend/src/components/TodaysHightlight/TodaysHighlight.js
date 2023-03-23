import React from 'react'
import {MapTo} from '@adobe/aem-react-editable-components';
import './highlight.scss'

const TodaysHighlightEditConfig = {
    emptyLabel: 'Today Highlight',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const TodaysHighlight = (props) => {
  return (
    <>
      <div className='highlight'>
        <img src={props.fileReference} alt="HighLight Image"/>
        <div className='highlight_container'>
          <div className='highlight_container__title'>{props.title}</div>
          <div className='highlight_container__heading'>{props.heading}</div>
          <div className='highlight_container__description'>{props.description}</div>
          <div className='highlight_container__link'><a href={props.url+".html"} target="_blank">{props.linktext}</a></div>
          <hr />
        </div>
      </div>  
    </>
  )
}

MapTo('wknd-spa-react/components/todayHighlight')(TodaysHighlight, TodaysHighlightEditConfig);
