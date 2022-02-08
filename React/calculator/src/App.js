import './App.css';
import add ,{multiply, sub,div}from './Calculator'

function App() {
  return (
    <>
      <ul>
  
          <h1>Calculator</h1>
        <li>
           Addition of two number= {add(40,4)}
        </li>
        <li>
          Substraction of two number= {sub(40,4)}
        </li>
        <li>
          multiplication of two number= {multiply(40,4)}
        </li>
        <li>
          Division of two number= {div(40,3)}
        </li>
      </ul>
    </>
  );
}

export default App;
