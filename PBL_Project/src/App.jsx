import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <div className="bg-black">
      <Home/>
    </div>
  );
}

export default App;
