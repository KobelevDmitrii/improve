import React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Main from './pages/main';
import Login from './pages/login';
import Event from './pages/event';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
