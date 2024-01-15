import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import me from "../assets/me.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#321763]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-9xl font-bold text-white">
            Meri Burgess
          </h2>
          <p className="text-gray-500 py-4  text-5xl">
            I'm a human being that happens to be a software developer and a
            circus artist.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-4xl"
            >
              Find out more
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
