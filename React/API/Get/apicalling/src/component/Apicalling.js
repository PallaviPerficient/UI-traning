import React,{useState ,useEffect} from 'react';
import Getdata from './Services/getdata';

function App() {
  
  return (
    <div className="App">
     <h1>Get API</h1>
     <table>
       <tr>
         <td>
           ID:
         </td>
         <td>
           Title:
         </td>
         <td>
           Body:
         </td>
       </tr>
       {
         data.map((item)=>
         <tr>
           <td>{item.id}</td>
           <td>{item.title}</td>
           <td>{item.body}</td>
         </tr>
         )
       }
     </table>
    </div>
  );
}

export default App;
