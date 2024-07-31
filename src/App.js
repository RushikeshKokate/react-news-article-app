import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar"
import BookMarkArticles from './Components/BookMarkArticles';
import Feed from './Components/Feed';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/BookMarkArticles' element={<BookMarkArticles/>}/>
       </Routes>
    </div>
  );
}

export default App;
