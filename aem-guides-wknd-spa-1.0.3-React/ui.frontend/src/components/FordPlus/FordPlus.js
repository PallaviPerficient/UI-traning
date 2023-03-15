import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const FordPlusEditConfig = {
    emptyLabel: 'Ford Plus',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const FordPlus = (props) => {
    console.log("Ford Plus",props);
  return (
    <div>FordPlus</div>
  )
}

MapTo('wknd-spa-react/components/fordplus')(FordPlus, FordPlusEditConfig);
