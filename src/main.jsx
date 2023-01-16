import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import Nav from "./Nav";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Employees from "./pages/Employees";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/plans' element={<Plans />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/employees' element={<Employees />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
