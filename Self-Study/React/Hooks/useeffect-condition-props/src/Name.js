import React,{useEffect} from 'react';

function Name(props){
    useEffect(() =>{
        console.warn("Updates name" + props.Name)
    },[props.Name])
    return(
        <>
        <h2>UseEffect in props</h2>
        <h1>{props.Name}</h1>
        </>
    );
}

export default Name;