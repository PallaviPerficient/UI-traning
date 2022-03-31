import React, {useState} from 'react'
import Data from './Data';
import Table from './Table';
import './Header.scss'


const Header = () =>{
    const [balance , Setbalance] = useState(0);
    const [getdata ,Setgetdata] = useState([]);
    const [data , Setdata] = useState(
        {
        check_number : "name",
        amount : null,
        type : '',
        }
    );

    const [data1 , Setdata1]= useState(
        {
        check_number : "name",
        amount : null,
        type : '',
        }
    );
        
    const handlechange = (e,type) =>{
        if(type === "Credit"){
        const newInput = (obj)=>({...obj,[e.target.name]:e.target.value,type:type})
        Setdata(newInput)
        }
        if(type === "Debit"){
            const newInput = (obj)=>({...obj,[e.target.name]:e.target.value,type:type})
            Setdata1(newInput)
        }
    }
   
    const Submit = (type) =>{
        if(type === "Credit"){
            const newData = (obj)=>([...obj, data])
            Setgetdata(newData);
            const balance_amount = parseInt(balance) + parseInt(data.amount)
            Setbalance(balance_amount)
            const emptyInput = { check_number: '' ,amount: '', type: ''}
            Setdata(emptyInput)
            
        }
        if(type === "Debit"){
            const newData = (obj)=>([...obj, data1])
            Setgetdata(newData);
            const balance_amount = parseInt(balance) - parseInt(data1.amount)
            Setbalance(balance_amount)
            const emptyInput = { check_number: '' ,amount: '', type: ''}
            Setdata1(emptyInput)
        }   

        var account_data=JSON.parse(localStorage.getItem('Amount') || "[]");
        var accountdata={
            check_number:data,
            amount:data,
            type:data
        }
        var accountdataDebit={
            check_number:data1,
            amount:data1,
            type:data1
        }
        account_data.push(accountdata,accountdataDebit);
        localStorage.setItem('Amount', JSON.stringify(account_data));

    }
    return (
        <>             
            <h1>Perficient National Bank</h1>
            <div className='block'>
     
                <div className='creditBlock'>
                    <label className='Credit'>ADD DEPOSIT : </label>
                    <Data type="Credit"  handlechange={handlechange} Submit={Submit} data={data}  /> 
                </div>

                <div className='debitBlock'>
                    <label className='Debit'>SUBSTRACT DEBIT : </label>
                    <Data type="Debit" handlechange={handlechange} Submit={Submit} data={data1} />
                </div>
            </div>
            <p >
                <label className='balance'>Balance : </label>
                <b className={(balance > 0) ? 'balance_amount' : 'balance_amount_red'}><span>{balance}</span></b>
            </p>
            
          
            <div className='tableHeading'>
                Ledger
            </div>
            <div>
                <Table tabledata={getdata} />
            </div>
        </>
    )
}

export default Header;