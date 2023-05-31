import React , {useState} from 'react';
import './App.css';
import Card from './Components/Card';
import RegistrationList from './Components/RegistrationList';

function App() {
  const [registrationList, setregistrationList] = useState([]);

  const submitHandler = (fName, lName , add , dob, edu, mob) => {
    setregistrationList((prevUsersList) => {
      return [
        ...prevUsersList,
        { firstname: fName, lastname: lName, Address : add , DOBirth :dob ,Education : edu , Mobile :mob },
      ];
    });
  };
  return (
    <div className='main-Container'>
      <Card  adduser={submitHandler}/>
      <RegistrationList registrationdata={registrationList}/>
    </div>
  );
}

export default App;
