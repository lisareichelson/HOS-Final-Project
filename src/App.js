import React, { View, Image, Header } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plant1 from "./pages/plant1";
import Plant2 from "./pages/plant2";
import Plant3 from "./pages/plant3";
import Plant4 from "./pages/plant4";
import Plant5 from "./pages/plant5";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/plant1" element={<Plant1 />} />
          <Route path="/pages/plant2" element={<Plant2 />} />
          <Route path="/pages/plant3" element={<Plant3 />} />
          <Route path="/pages/plant4" element={<Plant4 />} />
          <Route path="/pages/plant5" element={<Plant5 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
