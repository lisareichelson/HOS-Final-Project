import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p2 from "./turn.png";
const Plant2 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <img src={p2} width="600" height="400" alt="p2" />
        <h3 style={{ fontSize: 50 }}>Look at this guy</h3>
      </div>
    </>
  );
};
export default Plant2;
