import React,{useState} from "react";

function Input(props){
    const [value , Setvalue] = useState(0)

    const substraction = (a,b) => {
        let val1= parseInt(a);
        let val2 =parseInt(b);
        Setvalue(val1-val2);
    };
    return(
        <>
            <button onClick={()=> substraction(props.value1 , props.values2)}> Result</button>
            <br></br>
            <p>Result is :{value}</p>
        </>
    )
}
export default Input;