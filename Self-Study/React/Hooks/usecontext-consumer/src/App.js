import React, { createContext } from "react";
import ComA from "./Component/ComA";
import ComC from "./Component/ComC";

const  Firstname = createContext();
const Lastname = createContext();
const Address =createContext();

function App() {
  return (
    <div>
      <Firstname.Provider value={"Pallavi"} >
        <Lastname.Provider value={"Kanfade"} >
          <Address.Provider value={"Bhagat lay out Behind Datta mandir Ward no:8"} >
           <ComC />
          </Address.Provider>
         </Lastname.Provider>
       </Firstname.Provider>
    </div>
  );
}

export default App;
export { Firstname ,Lastname ,Address };
