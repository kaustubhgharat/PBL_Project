import React from "react";
import Logo from "./assets/logo.webp"
import HeroImage from './assets/hero-image.png'
import About from './components/About'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-svh ">
      <nav className="bg-black  text-white  md:px-16 lg:px-24">
        <div className="flex pt-3">
            
          <div className="text-4xl pt-4 pr-32 font-bold hidden md:inline ">ClassHub</div>
          <div className="space-x-10 p-6 pl-7">
            <a href="#home" className="hover:text-gray-400 text-lg">
              Home
            </a>
            
            <a href="./About.jsx" className="hover:text-gray-400 text-lg">
              About Me
            </a>
            <a href="#service" className="hover:text-gray-400 text-lg">
              Study Material
            </a>
            <a href="#project" className="hover:text-gray-400 text-lg">
              Lecture Video's
            </a>
            <a href="#contact" className="hover:text-gray-400 text-lg">
              Assignment's
            </a>
            <a href="#contact" className="hover:text-gray-400 text-lg">
              Time Table
            </a>
          </div>
          
        </div>
      </nav>
      <div className="bg-black m-8 text-white text-center py-16">
        <img
          src={HeroImage}
          alt=""
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
    transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Pranali R. Navghare
          </span>
          , Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive web applications.
        </p>
      </div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div
            className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
              justify-between items-center"
          >
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
            </p>
            <div className="flex space-x-4 my-4 md:my-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/pranali-navghare-8340b1233/"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
