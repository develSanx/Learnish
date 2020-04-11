import React from "react";
import "./styles/About.css";
import pepimg from "./media/stud.png";

export default function About() {
  return (
    <section className="hero is-fullheight" id="about-page">
      <div className="hero-body">
        <div className="about-content">
          <div>
            <h1 className="title">About Us</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda, nisi atque voluptatibus expedita commodi
              quisquam modi dolores fugiat inventore non rerum vel nesciunt!
              Officia vero sed ad quia adipisci.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Distinctio assumenda, nisi atque
              voluptatibus expedita commodi quisquam modi dolores fugiat
              inventore non rerum vel nesciunt! Officia vero sed ad quia
              adipisci.
            </p>

            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda, nisi atque voluptatibus expedita commodi
              quisquam modi dolores fugiat inventore non rerum vel nesciunt!
              Officia vero sed ad quia adipisci.
            </p>
            <a class="button is-info" href="/">
              Know More
            </a>
          </div>
          <div className="img-wrap">
            <img src={pepimg} alt="" className="pepimg" />
          </div>
        </div>
      </div>
    </section>
  );
}
