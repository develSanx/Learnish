import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Teachers from "./components/Teachers/Teachers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Courses />
      <Teachers />
      <Footer />
    </div>
  );
}

export default App;
