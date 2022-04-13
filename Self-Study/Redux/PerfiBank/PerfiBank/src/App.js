
import './App.css';
import AddCredit from './components/AddCredit';
import HeaderUI from './components/HeaderUI';
import LogTable from './components/LogTable';
import SubDebit from './components/SubDebit';
function App() {
  
  return (
    <div className="App">
      <HeaderUI/>
      <AddCredit />
      <SubDebit />     
      <LogTable />
    </div>
  );
}

export default App;
