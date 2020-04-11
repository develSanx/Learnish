import React, { Component } from "react";
import "./styles/Burger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

export default class Burger extends Component {
  state = {
    sideMenuActive: false
  };

  constructor(props) {
    super(props);
    this.triggerMenu = this.triggerMenu.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="menu-burger" onClick={this.triggerMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Sidebar onClick={this.triggerMenu} />
      </React.Fragment>
    );
  }

  triggerMenu() {
    let cur_st = this.state.sideMenuActive;
    if (cur_st === false) {
      document.querySelector(".side-bar").style = "display:flex";
      this.setState({ sideMenuActive: true });
    } else {
      document.querySelector(".side-bar").style = "display:none";
      this.setState({ sideMenuActive: false });
    }
  }
}
