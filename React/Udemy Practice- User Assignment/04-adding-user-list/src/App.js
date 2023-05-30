import React from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {
  return (
      //empty data print <UserList users={[]}/>

    <div>
      <h3>Adding Data in List</h3>
      <AddUser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
