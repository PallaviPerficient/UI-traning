import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import TabOne from './Components/TabOne/TabOne';
import TabTwo from './Components/TabTwo/TabTwo';
import TabThree from './Components/TabThree/TabThree';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<TabOne />}/>
        <Route  path="/tab-two" element={<TabTwo />} />
        <Route path="/tab-three" element={<TabThree />}/>
      </Routes>
    </>
  );
}
export default App;

