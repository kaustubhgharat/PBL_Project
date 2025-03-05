import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Session = () => {
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
          <Link to="/" className="hover:text-gray-400"><FontAwesomeIcon icon={faArrowLeft} /> Home</Link>
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
      {/* Session Information */}
      <div className="w-5/6 mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg h-4/6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">INVITED TALKS / SESSIONS</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Worked as TPC Chair and Organizing Chair for ICEI-2022 International Conference</li>
          <li>Worked as Organizing Co-chair for CTiS 2022, CTiS 2023, and CTiS 2024</li>
          <li>Delivered an expert talk on “Visualising Data Science: Exploring the synergy with Computer Vision" in 5 days FDP on Data Science Applications in Real-World using Python at Indira College of Engineering, Pune (21 Mar. 2024)</li>
          <li>Delivered an expert talk on “Data Analytics in Computer Vision" AICTE-ISTE sponsored refresher course on Research Methodology and Data Analysis at JSPM, RSCOE, Pune (16th Dec. 2020)</li>
          <li>Delivered Talk as a Chief Guest at One Week Online FDP on Research Trends In Computer Engineering and Information Technology at STES's, Smt. Kashibai Navale College of Engineering, Pune (4th Jan. 2021)</li>
          <li>Resource person for Faculty Development Program on “Computer Graphics and Gaming” conducted for SPPU faculty at AIT, Pune.</li>
          <li>Resource person for Faculty Development Program on “Computer Graphics” (Theory and Lab) conducted for SPPU faculty at SIT, Pune.</li>
          <li>Moderator for Panel discussion on “Curriculum design and content Delivery” at D. Y Patil College of Engineering, Akurdi.</li>
          <li>Chief guest for “Cyber Security” workshop at Manjari College of Engineering.</li>
          <li>Organized and guided session on “Android Application Development” at VMware for women from industry.</li>
          <li>Volunteered for CSPathshala workshop at Gurukul School “Bringing computational thinking at school."</li>
          <li>"Computer Graphics", one-day University-level workshop for Computer Engineering faculty members.</li>
          <li>"Computer Graphics and Gaming Using QT", one-day University-level Workshop for Computer Engineering faculty members.</li>
          <li>"Transformations, Animation, and Gaming", Expert lecture at APCOE, Pune.</li>
          <li>Mission 10X learning approach (Bloom's Taxonomy, Gardner’s Theory, and sharing of experience) at Computer Department PICT, Pune (2009).</li>
        </ul>
      </div>

    </div>
  );
};
export default Session;