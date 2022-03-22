import React, { useState } from 'react';


function FormData(){
    // const indexedDB = 
    // window.indexedDB || 
    // window.webkitIndexedDB || 
    // window.mozIndexedDB || 
    // window.OIndexedDB || 
    // window.msIndexedDB,


    const[language,Setlanguage]=useState('')
    const[framework,Setframework]=useState('')

    function SaveData(){
        //initialize the array courses contains the value already store in the local storage with the name courses  
        var courses=JSON.parse(localStorage.getItem('courses') || "[]") //Sometime the Array empty local Storage only accept the string that's why we asign the empty array
        //If courses variable is not present then it take empty array whenever we want to add first object then their will be no more couses objet in the LS
         var course={
            language:language,
            framework:framework
        }
        courses.push(course)
        localStorage.setItem('courses', JSON.stringify(courses))
    }

    return(
        <>
        <input type="text" placeholder="Language" value={language} onChange={(e)=>Setlanguage(e.target.value)}/><br/>
        <input type="text" placeholder="Framework" value={framework} onChange={(e)=>Setframework(e.target.value)}/><br/>
        <button onClick={SaveData}>Submit</button>
        
        </>
    );
}
export default FormData;