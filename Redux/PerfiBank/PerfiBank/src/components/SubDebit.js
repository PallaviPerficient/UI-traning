import { useDispatch } from 'react-redux';
import './CreditDebit.css';
import { useState } from 'react'
const SubDebit = () => {
    
    const [inpVal, setinpVal] = useState();
    const [inpcheck, setinpcheck] = useState()
    const dispatch = useDispatch();


    const onHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'debit', debAmount: parseFloat(inpVal) });
        dispatch({ type: 'formData', formdata: { checkno: parseInt(inpcheck), amtType: 'DEBIT', amount: parseFloat(inpVal) } });
    };
    const onInpVal = (event) => {
        setinpVal(parseFloat(event.target.value))
    };
    const onInpCheck = (event) => {
        setinpcheck(parseInt(event.target.value))
    };
    return (<>
        <div className="box-debit">
            <h1>SUB DEBIT:</h1>
            <form>

                <div>
                    <label>Check Number:</label>
                    <input type='number' id='checkNo' onInput={onInpCheck} />
                </div>
                <div>
                    <label>Amount:</label>
                    <input className="amt-input" type='number' id='amount' onChange={onInpVal} />
                </div>
                <button className='leftmargin' onClick={onHandler}> Submit</button>

            </form>
        </div>
        </>
    )
};

export default SubDebit;