import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p2 from "./turn.png";
import PopUp from "./PopUp.js";
const Plant2 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <img src={p2} width="600" height="400" alt="p2" />
        <h3 style={{ fontSize: 50 }}>Shadblow</h3>
        <h3>Food</h3>
        <p>
          Family:{" "}
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Solanaceae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solanaceae
          </a>
        </p>
        <p>
          Reference:{" "}
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Potato"
            target="_blank"
            rel="noopener noreferrer"
          >
            Potato
          </a>
        </p>
        <p>
          The plant is hermaphroditic and strongly resembles an old-timey
          potato. Due to the large number of ladybugs, the root grows a tough,
          green outer skin to protect itself.
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
        <PopUp idMessage="The Origin of Shadblow"></PopUp>
        <ul style={{ listStyle: "none", color: "azure" }}>
          <li> j</li>
          <li>j</li>
        </ul>
      </div>
    </>
  );
};
export default Plant2;
