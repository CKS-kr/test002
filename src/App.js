import './App.css';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile/:username' element={<Profile/>}/>
    </Routes>
  );
};

export default App;
