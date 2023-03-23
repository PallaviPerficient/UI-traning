import React from 'react'
import "./field.scss"

const Fields = () => {
  return (
    <>
        <form>
            <label>
                Candidate Name :
                <input type="text" name="name" placeholder='  Enter Name'/>
            </label>
            <label>
                Interviewer Name :
                <input type="text" name="name" placeholder='  Enter Name' />
            </label>
            <label>
                Interview Date :
                <input type="date" name="date" placeholder='dd-MM-YY'/>
            </label>
        </form>
    </>
  )
}

export default Fields