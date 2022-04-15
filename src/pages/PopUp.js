import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUp = ({ idMessage }) => {
  // create state `open` with default as false
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* click of button toggles `open` value therefore visibility */}
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${idMessage}`}
      >
        {idMessage}
      </button>
      {/* If open is true show your <div /> */}
      {open && idMessage == "The Origin of Ladesence" && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <p>
            During the great extinction, ladybugs became the most abundant and
            effective source of pollinators. This plant evolved to have sour
            berries, with a deceptive appearance that causes male ladybugs to
            flock to the berry. The sheer population of ladybugs in this area is
            so large that the weight of these tricked males is enough to drop
            the berry to the ground after a few days.
          </p>
          <p>
            The surviving humans, desperate for food, use this plant not for the
            berries it produces; which are sour and slightly spicy, but for the
            flocks of ladybugs that they attract. The berries are picked right
            before they fall, and crushed into a ladybug-berry paste that is
            used in sauces and dyes.
          </p>
          <p>
            The berries are also used as a kind of pesticide. Humans plant the
            Ladesence on the perimiter of their settlements to control the
            concentration of ladybugs entering their homes.
          </p>
        </div>
      )}
    </>
  );
};

export default PopUp;
