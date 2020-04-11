import React from "react";
import "./styles/Teachers.css";
import Teacher from "./contents/Teacher";

export default function Teachers() {
  return (
    <section className="hero" id="teachers-page">
      <div className="hero-body">
        <div className="mainContent">
          <h1 className="title">Our Department Heads</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
        </div>
        <div className="teachList">
          <Teacher />
        </div>
      </div>
    </section>
  );
}
