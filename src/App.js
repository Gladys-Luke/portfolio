import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Progess from "./components/progess";

function App() {
  return (
    <div>
    <Nav />
    
      <Landing />

    
      <About />

      <Progess />

      <Projects />

      <Blog />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
