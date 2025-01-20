import React from "react";
import { Link } from "react-router-dom"; // For linking to project detail pages

import graphicimpulse1 from '../project_previews/graphicimpulse1.jpg';
import graphicimpulse2 from '../project_previews/graphicimpulse2.jpg';
import buddy from '../project_previews/buddy.jpg';
import beerquest from '../project_previews/beerquest.png';
import worm from '../project_previews/worm.jpg';
import underflow from '../project_previews/underflow.jpg';

function Projects() {
  const projects = [
    {
      title: "Graphic Impulse 1.0",
      description: "Live projection mapping.",
      imageUrl: graphicimpulse1,
      link: "/projects/graphicimpulse1", // This is the URL to the detailed page
    },
    {
      title: "Graphic Impulse 2.0",
      description: "Dancing with an AI",
      imageUrl: graphicimpulse2,
      link: "/projects/graphicimpulse2",
    },
    {
      title: "Underflow",
      description: "A statistically likely pole champion",
      imageUrl: underflow,
      link: "/projects/underflow",
    },
    {
      title: "BeerQuest",
      description: "Slay the dragon--with beer trivia!",
      imageUrl: beerquest,
      link: "/projects/beerquest",
    },
    {
      title: "Buddy",
      description: "An entertainment suite for immobile children",
      imageUrl: buddy,
      link: "/projects/buddy",
    },
    {
      title: "Would you still love me if I was a worm?",
      description: "A teenage girl looks to answer the ultimate question",
      imageUrl: worm,
      link: "/projects/worm",
    },
  ];

  return (
    <div
      name="projects"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px]" // Adjust for navbar height
    >
      {/* Header Section */}
      <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Projects</h1>
      </div>

      {/* Description Section */}
      <div className="w-full text-lg lg:text-xl text-center leading-relaxed px-4 max-w-[900px] mx-auto">
        <p>
          This is a landing page to detail all the different tech, art, and tech-meets-art projects I've done. Working through the backlog to document old projects is still a work in progress.
        </p>
      </div>

      {/* Projects Grid Section */}
      <div className="w-full px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-24 gap-8">

          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link to={project.link}>

                <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                onLoad={() => console.log('Image Loaded')}

                // className="relative w-full  h-[300px] bg-cover bg-center rounded-lg shadow-lg"

                />
              </Link>
              <h3 className="mt-4 text-xl font-semibold text-center">{project.title}</h3>
              <p className="mt-2 text-center text-md">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
