import React, { View, Image, Header } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plant1 from "./pages/plant1";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/plant1" element={<Plant1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
