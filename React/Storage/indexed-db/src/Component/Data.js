import React from 'react';
import { IndexedDB } from 'react-indexed-db';
import Panel from './Panel';
const Data = () => {
  return (
    <div>
       <IndexedDB
      name="MyDB"
      version={1}
      objectStoresMeta={[
        {
          store: 'people',
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
            { name: 'name', keypath: 'name', options: { unique: false } },
            { name: 'email', keypath: 'email', options: { unique: false } }
          ]
        }
      ]}>
      <Panel />
    </IndexedDB>
    </div>
  );
}

export default Data;
