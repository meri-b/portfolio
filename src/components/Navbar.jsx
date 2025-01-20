import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className=" font-thin text-2xl italic font-serif">Meri 101</h1>
      </div>
      {/* menu */}
      <ul className="hidden xl:flex gap-x-8">
        <li>
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="reel" smooth={true} duration={500}>
            Reel
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="xl:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="reel" smooth={true} duration={500}>
            Reel
          </Link>
        </li>
      </ul>
     {/* Social icons for desktop */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/meredith-burgess-476b15104/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/meri-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:burgess.meri@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/@TaliWuzzer"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Footer for social icons (mobile only) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0a192f] py-4 xl:hidden">
        <ul className="flex justify-center gap-6">
          <li className="flex justify-center items-center w-[50px] h-[50px]">
            <a
              href="https://www.linkedin.com/in/meredith-burgess-476b15104/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className="flex justify-center items-center w-[50px] h-[50px] ">
            <a
              href="https://github.com/meri-b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li className="flex justify-center items-center w-[50px] h-[50px]">
            <a
              href="mailto:burgess.meri@gmail.com"
              className="text-gray-300"
            >
              <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="flex justify-center items-center w-[50px] h-[50px]">
            <a
              href="https://www.youtube.com/@TaliWuzzer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaYoutube size={25} />
            </a>
          </li>
        </ul>
      </div>



    </div>
  );
};
export default Navbar;
