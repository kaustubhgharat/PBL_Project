import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black h-svh  text-white " id="about">
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
      <div className="container mx-auto py-20 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
