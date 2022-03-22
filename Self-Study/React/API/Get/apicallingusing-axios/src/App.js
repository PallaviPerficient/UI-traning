import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Data from './Component/Data';


const App = () =>{
  // const [user, SetUser]=useState([])


  
  //   const url= 'https://jsonplaceholder.typicode.com/posts';
  //   useEffect(()=>{
  //     axios.get(url)
  //     .then((data)=>{
  //         // console.log(data);
  //         SetUser(data.data)
  //     })
  //     .catch((err)=> console.log(err))
  
  //   },[])

    // console.log(user);
  return(
    <div>
  
  {/* {
         user.map((item)=>
         <tr>
           <td>{item.id}</td>
           <td>{item.title}</td>
           <td>{item.body}</td>
         </tr>
         )
       } */}
       <Data/>
    </div>
  )
}
export default App