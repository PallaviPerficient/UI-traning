import './App.css';
import React,{useState ,useEffect} from 'react';

function App() {
  const [data ,setData]= useState([]);
  useEffect( ()=> {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        result.json().then((resp)=>{
            // console.warn("result" , resp)
            setData(resp)
        })
    })
  },[])
  console.warn(data);
  return (
    <div className="App">
     <h1>Get API</h1>
     <table>
       <tr>
         {/* <td>
           UserId:
         </td> */}
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
           {/* <td>{item.userID}</td> */}
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
