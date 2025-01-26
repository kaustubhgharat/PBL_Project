import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Lecture = () => {
  return (
    <div className="h-svh">
      <nav className="bg-black  text-white  md:px-16 lg:px-24">
        <div className="flex pt-3">
          <div className="text-4xl pt-4 pr-32 font-bold hidden md:inline ">
            ClassHub
          </div>

          <div className="space-x-10 p-6 pl-7">
            <Link to="/" className="hover:text-gray-400 text-lg">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400 text-lg">
              About Me
            </Link>
            <Link to="/material" className="hover:text-gray-400 text-lg">
              Study Material
            </Link>
            <Link to="/lecture" className="hover:text-gray-400 text-lg">
              Lecture Video's
            </Link>
            <Link to="/assignment" className="hover:text-gray-400 text-lg">
              Assignment's
            </Link>
            <Link to="/tt" className="hover:text-gray-400 text-lg">
              My Time Table
            </Link>
            <Link to="/contact" className="hover:text-gray-400 text-lg">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Lecture;
