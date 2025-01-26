import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./components/About";
import TT from "./components/TT";
import Material from "./components/Material";
import Assignment from "./components/Assignment";
import Lecture from "./components/Lecture";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black">
      <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/material" element={<Material />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/tt" element={<TT />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
