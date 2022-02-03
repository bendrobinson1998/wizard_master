import React from "react";
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from "./pages/Mint";
import { useEffect } from "react";

import smoothscroll from "smoothscroll-polyfill";
function App() {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
