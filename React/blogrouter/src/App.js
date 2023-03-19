import { Routes ,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route  path="/about" element={<About />} />
        <Route path="/product" element={<Product />}/>
      </Routes>
    </>
  );
}

export default App;
