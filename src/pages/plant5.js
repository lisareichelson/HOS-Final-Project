import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p5 from "./five.png";
const Plant5 = () => {
  return (
    <>
      <div className="App">
        <img src={p5} width="400" height="300" alt="p5" />
        <h3 style={{ fontSize: 50 }}>Look at this guy</h3>
      </div>
    </>
  );
};
export default Plant5;
