import './App.css';
import Mainpage from './Component/Mainpage/Mainpage';
// import {Routes ,Route ,Navigate} from 'react-router-dom';
// import Home from './Component/Home/Home';
// import About from './Component/About/About';
function App() {
  return (
   <div>
    <Mainpage/>
    {/* <Routes>
       <Route  path="/"  element={< Home />}/>
       <Route  path="/about"  element={< About />}/>
        <Route path="*" element={<Navigate to="/" />}/>  

     </Routes> */}
   </div>
  );
}

export default App;
