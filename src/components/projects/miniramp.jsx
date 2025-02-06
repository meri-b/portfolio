import React from "react";
import previewImage from "../../project_previews/ramp6.jpg"; // Adjust the path accordingly


function Miniramp() {
  return (
      <div
      name="miniramp"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Feminom-illuminati-nom</h1>
        </div>


          <img
          src={previewImage}
          alt="Preview"
          className="w-[800px] h-auto rounded-lg shadow-lg mb-4"
          />

          <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
          <p><b>TLDR:</b> In 2023-2024, I built a half pipe miniramp in my backyard. I got pretty 
          well acquainted with power tools and waterproofing ALL the wood. 
          </p>
          </div>

          <br></br>  

          <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
          <p>A full write up will come eventually!</p>
          </div>


      </div>
    );

}
export default Miniramp;