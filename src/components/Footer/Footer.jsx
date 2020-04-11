import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <h1>© 2019 Learnish. All rights reserved.</h1>
        <span>
          <a href=""> Privacy Policy </a>
        </span>
        <span>
          <a href=""> Terms of Use </a>
        </span>
        <span>
          <a href=""> Contact </a>
        </span>
      </div>
    </footer>
  );
}
