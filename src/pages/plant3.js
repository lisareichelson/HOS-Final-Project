import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p3 from "./third.png";
const Plant3 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <img src={p3} width="600" height="400" alt="p3" />
        <h3 style={{ fontSize: 50 }}>Look at this guy</h3>
      </div>
    </>
  );
};
export default Plant3;
