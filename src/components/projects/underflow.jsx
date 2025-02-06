import React from "react";
import previewImage from "../../project_previews/underflow.jpg"; // Adjust the path accordingly

function Underflow() {
  return (
    <div
      name="underflow"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
    >
      <div className="w-full text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Underflow</h1>
      </div>
      
      <img
        src={previewImage}
        alt="Preview"
        className="w-[600px] h-auto rounded-lg shadow-lg mb-4"
      />
      
      <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2017, I devised a codification of pole dance vocabulary. Then I watched and annotated 
        every top 3 placing pole performance video from the Pole Sport Organization youtube channel. I performed 
        some statistical analysis on this dataset to derive the most statistically likely set of pole movements for 
        a winning pole dancer. I used this set of movements to create my own choreography for the 2017 North American Elite
        Pole Dance Championships in Chicago. I came in 2nd place, and won people's choice, so I think the data and method stood up!
        </p>
      </div>

      <br></br>  
    
      <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
      </div>
    </div>
  );
}

export default Underflow;
