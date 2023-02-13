import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import React, { useContext } from 'react';
import { UserContext } from './Components/UserProvider';


function App() {
  const context = useContext(UserContext);
  console.log('app.js : ',context);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>  
    </div>
  );
}

export default App;
