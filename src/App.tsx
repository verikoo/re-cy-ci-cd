import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Task1 from "./Task1"
import Task2 from "./Task2"

function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/1"}><button>Images</button></Link>
            </li>
          <li>
            <Link to={"/2"}><button>Traffic Lights</button></Link>
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
      
      <Route path='/1' element={<Task1/>}/>
      <Route path='/2' element={<Task2/>}/>

    </Routes>
    </> 
  );
}

export default App;
