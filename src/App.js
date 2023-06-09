import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Nav />
    
      <Landing />

    
      <About />

      <Projects />

      <Blog />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
