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
        amount : 0,
        type : '',
        }
    );

    const [data1 , Setdata1]= useState(
        {
        check_number : "name",
        amount : 0,
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
            const balance_amount = balance + data.amount
            Setbalance(balance_amount)
            const emptyInput = { check_number: '' ,amount: '', type: ''}
            Setdata(emptyInput)
            
        }
        if(type === "Debit"){
            const newData = (obj)=>([...obj, data1])
            Setgetdata(newData);
            const balance_amount = balance - data1.amount
            Setbalance(balance_amount)
            const emptyInput = { check_number: '' ,amount: '', type: ''}
            Setdata1(emptyInput)
        }   

        
    }
    return (
        <>             
            <h1>Perficient National Bank</h1>
            <div className='block'>
     
                <div className='Credit-block'>
                    <label className='Credit'>ADD DEPOSIT : </label>
                    <Data type="Credit"  handlechange={handlechange} Submit={Submit} data={data}  /> 
                </div>

                <div className='Debit-block'>
                    <label className='Debit'>SUBSTRACT DEBIT : </label>
                    <Data type="Debit" handlechange={handlechange} Submit={Submit} data={data1} />
                </div>
            </div>
            <p >
                <label className='balance'>Balance : </label>
                <b className='balance_amount'>{balance}</b>
            </p>
            
          
            <div className='Table-heading'>
                Ledger
            </div>
            <div>
                <Table tabledata={getdata} />
            </div>
        </>
    )
}

export default Header;