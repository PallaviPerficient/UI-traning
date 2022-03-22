import './App.css';
import React,{useEffect} from 'react';

function Getdata() {
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
  
}

export default Getdata;
