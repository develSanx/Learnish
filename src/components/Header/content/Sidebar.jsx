import React, { Component } from "react";
import "./styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <FontAwesomeIcon
          icon={faTimesCircle}
          color="white"
          className="close-icon"
          onClick={this.props.onClick}
        />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Teachers</a>
          </li>
        </ul>
      </div>
    );
  }
}
