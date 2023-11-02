import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './Component/CakeContainer';
import store from './redux/store.js';

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>React & Router</h1>
        <CakeContainer />   
      </Provider>
    </>
  );
}

export default App;
