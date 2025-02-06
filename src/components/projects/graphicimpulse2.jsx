import React from "react";
import previewImage from "../../project_previews/ThesisPoster.jpg"; // Adjust the path accordingly


function GraphicImpulse2() {
  return (
      <div
      name="graphicimpulse2"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Graphic Impulse 2.0</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[1000px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2017-18, for my bachelors thesis at CU Boulder, I gathered many hours of footage of 
        myself performing improvisational dance. I then performed unsupervised learning to create an
        AI agent that could participate in call and response dance via projected graphics as a virtual
        dance partner. 
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default GraphicImpulse2;