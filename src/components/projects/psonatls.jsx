import React from "react";
import previewImage from "../../project_previews/psonatls.jpg"; // Adjust the path accordingly


function PSONatls() {
  return (
      <div
      name="psonatls"
      className="min-h-screen w-full bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >
        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">2020 PSO Nationals</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        className="w-[600px] h-auto rounded-lg shadow-lg mb-4"
        />

        <div className="w-full lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b> In 2020, I became the 2020 National Artistic Pole Champion with Pole
        Sport Organization. I got to do this via virtual competition, which allowed me to devise 
        a unique multi-pole act that I could have never performed otherwise.
        </p>
        </div>

        <br></br>  

        <div className="w-full lg:w-[60%] text-lg lg:text-xl text-left">
        <p>A full write up will come eventually!</p>
        </div>


      </div>
    );

}
export default PSONatls;