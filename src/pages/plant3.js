import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p3 from "./third.png";
import PopUp from "./PopUp.js";
const Plant3 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <img src={p3} width="600" height="400" alt="p3" />
        <h3 style={{ fontSize: 50 }}>WaterBug</h3>
        <h3>Religion/Spirituality</h3>
        <p>
          Family:{" "}
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Nelumbonaceae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nelumbonaceae
          </a>
        </p>
        <p>
          The WaterBug is an aquatic flowering plant that grows in mid-latitude
          climates. Its characteristic, large funnel shaped leaves are
          characteristic of the family.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
      >
        <PopUp idMessage="The Origin of WaterBug"></PopUp>
        <ul style={{ listStyle: "none", color: "azure" }}>
          <li> j</li>
          <li>j</li>
        </ul>
      </div>
    </>
  );
};
export default Plant3;
