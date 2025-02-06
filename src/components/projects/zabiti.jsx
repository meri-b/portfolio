import React from "react";
import previewImage from "../../project_previews/zabiti2.jpg"; // Adjust the path accordingly


function Zabiti() {
  return (
      <div
      name="zabiti"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Zabiti</h1>
        </div>

      
        <img
        src={previewImage}
        alt="Preview"
        className="w-[800px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2019, I performed a warehouse transformed into a cursed forest as Ti, 
        the black footed ferret familiar of a witch, in an original immersive circus show inspired by Russian 
        Fairytales. This included a duet performance on a custom welded tree shaped pole apparatus.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>


      </div>
    );

}
export default Zabiti;