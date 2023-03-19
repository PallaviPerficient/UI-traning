import './App.css';
import UserScreen from './component/UserScreen';
import {Routes , Route } from 'react-router-dom'
import DisplayScreen from './component/DisplayScreen';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route  path="/"  element={<UserScreen />}/>
       <Route  path="/displayscreen"  element={<DisplayScreen  />}/>
     </Routes>
    </div>
  );
}

export default App;
