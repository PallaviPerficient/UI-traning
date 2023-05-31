import React , {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {
  //  Managing Data id is for keys
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <h3>Managing Data in List</h3>
      <AddUser  adduser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
