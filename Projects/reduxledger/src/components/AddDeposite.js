import React, { useState } from 'react'
import { connect } from 'react-redux';
import {addAmount} from "../action/amountAction"

const AddDeposite = ({addAmount}) => {
    const [check,setCheck] = useState("");
    const [amt,setAmt] = useState("");

    const handleAddSubmit = (e)=>{
        e.preventDefault();
        const data = {
            check,
            amt:parseInt(amt,10),
        }
        addAmount(data);
        setCheck("");
        setAmt("");

    }
    return (
        <div className="amount-form green-brdr">
            <h3>ADD DEPOSITE:</h3>
            <form onSubmit={handleAddSubmit}>
                <div className="grid grid-two-column gap1">
                    <label htmlFor="fname">Check Number :</label>
                    <input 
                    type="number" 
                    name="checknum" 
                    placeholder="Check Number" 
                    value={check} 
                    required
                    min="1"
                    onChange={(e)=> setCheck(e.target.value)}/>
                </div>
                <div className="grid grid-two-column gap1">
                    <label htmlFor="fname">Amount :</label>
                    <input 
                    type="number" 
                    name="amnt" 
                    placeholder="Amount"
                    value={amt}
                    required
                    min="1"
                    onChange={(e)=> setAmt(e.target.value)}/>
                </div>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>({});

const mapDispatchToProps = (dispatch) =>({
    addAmount:(data) =>{
        dispatch(addAmount(data));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(AddDeposite)