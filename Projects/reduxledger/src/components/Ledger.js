import React from 'react'
import { useSelector } from 'react-redux'

const Ledger = () => {
    const transaction = useSelector((state) => state.reducer.transactionHistory)
    return (
        <div className="ledger-list">
            <h3>Ledger</h3>
            <table className="ledger-table">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Check Number</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className="ledger-tbody">
                    {transaction.map((transaction, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.transactiontype}</td>
                            <td>{transaction.checkNumber}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ledger