import React ,{useState} from "react";
import Table from '../Table'


function Deposit(){
console.log("Deposite");
 const [tableData, SetTableData] = useState([])
 const [formInputData, SetformInputData] = useState(
    {
    Check_Number:'',
    Amount:''
    }
 );
 
 const handleChange=(e)=>{  
     const newInput = (data)=>({...data,[e.target.name]:e.target.value})
     SetformInputData(newInput)
 }
  
 const handleSubmit= (e) =>{
     e.preventDefault();
     if(formInputData)
     {
      const newData = (data)=>([...data, formInputData])
      SetTableData(newData);
      const emptyInput= {Check_Number:'', Amount:''}
      SetformInputData(emptyInput)
     }
 }  

 return(
     <>
     <div className="container">
        <div className="row">
        <div className="form-row row">
          <div className="col">
            <input type="Number" onChange={handleChange} value={formInputData.Check_Number} name="Check_Number" placeholder=" Check Number" />
          </div>
          <div className="col">
            <input type="Number" onChange={handleChange} value={formInputData.Amount} name="Amount"  placeholder="Amount" />
          </div>
          <div className="col">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
        <Table tableData={tableData}/>
        </div>
        </div>
     </>
 );
}
export default Deposit;