import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx"

function App() {

  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </>

  );
}

export default App;
