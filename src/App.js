import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' />
        <Route/>
       </Routes>
    </div>
  );
}

export default App;
