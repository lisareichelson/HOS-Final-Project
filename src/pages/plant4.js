import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import p4 from "./four.png";
import PopUp from "./PopUp.js";
const Plant4 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <img src={p4} width="600" height="400" alt="p4" />
        <h3 style={{ fontSize: 50 }}>Stunt</h3>
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
            href="https://en.wikipedia.org/wiki/Magnolia_stellata"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star Magnolia
          </a>
        </p>
        <p>
          This flowering plant is native to the subtropical region and is
          hermaphroditic. Typically, the flowers produces bountiful amounts of
          flowers to produce fruit that serves as its main means of
          reproduction, like the Star Magnolia of the past...
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
        <PopUp idMessage="The Origin of Stunt"></PopUp>
        <ul style={{ listStyle: "none", color: "azure" }}>
          <li> j</li>
          <li>j</li>
        </ul>
      </div>
    </>
  );
};
export default Plant4;
