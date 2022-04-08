import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import flower from "./flower.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <img src={flower} width="250" height="250" alt="flower" />
      <ul style={{ listStyle: "none", color: "azure" }}>
        <li> Hi Caitlyn</li>
        <li> Please</li>
      </ul>
      <h3 style={{ fontSize: 50 }}>Choose a plant to explore it's history!</h3>
      <ul style={{ listStyle: "none", color: "azure" }}>
        <li> give</li>
        <li> me</li>
        <li> a</li>
        <li>100!</li>
        <li>Thank</li>
        <li>you</li>
        <li>in</li>
        <li>advance ;)</li>
      </ul>
      <button
        style={{
          position: "absolute",
          left: "20%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
        onClick={() => navigate("/components/plant#1")}
      >
        Fake Plant #1
      </button>
      <button
        style={{
          position: "absolute",
          left: "34%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
        onClick={() => navigate("/components/plant#1")}
      >
        Fake Plant #2
      </button>
      <button
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
        onClick={() => navigate("/components/plant#1")}
      >
        Fake Plant #3
      </button>
      <button
        style={{
          position: "absolute",
          left: "65%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
        onClick={() => navigate("/components/plant#1")}
      >
        Fake Plant #4
      </button>
      <button
        style={{
          position: "absolute",
          left: "80%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
        onClick={() => navigate("/components/plant#1")}
      >
        Fake Plant #5
      </button>
      <ul style={{ listStyle: "none", color: "azure" }}>
        <li> j</li>
        <li> j</li>
      </ul>
      <a
        className="App-link"
        href="https://github.com/lisareichelson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lisa Reichelson
      </a>
      <ul style={{ listStyle: "none", color: "azure" }}>
        <li> j</li>
        <li>j</li>
      </ul>
    </div>
  );
};
export default Home;
