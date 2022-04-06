import React, { createContext} from 'react';
import ComA from './Component/ComA';

const FirstName = createContext();
const lastName = createContext();
const Address = createContext();


function App() {
  return (
   <>
     <h2>Use Context Without Consumer</h2>
     <FirstName.Provider  value={"Sahil"}>
       <lastName.Provider value={"Dhoble"}>
         <Address.Provider value={"Nagpur"}>
            <ComA />
         </Address.Provider>
      </lastName.Provider>
     </FirstName.Provider>

   </>
  );
}

export default App;
export {FirstName ,lastName ,Address}