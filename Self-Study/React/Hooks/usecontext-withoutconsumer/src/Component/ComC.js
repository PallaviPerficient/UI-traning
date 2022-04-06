import React, { useContext } from "react";
import { Address, FirstName ,lastName} from "../App";

const ComC = () =>{

    const Fname =useContext(FirstName);
    const lname = useContext(lastName);
    const add = useContext(Address)
    return(
      <>
        <h1>{Fname} {lname} {add} </h1>
      </>
    )
}
export default ComC;