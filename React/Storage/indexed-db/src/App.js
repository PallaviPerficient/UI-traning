// import DBconfig from './Component/DBconfig';
import {initDB} from 'react-indexed-db';

import './App.css';
import Data from './Component/Data';
import { DBconfig } from './Component/DBconfig';
import Panel from './Component/Panel';


initDB(DBconfig);
function App() {
  return (
    <div className="App">
      
      <h1>Indexed DB</h1>
      <Panel/>
      <Data />
    </div>
  );
}

export default App;
