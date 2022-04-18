import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p5 from "./five.png";
import PopUp from "./PopUp.js";
const Plant5 = () => {
  return (
    <>
      <div className="App">
        <img src={p5} width="400" height="300" alt="p5" />
        <h3 style={{ fontSize: 50 }}>Bulbous</h3>
        <h3>Beauty/Ornamentation</h3>
        <p>
          Family:{" "}
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Magnoliaceae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Magnoliaceae
          </a>
        </p>
        <p>
          Reference:{" "}
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Magnolia_grandiflora"
            target="_blank"
            rel="noopener noreferrer"
          >
            Southern Magnolia
          </a>
        </p>
        <p>
          This flowering tree is large, evergreen, and produces sweet smelling
          flowers. It typically grows in the Americas, and produces small,
          follicle fruits once polinated.
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
        <PopUp idMessage="The Origin of Bublous"></PopUp>
        <ul style={{ listStyle: "none", color: "azure" }}>
          <li> j</li>
          <li>j</li>
        </ul>
      </div>
    </>
  );
};
export default Plant5;
