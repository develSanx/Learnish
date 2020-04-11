import React from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-menus">
      <ul>
        <li>
          <a href="#home-page">Home</a>
        </li>
        <li>
          <a href="#about-page">About</a>
        </li>
        <li>
          <a href="#course-page">Courses</a>
        </li>
        <li>
          <a href="#teachers-page">Teachers</a>
        </li>
      </ul>
    </div>
  );
}
