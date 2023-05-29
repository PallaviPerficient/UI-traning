import React, {useState} from 'react';

const App = () => {
      const [messageValidity, setMessageValidity]=useState('Invalid');
      
      function messageChangeHandler(event){
            const value = event.target.value;
      if (value.trim().length < 3) {
        setMessageValidity('Invalid')
      } else {
        setMessageValidity('Valid');
      }
      }
    return (
        <form>
            <label>Your message : </label>
            <input type="text"  onChange={messageChangeHandler}/>
            <p>{messageValidity} message</p>
        </form>
    );
}
export default App;