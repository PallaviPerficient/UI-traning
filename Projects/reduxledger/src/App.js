import './App.css';
import AddDeposite from './components/AddDeposite';
import Balance from './components/Balance';
import Ledger from './components/Ledger';
import Navbar from './components/Navbar';
import SubstractDebit from './components/SubstractDebit';


function App() {
  return (
    <>
        <Navbar />
        <div className="container">
          <div className="grid grid-two-column">
            <AddDeposite />
            <SubstractDebit />
          </div>
          <div className="w-100 grid grid-two-column">
            <div></div>
            <Balance />
          </div>
        </div>
        <Ledger/>
    </>
  );
}

export default App;
