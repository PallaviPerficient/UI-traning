import { useDispatch } from 'react-redux';
import { useState } from 'react'
import './CreditDebit.css';
const AddCredit = () => {
    const [inpVal, setinpVal] = useState();
    const [inpcheck, setinpcheck] = useState();
    const dispatch = useDispatch();


    const onCreditHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'credit', credAmount: parseFloat(inpVal) });
        dispatch({ type: 'formData', formdata: { checkno: parseInt(inpcheck), amtType: 'CREDIT', amount: parseFloat(inpVal) } });
    };

    const onInpVal = (event) => {
        setinpVal(parseFloat(event.target.value))
    };
    const onInpCheck = (event) => {
        setinpcheck(parseInt(event.target.value))
    };

    return (<>
        
        <div className="box-credit">
            <h1>ADD DEPOSIT:</h1>
            <form>

                <div>
                    <label>Check Number:</label>
                    <input type='number' id='checkNo' onInput={onInpCheck} required="required" />
                </div>
                <div>
                    <label>Amount:</label>
                    <input className="amt-input" type='number' id='amount' onChange={onInpVal} required="required" />
                </div>

                <button className='leftmargin' onClick={onCreditHandler}>Submit</button>

            </form>
        </div></>
    )
};

export default AddCredit;