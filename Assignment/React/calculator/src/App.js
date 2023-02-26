import './App.css';
import Number from './Component/Number';
import OutputScreen from './Component/OutputScreen';

function App() {
  return (
    <>
       <h3>Calculator</h3>
        <div className='screen'>
          <OutputScreen />
          <OutputScreen />
        </div>
        <Number />
    </>
  );
}

export default App;
