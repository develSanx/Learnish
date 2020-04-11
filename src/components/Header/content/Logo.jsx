import React from "react";
import "./styles/Logo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faGraduationCap} />
      <span>Learnish</span>
    </div>
  );
}
