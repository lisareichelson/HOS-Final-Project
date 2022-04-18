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
      <h3>Setting the Scene</h3>
      <p>
        All of the plants discussed in this project evolved from a post-desolate
        Earth. All living things, excluding the lucky lady bug and a few
        straggling plants and animals, were brought to the brink of extinction
        by a sudden and short-lived heat wave.
      </p>
      <h3 style={{ fontSize: 50 }}>Choose a plant to explore it's history!</h3>
      <button
        style={{
          position: "absolute",
          left: "20%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          fontSize: 25,
        }}
        onClick={() => navigate("/pages/plant1")}
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
        onClick={() => navigate("/pages/plant2")}
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
        onClick={() => navigate("/pages/plant3")}
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
        onClick={() => navigate("/pages/plant4")}
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
        onClick={() => navigate("/pages/plant5")}
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
