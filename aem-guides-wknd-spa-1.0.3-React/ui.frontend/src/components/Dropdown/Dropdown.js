import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const DropdownConfig = {
    empty :'DropDown',
    isEmpty: function(props){
        return !props || !props.title
    }
};

const Dropdown = (props) => {
    console.log("dorpdown",props);
  return (
    <div>DropDown</div>
  )
}

MapTo('wknd-spa-react/components/Dropdown')(Dropdown, DropdownConfig);
