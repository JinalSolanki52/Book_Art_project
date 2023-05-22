import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import saved from './components/saved';
import Channels from './components/Channels';
import People from './components/People';
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';


function App() {
  const clickme = () => alert("POP-UP BOX");
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         </a> */}         
      <div className='NavbarItem'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Channels">Channels</NavLink>
          <NavLink to="/Messages">Messages</NavLink>
          <NavLink to="/People">People</NavLink>
          <NavLink to="/saved">Saved</NavLink>
      </div>

      <Routes>
          <Route path='/' element={<Navbar fun={clickme} name="jinal"/>}/>
          <Route path='/Channels' element={<Channels/>}/>
          <Route path='/Messages' element={<Messages/>}/>
          <Route path='/People' element={<People/>}/>
          <Route path='/saved' element={<saved/>}/>
      </Routes>
        
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> 
    </div>
  </BrowserRouter> 
  );
}

export default App;
