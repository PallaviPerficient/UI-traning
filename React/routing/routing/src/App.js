import React from 'react'
import {Routes , Route , Navigate } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Error from './Component/Error';

//Navigate = Directly redirect to Home page if we don't found any component which we have created then Navigate wii directly redirect to the  main page.
//* = home and about component mai se jab kuch nhi miega tab hum * wala excute hoga
const App = (props) => {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route  path="/"  element={< Home />}/>
       <Route  path="/about"  element={< About />}/>
        {/* <Route path="*" element={<Error/>}/>   */}
        <Route path="*" element={<Navigate to="/" />}/>  

     </Routes>
    </div>
  );
}

export default App;
