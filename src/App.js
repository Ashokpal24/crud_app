import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/dist/collapse";
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from './components/layout/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about'element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
