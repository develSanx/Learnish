import React from "react";
import "./styles/Courses.css";
import Cards from "./contents/Cards";

export default function Courses() {
  return (
    <section className="hero" id="course-page">
      <div className="hero-body">
        <div className="course-intro">
          <h1 className="title">What We Offer</h1>
          <h2 className="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <div className="cards-wrap">
          <Cards />
        </div>
      </div>
    </section>
  );
}
