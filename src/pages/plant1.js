import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p1 from "./boney.png";
import PopUp from "./PopUp.js";

const Plant1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <h3 style={{ fontSize: 30 }}>Ladesensce</h3>
        <p>/LAY-des-ense/</p>
        <img src={p1} width="500" height="500" alt="p1" />
        <p>
          Family:{" "}
          <a
            className="App-link"
            href="https://www.britannica.com/plant/Rutaceae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rutaceae
          </a>
        </p>
        <p>Grows alongside rivers in tropical regions.</p>
        <p>
          Plant contains perfect flowers that are either male or female. The
          shrub can self-pollinate, and flowers drop off to reveal berry-like
          fruits that suspiciously resemble lady bugs.
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
        <PopUp idMessage="The Origin of Ladesence"></PopUp>
        <ul style={{ listStyle: "none", color: "azure" }}>
          <li> j</li>
          <li>j</li>
        </ul>
      </div>
    </>
  );
};

export default Plant1;
