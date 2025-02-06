import React from "react";
import previewImage from "../../project_previews/gnome1.jpg"; // Adjust the path accordingly


function Gnome() {
  return (
      <div
      name="gnome"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Gnome Away From Home</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[1000px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2020, I built a custom set and performed a multi-pole dance piece in an 
        immersive setting as Aurora The Royal, instagram princess, in a re-telling of The Light
        Princess by George MacDonald.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default Gnome;