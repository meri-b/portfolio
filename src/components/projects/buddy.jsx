import React from "react";
import previewImage from "../../project_previews/buddy.jpg"; // Adjust the path accordingly


function Buddy() {
  return (
      <div
      name="buddy"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Buddy</h1>
        </div>

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-center leading-relaxed">
        <p>Coming soon!</p>
        </div>

        <img
        src={previewImage}
        alt="Preview"
        className="w-[800px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2023, under guidance of Rosa Arriaga at Georgia Tech, I partnered 
        with Make a Wish and a children's hospital in upstate NY to create an interactive 
        entertainment android app for a disabled patient, which leveraged mainly facial recognition
        and eye tracking as means of interaction.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default Buddy;