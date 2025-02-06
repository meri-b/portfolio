import React from "react";
import previewImage from "../../project_previews/inanimate48.jpg"; // Adjust the path accordingly


function Inanimate48() {
  return (
      <div
      name="inanimate48"
      className="h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">Beer Quest</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[600px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> From 2019-2024 I ran an virtual 48 hour dance-meets-film festival, 
        designed to give back to the community and encourage artists to break out of their 
        norms in apparatus based dance. Over 200 people participated in 5 events.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>

      </div>
    );

}
export default Inanimate48;