import React from "react";
import AdminImg from "./assets/admin.png";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-svh ">
      <nav className="bg-black  text-white  md:px-16 lg:px-24">
        <div className="flex pt-3">
          <div className="text-4xl pt-4 pr-12 font-bold hidden md:inline ">
            ClassHub
          </div>

          <div className="space-x-10 p-6 ">
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
            <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                Admin Login
              </button>
          </div>
        </div>
      </nav>
      <div className="bg-black m-6 text-white text-center py-14">
        <img
          src={AdminImg}
          alt=""
          className="mx-auto mb-8 w-48 h-48 object-cover transform 
    transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Pranali R. Navghare
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Pranali Navghare is a cybersecurity professional with over five years
          of experience in network security, ethical hacking,
          <br /> and threat analysis. She holds an M.Tech in Information
          Technology from NIT Raipur (2017)
          <br />
          and a B.E. in Computer Engineering from RTMNU Nagpur (2021).
        </p>
      </div>
      <footer className="bg-black text-white ">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div
            className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
              justify-between items-center"
          >
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Pranali. All rights reserved.
            </p>
            <div className="flex space-x-4 my-4 md:my-0">
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a> */}
              <a
                href="https://www.linkedin.com/in/pranali-navghare-8340b1233/"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a> */}
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
