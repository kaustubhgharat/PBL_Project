import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
console.log("Patents component loaded");
const Patents = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navbar */}
                  <nav className="w-5/6 mx-auto flex justify-between items-center py-4 relative">
                    {/* Logo */}
                    <img src={Pictlogo} alt="Logo" className="w-16 md:w-20 cursor-pointer" />
            
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4 lg:space-x-8 text-lg pr-6">
                      <li><Link to="/about" className="hover:text-gray-400">ABOUT</Link></li>
                      <li className="relative group">
                        <button className="hover:text-gray-400">PUBLICATIONS ▾</button>
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <li><Link to="/journal-publications" className="block px-2 py-2 hover:bg-gray-200">Journal Papers</Link></li>
                          <li><Link to="/Conferencepublications" className="block px-2 py-2 hover:bg-gray-200">Conference Papers</Link></li>
                          <li><Link to="/Bookchapters" className="block px-2 py-2 hover:bg-gray-200">Book Chapters</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/acm" className="hover:text-gray-400">ACM ACTIVITY</Link></li>
                      <li><Link to="/patents" className="hover:text-gray-400">PATENTS</Link></li>
                      <li><Link to="/sessions" className="hover:text-gray-400">SESSIONS</Link></li>
                    </ul>
            
                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-3xl">
                      {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                  </nav>
                  <div className="pl-9">
                          <button className="flex items-center space-x-2 p-2 text-lg font-bold text-black rounded-lg">
                            <Link to="/" className="hover:text-gray-400"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
                          </button>
                        </div>
            
                  {/* Mobile Menu (Hidden by default) */}
                  {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 z-10">
                      <ul className="text-center space-y-4 text-lg">
                        <li><Link to="/about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
                        <li className="relative group">
                        <button className="hover:text-gray-400">PUBLICATIONS ▾</button>
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <li><Link to="/journal-publications" className="block px-2 py-2 hover:bg-gray-200">Journal Papers</Link></li>
                          <li><Link to="/Conferencepublications" className="block px-2 py-2 hover:bg-gray-200">Conference Papers</Link></li>
                          <li><Link to="/Bookchapters" className="block px-2 py-2 hover:bg-gray-200">Book Chapters</Link></li>
                        </ul>
                      </li>
                        <li><Link to="/acm" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>ACM ACTIVITY</Link></li>
                        <li><Link to="/patents" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>PATENTS</Link></li>
                        <li><Link to="/sessions" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>SESSIONS</Link></li>
                      </ul>
                    </div>
                  )}
      

      {/* Patent Information */}
      <div className="w-5/6 mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg h-4/6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">PATENTS AND COPYRIGHT</h2>
        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>Granted Patent on "System and Method for Motion Analysis and Feedback for Amendment of Human Action." (Patent No.: 201621029482, Registered on: 30/08/2016)</li>
          <li>Granted Patent "System and method for automated evaluation of multimodal content." (Patent No.: 202221060608, Registered on: 11/11/2022 Granted)</li>
          <li>Granted Patent on "System and method for analysis of human movement and suggestions of amendment if any." (Patent No.: 2023/05683)</li>
          <li>"Personalized physical activity recommendations system using federated learning (FL) and a method." (Patent No.: 202321029305, Published on: 15/09/2023)</li>
          <li>"Hydroponic Nutrient Prediction Device using IoT." (Patent No.: 202321039419, Published on: 18/08/2023)</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Patents;