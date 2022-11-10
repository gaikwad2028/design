import logo from './logo.svg';
import './App.css';
import Secon from './Components/Secon';
import First from './Components/First';
import {Routes, Route } from "react-router-dom";
// import First from './Components/First';


function App() {
  return (
    <>
    <div className="App">
      <Routes>
      <Route exact path='/first' element={<First />} />
     <Route exact path='/secon' element={<Secon />} />
     </Routes>
    </div>
    </>
  );
}

export default App;
