import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p4 from "./four.png";
const Plant4 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <img src={p4} width="600" height="400" alt="p4" />
        <h3 style={{ fontSize: 50 }}>Look at this guy</h3>
      </div>
    </>
  );
};
export default Plant4;
