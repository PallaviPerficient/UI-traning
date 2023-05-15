import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const balance = useSelector((state) => state.reducer.balance)
  return (
    <div className="balancewrap">
        <h3>Balance: </h3>
        <div className="amount-box">
          {balance}
        </div>
    </div>
  )
}


export default Balance;