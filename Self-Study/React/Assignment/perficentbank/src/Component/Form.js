import React ,{useState} from "react";
import Table from "../Table";

const  Form = (props) => {
    // const InputData = [];
 const [tableData, SetTableData] = useState([])
 const [formInputData, SetformInputData] = useState(
    {
    Check_Number:'',
    Amount:''
    }
 );
 
 const handleChange=(e)=>{  
     const newInput = (formInputData)=>({...formInputData,[e.target.name]:e.target.value})
     SetformInputData(newInput)
     
 }
  
 const handleSubmit = (e) => {
    //  e.preventDefault();
    //   const newData = (data)=> ([...data, formInputData])
        
    // const newData = (data)=> ([...data, formInputData])
    // SetTableData((prevState)=> ([...prevState, formInputData]));
    const emptyInput= {Check_Number:'', Amount:''}
      SetformInputData(emptyInput)
      console.log(formInputData);
      Table(tableData)
      console.log(tableData);
        // console.log(newData);
    // InputData.push(formInputData)
    // console.log(InputData);
    // console.log(tableData);
    



    SetTableData([formInputData, ...tableData])
        console.table(tableData);


    const settab = () =>{
        SetTableData([ ...formInputData, tableData])
    }
    console.log(settab);
    
 }  
 

 return(
     <>
     <div className="container">
        <div className="row">
        <div className="form-row row">
          <h1> Deposit </h1>
          <div className="col">
            <input type="Number" onChange={(e) => handleChange(e)} value={formInputData.Check_Number} name="Check_Number" placeholder=" Check Number" />
          </div>
          <div className="col">
            <input type="Number" onChange={(e) => handleChange(e)} value={formInputData.Amount} name="Amount"  placeholder="Amount" />
          </div>
          <div className="col">
            <input type="submit" onClick={() => handleSubmit()} className="btn btn-primary" />
          </div>
        </div>
        {/* <Table tableData={tableData}  /> */}
        {props.amountType}

        </div>
        </div>
     </>
 );
}
export default Form;