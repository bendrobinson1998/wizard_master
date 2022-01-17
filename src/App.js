
import React from 'react'
import HomePage from './pages/Home'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Mint from './pages/Mint';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<Mint />} />
        
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;
