import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "./assets/pictlogo.jpg";
import bg from "./assets/bg.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AdminIMg from "./assets/adminimg.jpg"

const Home = () => {
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

      <div className="ml-28 mt-16 pt-12">
        <h1 className="text-6xl text-gray-800"><span className="text-orange-500">Dr</span>. <span className="text-orange-500">G</span>eetanjali <span className="text-orange-500">K</span>ale</h1>
        <h3 className="text-lg leading-6 pt-6 text-gray-700">
          Head & Associate Professor, Dept. of Computer Engineering, PICT, <br />
          Secretary, ACM India Woman, Senior Member ACM, Senior Member<br />
          IEEE, Chair ACMW Pune Professional Chap., Former BoS CE SPPU,<br />
          Core member of AnitaB.org
        </h3>
      </div>

      <div className="absolute right-24 bottom-2 w-1/3">
        <img src={AdminIMg} alt="Ariana" className="w-full" />
      </div>

      <div className="flex space-x-6 ml-28 mt-8 pt-5">
        <a href="#" className="text-4xl text-black hover:text-blue-500"
        target="_blank" 
        rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" className="text-4xl text-black hover:text-blue-500"
        target="_blank" 
        rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/dr-geetanjali-kale-17148922/" className="text-4xl text-black hover:text-blue-500"
        target="_blank" 
        rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" className="text-4xl text-black hover:text-blue-500"
        target="_blank" 
        rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <div className="flex space-x-6 ml-28 mt-8 ">
        
        <button className="bg-slate-900 text-white p-3  rounded-2xl"><Link to="/contact" className="hover:text-gray-400">CONTACT</Link></button>
      </div>
    </div>
  );
};

export default Home;
