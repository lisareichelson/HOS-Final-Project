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

      {open && idMessage == "The Origin of Shadblow" && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <p>
            The Shadblow is planted seasonally and harvested for food. The
            thick, leaf-like structure around the root is kept on for
            preservation purposes, and is peeled like a banana before it can be
            prepared to be eaten. The Shadblow is a relatively hardy plant that
            grows in moderate climates (the Americas).
          </p>
        </div>
      )}

      {open && idMessage == "The Origin of WaterBug" && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <p>
            The plant is typically foraged, and is praised for its beautiful
            leaves. The leaves are plucked and used as cups for religious
            purposes; it is rumored that the process purifies water and cleanses
            the spirit.
          </p>
        </div>
      )}

      {open && idMessage == "The Origin of Stunt" && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <p>
            ...However, the Stunt was overtaken by a deadly kind of fungus that
            attacks the root of the plant, blocking off a majorit of its
            resources. The result is a short, woody and sparsley-flowered tree
            that is unable to produce fruit. The suprising hardiness of the
            surviving plants inspired clonal propogation of what remained. The
            Stunt, while unable to produce viable seed, is currently being
            studied for its abilities to survive such a harsh fungal infection
            in hopes of revitalizing other dying plant populations.
          </p>
        </div>
      )}

      {open && idMessage == "The Origin of Bublous" && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <p>
            This tree typically only grows two to three flowers at a time in
            order to balance the risks and benefits of the swarms of available
            pollinators. Too many ladybugs resulted in overcrowding of deposited
            seeds, and ultimatley blocked sunlight from many leaves. As a
            result, the few flowers this tree does sprout are revered, and
            perfumes made from the scent of the petals are highly valued.
          </p>
        </div>
      )}
    </>
  );
};

export default PopUp;
