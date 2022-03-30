import React,{useState} from 'react';
import axios from "axios";

const Api = () =>{
    const url= 'https://jsonplaceholder.typicode.com/posts';

    try{
         return axios.get(url, {
        }).then((data)=> data.data)
    
            .catch((error) => {
                    
        });
    } catch (e) {

    }   
}
    
export default Api;