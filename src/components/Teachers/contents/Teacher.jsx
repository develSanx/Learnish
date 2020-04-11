import React from "react";
import "./styles/Teacher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import p1 from "../media/P1.jpg";
import p2 from "../media/P2.jpg";
import p3 from "../media/P3.jpg";
import p4 from "../media/P4.jpg";

export default function Teacher() {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={p1} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title">John Miller</h1>
          <h2 className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={p4} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title">Anna Ben</h1>
          <h2 className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={p2} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title">Krethi Vine</h1>
          <h2 className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={p3} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title">Mark Mignes</h1>
          <h2 className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
}
