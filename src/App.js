import logo from './logo.svg';
import './App.css';
import Secon from './Components/Secon';
import First from './Components/First';
import Buutons from './Buutons';
import {Routes, Route } from "react-router-dom";
import Third from './Components/Third';
// import First from './Components/First';


function App() {
  return (
    <>
    <div className="App">
    <Buutons/>
      <Routes>
      <Route exact path='/First' element={<First />} />
     <Route exact path='/secon' element={<Secon />} />
     <Route exact path='/Third' element={<Third />} />
     </Routes>
    </div>
    </>
  );
}

export default App;
