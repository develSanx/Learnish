import React from "react";
import "./styles/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faSwift } from "@fortawesome/free-brands-svg-icons";

export default function Cards() {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faPython} className="cou-ico" />
          <p className="title">Python</p>
          <p className="subtitle">
            There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faReact} className="cou-ico" />
          <p className="title">React</p>
          <p className="subtitle">
            There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faNodeJs} className="cou-ico" />
          <p className="title">Node Js</p>
          <p className="subtitle">
            There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faJava} className="cou-ico" />
          <p className="title">Java</p>
          <p className="subtitle">
            There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faAndroid} className="cou-ico" />
          <p className="title">Android</p>
          <p className="subtitle">
            There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faSwift} className="cou-ico" />
          <p className="title">Swift</p>
          <p className="subtitle">
            There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
