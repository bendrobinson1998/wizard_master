import React from "react";
import HomePage from "./components/page_sections/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from "./pages/Mint";
import Launchpad from "./pages/Launchpad";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
