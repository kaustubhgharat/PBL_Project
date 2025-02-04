import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Publication = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <nav className="w-5/6 mx-auto flex justify-between items-center py-3 ">
              <img src={Pictlogo} alt="Logo" className="w-20 cursor-pointer  " />
              <ul className="flex space-x-8 text-lg pr-6">
                <li><Link to="/about" className="hover:text-gray-400">ABOUT</Link></li>
                <li><Link to="/publication" className="hover:text-gray-400">PUBLICATIONS</Link></li>
                <li><Link to="/acm" className="hover:text-gray-400">ACM ACTIVITY</Link></li>
                <li><Link to="/patents" className="hover:text-gray-400">PATENTS</Link></li>
                <li><Link to="/sessions" className="hover:text-gray-400">SESSIONS</Link></li>
                
      
              </ul>
            </nav>
            <div className="pl-9">
                    <button className="flex items-center space-x-2 p-2 bg-slate-800 text-white rounded-lg">
                      <Link to="/" className="hover:text-gray-400"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
                    </button>
                  </div>

      
    </div>
  );
};

export default Publication;
