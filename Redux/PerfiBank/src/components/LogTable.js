import { useSelector } from 'react-redux';
import './LogTable.css';
import TableElement from './TableElement';
const LogTable = (props) => {
    const creditAmount = useSelector(state => state.credamount)
    const addFormRow = useSelector(state => state.formdata)
    console.log("FROM LOG TABLE");
    console.log(addFormRow);
    return (
        <>
        <p>
            <label className='right-bal'>Balance: </label>
            <b className='bal-box'>{creditAmount}</b>
        </p>
        <div className='app-container'>
            
            <h1>LEDGER</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Check</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>

                    {addFormRow.map((dataRow, i) => {
                        return <TableElement row={dataRow} key={i} />
                    })}

                </tbody>
            </table>
        </div>
        </>
    )

};

export default LogTable;