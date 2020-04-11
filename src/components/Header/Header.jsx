import React from "react";
import "./styles/Header.css";
import Logo from "./content/Logo";
import Burger from "./content/Burger";
import Navbar from "./content/Navbar";

export default function Header() {
  return (
    <header>
      <nav className="site-header">
        <Logo />
        <Burger />
        <Navbar />
      </nav>
    </header>
  );
}
