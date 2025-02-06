import React from "react";
import previewImage from "../../project_previews/curiousbones.jpg"; // Adjust the path accordingly


function CuriousBones() {
  return (
      <div
      name="curiousbones"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Curious Bones</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[800px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2023, I built a POC Android app for self led physical education exploration
        for students ages 13-18.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default CuriousBones;