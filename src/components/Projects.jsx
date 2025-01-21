import React from "react";
import { Link } from "react-router-dom"; // For linking to project detail pages

import graphicimpulse1 from '../project_previews/graphicimpulse1.jpg';
import graphicimpulse2 from '../project_previews/graphicimpulse2.png';
import buddy from '../project_previews/buddy.jpg';
import beerquest from '../project_previews/beerquest.jpg';
import worm from '../project_previews/worm.jpg';
import underflow from '../project_previews/underflow.jpg';
import curiousbones from '../project_previews/curiousbones.jpg';
import stardust from '../project_previews/stardust.jpg';
import death from '../project_previews/deathsunravel.jpg';

function Projects() {
  const projects = [
    {
      title: "Would you still love me if I was a worm?",
      description: "A teenage girl looks to answer the ultimate question",
      imageUrl: worm,
      link: "/projects/worm",
    },
    {
      title: "Buddy",
      description: "An entertainment mobile app for the disabled",
      imageUrl: buddy,
      link: "/projects/buddy",
    },
    {
      title: "Beer Quest",
      description: "Slay the dragon--with beer trivia!",
      imageUrl: beerquest,
      link: "/projects/beerquest",
    },
    {
      title: "Curious Bones",
      description: "A physical education mobile app",
      imageUrl: curiousbones,
      link: "/projects/curious-bones",
    },
    {
      title: "Death's Unraveling",
      description: "Motion capture projection installation for an immersive show",
      imageUrl: death,
      link: "/projects/unravel-death",
    },
    {
      title: "Graphic Impulse 2.0",
      description: "Teaching an AI to dance with me",
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
      title: "Graphic Impulse 1.0",
      description: "Motion capture projection mapping with pole dance",
      imageUrl: graphicimpulse1,
      link: "/projects/graphicimpulse1", // This is the URL to the detailed page
    },
    {
      title: "Wearables: Stardust",
      description: "A programmed LED space costume",
      imageUrl: stardust,
      link: "/projects/stardust",
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
      <div className="w-full text-lg lg:text-3xl text-center leading-relaxed px-4 max-w-[1400px] mx-auto">
        <p>
          This is a landing page to detail all the different tech, art, and tech-meets-art projects I've done. 
          Please bear with me--Working through the backlog to document old projects is still a work in progress.
        </p>
      </div>

      {/* Projects Grid Section */}
      <div className="w-full px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-24 gap-8">

          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105">
              <Link to={project.link}>

                <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                onLoad={() => console.log('Image Loaded')}

                // className="relative w-full  h-[300px] bg-cover bg-center rounded-lg shadow-lg"

                />
              </Link>
              <h3 className="mt-4 text-3xl font-semibold text-center">{project.title}</h3>
              <p className="mt-2 text-center text-xl">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
