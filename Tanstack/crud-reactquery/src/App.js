import './App.css';
import EditPost from './Component/EditPost';
import Post from './Component/Post';
import Postlist from './Component/Postlist';
import {Route,Routes } from "react-router-dom";



function App() {
  return (
    <>
      <h2> Blog </h2>
      <Routes>
        <Route path='/' element ={<Postlist />}></Route>
        <Route path='/post/:id' element ={<Post />}></Route>
        <Route path='/post/:id/edit' element ={<EditPost />}></Route>
      </Routes>
    </>
  );
}

export default App;
