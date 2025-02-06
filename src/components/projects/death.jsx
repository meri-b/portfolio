import React from "react";
import previewImage from "../../project_previews/deathsunravel.jpg"; // Adjust the path accordingly


function UnravelDeath() {
  return (
      <div
      name="unraveldeath"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Death's Unraveling</h1>
        </div>

        <img
        src={previewImage}
        alt="Preview"
        className="w-[1000px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2020, I created a 5 minute immersive performance that blended 
        aerial dance and interactive projection mapping into a performed soliloquoy on the nature
        and one's relationship to death. This was part of a larger show with Rainbow Militia in Denver, Colorado.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default UnravelDeath;