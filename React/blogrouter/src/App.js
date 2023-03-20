import { Routes ,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route  path="/about" element={<About />} />
        <Route path="/product" element={<Product />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
