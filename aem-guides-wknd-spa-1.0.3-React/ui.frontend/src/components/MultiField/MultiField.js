import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const MultiFieldConfig = {
    empty :'MultiField',
    isEmpty: function(props){
        return !props || !props.title
    }
};

const MultiField = (props) => {
  return (
    <div>MultiField</div>
  )
}

MapTo('wknd-spa-react/components/MultiField')(MultiField, MultiFieldConfig);
