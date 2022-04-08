import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p1 from "./boney.png";
const Plant1 = () => {
  // const navigate = useNavigate();

  console.log("hello?");
  return (
    <>
      <div className="App">
        <img src={p1} width="900" height="1000" alt="p1" />
        <h3 style={{ fontSize: 50 }}>Boney</h3>
      </div>
    </>
  );
};
export default Plant1;
