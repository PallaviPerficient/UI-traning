import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Name,{Lastname,Desgination, Address} from "./App"


ReactDOM.render(
<>
  <ol>
    <li>
      {Name} {Lastname}
    </li>
    <li>
      {Desgination()}
    </li>
    <li>
      {Address()}
    </li>
  </ol>
</>,
    
  document.getElementById('root')
);

