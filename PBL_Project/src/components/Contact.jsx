import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-black h-svh text-white " id="contact">
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
      <div className="container mx-auto pt-5 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12  text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 ">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>I'm open to discuss.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                youremail@exmple.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>+91-7066121972</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>
                Address. Survey No. 27, Near Trimurti Chowk, Dhankawadi,<br/>
                Pune-411043, Maharashtra (India).
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Name"
                />
              </div>
              <div>
                <label htmlFor="emial" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter You Message"
                />
              </div>
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
