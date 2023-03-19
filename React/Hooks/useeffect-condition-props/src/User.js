import React ,{useEffect} from "react";

function User(props){

    useEffect(() =>{
        alert("Count is"+ props.count);
      },[props.count]) /// props.count,props.data then use effect work on both the state
    
    return(
        <>
        <h3>Count props : {props.count}</h3>
        <h3>Data props : {props.Data}</h3>
        </>
        
    );

}

export default User;