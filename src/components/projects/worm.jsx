import React from "react";
import previewImage from "../../project_previews/worm.jpg"; // Adjust the path accordingly


function Worm() {
  return (
      <div
      name="worm"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Would you still love me if I was a worm?</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[800px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2024, I created a short video game called "Would You Love Me If I Was a Worm?"
        with a small group of women in the Video Game Design course at Georgia Tech. In the game, you 
        play a teenage girl turned worm, who quests only to answer 1 question: does her boyfriend still love her?
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>


      </div>
    );

}
export default Worm;