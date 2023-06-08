import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import './assets/assets.js'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './comp/NavBar';
import ListUsers from './pages/ListUsers';
import DroneLocation from './pages/DroneLocation';
import ListWanted from './pages/ListWanted';
import Me from './pages/Me';
import Remote from './pages/Remote';
import Logout from './comp/Logout';
import WantedDetection from './utils/WantedDetection';
function App() {


  return (
    <>
    <WantedDetection />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/listusers' exact element={<ListUsers />} />
          <Route path='/dronelocation' exact element={<DroneLocation />} />
          <Route path='/listwanted' exact element={<ListWanted />} />
          <Route path='/me' exact element={<Me />} />
          <Route path='/remote' exact element={<Remote />} />
          <Route path='/logout' exact element={<Logout />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
