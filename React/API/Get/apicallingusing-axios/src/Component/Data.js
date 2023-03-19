import React,{useEffect, useState} from 'react';
import Api from './Services/Api';

const Data =(props) =>{

    const [user, SetUser]= useState([])

    useEffect( ()=>{
        const userdata = Api();
        userdata.then(result => {
            SetUser(result)
        })
    },[]) 
    
return (
    
     <div>
        {
         user.map((item)=>
         <tr>
           <td>{item.id}</td>
           <td>{item.title}</td>
           <td>{item.body}</td>
         </tr>
         )
       }
    </div>
);
}
export default Data;